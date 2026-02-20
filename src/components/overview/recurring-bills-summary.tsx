import SummaryHeader from "./summary-header"

export default function RecurringBillSummary() {
  return (
    <div className="bg-white px-8 pt-8 pb-4 rounded-xl">
      <SummaryHeader
        title="Recurring Bills"
        label="See Details"
        href="/dashboard/recurring-bills"
      />

      <div className="flex flex-col gap-4">
        <div className="flex justify-between border-l-4 border-secondary-green px-4 py-5 bg-beige-100 rounded-xl">
          <span className="text-preset-4">Paid Bills</span>
          <span className="text-preset-4 font-bold">$!90.00</span>
        </div>

        <div className="flex justify-between border-l-4 border-secondary-yellow px-4 py-5 bg-beige-100 rounded-xl">
          <span className="text-preset-4">Paid Bills</span>
          <span className="text-preset-4 font-bold">$!90.00</span>
        </div>

        <div className="flex justify-between border-l-4 border-secondary-cyan px-4 py-5 bg-beige-100 rounded-xl">
          <span className="text-preset-4">Paid Bills</span>
          <span className="text-preset-4 font-bold">$!90.00</span>
        </div>
      </div>
    </div>
  )
}
