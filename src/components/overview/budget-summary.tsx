import { BudgetPieChart } from "./budgets-pie-chart"
import SavingMicro from "./saving-micro"
import SummaryHeader from "./summary-header"
import type { Budget } from "@/types"

type BudgetSummaryProps = {
  budgets: Array<Budget>
}

export default function BudgetSummary({ budgets }: BudgetSummaryProps) {
  return (
    <div className="bg-white p-8 rounded-xl">
      <SummaryHeader title="Budgets" label="See Details" href="/budgets" />

      <div className="grid gap-4 grid-cols-5 justify-items-center">
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-5 col-span-5 w-80">
          <BudgetPieChart budgetData={budgets} />
        </div>

        <div className="grid lg:grid-cols-1 grid-cols-2 col-span-5 lg:col-span-2 w-full gap-4">
          {budgets.map((budget) => (
            <SavingMicro
              key={budget.category}
              name={budget.category}
              theme={budget.theme}
              total={budget.maximum}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
