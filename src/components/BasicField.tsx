import { cn } from "@/lib/utils"

type BasicFieldProps = {
  name: string
  label: string
  type: string
  register: any
  placeholder?: string
  helperText?: string
  className?: string
}

export default function BasicField({
  register,
  name,
  label,
  type,
  placeholder,
  helperText,
  className,
}: BasicFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required: `${label} is required.` })}
        autoComplete="true"
        id={name}
        className={cn(
          "border rounded-md lg:w-100 border-beige-500 px-5 py-3",
          className,
        )}
      />
      <span className="text-sm text-end">{helperText}</span>
    </div>
  )
}
