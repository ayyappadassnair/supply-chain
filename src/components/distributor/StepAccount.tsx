import Input from "../common/Input";

type StepAccountProps = {
  companyName: string;
  setCompanyName: (v: string) => void;
  regNumber: string;
  setRegNumber: (v: string) => void;
  workEmail: string;
  setWorkEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  confirmPassword: string;
  setConfirmPassword: (v: string) => void;
  errors: any;
};

const StepAccount = ({
  companyName,
  setCompanyName,
  regNumber,
  setRegNumber,
  workEmail,
  setWorkEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  errors,
}: StepAccountProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-black">Create Your Distributor Account</h2>

      <Input
        label="Company Name"
        value={companyName}
        onChange={setCompanyName}
        error={errors.companyName}
      />

      <Input
        label="Business Registration Number"
        value={regNumber}
        onChange={setRegNumber}
        error={errors.regNumber}
      />

      <Input
        label="Work Email"
        type="email"
        value={workEmail}
        onChange={setWorkEmail}
        error={errors.workEmail}
      />

      <Input
        label="Set Password"
        type="password"
        value={password}
        onChange={setPassword}
        error={errors.password}
      />

      <Input
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        error={errors.confirmPassword}
      />
    </div>
  );
};

export default StepAccount;
