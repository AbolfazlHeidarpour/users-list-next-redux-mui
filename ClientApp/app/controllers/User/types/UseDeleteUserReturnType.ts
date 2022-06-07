import DeleteUserResponse from "../../../models/API/DeleteUserResponse";

export type UseDeleteUserReturnType = {
  readonly response: DeleteUserResponse;
  readonly isDeleteResponseDialogOpen: boolean;
  readonly handleDeleteUser: (id: number) => void;
  readonly handleCloseDeleteResponseDialog: () => void;
}