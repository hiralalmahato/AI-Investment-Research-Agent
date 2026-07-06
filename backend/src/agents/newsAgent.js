import { generateStructuredResponse } from "../services/llmService.js";
import { newsSchema } from "../schemas/newsSchema.js";

export async function newsAgent(state) {

  const prompt = `
You are a financial news analyst.

Analyze the latest business news for ${state.company}.

Return:

- Positive News
- Negative News
- Market Sentiment
`;

  const response = await generateStructuredResponse(
    prompt,
    newsSchema
  );

  return {
    ...state,
    news: response,
  };
}