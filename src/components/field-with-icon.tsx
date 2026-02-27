import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type FieldWithIconProps = {
  name: string
  label?: string
  type: string
  placeholder?: string
  helperText?: string
  className?: string
  children?: ReactNode
  onChange: (e: any) => any
}

export default function FieldWithIcon({
  name,
  label,
  type,
  placeholder,
  helperText,
  className,
  children,
  onChange,
}: FieldWithIconProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          autoComplete="true"
          id={name}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "border-2 rounded-md w-full border-beige-500 px-5 py-3",
            className,
          )}
        />
        <div className="absolute top-[25%] right-0 pr-5">{children}</div>
      </div>
      <span className="text-sm text-end">{helperText}</span>
    </div>
  )
}
