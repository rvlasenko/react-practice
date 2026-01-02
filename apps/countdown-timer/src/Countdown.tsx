import { useEffect, useState, useRef } from 'react'

const pad = (num: number) => String(num).padStart(2, '0')

type CountDownIdle = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

type CountDownActive = {
  hours: string
  minutes: string
  seconds: string
  status: string
  setStatus: (value: React.SetStateAction<string>) => void
  resetTimer: () => void
}

function CountDownIdle(props: CountDownIdle) {
  const { handleSubmit } = props
  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <label htmlFor="hours" className="sr-only">
        Hours
      </label>
      <input
        type="number"
        className="input"
        placeholder="HH"
        name="hours"
        id="hours"
      />
      {' : '}
      <label htmlFor="minutes" className="sr-only">
        Minutes
      </label>
      <input
        type="number"
        className="input"
        placeholder="MM"
        name="minutes"
        id="minutes"
        max={59}
      />
      {' : '}
      <label htmlFor="seconds" className="sr-only">
        Seconds
      </label>
      <input
        type="number"
        className="input"
        placeholder="SS"
        name="seconds"
        id="seconds"
        max={59}
      />
      <button>Start</button>
    </form>
  )
}

function CountDownActive(props: CountDownActive) {
  const { hours, minutes, seconds, status, setStatus, resetTimer } = props
  return (
    <div className="wrapper">
      <span>{hours}</span>
      {' : '}
      <span>{minutes}</span>
      {' : '}
      <span>{seconds}</span>
      {status === 'running' && (
        <button onClick={() => setStatus('paused')}>Pause</button>
      )}
      {status === 'paused' && (
        <button onClick={() => setStatus('running')}>Resume</button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default function CountDown() {
  const [remainingSeconds, setRemainingSeconds] = useState(0) // single source of truth
  const [status, setStatus] = useState('idle') // running, paused

  const intervalRef = useRef<number>(undefined) // survives re-renders

  const hours = pad(Math.floor(remainingSeconds / 3600))
  const minutes = pad(Math.floor((remainingSeconds % 3600) / 60))
  const seconds = pad(remainingSeconds % 60)

  const resetTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = undefined
    setRemainingSeconds(0)
    setStatus('idle')
    console.log('clear')
  }

  useEffect(() => {
    if (status === 'idle' || status === 'paused') return

    intervalRef.current = setInterval(() => {
      setRemainingSeconds((prev) => {
        // should be pure function...
        if (prev <= 1) {
          alert('done')
          clearInterval(intervalRef.current)
          intervalRef.current = undefined
          setStatus('idle')
          return 0
        }
        return prev - 1
      })
      console.log('interval', intervalRef.current)
    }, 1000)

    return () => {
      // cleanup runs on pause, reset, unmount
      clearInterval(intervalRef.current)
      intervalRef.current = undefined
      console.log('clear effect')
    }
  }, [status])

  const startTimer = (data: { [k: string]: FormDataEntryValue }) => {
    const h = Number(data.hours)
    const m = Number(data.minutes)
    const s = Number(data.seconds)

    const seconds = h * 3600 + m * 60 + s

    if (seconds > 0) {
      setRemainingSeconds(seconds)
      setStatus('running')
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    startTimer(data)
  }

  return (
    <section>
      <header>Countdown timer</header>
      {status === 'idle' && <CountDownIdle handleSubmit={handleSubmit} />}
      {status !== 'idle' && (
        <CountDownActive
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          status={status}
          setStatus={setStatus}
          resetTimer={resetTimer}
        />
      )}
    </section>
  )
}
