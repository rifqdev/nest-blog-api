import {
  Controller,
  UseGuards,
  Post,
  Body,
  Query,
  Request,
  Get,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ArticleDto } from './dto/article.dto';

@Controller('api/article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createArticle(@Body() data: ArticleDto, @Request() req: any) {
    return this.articleService.createArticle(data, req.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getArticle(@Param('id') articleId: string) {
    return this.articleService.getArticle(articleId);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateArticle(
    @Param('id') articleId: string,
    @Body() data: ArticleDto,
  ) {
    return this.articleService.updateArticle(articleId, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteArticle(@Param('id') articleId: string) {
    return this.articleService.deleteArticle(articleId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getArticles(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
    @Query('search') search: string = '',
  ) {
    return this.articleService.getArticles(search, page, limit);
  }
}
