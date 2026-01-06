type CountdownActive = {
  hours: string
  minutes: string
  seconds: string
  status: string
  onPause: () => void
  onResume: () => void
  resetTimer: () => void
}

export default function CountdownActive(props: CountdownActive) {
  const { hours, minutes, seconds, status, onPause, onResume, resetTimer } =
    props
  const isPaused = status === "paused"

  return (
    <div
      role="timer"
      aria-live="polite"
      aria-atomic="true"
      className={`flex flex-col items-center gap-6 rounded-lg p-6
        ${
          isPaused
            ? "bg-amber-50 border border-amber-200"
            : "bg-blue-50 border border-blue-200"
        }
      `}
    >
      <div
        aria-hidden="true"
        className="font-mono text-4xl font-semibold tracking-wider text-gray-900"
      >
        {hours}:{minutes}:{seconds}
      </div>

      <span className="sr-only">
        {hours} hours {minutes} minutes {seconds} seconds remaining
      </span>

      <div className="flex gap-3">
        {status === "running" && (
          <button
            onClick={onPause}
            className="rounded-md bg-amber-500 px-4 py-2 text-white font-medium
                       hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Pause
          </button>
        )}

        {status === "paused" && (
          <button
            onClick={onResume}
            className="rounded-md bg-green-600 px-4 py-2 text-white font-medium
                       hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Resume
          </button>
        )}

        <button
          onClick={resetTimer}
          className="rounded-md border border-gray-300 px-4 py-2 text-gray-700
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
