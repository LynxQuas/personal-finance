import { ChartPieDonutText } from "./budgets-pie-chart";
import SavingMicro from "./saving-micro";
import SummaryHeader from "./summary-header";

export default function BudgetSummary() {
    return (
        <div className="bg-white p-8 rounded-xl">
            <SummaryHeader title="Budgets" label="See Details" href="/dashboard/budgets" />

            <div className="grid grid-cols-4 gap-4 items-center">
                <div className="col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-3">
                    <ChartPieDonutText />
                </div>
                <div className="flex flex-col gap-4">
                    <SavingMicro title="Entertainment" amount={50} />
                    <SavingMicro title="Entertainment" amount={50} />
                    <SavingMicro title="Entertainment" amount={50} />
                    <SavingMicro title="Entertainment" amount={50} />
                </div>
            </div>

        </div>
    )
}
