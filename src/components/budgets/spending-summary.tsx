import { BudgetPieChart } from "../overview/budgets-pie-chart"
import SavingMicro from "../overview/saving-micro"
import type { Budget } from "@/types"

type SpendingSummaryProps = {
  budgetsData: Array<Budget>
}

export default function SpendingSummary({ budgetsData }: SpendingSummaryProps) {
  return (
    <div className="bg-white max-h-screen xl:sticky top-0 left-0 lg:p-8 rounded-xl items-center-safe grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-1">
      <div className="w-80 mx-auto">
        <BudgetPieChart budgetData={budgetsData} />
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-preset-2 font-bold px-4">Spending Summary</h3>

        <div className="flex flex-col gap-7 px-4 py-5">
          {budgetsData.map((budget) => (
            <SavingMicro
              key={budget.category}
              name={budget.category}
              limit={budget.maximum}
              theme={budget.theme}
              spent={10}
              className={`flex text-preset-4 flex-row justify-between border-l-6`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
