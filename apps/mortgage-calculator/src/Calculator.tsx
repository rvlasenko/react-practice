import { useState } from 'react'
import Input from './Input'

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
  return (numerator / denominator).toFixed(2)
}

export default function Calculator() {
  const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null)

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
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Mortgage calculator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Principal loan amount"
            id="principal"
            name="principal"
            min={10000}
          />

          <Input
            label="Interest rate (%)"
            id="interest"
            name="interest"
            min={1}
            max={100}
            step="0.01"
          />

          <Input
            label="Length of loan (years)"
            id="length"
            name="length"
            min={1}
            step={1}
          />

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:ring-offset-2"
          >
            Calculate
          </button>
        </form>

        {monthlyPayment !== null && (
          <div
            role="status"
            className="mt-6 rounded-md bg-blue-50 border border-blue-200 p-4 text-blue-900"
          >
            <span className="font-medium">Your monthly mortgage payment:</span>{' '}
            ${monthlyPayment}
          </div>
        )}
      </div>
    </section>
  )
}
