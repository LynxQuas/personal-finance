import { createFileRoute } from "@tanstack/react-router"
import PotItem from "@/components/pots/pot-item"

export const Route = createFileRoute("/_dashboard/pots")({
  component: PotsPage,
})

function PotsPage() {
  return (
    <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
      <div className="flex items-center justify-between mb-10.5">
        <h2 className="text-preset-1 font-bold">Budgets</h2>
        <button
          onClick={() => console.log("clicked")}
          className="bg-gray-950 text-white p-4 rounded-xl text-preset-4 font-bold cursor-pointer"
        >
          + Add New Pot
        </button>
      </div>

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
