import ArrowRight from "../icons/ArrowRight";

const transactionData = [
    { name: "Emma Richardson", amount: 75.50, date: "19 Aug 2024" },
    { name: "Savory Bites Bistro", amount: 55.50, date: "19 Aug 2024" },
    { name: "Daniel Carter", amount: 42.30, date: "18 Aug 2024" },
    { name: "Sun Park", amount: 120, date: "17 Aug 2024" },
    { name: "Urban Services Hub", amount: 65.50, date: "17 Aug 2024" },
]

export default function TransactionSummary() {
    return (
        <div className="bg-white rounded-xl pt-8 px-8 mt-8">
            <div className="flex justify-between pb-8">
                <h2 className="text-preset-2 font-bold">Transactions</h2>
                <div className="flex items-center gap-4">
                    <span className="text-preset-4 text-medium-gray">View All</span>
                    <ArrowRight />
                </div>
            </div>

            <div className="flex flex-col">
                {transactionData.map(t => (
                    <div key={t.name} className="flex justify-between py-5 border-b border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-secondary-cyan" />
                            <span className="text-preset-4 font-bold text-primary-gray">{t.name}</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-secondary-green text-preset-4 font-bold">{t.amount}</span>
                            <span className="text-preset-5 text-medium-gray">{t.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}



