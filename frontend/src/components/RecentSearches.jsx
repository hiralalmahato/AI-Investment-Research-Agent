import React from "react";
import { History, ArrowUpRight } from "lucide-react";

export default function RecentSearches({ history, onSelect }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="w-full mt-8 pt-6 border-t border-border/80">
      <div className="flex items-center justify-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
        <History size={13} />
        <span>Recent Inquiries</span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {history.map((item, index) => {
          const tickerName = typeof item === "string" ? item : item.name || item.ticker || "";
          if (!tickerName) return null;

          return (
            <button
              key={`${tickerName}-${index}`}
              onClick={() => onSelect(tickerName)}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-full border border-border bg-surface text-text-main hover:bg-primary-soft hover:border-primary-border hover:text-primary transition-colors duration-150 cursor-pointer"
            >
              <span className="font-mono-ticker uppercase font-semibold">{tickerName}</span>
              <ArrowUpRight size={12} className="text-text-muted" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
