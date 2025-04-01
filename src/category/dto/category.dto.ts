import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const categorySchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export class CategoryDto extends createZodDto(categorySchema) {}
