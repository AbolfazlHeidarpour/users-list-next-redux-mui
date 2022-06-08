import NewUser from "./NewUser";
import CreateUserResponseData from "./CreateUserResponseData";

type CreateUserState = {
  readonly newUser: NewUser;
  readonly response: CreateUserResponseData;
};

export default CreateUserState;