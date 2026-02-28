import { useState } from "react"
import {  Controller } from "react-hook-form"
import DropDown from "./icons/DropDownIcon"
import type {Control} from "react-hook-form";

type Option = {
  name: string
  value: string
}

type CustomSelectFieldProps = {
  name: string
  options: Array<Option>
  label?: string
  control: Control<any>
}

export default function CustomSelectField({
  name,
  label,
  options,
  control,
}: CustomSelectFieldProps) {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false)

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options[0].value}
      render={({ field }) => {
        const selectedOption =
          options.find((opt) => opt.value === field.value) || options[0]

        const filteredOptions = options.filter(
          (option) => option.value !== selectedOption.value,
        )

        return (
          <div className="relative">
            {label && <label>{label}</label>}

            <button
              type="button"
              onClick={() => setShowDropDownMenu((prev) => !prev)}
              className="border flex justify-between items-center py-3 px-5 rounded-md w-full"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: selectedOption.value }}
                />
                {selectedOption.name}
              </div>
              <DropDown className="w-4 h-4" />
            </button>

            {showDropDownMenu && (
              <ul className="absolute bg-white w-full">
                {filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => {
                      field.onChange(option.value) // 👈 THIS updates RHF
                      setShowDropDownMenu(false)
                    }}
                    className="flex cursor-pointer items-center gap-2 py-3 px-5"
                  >
                    <div
                      style={{ backgroundColor: option.value }}
                      className="w-4 h-4 rounded-full"
                    />
                    {option.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      }}
    />
  )
}
