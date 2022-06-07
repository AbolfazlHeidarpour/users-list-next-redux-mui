import React from "react";
import {ResponseDialogProps} from "../types/ResponseDialogProps";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const ResponseDialog: React.FC<ResponseDialogProps> = (
  {
    isOpen,
    close,
    message
  }
) =>
  <Dialog
    open={isOpen}
    onClose={close}
    sx={{
      direction: 'rtl'
    }}
  >
    <DialogTitle>{message}</DialogTitle>
    <DialogActions>
      <Button
        onClick={close}
        sx={{width: '100%'}}
      >
        متوجه شدم
      </Button>
    </DialogActions>
  </Dialog>
;

export default ResponseDialog;