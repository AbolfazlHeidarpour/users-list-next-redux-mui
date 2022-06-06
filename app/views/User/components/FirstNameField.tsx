import TextField from "@mui/material/TextField";
import React from "react";
import {FirstNameFieldProps} from "../types/FirstNameFieldProps";

const FirstNameField: React.FC<FirstNameFieldProps> = (
  {
    firstName,
    onChange
  }
) =>
  <TextField
    sx={{mt: 2, mb: 2}}
    value={firstName}
    onChange={onChange}
    label='نام'
    variant='filled'
  />
;

export default FirstNameField;