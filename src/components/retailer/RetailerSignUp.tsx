"use client";

import { useState } from "react";
import LeftPanel from "./LeftPanel";
import StepAccount from "./StepAccount";
import StepReview from "./StepReview";
import StepBussiness from "./StepBussiness";

export type RetailerFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  companyName: string;
  address: string;
  registrationNo: string;
  taxId: string;
  contactName: string;
  phone: string;
};

const initialState: RetailerFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
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

  const updateField = (key: keyof RetailerFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* MAIN CONTENT */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 px-[10vw]">
        {/* LEFT PANEL */}
        <aside className="hidden lg:flex min-h-0 border-r border-gray-200 px-12 py-12">
          <LeftPanel step={step} />
        </aside>

        {/* RIGHT PANEL */}
        <section className="min-h-0  px-6 sm:px-10 py-10 flex">
          {step === 1 && (
            <StepAccount
              data={form}
              onChange={updateField}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <StepBussiness
              data={form}
              onChange={updateField}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && <StepReview data={form} onBack={() => setStep(2)} />}
        </section>
      </div>
    </div>
  );
};

export default RetailerSignUp;
