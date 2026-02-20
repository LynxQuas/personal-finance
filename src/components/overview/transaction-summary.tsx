import SummaryHeader from "./summary-header"
import { cn } from "@/lib/utils"

const transactionData = [
  { name: "Emma Richardson", amount: 75.5, date: "19 Aug 2024" },
  { name: "Savory Bites Bistro", amount: 55.5, date: "19 Aug 2024" },
  { name: "Daniel Carter", amount: 42.3, date: "18 Aug 2024" },
  { name: "Sun Park", amount: 120, date: "17 Aug 2024" },
  { name: "Urban Services Hub", amount: 65.5, date: "17 Aug 2024" },
]

type TransactionSummaryProps = {
  isSummary?: boolean
  className?: string
}

export default function TransactionSummary({
  isSummary,
  className,
}: TransactionSummaryProps) {
  return (
    <div className={cn("bg-white rounded-xl pt-8 px-8", className)}>
      {isSummary && (
        <SummaryHeader
          title="Transactions"
          label="See Details"
          href="/dashboard/transactions"
        />
      )}
      <div className="flex flex-col">
        {transactionData.map((t) => (
          <div
            key={t.name}
            className="flex justify-between py-5 border-b border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-cyan" />
              <span className="text-preset-4 font-bold text-primary-gray">
                {t.name}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-secondary-green text-preset-4 font-bold">
                {t.amount}
              </span>
              <span className="text-preset-5 text-medium-gray">{t.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
