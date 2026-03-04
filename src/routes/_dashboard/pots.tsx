import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import PotItem from "@/components/pots/pot-item"
import AddPotModal from "@/components/modals/add-pot-modal"
import DeleteModal from "@/components/modals/delete-pot"

export const Route = createFileRoute("/_dashboard/pots")({
  component: PotsPage,
})

function PotsPage() {
  const [showModal, setShowModal] = useState(false)
  const [deletePot, setDeletePot] = useState(false)

  return (
    <>
      {showModal && <AddPotModal onClose={() => setShowModal(false)} />}
      {deletePot && <DeleteModal onClose={() => setDeletePot(false)} />}

      <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
        <div className="flex items-center justify-between mb-10.5">
          <h2 className="text-preset-1 font-bold">Pots</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-950 text-white p-4 rounded-xl text-preset-4 font-bold cursor-pointer"
          >
            + Add New Pot
          </button>
        </div>

        <div className="grid xl:grid-cols-2 gap-6 grid-cols-1">
          <PotItem
            onDelete={() => setDeletePot(true)}
            title="Mac Book"
            total_saved={159}
            theme="var(--secondary-green)"
            target={2000}
          />
          <PotItem
            title="Iphone"
            total_saved={120}
            theme="var(--secondary-cyan)"
            target={2500}
          />
          <PotItem
            title="Ipad"
            total_saved={10}
            theme="var(--secondary-purple)"
            target={2400}
          />
          <PotItem
            title="Nike"
            total_saved={1000}
            theme="var(--secondary-navy)"
            target={1200}
          />
        </div>
      </div>
    </>
  )
}
