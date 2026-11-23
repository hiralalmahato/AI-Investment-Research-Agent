import React, { useState, useEffect } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const STEPS = [
  { id: 1, title: "Retrieving company profile & fundamental market metrics", duration: 1800 },
  { id: 2, title: "Auditing revenue trajectory, margins, solvency & cash flow", duration: 2400 },
  { id: 3, title: "Parsing market catalysts, disclosure news & sentiment signals", duration: 2200 },
  { id: 4, title: "Synthesizing cross-agent risks & generating final investment thesis", duration: 2400 },
];

export default function StepProgress({ company }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let timer;
    if (currentStep < STEPS.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, STEPS[currentStep].duration);
    }
    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="w-full max-w-2xl mx-auto my-12 p-8 sm:p-10 bg-surface border border-border rounded-xl">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-border">
        <div>
          <h2 className="text-lg font-bold text-text-main">
            Executing Multi-Agent Equity Audit
          </h2>
          <p className="text-xs text-text-muted mt-1">
            Analyzing Target: <span className="font-semibold text-text-main uppercase font-mono-ticker">{company}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold">
          <Loader2 size={14} className="animate-spin" />
          <span>In Progress</span>
        </div>
      </div>

      {/* Vertical Steps with spacious padding */}
      <div className="space-y-5">
        {STEPS.map((step, idx) => {
          const isDone = idx < currentStep;
          const isCurrent = idx === currentStep;

          return (
            <div key={step.id} className="flex items-start gap-3.5">
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckCircle2 size={20} className="text-primary" />
                ) : isCurrent ? (
                  <Loader2 size={20} className="text-primary animate-spin" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center text-[10px] text-text-muted font-mono">
                    {step.id}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p
                  className={`text-sm leading-relaxed ${
                    isCurrent
                      ? "font-semibold text-text-main"
                      : isDone
                      ? "text-text-muted line-through"
                      : "text-text-muted opacity-60"
                  }`}
                >
                  {step.title}
                </p>
              </div>
              <span className="text-xs font-mono-ticker text-text-muted shrink-0">
                {isDone ? "Done" : isCurrent ? "Processing" : "Queued"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Skeleton placeholders */}
      <div className="mt-8 pt-6 border-t border-border space-y-3">
        <div className="h-4 bg-bg rounded w-3/4 animate-pulse" />
        <div className="h-4 bg-bg rounded w-1/2 animate-pulse" />
      </div>
    </div>
  );
}
