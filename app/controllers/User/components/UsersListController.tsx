import React from "react";
import UsersListView from "../../../views/User/components/UsersListView";
import useUserPagination from "../hooks/useUserPagination";

const UsersListController: React.FC = () => {
  const usersPagination = useUserPagination();

  return <UsersListView usersPagination={usersPagination} />;
};

export default UsersListController;