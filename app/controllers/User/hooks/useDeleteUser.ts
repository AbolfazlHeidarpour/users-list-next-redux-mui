import {UseDeleteUserReturnType} from "../types/UseDeleteUserReturnType";
import React from "react";
import {api} from "../../../viewModels/User/function/api";
import {useDispatch, useSelector} from "react-redux";
import {DeleteUserResponseAction} from "../../../viewModels/User/types/DeleteUserResponseAction";
import {Dispatch} from "redux";
import UserManagerState from "../../../models/Users/UserManagerState";
import DeleteUserResponseActionTypes from "../../../viewModels/User/enum/DeleteUserResponseActionTypes";
import {DeleteResponseDialogActions} from "../../../viewModels/User/types/DeleteResponseDialogActions";
import DeleteResponseDialogActionTypes from "../../../viewModels/User/enum/DeleteResponseDialogActionTypes";

const { useDeleteUserMutation } = api;

const useDeleteUser = (deleteCallback: (id: number) => void): UseDeleteUserReturnType => {
  const dispatch: Dispatch<DeleteUserResponseAction> = useDispatch();
  const response = useSelector((state: UserManagerState) => state.deleteUser);
  const dialogState = useSelector((state: UserManagerState) => state.deleteUserDialog);
  const [onDelete] = useDeleteUserMutation();
  const dispatchDialog: Dispatch<DeleteResponseDialogActions> = useDispatch();

  const handleDeleteUser = React.useCallback(
    async (id: number) => {
      dispatchDialog({type: DeleteResponseDialogActionTypes.OPEN_DIALOG});
      await onDelete(id.toString())
        .then(result => {
          if ('data' in result) {
            dispatch({
              type: DeleteUserResponseActionTypes.DELETED,
              payload: result.data
            });
          }
        });
      deleteCallback(id);
    },
    [onDelete, dispatch, dispatchDialog]
  );

  const handleCloseDeleteResponseDialog = React.useCallback(
    () => dispatchDialog({
      type: DeleteResponseDialogActionTypes.CLOSE_DIALOG
    })
    ,
    [dispatchDialog]
  );

  return {
    handleDeleteUser,
    response,
    isDeleteResponseDialogOpen: dialogState.isOpen,
    handleCloseDeleteResponseDialog
  }
};

export default useDeleteUser;