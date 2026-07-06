import { resolveCompanySymbol } from "./services/companyResolver.js";

async function test() {
  try {
    const companies = [
      "Apple",
      "Microsoft",
      "Tesla",
      "Google",
      "Reliance",
      "Infosys",
      "Unknown Company"
    ];

    for (const company of companies) {
      console.log(`\nTesting: ${company}`);

      try {
        const result = await resolveCompanySymbol(company);

        console.log(result);
      } catch (err) {
        console.error("Error:", err.message);
      }
    }

  } catch (error) {
    console.error(error);
  }
}

test();