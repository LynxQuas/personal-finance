import { Link } from "@tanstack/react-router"
import OverviewIcon from "./icons/OverviewIcon"
import TransactionIcon from "./icons/TransactionsIcon"
import BudgetsIcon from "./icons/BudgetsIcon"
import PotsIcon from "./icons/PotsIcon"
import RecurringBills from "./icons/RecurringBillsIcon"

const navItems = [
  { label: "Overview", href: "/", icon: OverviewIcon },
  {
    label: "Transactions",
    href: "/transactions",
    icon: TransactionIcon,
  },
  { label: "Budgets", href: "/budgets", icon: BudgetsIcon },
  { label: "Pots", href: "/pots", icon: PotsIcon },
  {
    label: "Recurring Bills",
    href: "/recurring-bills",
    icon: RecurringBills,
  },
]

export default function Sidebar() {
  return (
    <aside className="bg-gray-950 h-screen fixed w-75 rounded-r-xl">
      <div className="text-white text-3xl font-bold py-10 px-7 mb-6">Logo</div>

      <ul>
        {navItems.map((nav) => (
          <li className="pr-6" key={nav.label}>
            <Link
              className="text-gray-300 cursor-pointer block py-4 px-7"
              to={nav.href}
              activeOptions={{ exact: true }}
              activeProps={{
                className:
                  "rounded-md ml-0 text-black! block py-4 px-[22px] border-l-secondary-green border-l-6 bg-beige-100 ",
              }}
            >
              {({ isActive }) => {
                return (
                  <div className="flex items-center gap-x-4 text-sm font-semibold">
                    <nav.icon
                      className={
                        isActive ? "fill-secondary-green" : "fill-gray-500"
                      }
                    />
                    {nav.label}
                  </div>
                )
              }}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
