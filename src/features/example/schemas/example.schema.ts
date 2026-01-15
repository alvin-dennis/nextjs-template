import { z } from 'zod';

export const exampleSchema = z.object({
  id: z.string().or(z.number()),
  title: z.string(),
  description: z.string().optional(),
  createdAt: z.string().or(z.date()),
});

export const exampleListSchema = z.array(exampleSchema);

export type Example = z.infer<typeof exampleSchema>;
