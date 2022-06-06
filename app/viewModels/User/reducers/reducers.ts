import {combineReducers} from "@reduxjs/toolkit";
import createUserReducer from "./createUserReducer";
import usersPaginationReducer from "./usersPaginationReducer";

const reducers = combineReducers({
  createUser: createUserReducer,
  usersPagination: usersPaginationReducer
});

export default reducers;