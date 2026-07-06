import { researchAgent } from "./agents/researchAgent.js";

const state = {
  company: "Apple",
};

const result = await researchAgent(state);

console.log(result);