import { getCompanyOverview } from "../services/financialService.js";
import { generateStructuredResponse } from "../services/llmService.js";
import { researchSchema } from "../schemas/researchSchema.js";

export async function researchAgent(state) {

  const companyData = await getCompanyOverview(state.company);

  const prompt = `
You are a professional equity research analyst.

Below is verified company information.

Company Data:

${JSON.stringify(companyData, null, 2)}

Using ONLY this information, produce:

- Business
- Industry
- Products
- Market Position

Return valid JSON.
`;
console.log(
  "Company Data Sent to Gemini:",
  JSON.stringify(companyData, null, 2)
);

  const response = await generateStructuredResponse(
    prompt,
    researchSchema
  );

  return {
    ...state,
    research: response,
    companyData
  };
}