import React from "react";
import { TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";

const TextAreaField = ({ name, label, rows, defaultValue }) => {
  return (
    <div className="mb-4 w-[24rem] mt-8 md:w-[28rem]">
      <Field name={name}>
        {({ field, meta }) => (
          <>
            <TextField
              id={name}
              label={label}
              multiline
              rows={rows}
              defaultValue={defaultValue}
              variant="outlined"
              fullWidth
              className="rounded-full"
              {...field}
            />
            <ErrorMessage name={name} className="text-xs" component="span" style={{ color: "red" }} />
          </>
        )}
      </Field>
    </div>
  );
};

export default TextAreaField;
