import React from "react";

export default function RecommendationBadge({ recommendation, size = "md" }) {
  const norm = (recommendation || "").toUpperCase();

  let colors = "bg-primary-soft border-primary-border text-primary";
  let label = "BUY · High Conviction";
  let dotColor = "bg-primary";

  if (norm === "BUY") {
    colors = "bg-primary-soft border-primary-border text-primary";
    label = "BUY · High Conviction";
    dotColor = "bg-primary";
  } else if (norm === "HOLD") {
    colors = "bg-warning-bg border-warning-border text-warning-text";
    label = "HOLD · Neutral Watch";
    dotColor = "bg-warning-text";
  } else if (norm === "PASS" || norm === "SELL") {
    colors = "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900 text-red-700 dark:text-red-400";
    label = norm === "PASS" ? "PASS · Cautious Stance" : "SELL · Underweight";
    dotColor = "bg-red-600";
  }

  const sizeClasses =
    size === "lg"
      ? "px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide"
      : "px-3 py-1 text-xs font-semibold";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border ${colors} ${sizeClasses} select-none`}
    >
      <span className={`w-2 h-2 rounded-full ${dotColor} shrink-0 animate-pulse`} />
      <span>{label}</span>
    </span>
  );
}
