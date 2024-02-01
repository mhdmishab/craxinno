import React, { useState } from "react";
import { Formik, Form } from "formik";
import { IoMdInformationCircle } from "react-icons/io";
import { personalInfovalidationSchema } from "../validations/personalInfoValiation";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import CustomSelect from "./CustomSelect";
import Button from "./Button";
import { storeUserData } from "../app/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { successMessage } from "../hooks/message";

const PersonalInfo = () => {
    const [status, setStatus] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const initialValues = {
        titles: "",
        name: "",
        dateOfBirth: "",
        address: "",
        lived: "",
        about: "",
    };

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const titleOptions = [
        { value: 10, label: "Mr" },
        { value: 20, label: "Mrs" },
        { value: 30, label: "Miss" },
        { value: 40, label: "Dr" },
    ];

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(storeUserData(values));
        navigate('/financial-info')
        successMessage("Personal Info updated Successfully")
        setSubmitting(false);
    };

    return (
        <div className="flex flex-col bg-white justify-center p-5 items-center mx-auto max-w-md">
            <div className=" mb-4 mt-5">
                <div className="flex justify-center gap-x-3 mb-4">
                    <div className=" flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full font-bold">
                        1
                    </div>
                    <div className=" flex items-center justify-center w-10 h-10 bg-gray-300 text-white rounded-full font-bold">
                        2
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-2 text-center">Personal Information</h1>
                <p className="text-md mb-2">Please answer questions as accurately as possible.</p>
            </div>

            <div className="flex flex-col  p-5 md:p-3">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={personalInfovalidationSchema}
                >
                    <Form>
                        <div className="flex gap-4 justify-center items-center  w-[24rem] md:w-[28rem]">
                            <CustomSelect
                                label="Title"
                                name="titles"
                                selectedValue={status}
                                onChange={handleChange}
                                options={titleOptions}
                            />
                            <InputField name="name" label="Full name as your passport" type="text" />
                        </div>

                        <InputField name="dateOfBirth" type="date" />
                        <InputField name="address" label="Current address" type="text" />
                        <InputField name="lived" label="How long have you lived at this address?" type="text" />
                        <TextAreaField name="about" label="Tell us a bit about yourself" rows={4} />

                        <div>
                            <p className=" text-xs flex  justify-center  md:justify-start gap-x-0 text-black text-center text-opacity-60">
                                <span>
                                    {" "}
                                    <IoMdInformationCircle className="w-10 h-5" />
                                </span>
                                All information can edited once you have created your account
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                text="Save and Continue"
                                className="mt-3 px-4 py-2 w-full h-12 text-white rounded-lg bg-blue-500"
                            />
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default PersonalInfo;
