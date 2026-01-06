type CountdownIdle = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function CountdownIdle(props: CountdownIdle) {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2">
        <div>
          <label htmlFor="hours" className="sr-only">
            Hours
          </label>
          <input
            id="hours"
            name="hours"
            type="number"
            inputMode="numeric"
            placeholder="HH"
            className="w-16 rounded-md border border-gray-300 px-2 py-2 text-center text-lg text-gray-900
                       placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500"
          />
        </div>

        <span className="text-gray-500" aria-hidden="true">
          :
        </span>

        <div>
          <label htmlFor="minutes" className="sr-only">
            Minutes
          </label>
          <input
            id="minutes"
            name="minutes"
            type="number"
            inputMode="numeric"
            placeholder="MM"
            className="w-16 rounded-md border border-gray-300 px-2 py-2 text-center text-lg text-gray-900
                       placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500"
          />
        </div>

        <span className="text-gray-500" aria-hidden="true">
          :
        </span>

        <div>
          <label htmlFor="seconds" className="sr-only">
            Seconds
          </label>
          <input
            id="seconds"
            name="seconds"
            type="number"
            inputMode="numeric"
            placeholder="SS"
            className="w-16 rounded-md border border-gray-300 px-2 py-2 text-center text-lg text-gray-900
                       placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 py-2 text-white font-medium
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:ring-offset-2"
      >
        Start
      </button>
    </form>
  )
}
