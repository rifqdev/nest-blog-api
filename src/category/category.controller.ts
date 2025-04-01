import {
  Body,
  Controller,
  Param,
  Post,
  Request,
  UseGuards,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createCategory(@Body() categorySchema: CategoryDto) {
    return this.categoryService.createCategory(categorySchema);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getCategory(@Param() { id }) {
    return this.categoryService.getCategory(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateCategory(@Param() { id }, @Body() categorySchema: CategoryDto) {
    return this.categoryService.updateCategory(id, categorySchema);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteCategory(@Param() { id }) {
    return this.categoryService.deleteCategory(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getCategories() {
    return this.categoryService.getCategories();
  }
}
