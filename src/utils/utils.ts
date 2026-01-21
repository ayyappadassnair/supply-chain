/* eslint-disable @typescript-eslint/no-explicit-any */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[@!#$%^&*])[A-Za-z\d@!#$%^&*]{6,}$/;

export const areFieldsFilled = <T extends Record<string, any>>(
  data: T,
  requiredFields: (keyof T)[],
): boolean => {
  return requiredFields.every((field) => {
    const value = data[field];
    return typeof value === "string" && value.trim().length > 0;
  });
};

type Step1Data = {
  companyName: string;
  regNumber: string;
  workEmail: string;
  password: string;
  confirmPassword: string;
};

export const validateStep1 = (data: Step1Data) => {
  const errors: Partial<Record<keyof Step1Data, string>> = {};

  if (!data.companyName) errors.companyName = "Company name is required";

  if (!data.regNumber) errors.regNumber = "Registration number is required";

  if (!data.workEmail) {
    errors.workEmail = "Work email is required";
  } else if (!EMAIL_REGEX.test(data.workEmail)) {
    errors.workEmail = "Enter a valid email address";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (!PASSWORD_REGEX.test(data.password)) {
    errors.password =
      "Password must be at least 6 characters, include 1 uppercase letter and 1 special character (@!#$ etc)";
  }

  if (!data.confirmPassword)
    errors.confirmPassword = "Confirm password is required";

  if (
    data.password &&
    data.confirmPassword &&
    data.password !== data.confirmPassword
  ) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
export const validateStep2 = (data: {
  businessType: string;
  capacity: string;
  serviceAreas: string;
  productCategories: string;
}) => {
  const errors: Partial<Record<string, string>> = {};

  if (!data.businessType) errors.businessType = "Select business type";

  if (!data.capacity) {
    errors.capacity = "Capacity is required";
  } else if (!/^\d+$/.test(data.capacity)) {
    errors.capacity = "Capacity must be a number";
  }

  if (!data.serviceAreas) errors.serviceAreas = "Service areas are required";

  if (!data.productCategories)
    errors.productCategories = "Product categories are required";

  return errors;
};
