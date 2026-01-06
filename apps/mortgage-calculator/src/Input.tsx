export default function Input(props) {
  const { label, name, ...rest } = props
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...rest}
        type="number"
        required
        name={name}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  )
}
