import React from "react";
import UsersListView from "../../../views/User/components/UsersListView";
import useUserPagination from "../hooks/useUserPagination";
import useSearchUser from "../hooks/useSearchUser";

const UsersListController: React.FC = () => {
  const usersPagination = useUserPagination();
  const search = useSearchUser();

  return (
    <UsersListView
      search={search}
      usersPagination={usersPagination}
    />
  );
};

export default UsersListController;