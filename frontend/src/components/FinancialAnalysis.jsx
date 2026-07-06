import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
import { DollarSign } from "lucide-react";
import FinancialScoreChart from "./charts/FinancialScoreChart";

export default function FinancialAnalysis({ financial }) {
  if (!financial) return null;

  const metrics = [
    {
      title: "Revenue Growth",
      value: financial.revenueGrowth,
    },
    {
      title: "Profitability",
      value: financial.profitability,
    },
    {
      title: "Financial Health",
      value: financial.financialHealth,
    },
    {
      title: "Cash Flow",
      value: financial.cashFlow,
    },
  ];

  return (
    <Card>

      <SectionTitle
        icon={<DollarSign size={24} />}
        title="Financial Analysis"
      />

      <div className="grid gap-5">

        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              p-5
              hover:bg-slate-100
              transition-all
              duration-300
            "
          >
            <h3 className="text-blue-600 font-bold text-lg mb-3">
              {metric.title}
            </h3>

            <p className="text-slate-700 leading-8">
              {metric.value}
            </p>
          </div>
        ))}

      </div>

      {/* Financial Score Chart */}

      <div className="mt-8">
        <FinancialScoreChart financial={financial} />
      </div>

    </Card>
  );
}