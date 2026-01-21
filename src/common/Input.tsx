/* 🔹 Reusable Input */
const Input = ({
  label,
  value,
  onChange,
  placeholder,

  type = "text",
  error,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-gray-600 dark:text-gray-200">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`border rounded-lg px-4 py-2 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-xs text-red-600">{error}</p>}
  </div>
);
export default Input;
