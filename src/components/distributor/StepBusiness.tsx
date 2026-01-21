import Input from "@/common/Input";
import Select from "@/common/Select";
import Textarea from "@/common/TextArea";
import { BUSINESS_DETAILS } from "@/constants/constants";
import { DistributorStepBusinessProps } from "@/constants/models";

const StepBusiness = ({
  businessType,
  setBusinessType,
  capacity,
  setCapacity,
  serviceAreas,
  setServiceAreas,
  productCategories,
  setProductCategories,
  errors,
}: DistributorStepBusinessProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-black">{BUSINESS_DETAILS}</h2>

      <Select
        label="Business Type"
        value={businessType}
        onChange={setBusinessType}
        placeholder="Select business type"
        options={[
          { label: "Wholesaler", value: "Wholesaler" },
          { label: "Manufacturer", value: "Manufacturer" },
          { label: "Importer", value: "Importer" },
          { label: "Other", value: "Other" },
        ]}
      />

      <Input
        label="Operational Capacity (per month)"
        value={capacity}
        onChange={setCapacity}
        placeholder="e.g., 10,000 units"
        error={errors.capacity}
      />

      <Input
        label="Service Areas"
        value={serviceAreas}
        onChange={setServiceAreas}
        placeholder="e.g., New York, California"
        error={errors.serviceAreas}
      />

      <Textarea
        label="Product Categories Supplied"
        value={productCategories}
        onChange={setProductCategories}
        placeholder="e.g., Electronics, Apparel"
      />
    </div>
  );
};

export default StepBusiness;
