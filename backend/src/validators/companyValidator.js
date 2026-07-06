import { z } from "zod";

export const companySchema = z.object({
  company: z
    .string()
    .trim()
    .min(2, "Company name must contain at least 2 characters.")
    .max(100, "Company name is too long."),
});