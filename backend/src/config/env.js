import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  ALPHA_VANTAGE_API_KEY: process.env.ALPHA_VANTAGE_API_KEY,
  NODE_ENV: process.env.NODE_ENV || "development",
};