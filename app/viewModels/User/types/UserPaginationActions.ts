import {Action} from "redux";
import UsersPaginationActionTypes from "../enum/UsersPaginationActionTypes";
import StandardAction from "./StandardAction";
import User from "../../../models/User";

type UserPaginationActions = Action<UsersPaginationActionTypes.LOADED>
  | Action<UsersPaginationActionTypes.LOADING>
  | Action<UsersPaginationActionTypes.CLEAR_USERS>
  | StandardAction<UsersPaginationActionTypes.ADD_USERS, User[]>
  | Action<UsersPaginationActionTypes.INCREMENT_PAGE>
  | Action<UsersPaginationActionTypes.DECREMENT_PAGE>
  | Action<UsersPaginationActionTypes.NO_PAGE>
  | StandardAction<UsersPaginationActionTypes.PER_PAGE, number>
  | StandardAction<UsersPaginationActionTypes.TOTAL, number>;

export default UserPaginationActions;