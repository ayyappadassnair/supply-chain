import Checkbox from "@/common/Checkbox";
import { REVIEW_AND_FINISH } from "@/constants/constants";

type StepReviewProps = {
  companyName: string;
  regNumber: string;
  workEmail: string;
  agree: boolean;
  setAgree: (v: boolean) => void;
};

const StepReview = ({
  companyName,
  regNumber,
  workEmail,
  agree,
  setAgree,
}: StepReviewProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-black">{REVIEW_AND_FINISH}</h2>

      <div className="border rounded-lg p-4 space-y-3 text-sm">
        <ReviewItem label="Company Name" value={companyName} />
        <ReviewItem label="Business Reg. Number" value={regNumber} />
        <ReviewItem label="Work Email" value={workEmail} />
      </div>

      <Checkbox
        label="I agree to the Terms of Service and Privacy Policy"
        checked={agree}
        onChange={setAgree}
      />
    </div>
  );
};

export default StepReview;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReviewItem = ({ label, value }: any) => (
  <div className="flex justify-between">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);
