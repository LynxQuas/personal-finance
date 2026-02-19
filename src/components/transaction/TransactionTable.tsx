import { useState } from "react";
const transactionData = [
    {
        id: 1,
        name: "Emma Richardson",
        category: "General",
        date: "19 Aug 2024",
        amount: "+$75.50",
    },
    {
        id: 2,
        name: "Netflix",
        category: "Entertainment",
        date: "18 Aug 2024",
        amount: "-$15.99",
    },
    {
        id: 3,
        name: "Starbucks",
        category: "Food & Drink",
        date: "17 Aug 2024",
        amount: "-$8.40",
    },
    {
        id: 4,
        name: "Amazon",
        category: "Shopping",
        date: "16 Aug 2024",
        amount: "-$120.00",
    },
    {
        id: 5,
        name: "Michael Chen",
        category: "Transfer",
        date: "15 Aug 2024",
        amount: "+$250.00",
    },
    {
        id: 6,
        name: "Spotify",
        category: "Entertainment",
        date: "14 Aug 2024",
        amount: "-$9.99",
    },
    {
        id: 7,
        name: "Uber",
        category: "Transport",
        date: "13 Aug 2024",
        amount: "-$22.75",
    },
    {
        id: 8,
        name: "Sarah Johnson",
        category: "General",
        date: "12 Aug 2024",
        amount: "+$60.00",
    },
    {
        id: 9,
        name: "Apple Store",
        category: "Shopping",
        date: "11 Aug 2024",
        amount: "-$899.00",
    },
    {
        id: 10,
        name: "Gym Membership",
        category: "Health",
        date: "10 Aug 2024",
        amount: "-$45.00",
    },
];
export default function TransactionTable() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactionData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactionData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

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
            <tr key={transaction.id} className="border-b border-gray-100">
              <td className="py-4 pl-5 md:pl-8 lg:pl-0 flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-full" />
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
                      transaction.amount.startsWith("+")
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
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg border ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-white"
                }`}
              >
                {page}
              </button>
            );
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
  );
}

