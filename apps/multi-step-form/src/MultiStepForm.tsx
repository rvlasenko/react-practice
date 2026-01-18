import { useState } from "react"

const steps = [
  {
    id: "name",
    label: "Name",
    type: "text",
    button: "Next",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    button: "Next",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    button: "Submit",
  },
]

export default function MultiStepForm() {
  const [step, setStep] = useState<number>(0)
  const [form, setForm] = useState<{ [k: string]: string }>({
    name: "",
    email: "",
    password: "",
  })

  const next = () => setStep((p) => p + 1)
  const prev = () => setStep((p) => p - 1)

  const isLastStep = step === steps.length

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setStep(0)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6"
      >
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i <= step ? "bg-gray-900" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {steps.map((value, index) => (
          <div key={value.id} hidden={step !== index} className="space-y-6">
            {step > 0 && (
              <button
                type="button"
                onClick={prev}
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                ← Back
              </button>
            )}

            <div className="space-y-2">
              <label
                htmlFor={value.id}
                className="block text-sm font-medium text-gray-700"
              >
                {value.label}
              </label>

              <input
                id={value.id}
                type={value.type}
                value={form[value.id]}
                onChange={(e) =>
                  setForm({ ...form, [value.id]: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-gray-900
                           focus:border-gray-900"
              />
            </div>

            <button
              type={isLastStep ? "submit" : "button"}
              onClick={() => {
                if (!isLastStep) next()
              }}
              className="w-full rounded-lg bg-gray-900 text-white py-2 text-sm font-medium hover:bg-gray-800 transition"
            >
              {value.button}
            </button>
          </div>
        ))}
      </form>
    </div>
  )
}
