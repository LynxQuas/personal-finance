import { cn } from "@/lib/utils"

type SummaryCardProps = {
  className?: string
  title: string
  amount: number
}
export default function SummaryCard({
  className,
  title,
  amount,
}: SummaryCardProps) {
  return (
    <div
      className={cn("flex gap-3 flex-col bg-white p-6 rounded-xl", className)}
    >
      <p className="text-preset-4">{title}</p>
      <span className="text-preset-1 font-bold">${amount}</span>
    </div>
  )
}
