import NewUser from "../../../models/Users/NewUser";
import React from "react";

type UseCreateUserReturnType = [
  NewUser,
  React.ChangeEventHandler<HTMLInputElement>,
  React.ChangeEventHandler<HTMLInputElement>,
  React.ChangeEventHandler<HTMLInputElement>,
  () => void,
  () => void,
  () => boolean,
  () => boolean,
  boolean,
  () => void,
  string
]

export default UseCreateUserReturnType;