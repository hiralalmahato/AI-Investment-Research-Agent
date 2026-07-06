import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

export default function SearchBar({ onSearch, loading }) {
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company.trim()) return;

    onSearch(company);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto"
    >
      <div className="relative">

        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          size={22}
        />

        <input
          type="text"
          placeholder="Search Apple, Microsoft, Nvidia, Tesla..."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="
            w-full
            rounded-2xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            text-white
            placeholder:text-slate-400
            pl-14
            pr-44
            py-5
            text-lg
            outline-none
            focus:ring-2
            focus:ring-cyan-500
            transition
          "
        />

        <button
          disabled={loading}
          className="
            absolute
            right-2
            top-2
            bottom-2
            px-8
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:from-cyan-400
            hover:to-blue-500
            font-semibold
            flex
            items-center
            gap-2
            disabled:opacity-60
            transition-all
            duration-300
            hover:scale-105
            shadow-lg
        "
        >
          <Sparkles size={18} />

          {loading ? "Analyzing..." : "Analyze"}
        </button>

      </div>
    </form>
  );
}