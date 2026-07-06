import { z } from "zod";

export const decisionSchema = z.object({
  recommendation: z.enum(["BUY", "HOLD", "PASS"]),
  confidence: z.number(),
  reasoning: z.string(),
  summary: z.string(),
});