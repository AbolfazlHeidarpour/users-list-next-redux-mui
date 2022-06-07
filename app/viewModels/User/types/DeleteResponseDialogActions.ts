import {Action} from "redux";
import DeleteResponseDialogActionTypes from "../enum/DeleteResponseDialogActionTypes";

export type DeleteResponseDialogActions = Action<DeleteResponseDialogActionTypes.OPEN_DIALOG>
  | Action<DeleteResponseDialogActionTypes.CLOSE_DIALOG>;