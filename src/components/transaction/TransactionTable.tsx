import { useState } from "react"
import type { Transaction } from "@/types"

type TransactionTableProps = {
  transactions: Array<Transaction>
}

export default function TransactionTable({
  transactions,
}: TransactionTableProps) {
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(transactions.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentTransactions = transactions.slice(
    startIndex,
    startIndex + itemsPerPage,
  )

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <>
      <table className="min-w-full mt-6 border-collapse">
        <thead className="hidden md:table-header-group">
          <tr>
            <th className="text-left md:pl-8 lg:pl-0 py-4 text-gray-400 text-preset-5">
              Recipient / Sender
            </th>
            <th className="text-left py-4 text-gray-400 text-preset-5">
              Category
            </th>
            <th className="text-left py-4 text-gray-400 text-preset-5">
              Transaction Date
            </th>
            <th className="text-right md:pr-8 lg:pr-0 py-4 text-gray-400 text-preset-5">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {currentTransactions.map((transaction) => (
            <tr key={transaction.avatar} className="border-b border-gray-100">
              <td className="py-4 pl-5 md:pl-8 lg:pl-0 flex items-center gap-4">
                <img
                  src={transaction.avatar.replace("./", "/")}
                  className="w-10 h-10 bg-black rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-preset-4 font-bold">
                    {transaction.name}
                  </span>
                  <span className="block text-preset-5 md:hidden text-gray-500">
                    {transaction.category}
                  </span>
                </div>
              </td>

              <td className="py-4 text-preset-5 text-gray-500 hidden md:table-cell">
                {transaction.category}
              </td>

              <td className="py-4 text-preset-5 text-gray-500 hidden md:table-cell">
                {transaction.date}
              </td>

              <td className="py-4 pr-5 md:pr-8 lg:pr-0 text-right">
                <div className="flex flex-col">
                  <span
                    className={`font-bold text-preset-4 ${
                      transaction.amount
                        ? "text-secondary-green"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.amount}
                  </span>
                  <span className="text-preset-5 text-gray-500 md:hidden">
                    {transaction.date}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg disabled:opacity-40"
        >
          Prev
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg border ${
                  currentPage === page ? "bg-black text-white" : "bg-white"
                }`}
              >
                {page}
              </button>
            )
          })}
        </div>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </>
  )
}
