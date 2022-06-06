import TextField from "@mui/material/TextField";
import React from "react";
import {MobileFieldProps} from "../types/MobileFieldProps";

const MobileField: React.FC<MobileFieldProps> = (
  {
    mobile,
    onChange
  }
) =>
  <TextField
    value={mobile}
    onChange={onChange}
    label='شماره موبایل'
    variant='filled'
  />
;

export default MobileField;