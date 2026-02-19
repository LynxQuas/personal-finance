import { createFileRoute } from '@tanstack/react-router'
import BudgetSummary from '@/components/overview/budget-summary'
import PortSummary from '@/components/overview/pot-summary'
import RecurringBillSummary from '@/components/overview/recurring-bills-summary'
import SummaryCard from '@/components/overview/summary-card'
import TransactionSummary from '@/components/overview/transaction-summary'

export const Route = createFileRoute('/dashboard/')({
  component: OverviewPage,
})

function OverviewPage() {
  return (
    <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
      <h2 className="text-preset-1 font-bold mb-10.5">Overview</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <SummaryCard
          className="bg-gray-950 text-white"
          title="Current Balance"
          amount={4836}
        />
        <SummaryCard title="Income" amount={3814} />
        <SummaryCard title="Expenses" amount={1700} />
      </div>

      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <PortSummary />
          <TransactionSummary />
        </div>

        <div className="flex flex-col gap-6 xl:mt-8">
          <BudgetSummary />
          <RecurringBillSummary />
        </div>
      </div>
    </div>
  )
}
