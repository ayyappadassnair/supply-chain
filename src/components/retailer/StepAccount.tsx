import Input from "@/common/Input";
import ProgressBar from "./ProgressBar";
import Button from "@/common/Button";
import {
  CREATE_ACCOUNT_AND_CONTINUE,
  CREATE_YOUR_RETAILER_ACCOUNT,
  LETS_GET_YOU_STARTED,
} from "@/constants/constants";
import { RetailerStepAccountProps } from "@/constants/models";

const StepAccount = ({
  data,
  onChange,
  onNext,
  errors,
  confirmPassword,
  setConfirmPassword,
}: RetailerStepAccountProps) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6 justify-center rounded-xl p-6 border border-gray-200 self-center shadow ">
      <ProgressBar step={1} />

      <div>
        <p className="text-3xl font-black leading-tight tracking-[-0.033em]">
          {CREATE_YOUR_RETAILER_ACCOUNT}
        </p>
        <p className="text-base text-gray-600 dark:text-gray-200">
          {LETS_GET_YOU_STARTED}
        </p>
      </div>

      {/* NAME */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="First Name"
          value={data.firstName}
          onChange={(v: string) => onChange("firstName", v)}
          placeholder="Enter your first name"
          error={errors.firstName}
        />

        <Input
          label="Last Name"
          value={data.lastName}
          onChange={(v: string) => onChange("lastName", v)}
          placeholder="Enter your last name"
          error={errors.lastName}
        />
      </div>

      {/* EMAIL */}
      <Input
        label="Work Email"
        type="email"
        value={data.email}
        onChange={(v: string) => onChange("email", v)}
        placeholder="you@company.com"
        error={errors.email}
      />

      {/* PASSWORD */}
      <Input
        label="Password"
        type="password"
        value={data.password}
        onChange={(v: string) => onChange("password", v)}
        placeholder="Create a strong password"
        error={errors.password}
      />

      {/* CONFIRM PASSWORD (UI only for now) */}
      <Input
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(v: string) => setConfirmPassword(v)}
        placeholder="Re-enter your password"
        error={errors.confirmPassword}
      />

      <Button
        onClick={onNext}
        className="h-12 rounded-lg bg-blue-800 text-white font-bold hover:bg-blue-700"
      >
        {CREATE_ACCOUNT_AND_CONTINUE}
      </Button>
    </div>
  );
};

export default StepAccount;
