import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function FinancialScoreChart({ financial, isDark = false }) {
  if (!financial || !financial.scores) return null;

  const data = [
    { name: "Revenue", score: financial.scores.revenue || 0 },
    { name: "Profitability", score: financial.scores.profitability || 0 },
    { name: "Health", score: financial.scores.health || 0 },
    { name: "Cash Flow", score: financial.scores.cashFlow || 0 },
  ];

  const primaryColor = isDark ? "#2FA37A" : "#0B6B4B";
  const gridColor = isDark ? "#1F2E27" : "#E2E8EC";
  const textColor = isDark ? "#8DA399" : "#5B6B7A";

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface border border-border px-3 py-2 rounded-[6px] text-xs">
          <p className="font-semibold text-text-main">{label}</p>
          <p className="text-primary font-mono-ticker font-medium">
            Score: {payload[0].value} / 100
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
          <XAxis
            dataKey="name"
            tick={{ fill: textColor, fontSize: 11 }}
            axisLine={{ stroke: gridColor }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: textColor, fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="score"
            fill={primaryColor}
            radius={[4, 4, 0, 0]}
            maxBarSize={48}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
