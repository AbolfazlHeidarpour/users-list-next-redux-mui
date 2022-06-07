import User from "../../../models/Users/User";

export type UsersListTableContainerProps = {
  readonly handleSearch: (data: Record<number, User[]>) => Record<number, User[]>;
  readonly users: Record<number, User[]>;
  readonly isFetching: boolean;
  readonly page: number;
}