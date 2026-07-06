import { z } from "zod";

export const financialSchema = z.object({
  revenueGrowth: z.string(),
  profitability: z.string(),
  financialHealth: z.string(),
  cashFlow: z.string(),

  scores: z.object({
  revenue: z.number(),
  profitability: z.number(),
  health: z.number(),
  cashFlow: z.number(),
}),
});