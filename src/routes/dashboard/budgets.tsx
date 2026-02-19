import ArrowRight from "@/components/icons/ArrowRight"
import { ChartPieDonutText } from "@/components/overview/budgets-pie-chart"
import SavingMicro from "@/components/overview/saving-micro"
import TransactionSummary from "@/components/overview/transaction-summary"
import { createFileRoute } from "@tanstack/react-router"
export const Route = createFileRoute('/dashboard/budgets')({
    component: BudgetPage,
})

function BudgetPage() {
    return (
        <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
            <h2 className="text-preset-1 font-bold mb-10.5">Budgets</h2>

            <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-white max-h-screen xl:sticky top-0 left-0 p-8 rounded-xl items-center-safe grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-1">
                    <ChartPieDonutText />
                    <div className="flex flex-col gap-8">
                        <h3 className="text-preset-2 font-bold">Spending Summary</h3>

                        <div className="flex flex-col gap-7">
                            <SavingMicro title="Entertainment" limit="of $50.00" amount={15} className="flex text-preset-4 flex-row justify-between border-l-6" />
                            <SavingMicro title="Bills" limit="of $750.00" amount={150} className="flex flex-row justify-between border-l-6 border-secondary-cyan" />
                            <SavingMicro title="Dining Out" limit="of $50.00" amount={15} className="flex flex-row justify-between border-l-6 border-secondary-yellow" />
                            <SavingMicro title="Personal Care" limit="of $50.00" amount={15} className="flex flex-row justify-between border-l-6 border-secondary-navy" />
                        </div>
                    </div>
                </div>

                <div>

                    <div className="bg-white rounded-xl p-8">
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-4 h-4 rounded-full bg-secondary-green" />
                                <h3 className="text-preset-3">Entertainment</h3>
                            </div>

                            <div className="flex flex-col gap-5">
                                <h4>Maximum of $50.00</h4>

                                <div className="h-8 w-full bg-beige-100 rounded-md" />

                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col gap-1 border-l-4 border-secondary-green px-5">
                                        <span className="text-preset-5">Spent</span>
                                        <span className="text-preset-4 font-bold">$15.00</span>
                                    </div>
                                    <div className="flex flex-col gap-1 border-l-4 border-beige-100 px-5">
                                        <span className="text-preset-5">Remaining</span>
                                        <span className="text-preset-4 font-bold">$35.00</span>
                                    </div>
                                </div>

                                <div className="p-5 bg-beige-100 rounded-xl">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-preset-3 font-bold">Latest Spending</h3>
                                        <span className="flex items-center gap-6 text-beige-500">See All <ArrowRight className="w-5 h-5" /></span>
                                    </div>

                                    <TransactionSummary isSummary={false} className="bg-beige-100 py-5 px-5" />
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="bg-white rounded-xl p-8">
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-4 h-4 rounded-full bg-secondary-green" />
                                <h3 className="text-preset-3">Entertainment</h3>
                            </div>

                            <div className="flex flex-col gap-5">
                                <h4>Maximum of $50.00</h4>

                                <div className="h-8 w-full bg-beige-100 rounded-md" />

                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col gap-1 border-l-4 border-secondary-green px-5">
                                        <span className="text-preset-5">Spent</span>
                                        <span className="text-preset-4 font-bold">$15.00</span>
                                    </div>
                                    <div className="flex flex-col gap-1 border-l-4 border-beige-100 px-5">
                                        <span className="text-preset-5">Remaining</span>
                                        <span className="text-preset-4 font-bold">$35.00</span>
                                    </div>
                                </div>

                                <div className="p-5 bg-beige-100 rounded-xl">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-preset-3 font-bold">Latest Spending</h3>
                                        <span className="flex items-center gap-6 text-beige-500">See All <ArrowRight className="w-5 h-5" /></span>
                                    </div>

                                    <TransactionSummary isSummary={false} className="bg-beige-100 py-5 px-5" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-xl p-8">
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-4 h-4 rounded-full bg-secondary-green" />
                                <h3 className="text-preset-3">Entertainment</h3>
                            </div>

                            <div className="flex flex-col gap-5">
                                <h4>Maximum of $50.00</h4>

                                <div className="h-8 w-full bg-beige-100 rounded-md" />

                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col gap-1 border-l-4 border-secondary-green px-5">
                                        <span className="text-preset-5">Spent</span>
                                        <span className="text-preset-4 font-bold">$15.00</span>
                                    </div>
                                    <div className="flex flex-col gap-1 border-l-4 border-beige-100 px-5">
                                        <span className="text-preset-5">Remaining</span>
                                        <span className="text-preset-4 font-bold">$35.00</span>
                                    </div>
                                </div>

                                <div className="p-5 bg-beige-100 rounded-xl">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-preset-3 font-bold">Latest Spending</h3>
                                        <span className="flex items-center gap-6 text-beige-500">See All <ArrowRight className="w-5 h-5" /></span>
                                    </div>

                                    <TransactionSummary isSummary={false} className="bg-beige-100 py-5 px-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

