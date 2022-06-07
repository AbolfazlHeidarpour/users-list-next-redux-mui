import React from "react";
import TableBody from "@mui/material/TableBody";
import UsersListTableBodyProps from "../types/UsersListTableBodyProps";
import useDeleteUser from "../../../controllers/User/hooks/useDeleteUser";
import ResponseDialog from "./ResponseDialog";
import useFavorites from "../../../controllers/User/hooks/useFavorites";
import UserRowView from "./UserRowView";

const UsersListTableBody: React.FC<UsersListTableBodyProps> = React.memo(
  (
    {
      users,
      per_page,
      page,
      data
    }
  ) => {
    const {
      isFavorite,
      handleRemoveUserFromFavorites,
      handleAddUserToFavorites
    } = useFavorites();
    const {
      response,
      isDeleteResponseDialogOpen,
      handleCloseDeleteResponseDialog,
      handleDeleteUser,
    } = useDeleteUser(handleRemoveUserFromFavorites);

    return (
      <TableBody>
        {users.slice(page * per_page, page * per_page + per_page).map(user =>
          <UserRowView
            isFavorite={isFavorite}
            addFavorite={handleAddUserToFavorites}
            removeFavorite={handleRemoveUserFromFavorites}
            handleDeleteUser={handleDeleteUser}
            {...user}
            key={user.id}
          />
        )}
        <ResponseDialog
          isOpen={isDeleteResponseDialogOpen}
          close={handleCloseDeleteResponseDialog}
          message={response.message}
        />
      </TableBody>
    )
  }
);

UsersListTableBody.displayName = 'UsersListTableBody';

export default UsersListTableBody;