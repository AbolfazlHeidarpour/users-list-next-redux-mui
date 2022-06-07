import UserPaginationState from "./UserPaginationState";
import DeleteUserResponse from "../API/DeleteUserResponse";
import {DeleteResponseDialogState} from "../Shared/DeleteResponseDialogState";
import CreateUserState from "./CreateUserState";
import FavoriteUser from "./FavoriteUser";

type UserManagerState = {
  favorites: FavoriteUser[];
  createUser: CreateUserState;
  usersPagination: UserPaginationState;
  deleteUser: DeleteUserResponse;
  deleteUserDialog: DeleteResponseDialogState;
  search: string;
};

export default UserManagerState;