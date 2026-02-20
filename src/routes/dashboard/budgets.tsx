import { createFileRoute } from "@tanstack/react-router"
import SpendingSummary from "@/components/budgets/spending-summary"
import BudgetItem from "@/components/budgets/budget-item"

const spendingData = [
  {
    title: "Entertainment",
    amount: 12,
    limit: 50,
    color: "var(--secondary-green",
  },
  { title: "Bills", amount: 12, limit: 50, color: "var(--secondary-cyan" },
  {
    title: "Dining Out",
    amount: 133,
    limit: 75,
    color: "var(--secondary-yellow",
  },
  {
    title: "Personal Care",
    amount: 12,
    limit: 50,
    color: "var(--secondary-navy",
  },
]

export const Route = createFileRoute("/dashboard/budgets")({
  component: BudgetPage,
})

function BudgetPage() {
  return (
    <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
      <div className="flex items-center justify-between mb-10.5">
        <h2 className="text-preset-1 font-bold">Budgets</h2>
        <button className="bg-gray-950 text-white p-4 rounded-xl text-preset-4 font-bold cursor-pointer">
          + Add New Budget
        </button>
      </div>

      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-6">
        <SpendingSummary spendingData={spendingData} />
        <div className="flex flex-col gap-6">
          <BudgetItem
            budgetTitle="Entertainment"
            limit={50}
            amount={12}
            remaining={50 - 12}
          />
          <BudgetItem
            budgetTitle="Entertainment"
            limit={50}
            amount={12}
            remaining={50 - 12}
          />
        </div>
      </div>
    </div>
  )
}
