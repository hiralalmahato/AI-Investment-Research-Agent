import { generateStructuredResponse } from "../services/llmService.js";
import { decisionSchema } from "../schemas/decisionSchema.js";

export async function decisionAgent(state) {

  const prompt = `
You are a senior investment advisor.

Research:
${JSON.stringify(state.research)}

Financial:
${JSON.stringify(state.financial)}

News:
${JSON.stringify(state.news)}

Risk:
${JSON.stringify(state.risk)}

Return:

- Recommendation (BUY, HOLD, PASS)
- Confidence (0-100)
- Reasoning
- Summary
`;

  const response = await generateStructuredResponse(
    prompt,
    decisionSchema
  );

  return {
    ...state,
    recommendation: response,
  };
}