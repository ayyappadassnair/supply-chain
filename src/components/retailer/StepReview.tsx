import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import Button from "@/common/Button";
import {
  BACK,
  CONFIRM_AND_COMPLETE_ACCOUNT,
  FULL_NAME,
  REVIEW_YOUR_INFORMATION,
  WORK_EMAIL,
  BUSINESS_NAME,
  BUSINESS_ADDRESS,
  PHONE_NUMBER,
  PLEASE_ENSURE_ALL_DETAILS_ARE_CORRECT,
} from "@/constants/constants";
import { RetailerFormData } from "@/constants/models";

const StepReview = ({
  data,
  onBack,
}: {
  data: RetailerFormData;
  onBack: () => void;
}) => {
  const router = useRouter();

  const handleComplete = () => {
    router.push("/retailer/dashboard");
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8 p-6 bg-white rounded-lg shadow">
      <ProgressBar step={3} />

      <h2 className="text-3xl font-extrabold">{REVIEW_YOUR_INFORMATION}</h2>
      <p className="text-gray-600">{PLEASE_ENSURE_ALL_DETAILS_ARE_CORRECT}</p>

      <div className="border rounded-lg p-6 flex flex-col gap-6">
        {/* Account Info */}
        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">{FULL_NAME}</span>
          <span className="font-medium">
            {data.firstName} {data.lastName}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">{WORK_EMAIL}</span>
          <span className="font-medium">{data.email}</span>
        </div>

        {/* Business Details */}
        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">{BUSINESS_NAME}</span>
          <span className="font-medium">{data.companyName}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">
            {BUSINESS_ADDRESS}
          </span>
          <span className="font-medium">{data.address}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">{PHONE_NUMBER}</span>
          <span className="font-medium">{data.phone}</span>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <Button
          onClick={onBack}
          className="h-12 px-6 rounded-lg border border-gray-300 text-gray-700 font-semibold"
        >
          {BACK}
        </Button>

        <Button
          onClick={handleComplete}
          className="h-12 w-full rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700"
        >
          {CONFIRM_AND_COMPLETE_ACCOUNT}
        </Button>
      </div>
    </div>
  );
};

export default StepReview;
