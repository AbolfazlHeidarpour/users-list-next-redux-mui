import User from "../../../models/Users/User";

export default interface UsersListTableBodyProps {
  readonly users: Record<number, User[]>;
  readonly page: number;
  readonly handleSearch: (data: Record<number, User[]>) => Record<number, User[]>;
}