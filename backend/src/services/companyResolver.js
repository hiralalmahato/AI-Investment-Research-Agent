import axios from "axios";
import { env } from "../config/env.js";

const BASE_URL = "https://www.alphavantage.co/query";

// Common companies (no API call needed)
const companyMap = {
  apple: "AAPL",
  microsoft: "MSFT",
  tesla: "TSLA",
  amazon: "AMZN",
  google: "GOOGL",
  alphabet: "GOOGL",
  meta: "META",
  netflix: "NFLX",
  nvidia: "NVDA",

  reliance: "RELIANCE.BSE",
  tcs: "TCS.BSE",
  infosys: "INFY.BSE",
  wipro: "WIPRO.BSE",
  hdfc: "HDFCBANK.BSE",
  icici: "ICICIBANK.BSE",
};

export async function resolveCompanySymbol(companyName) {

  const key = companyName.trim().toLowerCase();

  // Use local mapping first
  if (companyMap[key]) {
    return {
      symbol: companyMap[key],
      name: companyName,
      source: "local",
    };
  }

  // Fallback to Alpha Vantage search
  try {

    const { data } = await axios.get(BASE_URL, {
      params: {
        function: "SYMBOL_SEARCH",
        keywords: companyName,
        apikey: env.ALPHA_VANTAGE_API_KEY,
      },
    });

    if (!data.bestMatches || data.bestMatches.length === 0) {
      throw new Error("Company not found");
    }

    const bestMatch = data.bestMatches.find(
      (item) =>
        item["2. name"]
          .toLowerCase()
          .includes(companyName.toLowerCase())
    ) || data.bestMatches[0];

    return {
      symbol: bestMatch["1. symbol"],
      name: bestMatch["2. name"],
      region: bestMatch["4. region"],
      currency: bestMatch["8. currency"],
      source: "api",
    };

  } catch (error) {

    console.error("Company Resolver Error:", error);

    throw new Error("Unable to resolve company symbol.");

  }

}