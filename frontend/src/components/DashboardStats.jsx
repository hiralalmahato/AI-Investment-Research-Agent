import {
  BrainCircuit,
  Building2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardStats({ analysis }) {
  const stats = [
    {
      title: "AI Agents",
      value: "5",
      icon: <BrainCircuit size={28} />,
      color: "text-cyan-400",
    },
    {
      title: "Company",
      value: analysis.company.toUpperCase(),
      icon: <Building2 size={28} />,
      color: "text-green-400",
    },
    {
      title: "Confidence",
      value: `${analysis.recommendation.confidence}%`,
      icon: <TrendingUp size={28} />,
      color: "text-yellow-400",
    },
    {
      title: "Recommendation",
      value: analysis.recommendation.recommendation,
      icon: <ShieldCheck size={28} />,
      color:
        analysis.recommendation.recommendation === "BUY"
          ? "text-green-400"
          : analysis.recommendation.recommendation === "SELL"
          ? "text-red-400"
          : "text-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
          }}
          whileHover={{
            scale: 1.05,
            y: -5,
          }}
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-6
            shadow-lg
            cursor-pointer
          "
        >
          <div className={stat.color}>
            {stat.icon}
          </div>

          <h2 className="mt-4 text-3xl font-bold text-white">
            {stat.value}
          </h2>

          <p className="text-slate-400 mt-2">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}