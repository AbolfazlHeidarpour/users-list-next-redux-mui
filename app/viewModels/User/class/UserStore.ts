import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {createWrapper} from "next-redux-wrapper";
import initialCreatedUser from "../constants/initialCreatedUser";
import reducers from "../reducers/reducers";
import initialUsersPaginationState from "../constants/initialUsersPaginationState";

export default class UserStore {
  store = configureStore({
    reducer: reducers,
    preloadedState: {
      usersPagination: initialUsersPaginationState,
      createUser: initialCreatedUser
    },
    middleware: [thunk]
  });

  private makeStore = () => this.store;

  nextWrapper = createWrapper(this.makeStore);
}