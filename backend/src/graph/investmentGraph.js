import { StateGraph, START, END } from "@langchain/langgraph";

import { InvestmentState } from "./graphState.js";

import { researchAgent } from "../agents/researchAgent.js";
import { financialAgent } from "../agents/financialAgent.js";
import { newsAgent } from "../agents/newsAgent.js";
import { riskAgent } from "../agents/riskAgent.js";
import { decisionAgent } from "../agents/decisionAgent.js";

const graphBuilder = new StateGraph(InvestmentState);

graphBuilder.addNode("researchNode", researchAgent);
graphBuilder.addNode("financialNode", financialAgent);
graphBuilder.addNode("newsNode", newsAgent);
graphBuilder.addNode("riskNode", riskAgent);
graphBuilder.addNode("decisionNode", decisionAgent);

graphBuilder.addEdge(START, "researchNode");
graphBuilder.addEdge("researchNode", "financialNode");
graphBuilder.addEdge("financialNode", "newsNode");
graphBuilder.addEdge("newsNode", "riskNode");
graphBuilder.addEdge("riskNode", "decisionNode");
graphBuilder.addEdge("decisionNode", END);

export const investmentGraph = graphBuilder.compile();