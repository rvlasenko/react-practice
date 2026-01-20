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
    <form onSubmit={handleSubmit}>
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
        />
      ))}
      <button>Submit</button>
    </form>
  )
}
