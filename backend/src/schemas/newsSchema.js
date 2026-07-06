import { z } from "zod";

export const newsSchema = z.object({
  positiveNews: z.array(z.string()),
  negativeNews: z.array(z.string()),
  marketSentiment: z.string(),
});