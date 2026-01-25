import { useRef } from "react"

const inputs = [
  // declarative structure
  { name: "first" },
  { name: "second" },
  { name: "third" },
  { name: "fourth" },
]

export default function CodeInput() {
  const inputRefs = useRef<{ [k: number]: HTMLInputElement }>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const values = Object.values(data).filter((val) => val)

    if (values.length < 4) {
      alert("The code should contain 4 digits")
      return
    }

    const code = values.join("")

    alert(`Your code is ${code}`)
  }

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const value = e.target.value

    if (!value && inputRefs.current[i - 1]) {
      inputRefs.current[i - 1].focus()
    }

    if (/\d/.test(value) && inputRefs.current[i + 1]) {
      inputRefs.current[i + 1].focus()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6"
      >
        <div className="space-y-1 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Enter verification code
          </h2>
          <p className="text-sm text-gray-500">
            We sent a 4-digit code to your device
          </p>
        </div>

        <div className="flex justify-between gap-3">
          {inputs.map((input, i) => (
            <input
              {...input}
              key={input.name}
              ref={(node) => {
                if (node) {
                  inputRefs.current[i] = node
                }
              }}
              required
              type="number"
              min={0}
              max={9}
              inputMode="numeric"
              onChange={(e) => handleOnChange(e, i)}
              className="
                w-14 h-14
                text-center text-lg font-semibold
                rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-gray-900
                focus:border-gray-900
                transition
              "
            />
          ))}
        </div>

        <button
          type="submit"
          className="
            w-full rounded-lg bg-gray-900 text-white
            py-2.5 text-sm font-medium
            hover:bg-gray-800 transition
            focus:outline-none focus:ring-2 focus:ring-gray-900
          "
        >
          Verify code
        </button>
      </form>
    </div>
  )
}
