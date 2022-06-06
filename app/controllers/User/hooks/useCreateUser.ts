import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import CreateUserActions from "../../../viewModels/User/types/CreateUserActions";
import React from "react";
import CreateUserActionsTypes from "../../../viewModels/User/enum/CreateUserActionsTypes";
import UserManagerState from "../../../models/UserManagerState";
import UseCreateUserReturnType from "../types/UseCreateUserReturnType";
import UserRequestManager from "../../../viewModels/User/class/UserRequestManager";
import useBoolean from "../../Shared/hooks/useBoolean";

const useCreateUser = (): UseCreateUserReturnType => {
  const dispatch: Dispatch<CreateUserActions> = useDispatch<Dispatch<CreateUserActions>>();
  const newUser = useSelector((state: UserManagerState) => state.createUser.newUser);
  const response = useSelector((state: UserManagerState) => state.createUser.response);
  const [isOpen, open, close] = useBoolean();

  const handleFirstNameChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (event) =>
      dispatch({
        type: CreateUserActionsTypes.FIRST_NAME,
        payload: event.target.value
      })
    ,
    [dispatch]
  );

  const handleLastNameChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (event) =>
      dispatch({
        type: CreateUserActionsTypes.LAST_NAME,
        payload: event.target.value
      })
    ,
    [dispatch]
  );

  const handlePhoneNumberChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (event) =>
      dispatch({
        type: CreateUserActionsTypes.PHONE_NUMBER,
        payload: event.target.value
      })
    ,
    [dispatch]
  );

  const handleClearForm = React.useCallback(
    () =>
      dispatch({
        type: CreateUserActionsTypes.CLEAR_DATA
      })
    ,
    [dispatch]
  );

  const handleSubmitNewUser = React.useCallback(
    () => {
      const userManager = new UserRequestManager();
      userManager.createUser(newUser)
        .then(result =>
          dispatch({
            type: CreateUserActionsTypes.RESPONSE,
            payload: result
          })
        );
    },
    [newUser, dispatch]
  );

  const handleSubmitIsAllowed = React.useCallback(
    () => newUser.mobile !== ''
      && newUser.first_name !== ''
      && newUser.last_name !== ''
    ,
    [newUser]
  );

  const handleCancelIsAllowed = React.useCallback(
    () => newUser.mobile !== ''
    || newUser.last_name !== ''
    || newUser.first_name !== ''
    ,
    [newUser]
  );

  React.useEffect(() => {
    if (response.data && response.data.id >= 0) open();
  }, [
    response.data,
    open,
    close
  ]);

  return [
    newUser,
    handleFirstNameChange,
    handleLastNameChange,
    handlePhoneNumberChange,
    handleSubmitNewUser,
    handleClearForm,
    handleSubmitIsAllowed,
    handleCancelIsAllowed,
    isOpen,
    close,
    response.message
  ];
};

export default useCreateUser;