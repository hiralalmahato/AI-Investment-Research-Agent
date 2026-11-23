import React from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="inline-flex items-center gap-1.5 px-3 h-9 text-xs font-medium rounded-[6px] border border-border bg-surface text-text-main hover:bg-primary-soft hover:border-primary-border transition-colors duration-150 cursor-pointer"
    >
      {isDark ? (
        <>
          <Sun size={14} className="text-amber-400" />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={14} className="text-text-muted" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
