type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit";
  className?: string;
};

const Button = ({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
