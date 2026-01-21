type TextareaProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
};

const Textarea = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: TextareaProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-600">{label}</label>

      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-lg border px-3 py-2"
      />
    </div>
  );
};

export default Textarea;
