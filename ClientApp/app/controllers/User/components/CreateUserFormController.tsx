import React from "react";
import useCreateUser from "../hooks/useCreateUser";
import CreateUserFormView from "../../../views/User/components/CreateUserFormView";

const CreateUserFormController: React.FC = () => {
  const userCreator = useCreateUser();

  return (
    <CreateUserFormView hook={userCreator} />
  );
};

export default CreateUserFormController;