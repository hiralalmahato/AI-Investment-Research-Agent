import { z } from "zod";

export const researchSchema = z.object({
  business: z.string(),
  industry: z.string(),
  products: z.array(z.string()),
  marketPosition: z.string(),
});