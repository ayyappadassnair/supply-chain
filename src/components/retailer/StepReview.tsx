import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import { RetailerFormData } from "./RetailerSignUp";

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

      <h2 className="text-3xl font-extrabold">Review Your Information</h2>
      <p className="text-gray-600">
        Please ensure all details are correct before finishing.
      </p>

      <div className="border rounded-lg p-6 flex flex-col gap-6">
        {/* Account Info */}
        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">Full Name</span>
          <span className="font-medium">
            {data.firstName} {data.lastName}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">Work Email</span>
          <span className="font-medium">{data.email}</span>
        </div>

        {/* Business Details */}
        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">Business Name</span>
          <span className="font-medium">{data.companyName}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">Business Address</span>
          <span className="font-medium">{data.address}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 font-semibold">Phone Number</span>
          <span className="font-medium">{data.phone}</span>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={onBack}
          className="h-12 px-6 rounded-lg border border-gray-300 text-gray-700 font-semibold"
        >
          Back
        </button>

        <button
          onClick={handleComplete}
          className="h-12 w-full rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700"
        >
          Confirm & Complete Account
        </button>
      </div>
    </div>
  );
};

export default StepReview;
