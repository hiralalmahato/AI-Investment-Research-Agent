export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          AI Investment Agent
        </h1>

        <span className="text-slate-400 text-sm">
          LangGraph • Gemini • React
        </span>

      </div>
    </nav>
  );
}