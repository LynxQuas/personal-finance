import PortSummary from '@/components/overview/pot-summary';
import SummaryCard from '@/components/overview/summary-card';
import TransactionSummary from '@/components/overview/transaction-summary';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/')({
    component: OverviewPage,
})

function OverviewPage() {
    return (
        <main className="bg-beige-100 min-h-screen md:p-10 px-4 py-6">
            <h2 className="text-preset-1 font-bold mb-10.5">Overview</h2>

            <div className="grid md:grid-cols-3 gap-6">
                <SummaryCard className="bg-gray-950 text-white" title="Current Balance" amount={4836} />
                <SummaryCard title="Income" amount={3814} />
                <SummaryCard title="Expenses" amount={1700} />
            </div>

            <PortSummary />
            <TransactionSummary />
        </main>
    )
}


