import {combineReducers} from "@reduxjs/toolkit";
import createUserReducer from "./createUserReducer";
import usersPaginationReducer from "./usersPaginationReducer";
import {api} from "../function/api";
import deleteUserResponseReducer from "./deleteUserResponseReducer";
import deleteResponseDialogReducer from "./deleteResponseDialogReducer";
import {favoriteUsersReducer} from "./favoriteUsersReducer";
import {searchReducer} from "./searchReducer";

const reducers = combineReducers({
  search: searchReducer,
  favorites: favoriteUsersReducer,
  createUser: createUserReducer,
  usersPagination: usersPaginationReducer,
  deleteUser: deleteUserResponseReducer,
  deleteUserDialog: deleteResponseDialogReducer,
  [api.reducerPath]: api.reducer,
});

export default reducers;