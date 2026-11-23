import React, { useState, useEffect, useRef } from "react";
import { Search, ArrowRight, Loader2 } from "lucide-react";

export default function SearchBar({ onSearch, loading, initialValue = "" }) {
  const [query, setQuery] = useState(initialValue);
  const inputRef = useRef(null);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed || loading) return;
    onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center w-full h-14 bg-surface rounded-lg border border-border focus-within:border-primary transition-all duration-150 overflow-hidden">
        <div className="pl-5 pr-3 text-text-muted shrink-0 flex items-center">
          <Search size={20} strokeWidth={1.75} />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by company name or ticker symbol (e.g. Apple, TSLA, NVDA)..."
          disabled={loading}
          aria-label="Search company name or ticker"
          className="w-full h-full bg-transparent text-text-main text-sm sm:text-base placeholder:text-text-muted/70 focus:outline-none px-2"
        />

        {/* Keyboard shortcut hint */}
        <div className="hidden sm:flex items-center mr-3 px-2 py-1 rounded border border-border bg-bg text-text-muted text-xs font-mono select-none">
          /
        </div>

        {/* Analyze Action Button */}
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="h-full px-7 bg-primary text-white font-semibold text-sm hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 flex items-center gap-2 shrink-0 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <span>Analyze</span>
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
