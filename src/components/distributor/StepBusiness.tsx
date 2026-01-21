import Input from "@/common/Input";
import Select from "@/common/Select";
import Textarea from "@/common/TextArea";

type StepBusinessProps = {
  businessType: string;
  setBusinessType: (v: string) => void;
  capacity: string;
  setCapacity: (v: string) => void;
  serviceAreas: string;
  setServiceAreas: (v: string) => void;
  productCategories: string;
  setProductCategories: (v: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
};

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
}: StepBusinessProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-black">Business Details</h2>

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
