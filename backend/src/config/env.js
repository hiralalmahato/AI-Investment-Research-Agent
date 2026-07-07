import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  FINNHUB_API_KEY: process.env.FINNHUB_API_KEY,
  NODE_ENV: process.env.NODE_ENV || "development",
};