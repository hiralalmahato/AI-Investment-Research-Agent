import { decisionAgent } from "./agents/decisionAgent.js";

const state = {
  company: "Apple",
  research: "Apple is a leading technology company.",
  financial: "Strong revenue growth.",
  news: "Positive market sentiment.",
  risk: "Medium risk due to market competition.",
};

const result = await decisionAgent(state);

console.log(result);