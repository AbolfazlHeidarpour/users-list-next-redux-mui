import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {createWrapper} from "next-redux-wrapper";
import initialCreatedUser from "../constants/initialCreatedUser";
import reducers from "../reducers/reducers";
import initialUsersPaginationState from "../constants/initialUsersPaginationState";
import {api} from "../function/api";
import initialDeleteResponse from "../constants/initialDeleteResponse";
import {initialDeletedDialog} from "../constants/initialDeletedDialog";

export default class UserStore {
  store = configureStore({
    reducer: reducers,
    preloadedState: {
      favorites: [],
      usersPagination: initialUsersPaginationState,
      createUser: initialCreatedUser,
      deleteUser: initialDeleteResponse,
      deleteUserDialog: initialDeletedDialog,
      search: ''
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(thunk)
        .concat(api.middleware)
  });

  private makeStore = () => this.store;

  nextWrapper = createWrapper(this.makeStore);
}