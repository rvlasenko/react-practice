import { useState } from "react"
import Dice from "./Dice"

function App() {
  const [diceValues, setDiceValues] = useState<number[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const newDiceValues = Array.from(
      { length: Number(data.number) },
      () => Math.floor(Math.random() * 6) + 1
    )

    setDiceValues(newDiceValues)
  }

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Dice Roller
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Roll between 1 and 99 six-sided dice
        </p>

        <form onSubmit={handleSubmit} className="flex items-end gap-3 mb-6">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="number"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Number of dice
            </label>
            <input
              id="number"
              name="number"
              type="number"
              min={1}
              max={99}
              defaultValue={1}
              className="
            h-10 px-3 rounded-lg border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-gray-900
            focus:border-gray-900
          "
            />
          </div>

          <button
            className="
          h-10 px-5 rounded-lg bg-gray-900 text-white
          font-medium hover:bg-gray-800
          focus:outline-none focus:ring-2 focus:ring-gray-900
        "
          >
            Roll
          </button>
        </form>

        {diceValues.length > 0 && (
          <div
            className="
          max-h-80 overflow-y-auto
          rounded-xl border border-gray-200 p-4
        "
            aria-live="polite"
            aria-label="Dice roll results"
          >
            <ul className="grid grid-cols-3 gap-4 justify-items-center">
              {diceValues.map((val, i) => (
                <li key={i}>
                  <Dice value={val} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default App
