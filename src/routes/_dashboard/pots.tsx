import { createFileRoute } from "@tanstack/react-router"
import PotItem from "@/components/pots/pot-item"

export const Route = createFileRoute("/_dashboard/pots")({
  component: PotsPage,
})

function PotsPage() {
  return (
    <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
      <h2 className="text-preset-1 font-bold mb-10.5">Pots</h2>

      <div className="grid xl:grid-cols-2 gap-6 grid-cols-1">
        <PotItem />
        <PotItem />
        <PotItem />
        <PotItem />
        <PotItem />
      </div>
    </div>
  )
}
