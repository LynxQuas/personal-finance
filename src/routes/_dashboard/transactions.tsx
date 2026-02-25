import { createFileRoute } from "@tanstack/react-router"
import SelectField from "@/components/SelectField"
import TransactionTable from "@/components/transaction/TransactionTable"
import { useDashboardData } from "@/hooks/useDashboardData"

export const Route = createFileRoute("/_dashboard/transactions")({
  component: TransactionsPage,
})

function TransactionsPage() {
  const { data, loading, error } = useDashboardData()

  if (loading) return <div>Loading dashboard...</div>
  if (error) return <div className="text-red-500">Error: {error}</div>
  if (!data) return null

  return (
    <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
      <h2 className="text-preset-1 font-bold mb-10.5">Transactions</h2>

      <div className="bg-white rounded-xl p-2 lg:p-8">
        <div className="flex flex-1 justify-between items-center">
          <div className="">
            <input
              placeholder="Search transaction"
              name="transaction"
              className="px-5 py-3 border border-beige-500 rounded-md"
            />
          </div>

          <div className="flex items-center gap-6">
            <SelectField
              name="sort-by"
              label="Sort by"
              options={[
                { name: "Latest", value: "latest" },
                { name: "Oldest", value: "oldest" },
                { name: "A to Z", value: "atoz" },
                { name: "Z to A", value: "ztoa" },
                { name: "Highest", value: "highest" },
                { name: "Lowest", value: "lowest" },
              ]}
            />
            <SelectField
              name="category"
              label="Category"
              options={[
                { name: "All Transactions", value: "all-transactions" },
                { name: "Entertainment", value: "entertainment" },
                { name: "Bills", value: "bills" },
                { name: "Groceries", value: "groceries" },
                { name: "Dining Out", value: "dining-out" },
                { name: "Transportation", value: "transportation" },
              ]}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <TransactionTable transactions={data.transactions} />
        </div>
      </div>
    </div>
  )
}
