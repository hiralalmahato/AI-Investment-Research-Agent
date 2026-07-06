import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
import { BadgeCheck } from "lucide-react";
import ConfidenceChart from "./charts/ConfidenceChart";

export default function Recommendation({ recommendation }) {
  if (!recommendation) return null;

  const { recommendation: decision, confidence, reasoning, summary } =
    recommendation;

  const badgeColor =
    decision === "BUY"
      ? "bg-green-500"
      : decision === "SELL"
      ? "bg-red-500"
      : "bg-yellow-500";

  const progressColor =
    decision === "BUY"
      ? "bg-green-500"
      : decision === "SELL"
      ? "bg-red-500"
      : "bg-yellow-500";

  return (
    <Card>

      <SectionTitle
        icon={<BadgeCheck size={24} />}
        title="Final Investment Recommendation"
      />

      <div className="space-y-8">

        {/* Recommendation Badge */}

        <div className="flex justify-center">
          <div className={`${badgeColor} px-8 py-4 rounded-full shadow-2xl`}>
            <h2 className="text-3xl font-bold text-white">
             {decision}
            </h2>
          </div>
        </div>



        {/* Confidence */}
        <ConfidenceChart
          confidence={confidence}
        />

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-semibold">
              Confidence Score
            </span>

            <span className="font-bold">
              {confidence}%
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-4">

            <div
              className={`${progressColor} h-4 rounded-full transition-all duration-700`}
              style={{
                width: `${confidence}%`,
              }}
            />

          </div>

        </div>

        {/* Reasoning */}

        <div>

          <h3 className="text-xl font-bold mb-2">
            AI Reasoning
          </h3>

          <p className="text-slate-700 leading-8">
            {reasoning}
          </p>

        </div>

        {/* Summary */}

        <div>

          <h3 className="text-xl font-bold mb-2">
            Investment Summary
          </h3>

          <p className="text-slate-700 leading-8">
            {summary}
          </p>

        </div>

      </div>

    </Card>
  );
}