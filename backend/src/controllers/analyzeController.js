import { investmentGraph } from "../graph/investmentGraph.js";
import { companySchema } from "../validators/companyValidator.js";

export async function analyzeCompany(req, res) {
  try {
    // Validate the request
    const validatedData = companySchema.parse(req.body);
    const { company } = validatedData;

    // Run the LangGraph workflow
    const result = await investmentGraph.invoke({
      company,
    });

    // Return a clean API response
    return res.status(200).json({
      success: true,
      message: "Investment analysis generated successfully.",
      data: {
        company: result.company,
        research: result.research,
        financial: result.financial,
        news: result.news,
        risk: result.risk,
        recommendation: result.recommendation,
      },
      generatedAt: new Date().toISOString(),
    });

  } catch (error) {
    console.error("Analyze Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate investment analysis.",
      error: error.message,
      generatedAt: new Date().toISOString(),
    });
  }
}