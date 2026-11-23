import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import api from "../api/api";
import { useTheme } from "../hooks/useTheme";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StepProgress from "../components/StepProgress";
import ErrorAlert from "../components/ErrorAlert";
import AnalysisView from "../components/AnalysisView";
import Footer from "../components/Footer";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [activeQuery, setActiveQuery] = useState("");
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("history")) || [];
    } catch {
      return [];
    }
  });

  const resultsRef = useRef(null);

  const handleSearch = async (companyName) => {
    const trimmed = (companyName || "").trim();
    if (!trimmed) return;

    try {
      setLoading(true);
      setError(null);
      setActiveQuery(trimmed);

      // EXACT SAME API CALL & PAYLOAD PRESERVED
      const response = await api.post("/analyze", {
        company: trimmed,
      });

      if (response?.data?.success && response?.data?.data) {
        setAnalysis(response.data.data);
        toast.success(`Dossier ready for ${trimmed.toUpperCase()}`);

        // Update history (same localStorage mechanism, max 5)
        const updatedHistory = [
          trimmed,
          ...history.filter(
            (item) =>
              (typeof item === "string" ? item : item.name || "")
                .toLowerCase() !== trimmed.toLowerCase()
          ),
        ].slice(0, 5);

        setHistory(updatedHistory);
        localStorage.setItem("history", JSON.stringify(updatedHistory));

        // Smooth scroll to results
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      } else {
        throw new Error(response?.data?.message || "Incomplete analysis returned.");
      }
    } catch (err) {
      console.error("Analysis Request Error:", err);
      const errMsg =
        err.response?.data?.message ||
        err.message ||
        "Failed to generate analysis. Please verify company ticker or name.";
      setError(errMsg);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text-main transition-colors duration-150">
      {/* Clean, Professional Header (No portal clutter) */}
      <Header theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Workspace */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 sm:px-10 py-8 sm:py-14">
        {/* Focused Hero Section */}
        <Hero
          onSearch={handleSearch}
          loading={loading}
          history={history}
        />

        {/* Multi-Agent Execution Progress */}
        {loading && (
          <div className="pt-2">
            <StepProgress company={activeQuery} />
          </div>
        )}

        {/* Error Alert with Retry */}
        {!loading && error && (
          <ErrorAlert
            message={error}
            onRetry={() => handleSearch(activeQuery)}
          />
        )}

        {/* Comprehensive Analysis Dossier */}
        <div ref={resultsRef}>
          {!loading && analysis && (
            <AnalysisView
              analysis={analysis}
              onRerun={handleSearch}
              isDark={theme === "dark"}
            />
          )}
        </div>
      </main>

      {/* Minimalist Professional Footer */}
      <Footer />
    </div>
  );
}
