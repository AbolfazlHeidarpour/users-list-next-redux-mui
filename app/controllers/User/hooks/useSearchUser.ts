import {Dispatch} from "redux";
import {SearchActions} from "../../../viewModels/User/types/SearchActions";
import {useDispatch, useSelector} from "react-redux";
import UserManagerState from "../../../models/Users/UserManagerState";
import React from "react";
import {SearchActionTypes} from "../../../viewModels/User/enum/SearchActionTypes";

const useSearchUser = () => {
  const dispatch: Dispatch<SearchActions> = useDispatch();
  const keyword = useSelector((state: UserManagerState) => state.search);

  const handleKeywordChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (event) =>
      dispatch({
        type: SearchActionTypes.SEARCH,
        payload: event.target.value
      })
    ,
    [dispatch]
  );

  const handleSearch = {}
};

export default useSearchUser;