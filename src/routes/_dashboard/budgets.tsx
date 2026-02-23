import { createFileRoute } from "@tanstack/react-router"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { CircleX } from "lucide-react"
import type { SubmitHandler } from "react-hook-form"
import SpendingSummary from "@/components/budgets/spending-summary"
import BudgetItem from "@/components/budgets/budget-item"
import { useDashboardData } from "@/hooks/useDashboardData"
import BasicField from "@/components/BasicField"

export const Route = createFileRoute("/_dashboard/budgets")({
  component: BudgetPage,
})

type BudgetInputs = {
  budget_name: string
  maximum_spending: number
  color_tag: string
}

function BudgetPage() {
  const { data, loading, error } = useDashboardData()
  const [showModal, setShowModal] = useState(false)

  const { register, handleSubmit } = useForm<BudgetInputs>()

  const onSubmit: SubmitHandler<BudgetInputs> = (formData) => {
    console.log(formData)
    setShowModal(false)
  }

  if (loading) return <div>Loading dashboard...</div>
  if (error) return <div className="text-red-500">Error: {error}</div>
  if (!data) return null

  return (
    <>
      {showModal && (
        <div>
          <div
            className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-20"
            onClick={() => setShowModal(false)}
          >
            <div className="absolute top-[50%] md:left-[50%] md:translate-x-[-50%] translate-y-[-50%] z-20">
              <div
                className="bg-white lg:w-140 w-full p-8 rounded-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-preset-1 font-bold">Add New Budget</h2>
                    <CircleX
                      className="cursor-pointer"
                      onClick={() => setShowModal(false)}
                    />
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet.
                  </p>

                  <BasicField
                    name="budget_name"
                    className="px-5 py-3 lg:w-full"
                    label="Budget Name"
                    type="text"
                    register={register}
                  />
                  <BasicField
                    name="maximum_spending"
                    placeholder="$"
                    className="px-5 py-3 lg:w-full"
                    label="Maximum Spending"
                    type="text"
                    register={register}
                  />
                  <BasicField
                    name="color_tag"
                    className="px-5 py-3 lg:w-full"
                    label="Color Tag"
                    type="text"
                    register={register}
                  />
                  <button className="bg-gray-950 cursor-pointer text-white text-preset-4 font-bold py-4 rounded-md">
                    Add Budget
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-beige-100 min-h-screen md:px-10 md:pb-4 px-4 pt-6">
        <div className="flex items-center justify-between mb-10.5">
          <h2 className="text-preset-1 font-bold">Budgets</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-950 text-white p-4 rounded-xl text-preset-4 font-bold cursor-pointer"
          >
            + Add New Budget
          </button>
        </div>

        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-6">
          <SpendingSummary budgetsData={data.budgets} />
          <div className="flex flex-col gap-6">
            {data.budgets.map((budget) => (
              <BudgetItem
                key={budget.category}
                theme={budget.theme}
                budgetTitle={budget.category}
                amount={budget.maximum}
                limit={150}
                remaining={100}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
