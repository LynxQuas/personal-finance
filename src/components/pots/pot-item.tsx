export default function PotItem() {
  return (
    <div className="p-6 bg-white rounded-xl flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "black" }}
          />
          <span className="text-preset-2">Savings</span>
        </div>

        <span>..</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-preset-4">Total Saved</span>
          <span className="text-preset-1 font-bold">$159.00</span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-full h-2 bg-beige-100 rounded-2xl" />

          <div className="flex justify-between items-center">
            <span className="text-preset-5 font-bold">7.95%</span>
            <span className="text-preset-5">Target of $2,000</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="text-preset-4 text-center py-4 bg-beige-100 rounded-md font-bold">
          +Add Money
        </button>
        <button className="text-preset-4 text-center py-4 bg-beige-100 rounded-md font-bold">
          Withdraw
        </button>
      </div>
    </div>
  )
}
