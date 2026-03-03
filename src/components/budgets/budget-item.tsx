import { Ellipsis } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import ArrowRight from "../icons/ArrowRight"
import SpendingProgressBar from "./spending-progress-bar"
import { calcPercentage } from "@/lib/utils"

type BudgetItemProps = {
  budgetTitle: string
  remaining: number
  theme: string
  spent: number
}

export default function BudgetItem({
  spent = 0,
  budgetTitle,
  remaining,
  theme,
}: BudgetItemProps) {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div className="bg-white rounded-xl p-8">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: theme }}
            />
            <h3 className="text-preset-3">{budgetTitle}</h3>
          </div>
          <div ref={dropdownRef} className="cursor-pointer relative">
            <Ellipsis
              onClick={() => setShowDropdown((prev) => !prev)}
              className=""
            />

            {showDropdown && (
              <div className="absolute bg-white shadow-lg rounded-md w-34 top-10 right-0">
                <ul className="">
                  <li className="py-3 px-5 text-preset-4 border-b border-beige-100">
                    Edit Budget
                  </li>
                  <li className="py-3 px-5 text-secondary-red text-preset-4">
                    Delete Budget
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h4>Maximum of ${remaining}</h4>
          <SpendingProgressBar
            bgColor={theme}
            widthPercentage={`${calcPercentage(spent, remaining)}%`}
          />
          <div className="grid grid-cols-2">
            <div
              className="flex flex-col gap-1 border-l-4 px-5"
              style={{ borderColor: theme }}
            >
              <span className="text-preset-5">Spent</span>
              <span className="text-preset-4 font-bold">${spent}</span>
            </div>
            <div className="flex flex-col gap-1 border-l-4 border-beige-100 px-5">
              <span className="text-preset-5">Remaining</span>
              <span className="text-preset-4 font-bold">${remaining}</span>
            </div>
          </div>

          <div className="p-5 bg-beige-100 rounded-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-preset-3 font-bold">Latest Spending</h3>
              <span className="flex items-center gap-6 text-beige-500">
                See All <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
