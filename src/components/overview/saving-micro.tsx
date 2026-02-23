import { cn } from "@/lib/utils"

type SavingMicroProps = {
  className?: string
  name: string
  total: number
  limit?: number
  theme: string
}

export default function SavingMicro({
  className,
  name,
  total,
  theme,
  limit,
}: SavingMicroProps) {
  return (
    <div
      style={{ borderColor: theme }}
      className={cn(`flex gap-1 flex-col border-l-4 pl-2 py-1`, className)}
    >
      <span className="text-preset-5 text-medium-gray">{name}</span>
      <div className="flex items-center gap-2">
        <span className="text-preset-4 font-bold text-primary-gray">
          ${total}
        </span>
        {limit && <span className="text-preset-5">of ${limit}</span>}
      </div>
    </div>
  )
}
