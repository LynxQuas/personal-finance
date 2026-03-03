import PotsIcon from "../icons/PotsIcon"
import SavingMicro from "./saving-micro"
import SummaryHeader from "./summary-header"
import type { Pot } from "../../types.ts"

type PotSummaryProps = {
  pots: Array<Pot>
}

export default function PortSummary({ pots }: PotSummaryProps) {
  const totalSaved = pots.reduce((sum, pot) => sum + pot.total, 0)

  return (
    <div className="mt-8 bg-white p-8 rounded-xl">
      <SummaryHeader title="Pots" href="/pots" label="See Details" />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="flex items-center gap-4 bg-beige-100 p-5 rounded-xl">
          <PotsIcon className="w-10 h-10 stroke-green-500 fill-white" />
          <div className="flex flex-col gap-2.5">
            <span className="text-preset-4 text-medium-gray">Total Saved</span>
            <span className="text-preset-1 font-bold">${totalSaved}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {pots.slice(0, 4).map((pot) => (
            <SavingMicro
              key={pot.name}
              name={pot.name}
              theme={pot.theme}
              spent={pot.total}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
