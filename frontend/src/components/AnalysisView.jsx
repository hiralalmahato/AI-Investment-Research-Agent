import React, { useState } from "react";
import {
  Building2,
  TrendingUp,
  ShieldAlert,
  Newspaper,
  CheckCircle2,
  Copy,
  Printer,
  RotateCw,
  FileText,
  BarChart2,
  ArrowUpRight,
  TrendingDown,
  Sparkles,
  Info,
} from "lucide-react";
import toast from "react-hot-toast";
import MetricCard from "./MetricCard";
import RecommendationBadge from "./RecommendationBadge";
import FinancialScoreChart from "./charts/FinancialScoreChart";
import ConfidenceChart from "./charts/ConfidenceChart";
import generatePDF from "../utils/generatePDF";

const TABS = [
  { id: "summary", label: "Executive Summary" },
  { id: "profile", label: "Corporate Profile" },
  { id: "financials", label: "Financial Health" },
  { id: "risks", label: "Risk Matrix" },
  { id: "news", label: "News & Catalysts" },
  { id: "all", label: "Full Dossier" },
];

export default function AnalysisView({ analysis, onRerun, isDark = false }) {
  const [activeTab, setActiveTab] = useState("summary");
  const [copied, setCopied] = useState(false);

  if (!analysis) return null;

  const { company, research, financial, news, risk, recommendation } = analysis;

  const scores = financial?.scores || {};
  const avgScore = Math.round(
    ((scores.revenue || 0) +
      (scores.profitability || 0) +
      (scores.health || 0) +
      (scores.cashFlow || 0)) /
      4
  );

  const getScoreVerdict = (score) => {
    if (score >= 80) return "Excellent";
    if (score >= 65) return "Healthy";
    if (score >= 50) return "Moderate";
    return "Vulnerable";
  };

  const handleCopySummary = async () => {
    try {
      const summaryText = `[InvestIQ Research Dossier: ${company.toUpperCase()}]\nVerdict: ${
        recommendation?.recommendation || "N/A"
      } (${recommendation?.confidence || 0}% Confidence)\n\nExecutive Summary:\n${
        recommendation?.summary || ""
      }\n\nAnalytical Conviction:\n${recommendation?.reasoning || ""}`;

      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      toast.success("Dossier summary copied to clipboard.");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy summary.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    try {
      generatePDF(analysis);
      toast.success("Report PDF generated.");
    } catch {
      toast.error("Unable to generate PDF.");
    }
  };

  const showSection = (tabId) => activeTab === "all" || activeTab === tabId;

  return (
    <div id="results-view" className="w-full mt-10 space-y-8">
      {/* 1. High-Impact Dossier Header */}
      <div className="p-8 sm:p-10 bg-surface border border-border rounded-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border/80">
          <div>
            <div className="flex items-center gap-3.5 flex-wrap">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-main uppercase font-mono-ticker">
                {company}
              </h1>
              <RecommendationBadge recommendation={recommendation?.recommendation} size="lg" />
              <span className="text-xs px-3 py-1 rounded-full bg-bg text-text-muted border border-border font-mono-ticker font-medium">
                TICKER: {company.toUpperCase().slice(0, 5)}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-bg text-text-muted border border-border font-medium">
                {research?.industry || "Global Public Asset"}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-muted mt-2.5 flex items-center gap-2">
              <Sparkles size={14} className="text-primary shrink-0" />
              <span>Multi-Agent Research Synthesis · Verified as of {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </p>
          </div>

          {/* User-Friendly Action Bar */}
          <div className="flex items-center gap-2.5 flex-wrap no-print">
            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 h-10 px-4 text-xs font-semibold rounded-lg border border-border bg-surface text-text-main hover:bg-primary-soft hover:border-primary-border transition-colors duration-150 cursor-pointer"
            >
              <Copy size={14} />
              <span>{copied ? "Copied" : "Copy Summary"}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 h-10 px-4 text-xs font-semibold rounded-lg border border-border bg-surface text-text-main hover:bg-primary-soft hover:border-primary-border transition-colors duration-150 cursor-pointer"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 h-10 px-4 text-xs font-semibold rounded-lg border border-border bg-surface text-text-main hover:bg-primary-soft hover:border-primary-border transition-colors duration-150 cursor-pointer"
            >
              <FileText size={14} />
              <span>Export PDF</span>
            </button>

            {onRerun && (
              <button
                type="button"
                onClick={() => onRerun(company)}
                className="inline-flex items-center gap-2 h-10 px-4 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors duration-150 cursor-pointer"
              >
                <RotateCw size={14} />
                <span>Re-run Audit</span>
              </button>
            )}
          </div>
        </div>

        {/* 2. Key Metrics Strip with Plain-English Subtext */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          <MetricCard
            label="Advisory Stance"
            value={recommendation?.recommendation || "N/A"}
            subtext={`${recommendation?.confidence || 0}% Conviction`}
            changeType={
              recommendation?.recommendation === "BUY"
                ? "positive"
                : recommendation?.recommendation === "HOLD"
                ? "neutral"
                : "negative"
            }
          />
          <MetricCard
            label="Fundamental Health"
            value={`${avgScore}/100`}
            subtext={`${getScoreVerdict(avgScore)} Quality`}
            changeType={avgScore >= 65 ? "positive" : avgScore >= 50 ? "neutral" : "negative"}
          />
          <MetricCard
            label="Market Sentiment"
            value={news?.marketSentiment || "Neutral"}
            subtext="Public Disclosure Tone"
          />
          <MetricCard
            label="Risk Posture"
            value={risk?.overallRisk?.split(" ")[0] || "Moderate"}
            subtext="Cross-Agent Matrix"
          />
        </div>
      </div>

      {/* 3. Intuitive Segmented Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-print">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer shrink-0 ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "bg-surface border border-border text-text-muted hover:text-text-main hover:bg-primary-soft hover:border-primary-border"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 4. Tab Content: Attractive, Readable & Friendly */}
      <div className="space-y-8">
        {/* TAB 1: EXECUTIVE SUMMARY */}
        {showSection("summary") && (
          <div className="p-8 sm:p-10 bg-surface border border-border rounded-2xl space-y-8">
            <div className="flex items-center gap-3.5 pb-5 border-b border-border/80">
              <div className="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-main tracking-tight">
                  Executive Investment Verdict
                </h2>
                <p className="text-xs sm:text-sm text-text-muted">
                  High-level thesis synthesized from verified financials, market tone, and risk models
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left narrative with highlighted blocks */}
              <div className="lg:col-span-8 space-y-6">
                <div className="p-6 rounded-xl bg-primary-soft/40 border border-primary-border/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                    Executive Summary &amp; Key Finding
                  </span>
                  <p className="text-base sm:text-lg text-text-main font-medium leading-relaxed">
                    {recommendation?.summary}
                  </p>
                </div>

                <div className="pt-4 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Analytical Conviction &amp; Underlying Reasoning
                  </h3>
                  <p className="text-sm sm:text-base text-text-main leading-relaxed">
                    {recommendation?.reasoning}
                  </p>
                </div>
              </div>

              {/* Right Gauge */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-xl bg-bg border border-border/80 text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-text-muted block">
                  Model Certitude Gauge
                </span>
                <ConfidenceChart confidence={recommendation?.confidence || 0} isDark={isDark} />
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {recommendation?.confidence >= 75
                    ? "Strong analytical conviction backed by clear operational performance."
                    : "Moderate conviction reflecting market cross-currents and balanced metrics."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CORPORATE PROFILE */}
        {showSection("profile") && (
          <div className="p-8 sm:p-10 bg-surface border border-border rounded-2xl space-y-8">
            <div className="flex items-center gap-3.5 pb-5 border-b border-border/80">
              <div className="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <Building2 size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-main tracking-tight">
                  Corporate Profile &amp; Industry Moat
                </h2>
                <p className="text-xs sm:text-sm text-text-muted">
                  What the company does, its sector standing, and core commercial offerings
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Business Operations &amp; Strategy
                </h3>
                <p className="text-sm sm:text-base text-text-main leading-relaxed">
                  {research?.business}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border/80">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                    Industry Sector
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-text-main">
                    {research?.industry || "Technology Sector"}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                    Competitive Market Posture
                  </h3>
                  <p className="text-sm sm:text-base text-text-main leading-relaxed">
                    {research?.marketPosition}
                  </p>
                </div>
              </div>

              {research?.products && research.products.length > 0 && (
                <div className="pt-6 border-t border-border/80">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                    Flagship Products &amp; Offerings
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {research.products.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-primary-soft text-primary border border-primary-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: FINANCIAL HEALTH */}
        {showSection("financials") && (
          <div className="p-8 sm:p-10 bg-surface border border-border rounded-2xl space-y-8">
            <div className="flex items-center gap-3.5 pb-5 border-b border-border/80">
              <div className="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <BarChart2 size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-main tracking-tight">
                  Financial Performance Audit
                </h2>
                <p className="text-xs sm:text-sm text-text-muted">
                  Audited metrics across top-line growth, profitability margins, solvency, and cash generation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Financial Scorecard Chart */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-bg border border-border/80">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Fundamental Scorecard
                  </h3>
                  <span className="text-xs font-bold font-mono-ticker text-primary">
                    AVG: {avgScore}/100
                  </span>
                </div>
                <p className="text-xs text-text-muted mb-4">
                  Normalized scoring benchmarked against industry peers
                </p>
                <FinancialScoreChart financial={financial} isDark={isDark} />
              </div>

              {/* Metric Breakdown Cards with Friendly Tags */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 sm:p-6 rounded-xl bg-bg border border-border/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-text-muted">Revenue Trajectory</span>
                    <span className="text-xs font-bold font-mono-ticker text-primary px-2 py-0.5 rounded bg-primary-soft">
                      {scores.revenue || 0}/100
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-main leading-relaxed">{financial?.revenueGrowth}</p>
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-bg border border-border/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-text-muted">Profitability Margins</span>
                    <span className="text-xs font-bold font-mono-ticker text-primary px-2 py-0.5 rounded bg-primary-soft">
                      {scores.profitability || 0}/100
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-main leading-relaxed">{financial?.profitability}</p>
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-bg border border-border/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-text-muted">Balance Sheet Health</span>
                    <span className="text-xs font-bold font-mono-ticker text-primary px-2 py-0.5 rounded bg-primary-soft">
                      {scores.health || 0}/100
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-main leading-relaxed">{financial?.financialHealth}</p>
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-bg border border-border/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-text-muted">Cash Flow Generation</span>
                    <span className="text-xs font-bold font-mono-ticker text-primary px-2 py-0.5 rounded bg-primary-soft">
                      {scores.cashFlow || 0}/100
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-main leading-relaxed">{financial?.cashFlow}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RISK ASSESSMENT */}
        {showSection("risks") && (
          <div className="p-8 sm:p-10 bg-surface border border-border rounded-2xl space-y-8">
            <div className="flex items-center gap-3.5 pb-5 border-b border-border/80">
              <div className="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <ShieldAlert size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-main tracking-tight">
                  Risk Assessment Matrix
                </h2>
                <p className="text-xs sm:text-sm text-text-muted">
                  Multi-dimensional evaluation of vulnerabilities, leverage risks, and market cyclicality
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Overall Risk Callout */}
              <div className="p-6 sm:p-7 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
                <span className="text-xs font-bold uppercase tracking-wider text-negative block mb-2">
                  Composite Risk Evaluation
                </span>
                <p className="text-sm sm:text-base text-text-main leading-relaxed font-medium">
                  {risk?.overallRisk}
                </p>
              </div>

              {/* 3 Risk Dimensions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-bg border border-border/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-2">
                    Business Operations Risk
                  </span>
                  <p className="text-xs sm:text-sm text-text-main leading-relaxed">
                    {risk?.businessRisk}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-bg border border-border/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-2">
                    Financial &amp; Capital Risk
                  </span>
                  <p className="text-xs sm:text-sm text-text-main leading-relaxed">
                    {risk?.financialRisk}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-bg border border-border/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-2">
                    Market &amp; Regulatory Risk
                  </span>
                  <p className="text-xs sm:text-sm text-text-main leading-relaxed">
                    {risk?.marketRisk}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: NEWS & CATALYSTS */}
        {showSection("news") && (
          <div className="p-8 sm:p-10 bg-surface border border-border rounded-2xl space-y-8">
            <div className="flex items-center gap-3.5 pb-5 border-b border-border/80">
              <div className="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <Newspaper size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-main tracking-tight">
                  Market Catalysts &amp; Sentiment Tone
                </h2>
                <p className="text-xs sm:text-sm text-text-muted">
                  Recent narrative developments, growth tailwinds, and potential headwinds
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-5 rounded-xl bg-bg border border-border/80">
                <span className="text-sm font-medium text-text-muted">
                  Prevailing Disclosure Sentiment
                </span>
                <span className="text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full bg-primary-soft text-primary border border-primary-border">
                  {news?.marketSentiment || "Neutral"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Positive News */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-positive flex items-center gap-2">
                    <TrendingUp size={16} />
                    Growth Tailwinds &amp; Positive Catalysts
                  </h3>
                  <div className="space-y-3">
                    {news?.positiveNews?.length > 0 ? (
                      news.positiveNews.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl bg-bg border border-border/80 text-xs sm:text-sm text-text-main leading-relaxed"
                        >
                          {item}
                        </div>
                      ))
                    ) : (
                      <p className="text-xs sm:text-sm text-text-muted italic">No immediate positive catalysts detected.</p>
                    )}
                  </div>
                </div>

                {/* Negative News */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-negative flex items-center gap-2">
                    <TrendingDown size={16} />
                    Key Headwinds &amp; Vulnerabilities
                  </h3>
                  <div className="space-y-3">
                    {news?.negativeNews?.length > 0 ? (
                      news.negativeNews.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl bg-bg border border-border/80 text-xs sm:text-sm text-text-main leading-relaxed"
                        >
                          {item}
                        </div>
                      ))
                    ) : (
                      <p className="text-xs sm:text-sm text-text-muted italic">No material headwinds detected.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
