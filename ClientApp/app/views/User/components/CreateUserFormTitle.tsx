import React from "react";
import Typography from "@mui/material/Typography";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const CreateUserFormTitle: React.FC = () =>
  <>
    <PersonAddAltIcon
      sx={{
        width: 64,
        height: 64
      }}
      color='primary'
    />
    <Typography fontSize={28}>
      ثبت کاربر جدید
    </Typography>
  </>
;

export default CreateUserFormTitle;