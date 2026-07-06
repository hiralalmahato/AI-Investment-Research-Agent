import { generateStructuredResponse } from "../services/llmService.js";
import { riskSchema } from "../schemas/riskSchema.js";

export async function riskAgent(state) {

  const prompt = `
You are an investment risk analyst.

Using the following information:

Research:
${JSON.stringify(state.research)}

Financial:
${JSON.stringify(state.financial)}

News:
${JSON.stringify(state.news)}

Return:

- Business Risk
- Financial Risk
- Market Risk
- Overall Risk
`;

  const response = await generateStructuredResponse(
    prompt,
    riskSchema
  );

  return {
    ...state,
    risk: response,
  };
}