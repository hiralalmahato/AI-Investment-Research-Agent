import { getCompanyOverview } from "../services/financialService.js";
import { generateStructuredResponse } from "../services/llmService.js";
import { researchSchema } from "../schemas/researchSchema.js";

export async function researchAgent(state) {
  const companyData = await getCompanyOverview(state.company);

  const prompt = `
You are a senior equity research analyst.

Below is verified company profile data retrieved from the Finnhub API.

Company Name:
${state.company}

Company Profile:
${JSON.stringify(companyData.overview, null, 2)}

Generate the following fields:

- business
- industry
- products
- marketPosition

Rules:

- Use the Finnhub company profile as the primary source.
- You may use your general knowledge of well-known publicly listed companies to describe their products, services, and business activities.
- Do NOT invent financial figures or company-specific facts that are not widely known.
- Products should be an array of strings.
- Market position should be 2–3 concise sentences.
- Return ONLY valid JSON matching the required schema.
`;

  const response = await generateStructuredResponse(
    prompt,
    researchSchema
  );

  return {
    ...state,
    research: response,
    companyData,
  };
}