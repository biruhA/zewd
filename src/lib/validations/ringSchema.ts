import { z } from 'zod';

export const ringSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  basePrice: z.number().min(0, 'Price must be a positive number'),
  description: z.string().optional(),
});

export type RingInput = z.infer<typeof ringSchema>;
