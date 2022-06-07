import {Reducer} from "@reduxjs/toolkit";
import FavoriteUser from "../../../models/Users/FavoriteUser";
import {FavoriteUsersActions} from "../types/FavoriteUsersActions";
import {FavoriteUserActionTypes} from "../enum/FavoriteUserActionTypes";

export const favoriteUsersReducer: Reducer<FavoriteUser[], FavoriteUsersActions> = (
  state = [],
  action
) => {
  switch (action.type) {
    case FavoriteUserActionTypes.ADD_FAVORITE_USER:
      return [
        ...state,
        action.payload
      ];

    case FavoriteUserActionTypes.REMOVE_FAVORITE_USER:
      return [...action.payload];

    default: return [...state];
  }
};