"use client";

import { useState } from "react";
import LeftPanel from "./LeftPanel";
import StepAccount from "./StepAccount";
import StepReview from "./StepReview";
import StepBussiness from "./StepBussiness";
import { RetailerErrors, RetailerFormData } from "@/constants/models";
import { validateRetailerStep1, validateRetailerStep2 } from "@/utils/utils";

const initialState: RetailerFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  address: "",
  registrationNo: "",
  taxId: "",
  contactName: "",
  phone: "",
};

const RetailerSignUp = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<RetailerFormData>(initialState);

  const [errors, setErrors] = useState<RetailerErrors>({});
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (key: keyof RetailerFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
  };

  const goToStep2 = () => {
    const validationErrors = validateRetailerStep1(form, confirmPassword);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStep(2);
  };

  const goToStep3 = () => {
    const validationErrors = validateRetailerStep2(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStep(3);
  };

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 custom-container shadow ">
      {/* MAIN CONTENT */}
      {/* LEFT PANEL */}
      <aside className="hidden lg:flex min-h-0 border-r border-gray-200 px-12 py-12">
        <LeftPanel step={step} />
      </aside>

      {/* RIGHT PANEL */}
      <section className="min-h-0  px-6 sm:px-10 py-10 flex">
        {step === 1 && (
          <StepAccount
            data={form}
            errors={errors}
            confirmPassword={confirmPassword}
            setConfirmPassword={handleConfirmPasswordChange}
            onChange={handleChange}
            onNext={goToStep2}
          />
        )}

        {step === 2 && (
          <StepBussiness
            data={form}
            errors={errors}
            onChange={handleChange}
            onNext={goToStep3}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && <StepReview data={form} onBack={() => setStep(2)} />}
      </section>
    </div>
  );
};

export default RetailerSignUp;
