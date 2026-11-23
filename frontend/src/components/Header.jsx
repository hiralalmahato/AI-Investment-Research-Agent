import React from "react";
import { TrendingUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="w-full bg-surface border-b border-border transition-colors duration-150 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[6px] bg-primary flex items-center justify-center text-white shrink-0">
            <TrendingUp size={18} strokeWidth={2.2} />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base tracking-tight text-text-main">
              InvestIQ <span className="font-normal text-text-muted">Research</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-primary-soft text-primary border border-primary-border">
              Equity Desk
            </span>
          </div>
        </div>

        {/* Right side: Engine status & Theme toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-text-muted">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono-ticker">Multi-Agent Engine Active</span>
          </div>
          <div className="hidden sm:block h-4 w-[1px] bg-border" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
