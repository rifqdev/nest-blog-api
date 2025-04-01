import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const authSchema = z.object({
  name: z.string(),
  password: z.string(),
});

export class Register extends createZodDto(authSchema) {}

export class Login extends createZodDto(authSchema) {}
