import React from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import SearchBar from "./SearchBar";
import RecentSearches from "./RecentSearches";

const EXAMPLE_TICKERS = [
  { label: "Apple", symbol: "AAPL" },
  { label: "Microsoft", symbol: "MSFT" },
  { label: "Nvidia", symbol: "NVDA" },
  { label: "Tesla", symbol: "TSLA" },
  { label: "Alphabet", symbol: "GOOGL" },
];

export default function Hero({ onSearch, loading, history }) {
  return (
    <section className="py-12 sm:py-16 max-w-3xl mx-auto text-center">
      {/* Attractive Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft border border-primary-border text-primary text-xs font-semibold mb-6">
        <Sparkles size={14} className="text-primary" />
        <span>Autonomous Equity Intelligence</span>
      </div>

      {/* Modern, Eye-Catching Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-main leading-[1.15] mb-5">
        Research Any Public Company.
        <span className="font-serif-italic font-normal text-primary block mt-1.5">
          Decide with verified evidence.
        </span>
      </h1>

      {/* User-Friendly Subtitle */}
      <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
        Automate in-depth equity analysis. Get fundamental audits, verified Finnhub financials,
        market sentiment signals, and multi-agent risk modeling in seconds.
      </p>

      {/* Spacious Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <SearchBar onSearch={onSearch} loading={loading} />
      </div>

      {/* Suggested Quick Tickers */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs text-text-muted font-medium mr-1">Popular:</span>
        {EXAMPLE_TICKERS.map((item) => (
          <button
            key={item.symbol}
            type="button"
            onClick={() => onSearch(item.label)}
            disabled={loading}
            className="px-3.5 py-1.5 text-xs font-medium rounded-full border border-border bg-surface text-text-main hover:bg-primary-soft hover:border-primary-border hover:text-primary transition-all duration-150 cursor-pointer disabled:opacity-50"
          >
            <span className="font-semibold">{item.label}</span>
            <span className="ml-1 text-[11px] font-mono-ticker text-text-muted">
              {item.symbol}
            </span>
          </button>
        ))}
      </div>

      {/* Recent Searches */}
      <RecentSearches history={history} onSelect={onSearch} />
    </section>
  );
}
