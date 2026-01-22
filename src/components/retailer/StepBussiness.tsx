import Input from "@/common/Input";
import ProgressBar from "./ProgressBar";

import Button from "@/common/Button";
import {
  BACK,
  BUSINESS_INFORMATION_DESCRIPTION,
  PRIMARY_CONTACT,
  PRIMARY_CONTACT_DESCRIPTION,
  SAVE_AND_CONTINUE,
  TELL_US_ABOUT_YOUR_BUSINESS,
} from "@/constants/constants";
import { RetailerStepBusinessProps } from "@/constants/models";

const StepBussiness = ({
  data,
  onChange,
  onNext,
  onBack,
  errors,
}: RetailerStepBusinessProps) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8 rounded-xl p-6 border border-gray-200 self-center shadow ">
      <ProgressBar step={2} />

      {/* HEADER */}
      <div>
        <p className="text-3xl font-black tracking-[-0.033em]">
          {TELL_US_ABOUT_YOUR_BUSINESS}
        </p>
        <p className="text-base text-gray-600 dark:text-gray-200">
          {BUSINESS_INFORMATION_DESCRIPTION}
        </p>
      </div>

      {/* COMPANY NAME */}
      <Input
        label="Company Name"
        value={data.companyName}
        onChange={(v: string) => onChange("companyName", v)}
        placeholder="Enter your company legal name"
        error={errors.companyName}
      />

      {/* LEGAL ADDRESS */}
      <Input
        label="Legal Address"
        value={data.address}
        onChange={(v: string) => onChange("address", v)}
        placeholder="123 Main Street"
        error={errors.address}
      />

      {/* REGISTRATION + TAX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Business Registration No."
          value={data.registrationNo}
          onChange={(v: string) => onChange("registrationNo", v)}
          placeholder="Registration Number"
          error={errors.registrationNo}
        />

        <Input
          label="Tax ID / VAT Number"
          value={data.taxId}
          onChange={(v: string) => onChange("taxId", v)}
          placeholder="Tax ID"
          error={errors.taxId}
        />
      </div>

      {/* CONTACT SECTION */}
      <div className="pt-2">
        <p className="font-semibold text-gray-900 dark:text-gray-200">
          {PRIMARY_CONTACT}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-200">
          {PRIMARY_CONTACT_DESCRIPTION}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Contact Person Name"
          value={data.contactName}
          onChange={(v: string) => onChange("contactName", v)}
          placeholder="Full name"
          error={errors.contactName}
        />

        <Input
          label="Phone Number"
          value={data.phone}
          onChange={(v: string) => onChange("phone", v)}
          placeholder="+91 98765 43210"
          error={errors.phone}
        />
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4 pt-4">
        <Button
          onClick={onBack}
          className="h-12 px-6 rounded-lg border border-gray-300 text-gray-700 font-semibold dark:text-gray-200"
        >
          {BACK}
        </Button>

        <Button
          onClick={onNext}
          className="h-12 flex-1 rounded-lg bg-blue-800 text-white font-bold hover:bg-blue-700"
        >
          {SAVE_AND_CONTINUE}
        </Button>
      </div>
    </div>
  );
};

export default StepBussiness;
