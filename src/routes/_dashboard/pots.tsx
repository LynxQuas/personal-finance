import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { CircleX } from "lucide-react"
import type { SubmitHandler } from "react-hook-form"
import PotItem from "@/components/pots/pot-item"
import BasicField from "@/components/BasicField"

export const Route = createFileRoute("/_dashboard/pots")({
  component: PotsPage,
})

type PotType = {
  pot_name: string
  target: number
  color_tag: string
}

function PotsPage() {
  const [showModal, setShowModal] = useState(false)
  const { register, handleSubmit } = useForm<PotType>()

  const onSubmit: SubmitHandler<PotType> = (formData) => {
    console.log(formData)
    setShowModal(false)
  }

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
                    name="pot_name"
                    className="px-5 py-3 lg:w-full"
                    label="Pot Name"
                    type="text"
                    register={register}
                  />
                  <BasicField
                    name="target"
                    placeholder="$"
                    className="px-5 py-3 lg:w-full"
                    label="Target"
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
                    Add Pot
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
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
          <PotItem />
          <PotItem />
          <PotItem />
          <PotItem />
          <PotItem />
        </div>
      </div>
    </>
  )
}
