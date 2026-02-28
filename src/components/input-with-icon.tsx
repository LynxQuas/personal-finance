import { Eye } from "lucide-react"
import { useState } from "react"
import type { UseFormRegister } from "react-hook-form"
import { cn } from "@/lib/utils"

type InputWithIconProps = {
  label: string
  register: UseFormRegister<any>
  className?: string
  name: string
  placeholder?: string
  helperText?: string
}

export default function InputWithIcon({
  placeholder,
  label,
  register,
  name,
  className,
  helperText,
}: InputWithIconProps) {
  const [type, setType] = useState("password")

  const toggleType = () => {
    setType((prevType) => (prevType === "text" ? "password" : "text"))
  }
  return (
    <div className="relative flex flex-col gap-1">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        {...register(name, { required: `${label} is required.` })}
        className={cn(
          "border rounded-md lg:w-100 border-beige-500 px-5 py-3",
          className,
        )}
        placeholder={!placeholder ? "" : placeholder}
      />
      <Eye
        onClick={toggleType}
        className="absolute top-10 right-3 cursor-pointer"
      />
      <span className="text-sm text-end">{helperText}</span>
    </div>
  )
}
