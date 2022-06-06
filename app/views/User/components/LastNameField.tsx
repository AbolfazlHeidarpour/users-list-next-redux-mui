import TextField from "@mui/material/TextField";
import React from "react";
import {LastNameFieldProps} from "../types/LastNameFieldProps";

const LastNameField: React.FC<LastNameFieldProps> = (
  {
    onChange,
    lastName
  }
) =>
  <TextField
    sx={{mb: 2}}
    value={lastName}
    onChange={onChange}
    label='نام خانوادگی'
    variant='filled'
  />
;

export default LastNameField;