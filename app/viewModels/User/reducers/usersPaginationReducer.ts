import {Reducer} from "@reduxjs/toolkit";
import UserPaginationState from "../../../models/Users/UserPaginationState";
import UserPaginationActions from "../types/UserPaginationActions";
import UsersPaginationActionTypes from "../enum/UsersPaginationActionTypes";
import initialUsersPaginationState from "../constants/initialUsersPaginationState";

const usersPaginationReducer: Reducer<UserPaginationState, UserPaginationActions> = (
  state: UserPaginationState = initialUsersPaginationState,
  action: UserPaginationActions
) => {
  switch (action.type) {
    case UsersPaginationActionTypes.NO_PAGE:
      return {
        ...state,
        page: 0
      };

    case UsersPaginationActionTypes.CHANGE_PAGE:
      return {
        ...state,
        page: action['payload']
      };

    case UsersPaginationActionTypes.PER_PAGE:
      return {
        ...state,
        per_page: action['payload']
      };

    case UsersPaginationActionTypes.N0_USERS:
      return {
        ...state,
        users: []
      };

    case UsersPaginationActionTypes.ADD_USERS:
      return {
        ...state,
        users: [...action['payload']]
      };

    default: return {...state};
  }
};

export default usersPaginationReducer;