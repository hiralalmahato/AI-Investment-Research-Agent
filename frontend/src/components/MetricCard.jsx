import React from "react";

export default function MetricCard({ label, value, subtext, changeType }) {
  return (
    <div className="p-5 sm:p-6 bg-surface border border-border rounded-xl flex flex-col justify-between">
      <span className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-2">
        {label}
      </span>
      <div className="flex items-baseline justify-between gap-2 mt-1">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main font-mono-ticker">
          {value}
        </span>
        {subtext && (
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded ${
              changeType === "positive"
                ? "bg-emerald-50 text-positive dark:bg-emerald-950/40"
                : changeType === "negative"
                ? "bg-red-50 text-negative dark:bg-red-950/40"
                : "bg-bg text-text-muted"
            }`}
          >
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
}
