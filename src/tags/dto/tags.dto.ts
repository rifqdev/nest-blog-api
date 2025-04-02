import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const tagsSchema = z.object({
  name: z.string(),
});

export class TagsDto extends createZodDto(tagsSchema) {}
