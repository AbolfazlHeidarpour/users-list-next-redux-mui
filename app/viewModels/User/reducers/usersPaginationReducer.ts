import {Reducer} from "@reduxjs/toolkit";
import UserPaginationState from "../../../models/UserPaginationState";
import UserPaginationActions from "../types/UserPaginationActions";
import UsersPaginationActionTypes from "../enum/UsersPaginationActionTypes";
import initialUsersPaginationState from "../constants/initialUsersPaginationState";

const usersPaginationReducer: Reducer<UserPaginationState, UserPaginationActions> = (
  state: UserPaginationState = initialUsersPaginationState,
  action: UserPaginationActions
) => {
  switch (action.type) {
    case UsersPaginationActionTypes.ADD_USERS:
      return {
        ...state,
        users: [
          ...state.users,
          ...action['payload']
        ]
      };

    case UsersPaginationActionTypes.CLEAR_USERS:
      return {
        ...state,
        users: []
      };

    case UsersPaginationActionTypes.LOADED:
      return {
        ...state,
        isLoading: false
      };

    case UsersPaginationActionTypes.LOADING:
      return {
        ...state,
        isLoading: true
      };

    case UsersPaginationActionTypes.INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };

    case UsersPaginationActionTypes.DECREMENT_PAGE:
      return {
        ...state,
        page: state.page - 1
      };

    case UsersPaginationActionTypes.NO_PAGE:
      return {
        ...state,
        page: 0
      };

    case UsersPaginationActionTypes.PER_PAGE:
      return {
        ...state,
        per_page: action['payload']
      };

    case UsersPaginationActionTypes.TOTAL:
      return {
        ...state,
        total: action['payload']
      };

    default: return {...state};
  }
};

export default usersPaginationReducer;