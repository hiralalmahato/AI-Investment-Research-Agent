import React, { useState } from "react";
import { LineChart, AlertTriangle, Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar({ theme, onToggleTheme, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (onNavigate) onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-surface border-b border-border transition-colors duration-150 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div
          onClick={() => handleLinkClick("hero")}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-[6px] bg-primary flex items-center justify-center text-white shrink-0 group-hover:bg-primary-hover transition-colors duration-150">
            <LineChart size={20} strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-text-main leading-tight">
              InvestIQ <span className="font-semibold text-text-muted">Research</span>
            </span>
            <span className="text-[11px] text-text-muted tracking-wide">
              Equity Research Portal
            </span>
          </div>
        </div>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <button
            onClick={() => handleLinkClick("hero")}
            className="hover:text-text-main transition-colors duration-150 cursor-pointer"
          >
            Overview
          </button>
          <button
            onClick={() => handleLinkClick("search")}
            className="hover:text-text-main transition-colors duration-150 cursor-pointer"
          >
            Analyze
          </button>
          <button
            onClick={() => handleLinkClick("recent")}
            className="hover:text-text-main transition-colors duration-150 cursor-pointer"
          >
            Recent
          </button>
          <button
            onClick={() => handleLinkClick("methodology")}
            className="hover:text-text-main transition-colors duration-150 cursor-pointer"
          >
            How it works
          </button>
        </nav>

        {/* Right Actions - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Warning / Discrepancy Pill (Matching reference amber pill) */}
          <button
            type="button"
            onClick={() => alert("InvestIQ Research Desk: For data clarification, contact desk@investiq.internal")}
            className="inline-flex items-center gap-1.5 px-3 h-9 text-xs font-medium rounded-[6px] bg-warning-bg border border-warning-border text-warning-text hover:opacity-90 transition-opacity duration-150 cursor-pointer"
          >
            <AlertTriangle size={14} />
            <span>Report Data Discrepancy</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </button>

          {/* Theme Toggle */}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Sign In (Secondary Outline) */}
          <button
            type="button"
            className="h-9 px-4 text-xs font-medium rounded-[6px] border border-border bg-surface text-text-main hover:bg-primary-soft hover:border-primary-border transition-colors duration-150 cursor-pointer"
          >
            Sign In
          </button>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={() => handleLinkClick("search")}
            className="h-9 px-4 text-xs font-semibold rounded-[6px] bg-primary text-white hover:bg-primary-hover transition-colors duration-150 cursor-pointer"
          >
            Start Research
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-[6px] border border-border text-text-main hover:bg-primary-soft transition-colors duration-150"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-surface px-4 py-4 flex flex-col gap-3">
          <button
            onClick={() => handleLinkClick("hero")}
            className="text-left text-sm font-medium py-2 text-text-main hover:text-primary transition-colors"
          >
            Overview
          </button>
          <button
            onClick={() => handleLinkClick("search")}
            className="text-left text-sm font-medium py-2 text-text-main hover:text-primary transition-colors"
          >
            Analyze
          </button>
          <button
            onClick={() => handleLinkClick("recent")}
            className="text-left text-sm font-medium py-2 text-text-main hover:text-primary transition-colors"
          >
            Recent
          </button>
          <button
            onClick={() => handleLinkClick("methodology")}
            className="text-left text-sm font-medium py-2 text-text-main hover:text-primary transition-colors"
          >
            How it works
          </button>
          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick("search")}
              className="w-full h-10 text-xs font-semibold rounded-[6px] bg-primary text-white hover:bg-primary-hover transition-colors"
            >
              Start Research
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
