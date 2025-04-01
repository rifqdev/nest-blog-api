import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: CategoryDto) {
    const category = await this.prisma.category.create({
      data: { ...data },
    });

    if (!category)
      throw new HttpException('failed create category', HttpStatus.BAD_REQUEST);

    return {
      message: `category ${data.name} successfully created`,
      data: { ...data },
    };
  }

  async getCategory(categoryId: string) {
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category)
      throw new HttpException('category not found', HttpStatus.NOT_FOUND);

    return {
      message: `get category success`,
      data: { ...category },
    };
  }

  async updateCategory(categoryId: string, data: CategoryDto) {
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category)
      throw new HttpException('category not found', HttpStatus.NOT_FOUND);

    const updateData = await this.prisma.category.update({
      where: { id: categoryId },
      data: {
        ...category,
        ...data,
        updated_at: new Date(),
      },
    });

    return {
      message: `update category success`,
      data: { ...updateData },
    };
  }

  async deleteCategory(categoryId: string) {
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category)
      throw new HttpException('category not found', HttpStatus.NOT_FOUND);

    const deleteData = await this.prisma.category.delete({
      where: { id: categoryId },
    });

    return {
      message: `delete category success`,
      data: { ...deleteData },
    };
  }

  async getCategories() {
    const categories = await this.prisma.category.findMany();

    return {
      message: `get categories success`,
      data: categories,
    };
  }
}
