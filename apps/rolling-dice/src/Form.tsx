import { useRef } from "react"
import { useKeyPress } from "./hooks/useKeyPress"

export default function Form({
  handleSubmit,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  const formRef = useRef<HTMLFormElement>(null)

  const submitFormProgrammatically = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true }),
      )
    }
  }

  useKeyPress(submitFormProgrammatically, ["Space"])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-3 mb-4"
      ref={formRef}
    >
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
          required
          className="h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
        />
      </div>

      <button className="h-10 px-5 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900">
        Roll
      </button>
    </form>
  )
}
