import { RetailerErrors, RetailerFormData } from "@/constants/models";

type Step1Data = {
  companyName: string;
  regNumber: string;
  workEmail: string;
  password: string;
  confirmPassword: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[@!#$%^&*])[A-Za-z\d@!#$%^&*]{6,}$/;

export const validateRetailerStep1 = (
  data: RetailerFormData,
  confirmPassword: string,
): RetailerErrors => {
  const errors: RetailerErrors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required";

  if (!data.lastName.trim()) errors.lastName = "Last name is required";

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (!PASSWORD_REGEX.test(data.password)) {
    errors.password =
      "Password must be at least 6 characters, include 1 uppercase and 1 special character";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (data.password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export const validateRetailerStep2 = (
  data: RetailerFormData,
): RetailerErrors => {
  const errors: RetailerErrors = {};

  if (!data.companyName.trim()) errors.companyName = "Company name is required";

  if (!data.address.trim()) errors.address = "Address is required";

  if (!data.registrationNo.trim())
    errors.registrationNo = "Registration number is required";

  if (!data.taxId.trim()) errors.taxId = "Tax ID is required";

  if (!data.contactName.trim()) errors.contactName = "Contact name is required";

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\d+$/.test(data.phone)) {
    errors.phone = "Phone number must contain only numbers";
  }

  return errors;
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
  contactNumber: string;
  capacity: string;
  serviceAreas: string;
  productCategories: string;
}) => {
  const errors: Partial<Record<string, string>> = {};

  if (!data.businessType) errors.businessType = "Select business type";

  if (!data.contactNumber.trim()) {
    errors.contactNumber = "Contact number is required";
  } else if (!/^\d+$/.test(data.contactNumber)) {
    errors.contactNumber = "Enter a valid contact number";
  }

  if (!data.capacity.trim()) {
    errors.capacity = "Capacity is required";
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9\s./-]+$/.test(data.capacity)) {
    errors.capacity = "Capacity must contain both letters and numbers";
  }
  if (!data.serviceAreas) errors.serviceAreas = "Service areas are required";

  if (!data.productCategories)
    errors.productCategories = "Product categories are required";

  return errors;
};
