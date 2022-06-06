import User from "./User";

export default interface UserPaginationState {
  users: User[];
  page: number;
  per_page: number;
  total: number;
  isLoading: boolean;
}