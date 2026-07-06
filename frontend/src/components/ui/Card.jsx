import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`
        bg-white
        rounded-2xl
        shadow-xl
        border
        border-slate-200
        p-6
        hover:shadow-2xl
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}