import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Invalid email address"),
    mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
        .required("Mobile number is required"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/^(?=.*[a-z])/, "Password must contain at least one lowercase letter")
        .matches(/^(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
        .matches(/^(?=.*\d)/, "Password must contain at least one numeric character"),
    confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .min(8, "Password must be at least 8 characters")
        .matches(/^(?=.*[a-z])/, "Password must contain at least one lowercase letter")
        .matches(/^(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
        .matches(/^(?=.*\d)/, "Password must contain at least one numeric character"),
});
