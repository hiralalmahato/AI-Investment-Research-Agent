import axios from "axios";
import { env } from "../config/env.js";
import { resolveCompanySymbol } from "./companyResolver.js";

export async function getCompanyOverview(companyName) {
  const company = await resolveCompanySymbol(companyName);

  console.log("Resolved Symbol:", company.symbol);

  const [profile, metrics] = await Promise.all([
    axios.get("https://finnhub.io/api/v1/stock/profile2", {
      params: {
        symbol: company.symbol,
        token: env.FINNHUB_API_KEY,
      },
    }),

    axios.get("https://finnhub.io/api/v1/stock/metric", {
      params: {
        symbol: company.symbol,
        metric: "all",
        token: env.FINNHUB_API_KEY,
      },
    }),
  ]);
  console.log("===== COMPANY DATA =====");
console.log(JSON.stringify({
  company,
  overview: profile.data,
  metrics: metrics.data,
}, null, 2));

  return {
    company,
    overview: profile.data,
    metrics: metrics.data.metric,
  };
}