import User from "./User";

export default interface CreateUserResponseData {
  readonly message: string;
  readonly status: number;
  readonly data: User;
}