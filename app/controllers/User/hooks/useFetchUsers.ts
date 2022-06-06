import {useDispatch, useSelector} from "react-redux";
import UserManagerState from "../../../models/UserManagerState";
import React from "react";
import {Dispatch} from "redux";
import UserPaginationActions from "../../../viewModels/User/types/UserPaginationActions";
import UsersPaginationActionTypes from "../../../viewModels/User/enum/UsersPaginationActionTypes";

const useFetchUsers = () => {
  const dispatch: Dispatch<UserPaginationActions> = useDispatch<Dispatch<UserPaginationActions>>();
  const pagination = useSelector((state: UserManagerState) => state.usersPagination);

  const handleChangePerPage = React.useCallback(
    (value: number) =>
      dispatch({
        type: UsersPaginationActionTypes.PER_PAGE,
        payload: value
      })
    ,
    [dispatch]
  );

  const handleIncrementPage = React.useCallback(
    () =>
      dispatch({
        type: UsersPaginationActionTypes.INCREMENT_PAGE
      })
    ,
    [dispatch]
  );
};

export default useFetchUsers;