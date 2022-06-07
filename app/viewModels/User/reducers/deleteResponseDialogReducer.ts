import {Reducer} from "@reduxjs/toolkit";
import {DeleteResponseDialogState} from "../../../models/Shared/DeleteResponseDialogState";
import {DeleteResponseDialogActions} from "../types/DeleteResponseDialogActions";
import {initialDeletedDialog} from "../constants/initialDeletedDialog";
import DeleteResponseDialogActionTypes from "../enum/DeleteResponseDialogActionTypes";

const deleteResponseDialogReducer: Reducer<DeleteResponseDialogState, DeleteResponseDialogActions> = (
  state = initialDeletedDialog,
  action
) => {
  switch (action.type) {
    case DeleteResponseDialogActionTypes.CLOSE_DIALOG:
      return { isOpen: false };

    case DeleteResponseDialogActionTypes.OPEN_DIALOG:
      return { isOpen: true };

    default: return state;
  }
};

export default deleteResponseDialogReducer;