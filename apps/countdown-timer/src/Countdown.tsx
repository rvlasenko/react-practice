import CountdownActive from "./CountdownActive"
import CountdownIdle from "./CountdownIdle"
import { useEffect, useState, useRef } from "react"

const pad = (num: number) => String(num).padStart(2, "0")

export default function CountDown() {
  const [remainingSeconds, setRemainingSeconds] = useState(0) // single source of truth
  const [status, setStatus] = useState("idle") // running, paused

  const intervalRef = useRef<number>(undefined) // survives re-renders

  const hours = pad(Math.floor(remainingSeconds / 3600))
  const minutes = pad(Math.floor((remainingSeconds % 3600) / 60))
  const seconds = pad(remainingSeconds % 60)

  const resetTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = undefined
    setRemainingSeconds(0)
    setStatus("idle")
    console.log("clear")
  }

  useEffect(() => {
    if (status === "idle" || status === "paused") return

    intervalRef.current = setInterval(() => {
      setRemainingSeconds((prev) => {
        // should be pure function...
        if (prev <= 1) {
          alert("done")
          clearInterval(intervalRef.current)
          intervalRef.current = undefined
          setStatus("idle")
          return 0
        }
        return prev - 1
      })
      console.log("interval", intervalRef.current)
    }, 1000)

    return () => {
      // cleanup runs on pause, reset, unmount
      clearInterval(intervalRef.current)
      intervalRef.current = undefined
      console.log("clear effect")
    }
  }, [status])

  const startTimer = (data: { [k: string]: FormDataEntryValue }) => {
    const h = Number(data.hours)
    const m = Number(data.minutes)
    const s = Number(data.seconds)

    const seconds = h * 3600 + m * 60 + s

    if (seconds > 0) {
      setRemainingSeconds(seconds)
      setStatus("running")
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    startTimer(data)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Countdown timer
        </h1>

        {status === "idle" && <CountdownIdle handleSubmit={handleSubmit} />}
        {status !== "idle" && (
          <CountdownActive
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            status={status}
            onPause={() => setStatus("paused")}
            onResume={() => setStatus("running")}
            resetTimer={resetTimer}
          />
        )}
      </div>
    </section>
  )
}
