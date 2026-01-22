const ProgressBar = ({ step }: { step: number }) => {
  const width = step === 1 ? "33%" : step === 2 ? "66%" : "100%";

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Step {step} of 3</p>

      <div className="h-2 rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-blue-600 transition-all"
          style={{ width }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
