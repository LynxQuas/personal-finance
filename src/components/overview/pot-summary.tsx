import PotsIcon from '../icons/PotsIcon'
import SavingMicro from './saving-micro'
import SummaryHeader from './summary-header'

const potsData = [
  { title: 'Saving', amount: 159, color: 'border-secondary-green' },
  { title: 'Gift', amount: 40, color: 'border-secondary-cyan' },
  { title: 'Concert Ticket', amount: 110, color: 'border-secondary-navy' },
  { title: 'New Laptop', amount: 10, color: 'border-secondary-yellow' },
]

export default function PortSummary() {
  return (
    <div className="mt-8 bg-white p-8 rounded-xl">
      <SummaryHeader title="Pots" href="/pots" label="See Details" />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="flex items-center gap-4 bg-beige-100 p-5 rounded-xl">
          <PotsIcon className="w-10 h-10 stroke-green-500 fill-white" />
          <div className="flex flex-col gap-2.5">
            <span className="text-preset-4 text-medium-gray">Total Saved</span>
            <span className="text-preset-1 font-bold">$850</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {potsData.map((pot) => (
            <SavingMicro
              key={pot.title}
              title={pot.title}
              className={pot.color}
              amount={pot.amount}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
