import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import SpendingSummary from "@/components/budgets/spending-summary"
import BudgetItem from "@/components/budgets/budget-item"
import { useDashboardData } from "@/hooks/useDashboardData"
import AddBudgetModal from "@/components/modals/add-budget-modal"
import useDisableBackgroundScroll from "@/hooks/useDisableBackgroundScroll"

export const Route = createFileRoute("/_dashboard/budgets")({
  component: BudgetPage,
})

function BudgetPage() {
  const { data, loading, error } = useDashboardData()
  const [showModal, setShowModal] = useState(false)

  useDisableBackgroundScroll(showModal)

  if (loading) return <div>Loading dashboard...</div>
  if (error) return <div className="text-red-500">Error: {error}</div>
  if (!data) return null

  return (
    <>
      {showModal && <AddBudgetModal onClose={() => setShowModal(false)} />}

      <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
        <div className="flex items-center justify-between mb-10.5">
          <h2 className="text-preset-1 font-bold">Budgets</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-950 text-white p-4 rounded-xl text-preset-4 font-bold cursor-pointer"
          >
            + Add New Budget
          </button>
        </div>

        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-6">
          <SpendingSummary budgetsData={data.budgets} />
          <div className="flex flex-col gap-6">
            {data.budgets.map((budget) => (
              <BudgetItem
                key={budget.category}
                theme={budget.theme}
                budgetTitle={budget.category}
                amount={budget.maximum}
                limit={150}
                remaining={100}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
