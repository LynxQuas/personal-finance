import { createFileRoute } from "@tanstack/react-router"
import BudgetSummary from "@/components/overview/budget-summary"
import PortSummary from "@/components/overview/pot-summary"
import RecurringBillSummary from "@/components/overview/recurring-bills-summary"
import SummaryCard from "@/components/overview/summary-card"
import TransactionSummary from "@/components/overview/transaction-summary"
import { useDashboardData } from "@/hooks/useDashboardData"

export const Route = createFileRoute("/_dashboard/")({
  component: OverviewPage,
})

function OverviewPage() {
  const { data, loading, error } = useDashboardData()

  const bills =
    data?.transactions
      .filter((transaction) => transaction.recurring)
      .map((transaction) => ({
        name: transaction.name,
        amount: transaction.amount,
      }))
      .slice(0, 3) ?? []

  if (loading) return <div>Loading dashboard...</div>
  if (error) return <div className="text-red-500">Error: {error}</div>
  if (!data) return null

  return (
    <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
      <h2 className="text-preset-1 font-bold mb-10.5">Overview</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <SummaryCard
          className="bg-gray-950 text-white"
          title="Current Balance"
          amount={data.balance.current}
        />
        <SummaryCard title="Income" amount={data.balance.income} />
        <SummaryCard title="Expenses" amount={data.balance.expenses} />
      </div>

      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <PortSummary pots={data.pots} />
          <TransactionSummary
            isSummary={true}
            transactionData={data.transactions.slice(0, 5)}
          />
        </div>

        <div className="flex flex-col gap-6 xl:mt-8">
          <BudgetSummary budgets={data.budgets} />
          <RecurringBillSummary bills={bills} />
        </div>
      </div>
    </div>
  )
}
