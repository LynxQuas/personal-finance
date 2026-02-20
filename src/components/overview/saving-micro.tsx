import { cn } from "@/lib/utils"

type SavingMicroProps = {
  className?: string
  title: string
  amount: number
  limit?: number
  style?: {}
}

export default function SavingMicro({
  className,
  title,
  amount,
  limit,
  style,
}: SavingMicroProps) {
  return (
    <div
      style={style ? style : {}}
      className={cn("flex gap-1 flex-col border-l-4 px-5 py-1", className)}
    >
      <span className="text-preset-5 text-medium-gray">{title}</span>
      <div className="flex items-center gap-2">
        <span className="text-preset-4 font-bold text-primary-gray">
          ${amount}
        </span>
        {limit && <span className="text-preset-5">of ${limit}</span>}
      </div>
    </div>
  )
}
