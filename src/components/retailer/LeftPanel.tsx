import Image from "next/image";
import StepIndicator from "./StepIndicator";

const LeftPanel = ({ step }: { step: number }) => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* TOP CONTENT */}
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-black tracking-tight leading-tight">
          {step === 1 && "Empower Your Retail Business."}
          {step === 2 && "Tell Us About Your Business."}
          {step === 3 && "One Last Step to Join Our Network."}
        </h1>

        <p className="text-lg text-text-secondary-light">
          {step === 1 && "Join our network to streamline your supply chain."}
          {step === 2 && "We need this for retailer verification."}
          {step === 3 && "Confirm everything and finish registration."}
        </p>
      </div>

      {/* IMAGE */}
      <div className="flex-1 flex items-center py-10">
        <Image
          src="/retailer-create-banner.png"
          alt="Retailer banner"
          width={500}
          height={100}
          className="rounded-xl object-cover"
          priority
        />
      </div>

      {/* STEPS */}
      <div className="flex flex-col gap-6 pb-4">
        <StepIndicator
          step={step}
          index={1}
          title="Account Info"
          description="Provide your personal creditials for account access."
        />
        <StepIndicator
          step={step}
          index={2}
          title="Business Details"
          description="Enter your company's information for verification"
        />
        <StepIndicator
          step={step}
          index={3}
          title="Review & Finish"
          description="Confirm your details and complete registration."
        />
      </div>
    </div>
  );
};

export default LeftPanel;
