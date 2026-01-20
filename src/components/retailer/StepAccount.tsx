import { areFieldsFilled } from "@/utils/utils";
import ProgressBar from "./ProgressBar";
import { RetailerFormData } from "./RetailerSignUp";

type Props = {
  data: RetailerFormData;
  onChange: (key: keyof RetailerFormData, value: string) => void;
  onNext: () => void;
};

const REQUIRED_FIELDS: (keyof RetailerFormData)[] = [
  "firstName",
  "lastName",
  "email",
  "password",
];

const StepAccount = ({ data, onChange, onNext }: Props) => {
  const isFormValid = areFieldsFilled(data, REQUIRED_FIELDS);

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6 justify-center">
      <ProgressBar step={1} />

      <div>
        <p className="text-3xl font-black leading-tight tracking-[-0.033em]">
          Create Your Retailer Account
        </p>
        <p className="text-base text-gray-600">
          Lets get you started on our network.
        </p>
      </div>

      {/* NAME */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-800">
            First Name
          </span>
          <input
            className="h-12 rounded-lg border border-gray-300 px-4"
            value={data.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            placeholder="Enter your first name"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-800">Last Name</span>
          <input
            className="h-12 rounded-lg border border-gray-300 px-4"
            value={data.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            placeholder="Enter your last name"
          />
        </label>
      </div>

      {/* EMAIL */}
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-gray-800">Work Email</span>
        <input
          type="email"
          className="h-12 rounded-lg border border-gray-300 px-4"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="you@company.com"
        />
      </label>

      {/* PASSWORD */}
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-gray-800">Password</span>
        <input
          type="password"
          className="h-12 rounded-lg border border-gray-300 px-4"
          value={data.password}
          onChange={(e) => onChange("password", e.target.value)}
          placeholder="Create a strong password"
        />
      </label>

      {/* CONFIRM PASSWORD */}
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-gray-800">
          Confirm Password
        </span>
        <input
          type="password"
          className="h-12 rounded-lg border border-gray-300 px-4"
          // value="Re-enter your password"
          onChange={() => {}}
        />
      </label>

      <button
        onClick={onNext}
        disabled={!isFormValid}
        className={`h-12 rounded-lg bg-blue-800 text-white font-bold hover:bg-blue-700 ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Create Account & Continue
      </button>
    </div>
  );
};

export default StepAccount;
