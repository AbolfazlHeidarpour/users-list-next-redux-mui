import HttpRequestManager from "../../Shared/classes/HttpRequestManager";
import NewUser from "../../../models/NewUser";
import CreateUserResponseData from "../../../models/CreateUserResponseData";

export default class UserRequestManager extends HttpRequestManager {
  _requestsURL = '/users';

  getUsers = async (page: number, per_page: number) => await this.get(page, per_page);
  deleteUserById = async (userId: number) => await this.delete(userId);
  createUser = async (newUser: NewUser): Promise<CreateUserResponseData> => await this.post<NewUser>(newUser);
}