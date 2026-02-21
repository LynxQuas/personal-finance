import ArrowRight from "../icons/ArrowRight"

type BudgetItemProps = {
  budgetTitle: string
  limit: number
  amount: number
  remaining: number
  theme: string
}

export default function BudgetItem({
  budgetTitle,
  limit,
  amount,
  remaining,
  theme,
}: BudgetItemProps) {
  return (
    <div className="bg-white rounded-xl p-8">
      <div>
        <div className="flex items-center gap-4 mb-5">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: theme }}
          />
          <h3 className="text-preset-3">{budgetTitle}</h3>
        </div>

        <div className="flex flex-col gap-5">
          <h4>Maximum of ${limit}</h4>

          <div className="h-8 w-full bg-beige-100 rounded-md" />

          <div className="grid grid-cols-2">
            <div
              className="flex flex-col gap-1 border-l-4 px-5"
              style={{ borderColor: theme }}
            >
              <span className="text-preset-5">Spent</span>
              <span className="text-preset-4 font-bold">${amount}</span>
            </div>
            <div className="flex flex-col gap-1 border-l-4 border-beige-100 px-5">
              <span className="text-preset-5">Remaining</span>
              <span className="text-preset-4 font-bold">${remaining}</span>
            </div>
          </div>

          <div className="p-5 bg-beige-100 rounded-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-preset-3 font-bold">Latest Spending</h3>
              <span className="flex items-center gap-6 text-beige-500">
                See All <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
