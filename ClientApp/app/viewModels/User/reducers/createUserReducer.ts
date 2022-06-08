import {Reducer} from "@reduxjs/toolkit";
import CreateUserActions from "../types/CreateUserActions";
import CreateUserActionsTypes from "../enum/CreateUserActionsTypes";
import createUserActionsTypes from "../enum/CreateUserActionsTypes";
import initialCreatedUser from "../constants/initialCreatedUser";
import CreateUserState from '../../../models/Users/CreateUserState';

const createUserReducer: Reducer<CreateUserState, CreateUserActions> = (
  state: CreateUserState = initialCreatedUser,
  action: CreateUserActions
) => {
  switch (action.type) {
    case CreateUserActionsTypes.FIRST_NAME:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          first_name: action['payload']
        }
      };

    case CreateUserActionsTypes.LAST_NAME:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          last_name: action['payload']
        }
      };

    case createUserActionsTypes.PHONE_NUMBER:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          mobile: action['payload']
        }
      };

    case CreateUserActionsTypes.CLEAR_DATA:
      return {...initialCreatedUser};

    case CreateUserActionsTypes.RESPONSE:
      return {
        ...state,
        response: action['payload']
      };

    default: return {...state};
  }
};

export default createUserReducer;