import { cn } from "@/lib/utils"

type SpendingProgressBarProps = {
  bgColor: string
  widthPercentage: string
  className?: string
}
export default function SpendingProgressBar({
  bgColor,
  widthPercentage,
  className,
}: SpendingProgressBarProps) {
  return (
    <div className={cn("h-8 w-full bg-beige-100 rounded-md", className)}>
      <div
        className="h-full rounded-l-md"
        style={{ backgroundColor: bgColor, width: widthPercentage }}
      />
    </div>
  )
}
