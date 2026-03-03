import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ClassValue } from "clsx"

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number) {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function calcPercentage(current: number, target: number) {
  if (target <= 0) return 0
  return ((current / target) * 100).toFixed(2)
}
