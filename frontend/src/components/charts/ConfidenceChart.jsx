import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis
} from "recharts";

export default function ConfidenceChart({ confidence }) {

  const data = [
    {
      name: "Confidence",
      value: confidence,
      fill: "#06b6d4",
    },
  ];

  return (

    <div className="flex justify-center">

      <RadialBarChart
        width={260}
        height={260}
        innerRadius="70%"
        outerRadius="100%"
        data={data}
        startAngle={90}
        endAngle={-270}
      >

        <PolarAngleAxis
          type="number"
          domain={[0,100]}
          tick={false}
        />

        <RadialBar
          dataKey="value"
          background
        />

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-slate-800 font-bold text-3xl"
        >
          {confidence}%
        </text>

      </RadialBarChart>

    </div>

  );
}