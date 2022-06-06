import React from "react";
import UserRequestManager from "../../../viewModels/User/class/UserRequestManager";

const useDeleteUser = () => {
  const [result, setResult] = React.useState<any>();

  const handleDeleteUser = React.useCallback(
    (userId: number) => {
      const userManager = new UserRequestManager();
      userManager.deleteUserById(userId).then(result => setResult(result));
    },
    []
  );

  return [handleDeleteUser]
};

export default useDeleteUser;