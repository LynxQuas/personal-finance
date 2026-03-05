import { CircleX } from "lucide-react"
import { useForm } from "react-hook-form"
import BasicField from "../BasicField"
import CustomSelectField from "../custom-select-field"
import ModalLayout from "./modal-layout"
import type { SubmitHandler } from "react-hook-form"

type NewPotInput = {
  pot_name: string
  target: number
  theme: string
}

type AddPotModalProps = {
  onClose: () => void
}

const options = [
  { name: "Green", value: "var(--secondary-green)" },
  { name: "Yellow", value: "var(--secondary-yellow)" },
  { name: "Red", value: "var(--secondary-red)" },
  { name: "Navy", value: "var(--secondary-navy)" },
  { name: "Cyan", value: "var(--secondary-cyan)" },
  { name: "Purple", value: "var(--secondary-purple)" },
]

export default function AddPotModal({ onClose }: AddPotModalProps) {
  const { register, handleSubmit, control } = useForm<NewPotInput>()
  const onSubmit: SubmitHandler<NewPotInput> = (formData) => {
    console.log(formData)
    onClose()
  }

  return (
    <ModalLayout onClose={onClose}>
      <div
        className="bg-white lg:w-140 p-8 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-preset-1 font-bold">Add New Pot</h2>
            <CircleX className="cursor-pointer" onClick={onClose} />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet.
          </p>

          <BasicField
            type="text"
            register={register}
            className="lg:w-full flex-col items-start gap-1"
            label="Pot Name"
            name="budget-category"
            placeholder="e.g. Rainy Days"
          />

          <BasicField
            name="target"
            placeholder="$  e.g. 2000"
            className="px-5 py-3 lg:w-full"
            label="Target"
            type="text"
            register={register}
          />
          <CustomSelectField
            label="Theme"
            options={options}
            name="theme"
            control={control}
          />

          <button className="bg-gray-950 cursor-pointer text-white text-preset-4 font-bold py-4 rounded-md">
            Add Pot
          </button>
        </form>
      </div>
    </ModalLayout>
  )
}
