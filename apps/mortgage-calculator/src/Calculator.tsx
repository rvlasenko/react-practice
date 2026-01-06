import { useState } from 'react'

const calculateMonthlyMortgage = (
  principal: number,
  interest: number,
  length: number
) => {
  const monthlyRate = interest / 100 / 12
  const payments = length * 12
  const numerator =
    principal * monthlyRate * Math.pow(1 + monthlyRate, payments)
  const denominator = Math.pow(1 + monthlyRate, payments) - 1
  return numerator / denominator
}

export default function Calculator() {
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null)

  // submit based architecture
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    const principalAmount = Number(data['principal'])
    const interestRate = Number(data['interest'])
    const lengthLoan = Number(data['length'])

    setMonthlyPayment(
      calculateMonthlyMortgage(principalAmount, interestRate, lengthLoan)
    )
  }

  return (
    <section>
      <h1>Mortgage calculator</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="principal">Principal loan amount</label>
          <input
            type="number"
            required
            min={10000}
            inputMode="numeric"
            name="principal"
            id="principal"
            aria-describedby="principal-hint"
          />
          <small id="principal-hint">Minimum value is 10000</small>
        </div>
        <div>
          <label htmlFor="interest">Interest rate, %</label>
          <input
            type="number"
            required
            min={1}
            step={0.01}
            max={100}
            inputMode="numeric"
            name="interest"
            id="interest"
          />
        </div>
        <div>
          <label htmlFor="length">Length of loan, years</label>
          <input
            type="number"
            required
            min={1}
            inputMode="numeric"
            name="length"
            id="length"
          />
        </div>
        <button>Calculate</button>
      </form>
      {monthlyPayment !== null && (
        <div role="status">
          Your monthly mortgage payment will be ${monthlyPayment}
        </div>
      )}
    </section>
  )
}
