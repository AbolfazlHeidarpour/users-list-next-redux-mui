import StandardAction from "./StandardAction";
import {SearchActionTypes} from "../enum/SearchActionTypes";

export type SearchActions = StandardAction<SearchActionTypes.SEARCH, string>;