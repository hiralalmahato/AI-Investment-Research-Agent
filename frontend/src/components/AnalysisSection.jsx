import React from "react";

export default function AnalysisSection({ icon: Icon, title, badge, children, className = "" }) {
  return (
    <div className={`p-6 sm:p-8 bg-surface border border-border rounded-xl ${className}`}>
      <div className="flex items-center justify-between pb-5 mb-6 border-b border-border/80">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="w-8 h-8 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
              <Icon size={17} strokeWidth={2} />
            </div>
          )}
          <h2 className="text-lg font-bold text-text-main tracking-tight">
            {title}
          </h2>
        </div>
        {badge && (
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-soft text-primary border border-primary-border">
            {badge}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
