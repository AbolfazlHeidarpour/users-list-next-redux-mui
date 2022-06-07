import CreateUserState from "../../../models/Users/CreateUserState";
import initialNewUser from "./initialNewUser";
import initialUser from "./initialUser";

const initialCreatedUser: CreateUserState = {
  newUser: {...initialNewUser},
  response: {
    data: {...initialUser},
    message: '',
    status: -1
  }
};

export default initialCreatedUser;