import { History } from "lucide-react";

export default function SearchHistory({
  history,
  onSelect,
}) {
  if (!history.length) return null;

  return (
    <div className="mt-8">

      <div className="flex items-center gap-2 mb-4">

        <History className="text-cyan-400" size={22} />

        <h2 className="text-xl font-bold">
          Recent Searches
        </h2>

      </div>

      <div className="flex flex-wrap gap-3">

        {history.map((company) => (

          <button
            key={company}
            onClick={() => onSelect(company)}
            className="
              px-4
              py-2
              rounded-full
              bg-slate-800
              hover:bg-cyan-500
              transition
            "
          >
            {company}
          </button>

        ))}

      </div>

    </div>
  );
}