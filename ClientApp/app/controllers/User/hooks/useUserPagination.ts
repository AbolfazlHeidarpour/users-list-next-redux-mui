import UsersPaginationActionTypes from "../../../viewModels/User/enum/UsersPaginationActionTypes";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import UserManagerState from "../../../models/Users/UserManagerState";
import {Dispatch} from "redux";
import UserPaginationActions from "../../../viewModels/User/types/UserPaginationActions";
import useListUsersQuery from "./useListUsersQuery";
import UseUserPaginationReturnType from "../types/UseUserPaginationReturnType";

const useUserPagination = (): UseUserPaginationReturnType => {
  const dispatch: Dispatch<UserPaginationActions> = useDispatch<Dispatch<UserPaginationActions>>();
  const {page, per_page, users} = useSelector((state: UserManagerState) => state.usersPagination);
  const {data, isLoading, isFetching} = useListUsersQuery({page, per_page});

  React.useEffect(() => {
    if (data) {
      if (Object.keys(users).length === 0) {
        dispatch({
          type: UsersPaginationActionTypes.ADD_USERS,
          payload: {[data.page]: data.users}
        });
      }
      else {
        dispatch({
          type: UsersPaginationActionTypes.ADD_USERS,
          payload: {...users, [data.page]: data.users}
        });
      }
    }
  }, [data, dispatch]);

  const handleResetPage = React.useCallback(
    () =>
      dispatch({
        type: UsersPaginationActionTypes.NO_PAGE
      })
    ,
    [dispatch]
  );

  const handlePageChange = React.useCallback(
    (event: unknown, newPage: number) =>
      dispatch({
        type: UsersPaginationActionTypes.CHANGE_PAGE,
        payload: newPage
      })
    ,
    [dispatch]
  );

  const handlePerPageChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (event) => {
      dispatch({
        type: UsersPaginationActionTypes.PER_PAGE,
        payload: +event.target.value as number
      });
      handleResetPage();
    }
    ,
    [dispatch, handleResetPage]
  );

  return {
    handlePageChange,
    handlePerPageChange,
    data,
    users,
    page,
    per_page,
    isFetching,
    isLoading,
  };
};

export default useUserPagination;