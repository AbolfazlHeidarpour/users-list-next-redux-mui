import ListResponse from "../../../models/API/ListResponse";
import User from "../../../models/Users/User";
import React from "react";

type UseUserPaginationReturnType = {
  readonly page: number;
  readonly per_page: number;
  readonly users: Record<number, User[]>;
  readonly data: ListResponse<User> | undefined;
  readonly isLoading: boolean;
  readonly isFetching: boolean;
  readonly handlePageChange: (event: unknown, newPage: number) => void;
  readonly handlePerPageChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default UseUserPaginationReturnType;