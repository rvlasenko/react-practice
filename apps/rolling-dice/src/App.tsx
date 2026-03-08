import { useState } from "react"
import Dice from "./Dice"
import Form from "./Form"

const getRandomValues = (length: number) =>
  Array.from({ length }, () => Math.floor(Math.random() * 6) + 1)

function App() {
  const [diceValues, setDiceValues] = useState<number[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const values = getRandomValues(Number(data.number))
    setDiceValues(values)
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

        <Form handleSubmit={handleSubmit} />

        <p className="text-xs text-gray-400 mt-2 mb-4">
          Press{" "}
          <kbd className="font-mono border border-gray-300 rounded px-1">
            Space
          </kbd>{" "}
          to roll
        </p>

        {diceValues.length > 0 && (
          <div
            className="max-h-80 overflow-y-auto rounded-xl border border-gray-200 p-4"
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
