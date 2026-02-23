import SummaryHeader from "./summary-header"
import type { Transaction } from "@/types"
import { cn } from "@/lib/utils"

type TransactionSummaryProps = {
  isSummary?: boolean
  className?: string
  transactionData: Array<Transaction>
}

export default function TransactionSummary({
  isSummary,
  className,
  transactionData,
}: TransactionSummaryProps) {
  return (
    <div className={cn("bg-white rounded-xl pt-8 px-8", className)}>
      {isSummary && (
        <SummaryHeader
          title="Transactions"
          label="See Details"
          href="/transactions"
        />
      )}
      <div className="flex flex-col">
        {transactionData.map((t) => (
          <div
            key={t.name}
            className="flex justify-between py-5 border-b border-gray-100"
          >
            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                className="w-10 h-10 rounded-full bg-secondary-cyan"
              />
              <span className="text-preset-4 font-bold text-primary-gray">
                {t.name}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span
                className={`text-secondary-${t.amount > 0 ? "green" : "navy"} text-preset-4 font-bold`}
              >
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
