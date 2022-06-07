import React from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FirstNameField from "./FirstNameField";
import LastNameField from "./LastNameField";
import MobileField from "./MobileField";
import {CreateUserFormProps} from "../types/CreateUserFormProps";
import CreateUserFormActions from "./CreateUserFormActions";

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
    submitAllowed,
    cancelAllowed
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
      <CreateUserFormActions
        onClear={onClear}
        onSubmit={onSubmit}
        submitAllowed={submitAllowed}
        cancelAllowed={cancelAllowed}
      />
    </FormGroup>
  </Box>
;

export default CreateUserForm;