import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { IoMdInformationCircle } from "react-icons/io";
import { validationSchema } from "../validations/createAccountValidation";
import InputField from "./InputField";
import { userData } from "../app/slices/authSlice";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { errorMessage, successMessage } from "../hooks/message";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { isLoading, isSuccess, isError, message, error } =
    useSelector((state) => state.userData);

  useEffect(() => {
    if (isError) {
      errorMessage(error)
    }
    if (isSuccess) {
      successMessage(message)
      navigate("/personal-info");
    }
  }, [isError, message, error, dispatch, isSuccess]);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const initialValues = {
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false);
    try {
      await dispatch(userData(values));
    } catch (error) {
      console.log(error);
      errorMessage("Internal server error");
    }
  };

  return (
    <div className="flex flex-col bg-white justify-center p-5 items-center mx-auto max-w-md">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-center">Create your account</h1>
        <p className="text-md mb-2">Set-up your RentlyPass in as little as 2 minutes.</p>
      </div>

      <div className="flex flex-col  p-5 md:p-3">
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Form>
            <div>
              <h4 className="font-sans font-semibold text-gray-500">Contact details</h4>
            </div>
            <InputField name="email" label="Email address" type="text" />
            <InputField name="mobile" label="Mobile number" type="info" infoIcon={true} />
            <InputField
              name="password"
              label="Create a password"
              type="password"
              showPassword={showPassword}
              toggleVisibility={togglePasswordVisibility}
            />
            <InputField
              name="confirmPassword"
              label="Confirm your password"
              type="password"
              showPassword={showConfirmPassword}
              toggleVisibility={toggleConfirmPasswordVisibility}
            />

            <div>
              <p className="mt-8 text-xs flex  justify-center gap-x-0 text-black text-center text-opacity-60">
                <span>
                  {" "}
                  <IoMdInformationCircle className="w-10 h-5" />
                </span>
                We need a password to keep your information safe. But don't <br /> worry, we'll also send
                your custom RentlyPass URL via email.
              </p>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="mt-3 px-4 py-2 w-full h-12 text-white rounded-lg bg-blue-500">
                Create your account
              </button>
            </div>
            <div>
              <p className="mt-2 text-xs text-black text-opacity-70 md:text-left text-center">
                By clicking 'Create your account', you are agreeing to our{" "}
                <span className="underline">
                  Terms <be />& Conditions and Privacy Policy
                </span>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateAccount;
