import { createFileRoute } from "@tanstack/react-router"
import RecurringBillsIcon from "@/components/icons/RecurringBillsIcon"

export const Route = createFileRoute("/_dashboard/recurring-bills")({
  component: RecurringBillPage,
})

function RecurringBillPage() {
  return (
    <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
      <h2 className="text-preset-1 font-bold mb-10.5">Recurring Bills</h2>

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-y-6 xl:gap-x-6">
        <div className="grid xl:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="bg-gray-950 p-6 rounded-xl flex flex-col gap-8">
            <RecurringBillsIcon className="w-10 h-10 stroke-white" />
            <div className="text-white flex flex-col gap-2">
              <span className="text-preset-4">Total Bills</span>
              <span className="text-preset-1 font-bold">$384.98</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl flx flex-col">
            <h3 className="text-preset-3 font-bold mb-1">Summary</h3>

            <div className="flex items-center text-preset-5 justify-between py-4 border-b border-[#696868]/15">
              <span>Paid Bills</span>
              <span className="font-bold">4 ($190.00)</span>
            </div>

            <div className="flex text-preset-5 items-center justify-between py-4 border-b border-[#696868]/15">
              <span>Total Upcoming</span>
              <span className="font-bold">4 ($194.98)</span>
            </div>

            <div className="flex items-center justify-between text-secondary-red pt-4">
              <span className="text-preset-5">Due Soon</span>
              <span className="text-preset-5 font-bold">2 (58.00)</span>
            </div>
          </div>
        </div>

        <div className="w-full col-span-2 bg-white p-5 md:p-8 rounded-xl">
          <table className="min-w-full bg-white border-collapse">
            <thead className="hidden md:table-header-group">
              <tr>
                <th className="text-left lg:pl-0 py-4 text-gray-400 text-preset-5">
                  Bill Title
                </th>
                <th className="text-left py-4 text-gray-400 text-preset-5">
                  Due Date
                </th>
                <th className="text-right py-4 text-gray-400 text-preset-5">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 lg:pl-0 flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-full" />
                  <div className="flex flex-col">
                    <span className="text-preset-4 font-bold">name</span>
                    <span className="block text-preset-5 md:hidden text-gray-500">
                      Monthly-2d
                    </span>
                  </div>
                </td>

                <td className="py-4 text-preset-5 text-gray-500 hidden md:table-cell">
                  Monthly-2d
                </td>

                <td className="py-4 text-right">
                  <div className="flex flex-col">
                    <span>$100</span>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-4 lg:pl-0 flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-full" />
                  <div className="flex flex-col">
                    <span className="text-preset-4 font-bold">name</span>
                    <span className="block text-preset-5 md:hidden text-gray-500">
                      Monthly-2d
                    </span>
                  </div>
                </td>

                <td className="py-4 text-preset-5 text-gray-500 hidden md:table-cell">
                  Monthly-2d
                </td>

                <td className="py-4 text-right">
                  <div className="flex flex-col">
                    <span>$100</span>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-4 lg:pl-0 flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-full" />
                  <div className="flex flex-col">
                    <span className="text-preset-4 font-bold">name</span>
                    <span className="block text-preset-5 md:hidden text-gray-500">
                      Monthly-2d
                    </span>
                  </div>
                </td>

                <td className="py-4 text-preset-5 text-gray-500 hidden md:table-cell">
                  Monthly-2d
                </td>

                <td className="py-4 text-right">
                  <div className="flex flex-col">
                    <span>$100</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
