import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import {ConfirmDialogProps} from "../types/ConfirmDialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from '@mui/material/DialogContentText';
import Divider from "@mui/material/Divider";

const ConfirmDialog: React.FC<ConfirmDialogProps> = (
    {
      isOpen,
      message,
      onNoClick,
      onYesClick,
      title
    }
  ) =>
    <Dialog
      open={isOpen}
      onClose={onNoClick}
      sx={{
        direction: 'ltr'
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button onClick={onNoClick}>
          صرفنظر
        </Button>
        <Button onClick={onYesClick}>
          تایید
        </Button>
      </DialogActions>
    </Dialog>
;

export default ConfirmDialog;