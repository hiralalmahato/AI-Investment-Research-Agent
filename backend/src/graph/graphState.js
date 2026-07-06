import { Annotation } from "@langchain/langgraph";

export const InvestmentState = Annotation.Root({
  company: Annotation(),
  
  companyData: Annotation(),

  research: Annotation(),

  financial: Annotation(),

  news: Annotation(),

  risk: Annotation(),

  recommendation: Annotation(),
});