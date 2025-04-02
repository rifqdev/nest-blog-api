import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArticleDto } from './dto/article.dto';
import { ResponseHelper } from 'src/utils/response';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async createArticle(data: ArticleDto, userId: string) {
    const article = await this.prisma.article.create({
      data: {
        ...data,
        userId: userId,
      },
    });

    if (!article)
      throw new HttpException('failed create article', HttpStatus.BAD_REQUEST);

    return ResponseHelper.success(
      `Article ${article.title} created successfully`,
      article,
    );
  }

  async getArticle(articleId: string) {
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article)
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);

    return ResponseHelper.success(
      `Article ${article.title} found successfully`,
      article,
    );
  }

  async updateArticle(articleId: string, data: ArticleDto) {
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article)
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);

    const updateData = await this.prisma.article.update({
      where: { id: articleId },
      data: {
        ...article,
        ...data,
        updated_at: new Date(),
      },
    });

    if (!updateData)
      throw new HttpException('failed update article', HttpStatus.BAD_REQUEST);

    return ResponseHelper.success(
      `Article ${updateData.title} updated successfully`,
      updateData,
    );
  }

  async deleteArticle(articleId: string) {
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article)
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);

    const deleteData = await this.prisma.article.delete({
      where: { id: articleId },
    });

    if (!deleteData)
      throw new HttpException('failed delete article', HttpStatus.BAD_REQUEST);

    return ResponseHelper.success(
      `Article ${deleteData.title} deleted successfully`,
      deleteData,
    );
  }

  async getArticles(search: string, page: number, limit: number) {
    const skip = (page - 1) * limit;

    let condition = {
      where: {},
      skip,
      take: limit,
    };

    if (search) {
      condition = {
        ...condition,
        where: {
          title: {
            contains: search,
          },
        },
      };
    }

    const articles = await this.prisma.article.findMany(condition);

    const totalArticles = await this.prisma.article.count(condition);

    return ResponseHelper.paginate(
      'Fetch many articles successfully',
      page,
      limit,
      totalArticles,
      articles,
    );
  }
}
