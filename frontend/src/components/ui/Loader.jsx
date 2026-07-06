import { BrainCircuit, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const agents = [
  "Research Agent",
  "Financial Agent",
  "News Agent",
  "Risk Agent",
  "Decision Agent",
];

export default function Loader() {
  return (
    <div className="mt-16 flex flex-col items-center">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      >
        <BrainCircuit
          size={70}
          className="text-cyan-400"
        />
      </motion.div>

      <h2 className="mt-6 text-3xl font-bold">
        AI Multi-Agent Workflow
      </h2>

      <p className="text-slate-400 mt-3 text-center max-w-lg">
        Our AI agents are collaborating to generate an investment report.
      </p>

      <div className="mt-10 w-full max-w-xl space-y-4">

        {agents.map((agent, index) => (
          <motion.div
            key={agent}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.2,
            }}
            className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/60 backdrop-blur-lg px-6 py-4"
          >

            <span className="font-medium">
              {agent}
            </span>

            <CheckCircle2
              className="text-cyan-400 animate-pulse"
              size={22}
            />

          </motion.div>
        ))}

      </div>

      <p className="mt-8 text-sm text-slate-500">
        Powered by LangGraph + Gemini AI
      </p>

    </div>
  );
}