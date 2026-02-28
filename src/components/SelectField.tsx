import DropDown from "./icons/DropDownIcon"
import type { UseFormRegister } from "react-hook-form"
import { cn } from "@/lib/utils"

type options = { name: string; value: string; color?: string }

type SelectFieldProps = {
  options: Array<options>
  name: string
  label: string
  className?: string
  register?: UseFormRegister<any>
}

export default function SelectField({
  name,
  options,
  label,
  className,
  register,
}: SelectFieldProps) {
  return (
    <div className={cn("w-full flex items-center gap-2", className)}>
      <label htmlFor={name}>{label}</label>
      <div className={cn("relative", className)}>
        <select
          {...(register ? register(name) : {})}
          id={name}
          name={name}
          className="appearance-none w-full bg-white py-3 px-5 pr-10
                                rounded-md border border-beige-500
                                outline-none"
        >
          {options.map((option) => (
            <option className="" key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>

        <DropDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  )
}
