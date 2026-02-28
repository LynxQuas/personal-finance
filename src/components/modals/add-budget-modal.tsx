import { CircleX } from "lucide-react"
import { useForm } from "react-hook-form"
import BasicField from "../BasicField"
import SelectField from "../SelectField"
import CustomSelectField from "../custom-select-field"
import ModalLayout from "./modal-layout"
import type { SubmitHandler } from "react-hook-form"

type BudgetInputs = {
  budget_name: string
  maximum_spending: number
  color_tag: string
}

type AddBudgetModalProps = {
  onClose: () => void
}

export default function AddBudgetModal({ onClose }: AddBudgetModalProps) {
  const { register, handleSubmit } = useForm<BudgetInputs>()
  const onSubmit: SubmitHandler<BudgetInputs> = (formData) => {
    console.log(formData)
    onClose()
  }
  return (
    <ModalLayout onClose={onClose}>
      <div
        className="bg-white lg:w-140 w-full p-8 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-preset-1 font-bold">Add New Budget</h2>
            <CircleX className="cursor-pointer" onClick={onClose} />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet.
          </p>

          <SelectField
            register={register}
            className="w-full flex-col items-start gap-1"
            label="Budget Category"
            name="budget-category"
            options={[
              { name: "Entertainment", value: "entertainment" },
              { name: "Dining Out", value: "dining-out" },
            ]}
          />

          <BasicField
            name="maximum_spending"
            placeholder="$"
            className="px-5 py-3 lg:w-full"
            label="Maximum Spending"
            type="text"
            register={register}
          />
          <CustomSelectField />

          <button className="bg-gray-950 cursor-pointer text-white text-preset-4 font-bold py-4 rounded-md">
            Add Budget
          </button>
        </form>
      </div>
    </ModalLayout>
  )
}
