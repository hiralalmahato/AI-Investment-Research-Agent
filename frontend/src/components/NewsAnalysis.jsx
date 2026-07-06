import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
import { Newspaper, TrendingUp, TrendingDown } from "lucide-react";

export default function NewsAnalysis({ news }) {
  if (!news) return null;

  return (
    <Card>
      <SectionTitle
        icon={<Newspaper size={24} />}
        title="Latest News Analysis"
      />

      <div className="space-y-8">

        {/* Market Sentiment */}

        <div className="flex items-center justify-between bg-slate-100 rounded-xl p-4">

          <span className="font-semibold text-slate-700">
            Market Sentiment
          </span>

          <span className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold">
            {news.marketSentiment}
          </span>

        </div>

        {/* Positive News */}

        <div>

          <div className="flex items-center gap-2 mb-4">

            <TrendingUp className="text-green-600" />

            <h3 className="text-green-600 font-bold text-xl">
              Positive News
            </h3>

          </div>

          <div className="space-y-3">

            {news.positiveNews?.map((item, index) => (
  <div
    key={index}
    className="flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4"
  >
    <span className="text-green-600 text-xl">✓</span>

    <p className="text-slate-700 leading-7">
      {item}
    </p>
  </div>
))}

          </div>

        </div>

        {/* Negative News */}

        <div>

          <div className="flex items-center gap-2 mb-4">

            <TrendingDown className="text-red-600" />

            <h3 className="text-red-600 font-bold text-xl">
              Negative News
            </h3>

          </div>

          <div className="space-y-3">

            {news.negativeNews?.map((item, index) => (
  <div
    key={index}
    className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
  >
    <span className="text-red-600 text-xl">✕</span>

    <p className="text-slate-700 leading-7">
      {item}
    </p>
  </div>
))}

          </div>

        </div>

      </div>
    </Card>
  );
}