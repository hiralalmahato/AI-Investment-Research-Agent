import axios from "axios";
import { env } from "../config/env.js";
import { resolveCompanySymbol } from "./companyResolver.js";

const BASE_URL = "https://www.alphavantage.co/query";

export async function getCompanyOverview(companyName) {
  const company = await resolveCompanySymbol(companyName);

  console.log("Resolved Symbol:", company.symbol);
  console.log("API Key Exists:", !!env.ALPHA_VANTAGE_API_KEY);

  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        function: "OVERVIEW",
        symbol: company.symbol,
        apikey: env.ALPHA_VANTAGE_API_KEY,
      },
    });

    console.log("Alpha Response:", JSON.stringify(data, null, 2));

    return {
      company,
      overview: data,
    };
  } catch (err) {
    console.error("Alpha Error:");
    console.error(err.response?.data || err.message);

    throw err;
  }
}