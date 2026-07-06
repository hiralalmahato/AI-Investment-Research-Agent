import { z } from "zod";

export const riskSchema = z.object({
  businessRisk: z.string(),
  financialRisk: z.string(),
  marketRisk: z.string(),
  overallRisk: z.string(),
});