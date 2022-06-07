import User from "../../../models/Users/User";
import ListResponse from "../../../models/API/ListResponse";

export default interface UsersListTableBodyProps {
  readonly users: User[];
  readonly per_page: number;
  readonly data?: ListResponse<User[]> | undefined;
  readonly page: number;
}