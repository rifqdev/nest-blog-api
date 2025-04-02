import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArticleDto } from './dto/article.dto';

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

    return {
      message: `Article ${article.title} created successfully`,
      data: article,
    };
  }

  async getArticle(articleId: string) {
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article)
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);

    return {
      message: `Article ${article.title} found successfully`,
      data: article,
    };
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

    return {
      message: `Article ${updateData.title} updated successfully`,
      data: updateData,
    };
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

    return {
      message: `Article ${deleteData.title} deleted successfully`,
      data: deleteData,
    };
  }

  async getArticles() {
    const articles = await this.prisma.article.findMany();

    return {
      message: 'Fetch articles successfully',
      data: articles,
    };
  }
}
