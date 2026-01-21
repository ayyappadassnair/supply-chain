import clsx from "clsx";

const StepIndicator = ({
  step,
  index,
  title,
  description,
}: {
  step: number;
  index: number;
  title: string;
  description: string;
}) => {
  const active = step === index;
  const completed = step > index;

  return (
    <div
      className={clsx(
        "flex items-start gap-4",
        !active && !completed && "opacity-50",
      )}
    >
      <div
        className={clsx(
          "size-10 rounded-full flex items-center justify-center font-bold",
          completed || active
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700",
        )}
      >
        {index}
      </div>

      <div>
        <h3 className="font-bold dark:text-gray-200">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default StepIndicator;
