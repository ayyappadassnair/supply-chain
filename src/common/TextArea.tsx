type TextareaProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  error?: string;
};

const Textarea = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  error,
}: TextareaProps) => {
  return (
    <div className="flex flex-col gap-1.5 relative">
      <label className="text-sm font-medium text-gray-600 dark:text-gray-200 ">{label}</label>

      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`rounded-lg border px-3 py-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-xs text-red-600 absolute bottom-[-20px] break-all text-align-last">{error}</p>}
    </div>
  );
};

export default Textarea;
