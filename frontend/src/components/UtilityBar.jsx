import React from "react";
import { ShieldCheck, Globe, Activity } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="w-full h-8 bg-primary text-white text-xs font-medium flex items-center px-4 sm:px-8 justify-between select-none border-b border-primary-hover no-print">
      <div className="flex items-center gap-2 truncate">
        <ShieldCheck size={14} className="text-white/90 shrink-0" />
        <span className="tracking-wide truncate">Equity Research &amp; Analysis Desk</span>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 shrink-0 text-white/90">
        <div className="flex items-center gap-1.5">
          <Activity size={13} className="text-emerald-300" />
          <span className="hidden sm:inline font-mono-ticker">Data: Alpha Vantage · Live</span>
          <span className="sm:hidden font-mono-ticker">Live</span>
        </div>
        <span className="text-white/40">|</span>
        <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors duration-150">
          <Globe size={13} />
          <span>Global / US · EN</span>
        </div>
      </div>
    </div>
  );
}
