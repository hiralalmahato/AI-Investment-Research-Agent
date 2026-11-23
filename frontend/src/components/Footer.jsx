import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-border mt-16 transition-colors duration-150 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>InvestIQ Research · Institutional Equity Analysis Desk</span>
        </div>
        <div>
          For informational purposes only. Not financial advice.
        </div>
      </div>
    </footer>
  );
}
