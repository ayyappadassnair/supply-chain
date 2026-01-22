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
import { BACK, CONFIRM_AND_FINISH, CONTINUE } from "@/constants/constants";
import { Errors } from "@/constants/models";

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
  const [contactNumber, setContactNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [serviceAreas, setServiceAreas] = useState("");
  const [productCategories, setProductCategories] = useState("");

  // STEP 3
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<Errors>({});

  const clearError = (field: keyof Errors) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

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
        contactNumber,
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
    <div className="min-h-screen flex items-center justify-center custom-container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* LEFT PANEL */}
        <LeftPanel />

        {/* RIGHT PANEL — CARD STYLE ADDED */}
        <div className="p-8 flex flex-col gap-8 border rounded-2xl shadow-xl max-w-2xl mx-auto self-center w-full">
          <ProgressBar step={step} />

          {step === 1 && (
            <StepAccount
              companyName={companyName}
              setCompanyName={(val) => {
                setCompanyName(val);
                clearError("companyName");
              }}
              regNumber={regNumber}
              setRegNumber={(val) => {
                setRegNumber(val);
                clearError("regNumber");
              }}
              workEmail={workEmail}
              setWorkEmail={(val) => {
                setWorkEmail(val);
                clearError("workEmail");
              }}
              password={password}
              setPassword={(val) => {
                setPassword(val);
                clearError("password");
              }}
              confirmPassword={confirmPassword}
              setConfirmPassword={(val) => {
                setConfirmPassword(val);
                clearError("confirmPassword");
              }}
              errors={errors}
            />
          )}

          {step === 2 && (
            // <StepBusiness
            //   businessType={businessType}
            //   setBusinessType={setBusinessType}
            //   capacity={capacity}
            //   setCapacity={setCapacity}
            //   serviceAreas={serviceAreas}
            //   setServiceAreas={setServiceAreas}
            //   productCategories={productCategories}
            //   setProductCategories={setProductCategories}
            //   errors={errors}
            // />
            <StepBusiness
              businessType={businessType}
              setBusinessType={(val) => {
                setBusinessType(val);
                clearError("businessType");
              }}
              capacity={capacity}
              setCapacity={(val) => {
                setCapacity(val);
                clearError("capacity");
              }}
              serviceAreas={serviceAreas}
              setServiceAreas={(val) => {
                setServiceAreas(val);
                clearError("serviceAreas");
              }}
              productCategories={productCategories}
              setProductCategories={(val) => {
                setProductCategories(val);
                clearError("productCategories");
              }}
              contactNumber={contactNumber}
              setContactNumber={(val) => {
                setContactNumber(val);
                clearError("contactNumber");
              }}
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
                className="px-5 py-2 rounded-lg border disabled:opacity-40"
              >
                {BACK}
              </Button>
            )}

            {step < 3 ? (
              <Button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white"
              >
                {CONTINUE}
              </Button>
            ) : (
              <Button
                disabled={!agree}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-40"
                onClick={handleComplete}
              >
                {CONFIRM_AND_FINISH}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorSignUp;
