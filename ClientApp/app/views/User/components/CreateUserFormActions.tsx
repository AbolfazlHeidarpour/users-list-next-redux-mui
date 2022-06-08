import React from "react";
import {CreateUserFormActionsProps} from "../types/CreateUserFormActionsProps";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const CreateUserFormActions: React.FC<CreateUserFormActionsProps> = React.memo(
  (
    {
      onClear,
      onSubmit,
      submitAllowed,
      cancelAllowed
    }
  ) =>
    <Box
      justifyContent='space-between'
      display='flex'
      mt={2}
    >
      <Tooltip
        title={
          !cancelAllowed()
            ?
            <Typography sx={{fontFamily: 'nazanin'}}>
              فرم خالی است
            </Typography>
            :
            <Typography sx={{fontFamily: 'nazanin'}}>
              پاک کردن فرم
            </Typography>
        }
        placement='bottom'
        arrow
      >
        <span>
          <Button
            sx={{
              width: '90px',
              fontFamily: 'lotus'
            }}
            color='error'
            variant='contained'
            onClick={onClear}
            disabled={!cancelAllowed()}
          >
            صرفنظر
          </Button>
        </span>
      </Tooltip>
      <Tooltip
        title={
          !submitAllowed()
            ?
            <Typography sx={{fontFamily: 'nazanin'}}>
              فرم را پر کنید
            </Typography>
            :
            <Typography sx={{fontFamily: 'nazanin'}}>
              ثبت کاربر جدید
            </Typography>
        }
        placement='bottom'
        arrow
      >
        <span>
          <Button
            sx={{
              width: '90px',
              fontFamily: 'lotus'
            }}
            color='primary'
            variant='contained'
            onClick={onSubmit}
            disabled={!submitAllowed()}
          >
            ثبت
          </Button>
        </span>
      </Tooltip>
    </Box>
);

CreateUserFormActions.displayName = 'CreateUserFormActions';

export default CreateUserFormActions;