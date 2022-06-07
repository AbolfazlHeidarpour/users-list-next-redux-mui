import StandardAction from "./StandardAction";
import DeleteUserResponseActionTypes from "../enum/DeleteUserResponseActionTypes";
import DeleteUserResponse from "../../../models/API/DeleteUserResponse";

export type DeleteUserResponseAction = StandardAction<DeleteUserResponseActionTypes.DELETED, DeleteUserResponse>;