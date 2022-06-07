import StandardAction from "./StandardAction";
import {FavoriteUserActionTypes} from "../enum/FavoriteUserActionTypes";
import FavoriteUser from "../../../models/Users/FavoriteUser";

export type FavoriteUsersActions = StandardAction<FavoriteUserActionTypes.ADD_FAVORITE_USER, FavoriteUser>
  | StandardAction<FavoriteUserActionTypes.REMOVE_FAVORITE_USER, FavoriteUser[]>;