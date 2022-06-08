import {Reducer} from "@reduxjs/toolkit";
import {SearchActions} from "../types/SearchActions";
import {SearchActionTypes} from "../enum/SearchActionTypes";

export const searchReducer: Reducer<string, SearchActions> = (state = '', action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH:
      return action.payload;

    default: return state;
  }
}