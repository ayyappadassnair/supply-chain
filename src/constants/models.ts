export type Role = "distributor" | "retailer" | null;

export type RetailerFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  companyName: string;
  address: string;
  registrationNo: string;
  taxId: string;
  contactName: string;
  phone: string;
};

export type Errors = {
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

export type DistributorStepAccountProps = {
  companyName: string;
  setCompanyName: (v: string) => void;
  regNumber: string;
  setRegNumber: (v: string) => void;
  workEmail: string;
  setWorkEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  confirmPassword: string;
  setConfirmPassword: (v: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
};

export type DistributorStepBusinessProps = {
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

export type DistributorStepReviewProps = {
  companyName: string;
  regNumber: string;
  workEmail: string;
  agree: boolean;
  setAgree: (v: boolean) => void;
};

export type RetailerStepAccountProps = {
  data: RetailerFormData;
  onChange: (key: keyof RetailerFormData, value: string) => void;
  onNext: () => void;
  errors: RetailerErrors;
  confirmPassword: string;
  setConfirmPassword: (v: string) => void;
};

export type RetailerStepBusinessProps = {
  data: RetailerFormData;
  onChange: (key: keyof RetailerFormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  errors: RetailerErrors;
};

export type RetailerErrors = Partial<Record<keyof RetailerFormData, string>>;
