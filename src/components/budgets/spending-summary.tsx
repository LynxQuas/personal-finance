import { ChartPieDonutText } from "../overview/budgets-pie-chart"
import SavingMicro from "../overview/saving-micro"
import { useDashboardData } from "@/hooks/useDashboardData"

export default function SpendingSummary({ budgetsData }) {
  return (
    <div className="bg-white max-h-screen xl:sticky top-0 left-0 p-8 rounded-xl items-center-safe grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-1">
      <ChartPieDonutText budgetData={budgetsData} />
      <div className="flex flex-col gap-8">
        <h3 className="text-preset-2 font-bold">Spending Summary</h3>

        <div className="flex flex-col gap-7">
          {budgetsData.map((budget) => (
            <SavingMicro
              key={budget.category}
              name={budget.category}
              total={budget.maximum}
              theme={budget.theme}
              className={`flex text-preset-4 flex-row justify-between border-l-6`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
