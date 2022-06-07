import {Reducer} from "@reduxjs/toolkit";
import DeleteUserResponse from "../../../models/API/DeleteUserResponse";
import {DeleteUserResponseAction} from "../types/DeleteUserResponseAction";
import DeleteUserResponseActionTypes from "../enum/DeleteUserResponseActionTypes";
import initialDeleteResponse from "../constants/initialDeleteResponse";

const deleteUserResponseReducer: Reducer<DeleteUserResponse, DeleteUserResponseAction> = (
  state = initialDeleteResponse,
  action
) => {
  switch (action.type) {
    case DeleteUserResponseActionTypes.DELETED:
      return {
        ...state,
        ...action.payload
      };

    default: return {...state};
  }
};

export default deleteUserResponseReducer;