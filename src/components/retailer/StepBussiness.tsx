import { areFieldsFilled } from "@/utils/utils";
import ProgressBar from "./ProgressBar";
import { RetailerFormData } from "./RetailerSignUp";

type Props = {
  data: RetailerFormData;
  onChange: (key: keyof RetailerFormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

const REQUIRED_FIELDS: (keyof RetailerFormData)[] = [
  "companyName",
  "address",
  "registrationNo",
  "taxId",
  "contactName",
  "phone",
];

const StepBussiness = ({ data, onChange, onNext, onBack }: Props) => {
  const isFormValid = areFieldsFilled(data, REQUIRED_FIELDS);

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8 pb-24">
      <ProgressBar step={2} />

      {/* HEADER */}
      <div>
        <p className="text-3xl font-black tracking-[-0.033em]">
          Tell Us About Your Business
        </p>
        <p className="text-base text-gray-600">
          This information will be used to verify your retailer account.
        </p>
      </div>

      {/* COMPANY NAME */}
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-gray-800">
          Company Name
        </span>
        <input
          className="h-12 rounded-lg border border-gray-300 px-4"
          value={data.companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
          placeholder="Enter your company legal name"
        />
      </label>

      {/* LEGAL ADDRESS */}
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-gray-800">
          Legal Address
        </span>
        <input
          className="h-12 rounded-lg border border-gray-300 px-4"
          value={data.address}
          onChange={(e) => onChange("address", e.target.value)}
          placeholder="123 Main Street"
        />
      </label>

      {/* REGISTRATION + TAX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-800">
            Business Registration No.
          </span>
          <input
            className="h-12 rounded-lg border border-gray-300 px-4"
            value={data.registrationNo}
            onChange={(e) => onChange("registrationNo", e.target.value)}
            placeholder="Registration Number"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-800">
            Tax ID / VAT Number
          </span>
          <input
            className="h-12 rounded-lg border border-gray-300 px-4"
            value={data.taxId}
            onChange={(e) => onChange("taxId", e.target.value)}
            placeholder="Tax ID"
          />
        </label>
      </div>

      {/* CONTACT SECTION */}
      <div className="pt-2">
        <p className="font-semibold text-gray-900">Primary Contact</p>
        <p className="text-sm text-gray-600">
          Who should we reach out to regarding this account?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-800">
            Contact Person Name
          </span>
          <input
            className="h-12 rounded-lg border border-gray-300 px-4"
            value={data.contactName}
            onChange={(e) => onChange("contactName", e.target.value)}
            placeholder="Full name"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-800">
            Phone Number
          </span>
          <input
            className="h-12 rounded-lg border border-gray-300 px-4"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="+91 98765 43210"
          />
        </label>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4 pt-4">
        <button
          onClick={onBack}
          className="h-12 px-6 rounded-lg border border-gray-300 text-gray-700 font-semibold"
        >
          Back
        </button>

        <button
          onClick={onNext}
          disabled={!isFormValid}
          className={`h-12 flex-1 rounded-lg bg-blue-800 text-white font-bold hover:bg-blue-700 ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default StepBussiness;
