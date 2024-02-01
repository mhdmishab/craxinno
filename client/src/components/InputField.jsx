import React from "react";
import { TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { IoMdInformationCircle } from "react-icons/io";

const InputField = ({ name, label, type, showPassword, toggleVisibility }) => {
    return (
        <div className="mb-4 w-[24rem] md:w-[28rem] relative">
            <Field
                name={name}
                as={TextField}
                id="outlined-basic"
                label={label}
                variant="outlined"
                fullWidth
                className="h-10 rounded-full pr-10"
                margin="normal"
                type={type === "password" && showPassword ? "text" : type}
                helperText={<ErrorMessage name={name} className="text-left" render={(msg) => <span style={{ color: "red" }}>{msg}</span>} />}
            />
            {type === "password" ? (
                <button type="button" onClick={toggleVisibility} className="absolute top-9 right-3 cursor-pointer">
                    {showPassword ? <GoEye /> : <GoEyeClosed />}
                </button>
            ) : type === "info" ? (
                <IoMdInformationCircle className="absolute top-9 text-black text-opacity-60 right-3 cursor-pointer" />
            ) : null}
        </div>
    );
};

export default InputField;
