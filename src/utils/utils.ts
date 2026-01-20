export const areFieldsFilled = <T extends Record<string, any>>(
  data: T,
  requiredFields: (keyof T)[],
): boolean => {
  return requiredFields.every((field) => {
    const value = data[field];
    return typeof value === "string" && value.trim().length > 0;
  });
};

export const validateStep1 = (data: {
  companyName: string;
  regNumber: string;
  workEmail: string;
  password: string;
  confirmPassword: string;
}) => {
  const errors: any = {};

  if (!data.companyName) errors.companyName = "Company name is required";
  if (!data.regNumber) errors.regNumber = "Registration number is required";
  if (!data.workEmail) errors.workEmail = "Work email is required";

  if (!data.password) errors.password = "Password is required";
  if (data.password.length < 6)
    errors.password = "Password must be at least 6 characters";

  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Passwords do not match";

  return errors;
};
export const validateStep2 = (data: {
  businessType: string;
  capacity: string;
  serviceAreas: string;
  productCategories: string;
}) => {
  const errors: any = {};

  if (!data.businessType) errors.businessType = "Select business type";
  if (!data.capacity) errors.capacity = "Capacity is required";
  if (!data.serviceAreas) errors.serviceAreas = "Service areas are required";
  if (!data.productCategories)
    errors.productCategories = "Product categories are required";

  return errors;
};
