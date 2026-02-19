import { Link } from '@tanstack/react-router'
import ArrowRight from '../icons/ArrowRight'

type SummaryHeaderProps = {
  title: string
  label: string
  href: string
}

export default function SummaryHeader({
  title,
  label,
  href,
}: SummaryHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-preset-2 font-bold text-gray-950">{title}</h2>
      <Link to={href} className="flex items-center gap-3">
        <span className="text-preset-4 text-gray-400">{label}</span>
        <ArrowRight />
      </Link>
    </div>
  )
}
