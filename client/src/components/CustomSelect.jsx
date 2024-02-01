import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Field, ErrorMessage } from 'formik';

const CustomSelect = ({ label, selectedValue, options, name }) => {
  console.log(selectedValue, "selectedValue")
  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="custom-select-label">{label}</InputLabel>
        <Field as={Select} name={name} label={label}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        <ErrorMessage className='text-sm' name={name} component="div" style={{ color: 'red' }} />
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
