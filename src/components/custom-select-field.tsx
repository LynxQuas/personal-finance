import { useState } from "react"
import DropDown from "./icons/DropDownIcon"

type Option = {
  name: string
  value: string
  color?: string
}

const options: Array<Option> = [
  { name: "Green", value: "green", color: "var(--secondary-green)" },
  { name: "Yellow", value: "yellow", color: "var(--secondary-yellow)" },
  { name: "Red", value: "red", color: "var(--secondary-red)" },
  { name: "Navy", value: "navy", color: "var(--secondary-navy)" },
  { name: "Cyan", value: "cyan", color: "var(--secondary-cyan)" },
  { name: "Purple", value: "purple", color: "var(--secondary-purple)" },
]

export default function CustomSelectField() {
  const [selectedOption, setSelectedOption] = useState<Option>({
    name: "Green",
    value: "green",
    color: "var(--secondary-green)",
  })

  const [showDropDownMenu, setShowDropDownMenu] = useState(false)

  const handleSelectOption = (option: Option) => {
    setSelectedOption({
      name: option.name,
      value: option.value,
      color: option.color,
    })
    setShowDropDownMenu(false)
  }

  const filteredOptions = options.filter(
    (option) => option.name !== selectedOption.name,
  )

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropDownMenu((prev) => !prev)}
        type="button"
        className="border border-beige-500 flex justify-between items-center py-3 px-5 rounded-md w-full text-start cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: selectedOption.color }}
          />
          {selectedOption.name}
        </div>

        <DropDown className="w-4 h-4" />
      </button>

      {showDropDownMenu && (
        <ul className="absolute custom-scroll-bar bg-white max-h-50 w-full overflow-y-scroll rounded-b-md">
          {filteredOptions.map((option) => (
            <li
              onClick={() => handleSelectOption(option)}
              key={option.color}
              className="flex cursor-pointer items-center gap-2 py-3 px-5 border-b border-beige-100"
            >
              <div
                style={{ backgroundColor: option.color }}
                className="w-4 h-4 rounded-full"
              />
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
