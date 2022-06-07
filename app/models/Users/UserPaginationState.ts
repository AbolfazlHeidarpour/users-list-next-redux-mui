import User from "./User";

export default interface UserPaginationState {
  readonly page: number;
  readonly per_page: number;
  readonly users: User[];
}