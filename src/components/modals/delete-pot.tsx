import { CircleX } from "lucide-react"
import ModalLayout from "./modal-layout"

type DeleteModalProps = {
  onClose: () => void
}

export default function DeleteModal({ onClose }: DeleteModalProps) {
  return (
    <ModalLayout onClose={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full xl:w-140  p-8 rounded-md flex flex-col gap-5"
      >
        <div className="flex items-center justify-between w-full">
          <h2 className="text-preset-1 font-bold">Delete 'Savings'?</h2>
          <CircleX
            onClick={onClose}
            className="cursor-pointer stroke-gray-500"
          />
        </div>

        <p className="text-preset-4 text-gray-500">
          Are you sure you want to delete this pot? This action cannot be
          reversed, and all the data inside it will be removed forever.
        </p>

        <div className="flex gap-5 flex-col">
          <button className="text-white p-4 w-full rounded-md bg-secondary-red text-preset-4 font-bold">
            Yes, Confirm Deletion
          </button>
          <button onClick={onClose} className="text-preset-4 text-gray-500">
            No, Go Back
          </button>
        </div>
      </div>
    </ModalLayout>
  )
}
