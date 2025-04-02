import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const ArticleSchema = z.object({
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  category_id: z.string(),
  tags_id: z.string(),
});

export class ArticleDto extends createZodDto(ArticleSchema) {}
