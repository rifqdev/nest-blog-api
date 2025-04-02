import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TagsDto } from './dto/tags.dto';

@Controller('api/tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createTag(@Body() tagSchema: TagsDto) {
    return this.tagsService.createTag(tagSchema);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getTag(@Param() { id }) {
    return this.tagsService.getTag(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateTag(@Param() { id }, @Body() tagSchema: TagsDto) {
    return this.tagsService.updateTag(id, tagSchema);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteTag(@Param() { id }) {
    return this.tagsService.deleteTag(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getTags() {
    return this.tagsService.getTags();
  }
}
