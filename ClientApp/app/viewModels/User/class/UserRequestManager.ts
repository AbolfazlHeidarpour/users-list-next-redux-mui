import HttpRequestManager from "../../Shared/classes/HttpRequestManager";
import NewUser from "../../../models/Users/NewUser";
import CreateUserResponseData from "../../../models/Users/CreateUserResponseData";

export default class UserRequestManager extends HttpRequestManager {
  _requestsURL = '/users';

  deleteUserById = async <T>(userId: number) => await this.delete<T>(userId);
  createUser = async (newUser: NewUser): Promise<CreateUserResponseData> => await this.post<NewUser>(newUser);
}