import { ChartPieDonutText } from './budgets-pie-chart'
import SavingMicro from './saving-micro'
import SummaryHeader from './summary-header'

export default function BudgetSummary() {
  return (
    <div className="bg-white p-8 rounded-xl">
      <SummaryHeader
        title="Budgets"
        label="See Details"
        href="/dashboard/budgets"
      />

      <div className="grid gap-4 grid-cols-5 justify-items-center">
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-5 w-80">
          <ChartPieDonutText />
        </div>

        <div className="grid lg:grid-cols-1 grid-cols-2 col-span-5 lg:col-span-2 gap-4 w-full">
          <SavingMicro title="Entertainment" amount={50} />
          <SavingMicro title="Entertainment" amount={50} />
          <SavingMicro title="Entertainment" amount={50} />
          <SavingMicro title="Entertainment" amount={50} />
        </div>
      </div>
    </div>
  )
}
