import SummaryHeader from "./summary-header";

export default function BudgetSummary() {
    return (
        <div className="bg-white p-8 rounded-xl">
            <SummaryHeader title="Budgets" label="See Details" href="/dashboard/budgets"/>

        </div>
    )
}
