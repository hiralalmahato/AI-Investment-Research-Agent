import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function ConfidenceChart({ confidence = 0, isDark = false }) {
  const data = [
    {
      name: "Confidence",
      value: confidence,
      fill: isDark ? "#2FA37A" : "#0B6B4B",
    },
  ];

  return (
    <div className="relative w-full h-44 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="75%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
          />
          <RadialBar
            dataKey="value"
            background={{ fill: isDark ? "#12291F" : "#E7F6EE" }}
            cornerRadius={4}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* Center Value */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-2xl font-bold text-text-main font-mono-ticker">
          {confidence}%
        </span>
        <span className="text-[10px] uppercase font-semibold text-text-muted tracking-wider">
          Confidence
        </span>
      </div>
    </div>
  );
}
