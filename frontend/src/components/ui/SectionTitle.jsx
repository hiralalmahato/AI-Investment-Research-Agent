export default function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">

      {icon}

      <h2 className="text-2xl font-bold text-slate-800">
        {title}
      </h2>

    </div>
  );
}