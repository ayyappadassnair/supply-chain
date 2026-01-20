type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5"
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
