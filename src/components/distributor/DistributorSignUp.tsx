"use client";

import { useState } from "react";
import ProgressBar from "../retailer/ProgressBar";
import LeftPanel from "./LeftPanel";
import { useRouter } from "next/navigation";
import StepAccount from "./StepAccount";
import StepBusiness from "./StepBusiness";
import StepReview from "./StepReview";
import { validateStep1, validateStep2 } from "@/utils/utils";
import Button from "@/common/Button";

type Errors = {
  companyName?: string;
  regNumber?: string;
  workEmail?: string;
  password?: string;
  confirmPassword?: string;
  businessType?: string;
  capacity?: string;
  serviceAreas?: string;
  productCategories?: string;
};

const DistributorSignUp = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);

  // STEP 1
  const [companyName, setCompanyName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // STEP 2
  const [businessType, setBusinessType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [serviceAreas, setServiceAreas] = useState("");
  const [productCategories, setProductCategories] = useState("");

  // STEP 3
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<Errors>({});

  const handleComplete = () => {
    router.push("/distributor/dashboard");
  };
  const handleNext = () => {
    setErrors({});

    if (step === 1) {
      const validationErrors = validateStep1({
        companyName,
        regNumber,
        workEmail,
        password,
        confirmPassword,
      });

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    if (step === 2) {
      const validationErrors = validateStep2({
        businessType,
        capacity,
        serviceAreas,
        productCategories,
      });

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-[10vw]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white overflow-hidden gap-[10vw]">
        {/* LEFT PANEL */}
        <LeftPanel />

        {/* RIGHT PANEL — CARD STYLE ADDED */}
        <div className="p-8 flex flex-col gap-8 border rounded-2xl shadow-xl bg-white">
          <ProgressBar step={step} />

          {step === 1 && (
            <StepAccount
              companyName={companyName}
              setCompanyName={setCompanyName}
              regNumber={regNumber}
              setRegNumber={setRegNumber}
              workEmail={workEmail}
              setWorkEmail={setWorkEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              errors={errors}
            />
          )}

          {step === 2 && (
            <StepBusiness
              businessType={businessType}
              setBusinessType={setBusinessType}
              capacity={capacity}
              setCapacity={setCapacity}
              serviceAreas={serviceAreas}
              setServiceAreas={setServiceAreas}
              productCategories={productCategories}
              setProductCategories={setProductCategories}
              errors={errors}
            />
          )}

          {step === 3 && (
            <StepReview
              companyName={companyName}
              regNumber={regNumber}
              workEmail={workEmail}
              agree={agree}
              setAgree={setAgree}
            />
          )}

          {/* ACTION BUTTONS */}
          <div className="flex justify-between pt-4">
            {step !== 1 && (
              <Button
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
                className="px-5 py-2 rounded-lg bg-gray-100 disabled:opacity-40"
              >
                Back
              </Button>
            )}

            {step < 3 ? (
              <Button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white"
              >
                Continue
              </Button>
            ) : (
              <Button
                disabled={!agree}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-40"
                onClick={handleComplete}
              >
                Confirm & Finish
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorSignUp;
