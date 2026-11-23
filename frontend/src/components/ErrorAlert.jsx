import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorAlert({ message, onRetry }) {
  if (!message) return null;

  return (
    <div className="w-full max-w-3xl my-6 p-4 rounded-lg bg-warning-bg border border-warning-border text-warning-text flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <AlertTriangle size={18} className="shrink-0 mt-0.5 text-warning-text" />
        <div>
          <h4 className="text-sm font-semibold">Audit Pipeline Incomplete</h4>
          <p className="text-xs mt-1 text-warning-text/90 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-[6px] border border-warning-border bg-surface text-warning-text hover:bg-warning-bg transition-colors cursor-pointer"
        >
          <RefreshCw size={13} />
          <span>Retry</span>
        </button>
      )}
    </div>
  );
}
