import UserPaginationState from "./UserPaginationState";
import CreateUserState from "./CreateUserState";

type UserManagerState = {
  createUser: CreateUserState,
  usersPagination: UserPaginationState
};

export default UserManagerState;