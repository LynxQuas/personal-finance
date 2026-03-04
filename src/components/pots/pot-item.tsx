import { Ellipsis } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import SpendingProgressBar from "../budgets/spending-progress-bar"
import { calcPercentage } from "@/lib/utils"

type PotItemProps = {
  total_saved: number
  target: number
  theme: string
  title: string
  onDelete?: () => void
}

export default function PotItem({
  title,
  total_saved,
  target,
  theme,
  onDelete,
}: PotItemProps) {
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
    <div className="p-6 bg-white rounded-xl flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: theme }}
          />
          <span className="text-preset-2">{title}</span>
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
                  Edit Pot
                </li>
                <li
                  onClick={onDelete}
                  className="py-3 px-5 text-secondary-red text-preset-4"
                >
                  Delete Pot
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-preset-4">Total Saved</span>
          <span className="text-preset-1 font-bold">$ {total_saved}</span>
        </div>

        <div className="flex flex-col gap-3">
          <SpendingProgressBar
            className="w-full h-2 rounded-l-xl"
            bgColor={theme}
            widthPercentage={`${calcPercentage(total_saved, target)}%`}
          />

          <div className="flex justify-between items-center">
            <span className="text-preset-5 font-bold">
              {calcPercentage(total_saved, target)}%
            </span>
            <span className="text-preset-5">Target of ${target}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="text-preset-4 text-center py-4 cursor-pointer bg-beige-100 rounded-md font-bold">
          +Add Money
        </button>
        <button className="text-preset-4 text-center py-4 bg-beige-100 cursor-pointer rounded-md font-bold">
          Withdraw
        </button>
      </div>
    </div>
  )
}
