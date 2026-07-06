import { generateStructuredResponse } from "../services/llmService.js";
import { financialSchema } from "../schemas/financialSchema.js";

export async function financialAgent(state) {

  const prompt = `
You are a senior equity research analyst.

Below are the company's real financial metrics.

${JSON.stringify(state.companyData, null, 2)}

Analyze the company's financial performance.

Return ONLY valid JSON matching this structure:

{
  "revenueGrowth": "Brief analysis",
  "profitability": "Brief analysis",
  "financialHealth": "Brief analysis",
  "cashFlow": "Brief analysis",

  "scores": {
    "revenue": 0,
    "profitability": 0,
    "health": 0,
    "cashFlow": 0
  }
}

Rules:

- Scores must be integers from 0 to 100.
- Higher score means stronger performance.
- Base the scores on the provided financial data.
- Do not invent facts.
- Do not return markdown.
- Do not return explanations outside the JSON.
`;

  const response = await generateStructuredResponse(
    prompt,
    financialSchema
  );

  return {
    ...state,
    financial: response,
  };
}