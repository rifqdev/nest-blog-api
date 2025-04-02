import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TagsDto } from './dto/tags.dto';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async createTag(data: TagsDto) {
    const tag = await this.prisma.tags.create({
      data: { ...data },
    });

    if (!tag)
      throw new HttpException('failed create tag', HttpStatus.BAD_REQUEST);

    return {
      message: `tag ${data.name} successfully created`,
      data: data,
    };
  }

  async getTag(tagId: string) {
    const tag = await this.prisma.tags.findUnique({
      where: { id: tagId },
    });

    if (!tag) throw new HttpException('tag not found', HttpStatus.NOT_FOUND);

    return {
      message: `get tag success`,
      data: tag,
    };
  }

  async updateTag(tagId: string, data: TagsDto) {
    const tag = await this.prisma.tags.findUnique({
      where: { id: tagId },
    });

    if (!tag) throw new HttpException('tag not found', HttpStatus.NOT_FOUND);

    const updateData = await this.prisma.tags.update({
      where: { id: tagId },
      data: {
        ...tag,
        ...data,
        updated_at: new Date(),
      },
    });
    return {
      message: `tag ${tag.name} updated to ${data.name}`,
      data: updateData,
    };
  }

  async deleteTag(tagId: string) {
    const tag = await this.prisma.tags.findUnique({
      where: { id: tagId },
    });

    if (!tag) throw new HttpException('tag not found', HttpStatus.NOT_FOUND);

    const deleteData = await this.prisma.tags.delete({
      where: { id: tagId },
    });

    return {
      message: `tag ${tag.name} has been deleted`,
      data: deleteData,
    };
  }

  async getTags() {
    const tags = await this.prisma.tags.findMany();

    return {
      message: 'get tags success',
      data: tags,
    };
  }
}
