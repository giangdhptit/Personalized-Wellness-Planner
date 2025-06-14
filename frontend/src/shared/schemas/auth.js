import * as Yup from "yup";

const commonFieldsSchema = {
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(
      8,
      "Must contain at least 8 characters and at least 1 uppercase letter"
    )
    .matches(
      /[A-Z]/,
      "Must contain at least 8 characters and at least 1 uppercase letter"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
};

export const loginUserSchema = Yup.object().shape({
  email: commonFieldsSchema.email,
  password: commonFieldsSchema.password,
});

export const registerUserSchema = Yup.object().shape({
  email: commonFieldsSchema.email,
  password: commonFieldsSchema.password,
  confirmPassword: commonFieldsSchema.confirmPassword,
  firstName: Yup.string().min(1).max(255),
  lastName: Yup.string().min(1).max(255)
});

export const sendResetPasswordLinkSchema = Yup.object().shape({
  email: commonFieldsSchema.email,
});

export const resetPasswordSchema = Yup.object().shape({
  password: commonFieldsSchema.password,
  confirmPassword: commonFieldsSchema.confirmPassword,
});
