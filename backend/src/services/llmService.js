import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { env } from "../config/env.js";

const model = new ChatGoogleGenerativeAI({
  apiKey: env.GEMINI_API_KEY,
  model: "gemini-2.5-flash",
  temperature: 0.2,
});

export async function generateResponse(prompt) {
  try {
    const response = await model.invoke(prompt);

    return response.content;
  } catch (error) {
    console.error("LLM Error:", error);

    throw new Error("Failed to generate AI response.");
  }
}


export async function generateStructuredResponse(prompt, schema) {
  try {
    const structuredModel = model.withStructuredOutput(schema);

    const response = await structuredModel.invoke(prompt);

    return response;
  } catch (error) {
    console.error("Structured LLM Error:", error);
    throw new Error("Failed to generate structured AI response.");
  }
}