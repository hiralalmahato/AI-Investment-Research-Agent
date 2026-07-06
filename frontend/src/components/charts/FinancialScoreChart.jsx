import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function FinancialScoreChart({financial}) {

  const data = [
  {
    name: "Revenue",
    score: financial.scores.revenue,
  },
  {
    name: "Profit",
    score: financial.scores.profitability,
  },
  {
    name: "Health",
    score: financial.scores.health,
  },
  {
    name: "Cash",
    score: financial.scores.cashFlow,
  },
];

  return (

    <div className="h-64">

      <ResponsiveContainer>

        <BarChart data={data}>

          <XAxis
            dataKey="name"
          />

          <Tooltip />

          <Bar
            dataKey="score"
            fill="#06b6d4"
            radius={[8,8,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}