import { z } from 'zod';

export const FactSchema = z.object({
  fact: z.string(),
  length: z.number(),
});

export const GetFacts = z.object({
  data: z.array(FactSchema),
  currentPage: z.number(),
  from: z.number(),
  to: z.number(),
  total: z.number(),
  lastPage: z.number(),
});

export type TGetFacts = z.infer<typeof GetFacts>;
export type TFact = z.infer<typeof FactSchema>;
