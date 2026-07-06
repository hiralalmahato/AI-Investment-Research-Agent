import axios from "axios";
import { env } from "../config/env.js";
import { resolveCompanySymbol } from "./companyResolver.js";

const BASE_URL = "https://www.alphavantage.co/query";

export async function getCompanyOverview(companyName) {

  const company = await resolveCompanySymbol(companyName);

  const { data } = await axios.get(BASE_URL, {
    params: {
      function: "OVERVIEW",
      symbol: company.symbol,
      apikey: env.ALPHA_VANTAGE_API_KEY,
    },
  });

  return {

    company,

    overview: data

  };

}