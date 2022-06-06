import CreateUserActionsTypes from "../enum/CreateUserActionsTypes";
import StandardAction from "./StandardAction";
import {Action} from "redux";
import CreateUserResponseData from "../../../models/CreateUserResponseData";

type CreateUserActions = StandardAction<CreateUserActionsTypes.FIRST_NAME, string>
  | StandardAction<CreateUserActionsTypes.LAST_NAME, string>
  | StandardAction<CreateUserActionsTypes.PHONE_NUMBER, string>
  | Action<CreateUserActionsTypes.CLEAR_DATA>
  | StandardAction<CreateUserActionsTypes.RESPONSE, CreateUserResponseData>;

export default CreateUserActions;
