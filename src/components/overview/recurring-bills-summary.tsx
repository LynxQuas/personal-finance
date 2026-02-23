import SummaryHeader from "./summary-header"

type Bill = Array<{
  name: string
  amount: number
}>

type RecurringBillSummaryProps = {
  bills: Bill
}

export default function RecurringBillSummary({
  bills,
}: RecurringBillSummaryProps) {
  return (
    <div className="bg-white px-8 pt-8 pb-4 rounded-xl">
      <SummaryHeader
        title="Recurring Bills"
        label="See Details"
        href="/recurring-bills"
      />

      <div className="flex flex-col gap-4">
        {bills.map((bill) => (
          <div
            key={bill.name}
            className="flex justify-between border-l-4 border-secondary-green px-4 py-5 bg-beige-100 rounded-xl"
          >
            <span className="text-preset-4">{bill.name}</span>
            <span className="text-preset-4 font-bold">${bill.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
