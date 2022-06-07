import {Action} from "redux";
import UsersPaginationActionTypes from "../enum/UsersPaginationActionTypes";
import StandardAction from "./StandardAction";
import User from "../../../models/Users/User";

type UserPaginationActions = Action<UsersPaginationActionTypes.NO_PAGE>
  | Action<UsersPaginationActionTypes.N0_USERS>
  | StandardAction<UsersPaginationActionTypes.ADD_USERS, User[]>
  | StandardAction<UsersPaginationActionTypes.PER_PAGE, number>
  | StandardAction<UsersPaginationActionTypes.CHANGE_PAGE, number>;

export default UserPaginationActions;