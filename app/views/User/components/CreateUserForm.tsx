import React from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FirstNameField from "./FirstNameField";
import LastNameField from "./LastNameField";
import MobileField from "./MobileField";
import {CreateUserFormProps} from "../types/CreateUserFormProps";
import {Button} from "@mui/material";

const CreateUserForm: React.FC<CreateUserFormProps> = (
  {
    onClear,
    onFNameChange,
    onLNameChange,
    onMobileChange,
    onSubmit,
    user: {
      first_name,
      last_name,
      mobile
    },
    submitAllowed
  }
) =>
  <Box
    role='form'
    onSubmit={(event) => event.preventDefault()}
    width='100%'
    mt={1}
  >
    <FormGroup>
      <FirstNameField
        firstName={first_name}
        onChange={onFNameChange}
      />
      <LastNameField
        lastName={last_name}
        onChange={onLNameChange}
      />
      <MobileField
        mobile={mobile}
        onChange={onMobileChange}
      />
      <Box
        mt={2}
        display='flex'
        justifyContent='space-between'
      >
        <Button
          sx={{
            width: '90px'
          }}
          color='error'
          variant='contained'
          onClick={onClear}
        >
          صرفنظر
        </Button>
        <Button
          sx={{
            width: '90px',
          }}
          color='primary'
          variant='contained'
          onClick={onSubmit}
          disabled={!submitAllowed()}
        >
          ثبت
        </Button>
      </Box>
    </FormGroup>
  </Box>
;

export default CreateUserForm;