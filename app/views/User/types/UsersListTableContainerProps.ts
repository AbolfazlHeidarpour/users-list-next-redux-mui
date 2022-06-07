import User from "../../../models/Users/User";
import ListResponse from "../../../models/API/ListResponse";

export type UsersListTableContainerProps = {
  readonly users: User[];
  readonly isFetching: boolean;
  readonly page: number;
  readonly per_page: number;
  readonly data: ListResponse<User> | undefined;
}