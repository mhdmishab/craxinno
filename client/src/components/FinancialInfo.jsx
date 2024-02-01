import { useState } from "react";
import { financialInfovalidationSchema } from "../validations/financialInfoValidation";
import Button from "./Button";
import CustomSelect from "./CustomSelect";
import InputField from "./InputField";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveAllData } from "../app/slices/authSlice";
import { successMessage } from "../hooks/message";




const FinancialInfo = () => {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const personalInfoData = useSelector(state => state?.saveData?.user);

    const initialValues = {
        status: "",
        additonal: "",
    };



    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setTitle(selectedValue);
    };

    const titleOptions = [
        { value: 10, label: "Employed" },
        { value: 20, label: "Unemployed" },
        { value: 30, label: "Self-employed" },
        { value: 40, label: "Student" },
        { value: 50, label: "Other" },
    ];

    const handleSubmit = (values, { setSubmitting }) => {
        const allData = {
            ...personalInfoData,
            financialInfo: values,
        };
        dispatch(saveAllData(allData))
        successMessage("Data Updated Successfully")
        navigate('/success')
        setSubmitting(false);
    };
    return (
        <div className="flex flex-col bg-white justify-center p-5 items-center mx-auto max-w-md">
            <div className=" mb-4 mt-5">
                <div className="flex justify-center gap-x-3 mb-4">
                    <div className=" flex items-center justify-center w-10 h-10 bg-gray-300 text-white rounded-full font-bold">
                        1
                    </div>
                    <div className=" flex items-center justify-center w-10 h-10  bg-blue-500 text-white rounded-full font-bold">
                        2
                    </div>
                </div>
                <div className="flex  flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold mb-2 text-center">Financial Information</h1>
                    <p className="text-md mb-2">All your information is stored securely.</p>
                </div>

                <div className="flex flex-col  p-5 md:p-3">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={financialInfovalidationSchema}
                    >
                        <Form>
                            <div className="flex gap-4 justify-cente text-left items-center  w-[24rem] md:w-[28rem]">
                                <CustomSelect
                                    label="What is your current employment status?"
                                    name="status"
                                    value={title}
                                    onChange={handleChange}
                                    options={titleOptions}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <InputField name="additonal" label="Additional savings/investments" type="text" />
                            </div>

                            <div className="flex mt-8 justify-center">
                                <Button
                                    text="Save and Continue"
                                    className="mt-3 px-4 py-2 w-full h-12 text-white rounded-lg bg-blue-500"
                                />
                            </div>
                        </Form>
                    </Formik>
                </div>


            </div>
        </div>
    )
}

export default FinancialInfo;