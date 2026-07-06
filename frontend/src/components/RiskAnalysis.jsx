import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
import { ShieldAlert } from "lucide-react";

export default function RiskAnalysis({ risk }) {
  if (!risk) return null;

  const risks = [
    {
      title: "Business Risk",
      value: risk.businessRisk,
    },
    {
      title: "Financial Risk",
      value: risk.financialRisk,
    },
    {
      title: "Market Risk",
      value: risk.marketRisk,
    },
    {
      title: "Overall Risk",
      value: risk.overallRisk,
    },
  ];

  return (
    <Card>

      <SectionTitle
        icon={<ShieldAlert size={24} />}
        title="Risk Assessment"
      />

      <div className="space-y-5">

        {risks.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-slate-50 p-5"
          >
            <h3 className="font-bold text-red-600 mb-2">
              {item.title}
            </h3>

            <p className="text-slate-700 leading-8">
              {item.value}
            </p>
          </div>
        ))}

      </div>

    </Card>
  );
}