import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

export default function CompanyOverview({ research }) {
  if (!research) return null;

  return (
    <Card>

      <SectionTitle title="📊 Company Overview" />

      <div className="space-y-4">

        <div>
          <h3 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-2">
            Business
          </h3>

          <p className="leading-8 text-slate-700">
            {research.business}
          </p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-2">
            Industry
          </h3>

          <p className="leading-8 text-slate-700">{research.industry}</p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-2">
            Products
          </h3>

          <div className="flex flex-wrap gap-3">
  {research.products?.map((item, index) => (
    <span
      key={index}
      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
    >
      {item}
    </span>
  ))}
</div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-2">
            Market Position
          </h3>

          <p className="leading-8 text-slate-700">{research.marketPosition}</p>
        </div>

      </div>

    </Card>
  );
}