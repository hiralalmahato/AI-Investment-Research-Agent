import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
import {
  Lightbulb,
  TrendingUp,
  ShieldCheck,
  Newspaper,
  BadgeCheck,
} from "lucide-react";

export default function AIInsights({ analysis }) {
  if (!analysis) return null;

  const insights = [
    {
      icon: <TrendingUp className="text-green-400" />,
      text: analysis.financial.revenueGrowth,
    },
    {
      icon: <ShieldCheck className="text-cyan-400" />,
      text: analysis.risk.overallRisk,
    },
    {
      icon: <Newspaper className="text-yellow-400" />,
      text: `Market Sentiment: ${analysis.news.marketSentiment}`,
    },
    {
      icon: <BadgeCheck className="text-purple-400" />,
      text: `${analysis.recommendation.recommendation} (${analysis.recommendation.confidence}% Confidence)`,
    },
  ];

  return (
    <Card>

      <SectionTitle
        icon={<Lightbulb size={24} />}
        title="AI Key Insights"
      />

      <div className="space-y-5">

        {insights.map((item, index) => (

          <div
            key={index}
            className="flex gap-4 items-start rounded-xl bg-slate-50 p-4"
          >

            {item.icon}

            <p className="text-slate-700 leading-7">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </Card>
  );
}