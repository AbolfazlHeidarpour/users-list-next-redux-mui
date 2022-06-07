import {Dispatch} from "redux";
import {SearchActions} from "../../../viewModels/User/types/SearchActions";
import {useDispatch, useSelector} from "react-redux";
import UserManagerState from "../../../models/Users/UserManagerState";
import React from "react";
import {SearchActionTypes} from "../../../viewModels/User/enum/SearchActionTypes";
import User from "../../../models/Users/User";
import {UseSearchUser} from "../types/UseSearchUser";

const useSearchUser = (): UseSearchUser => {
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

  const handleFilterUsers = React.useCallback(
    (data: Record<number, User[]>) => {
      const filterExpression = (user: User) => user.firstName.toLowerCase().includes(keyword.toLowerCase())
        || user.lastName.toLowerCase().includes(keyword.toLowerCase())
        || user.mobile.toLowerCase().includes(keyword.toLowerCase());
      const newData: Record<number, User[]> = {};
      const hasData = (users: User[] | undefined) => users?.some(user => filterExpression(user));

      for (const dataKey in data)
        if (hasData(data[dataKey])) {
          const filteredData = data[dataKey].filter(user => filterExpression(user));
          if (filteredData.length > 0) newData[dataKey] = filteredData;
        }

      return newData;
    }
    ,
    [keyword]
  );

  const handleSearch = React.useCallback(
    (data: Record<number, User[]>) => handleFilterUsers(data)
    ,
    [handleFilterUsers]
  );

  return {
    keyword,
    handleKeywordChange,
    handleSearch
  };
};

export default useSearchUser;