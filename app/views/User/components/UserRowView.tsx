import React from "react";
import {UserRowViewProps} from "../types/UserRowViewProps";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ButtonGroup} from "@mui/material";

const UserRowView: React.FC<UserRowViewProps> = React.memo(
  (
    {
      id,
      firstName,
      lastName,
      handleDeleteUser,
      mobile,
      isFavorite,
      addFavorite,
      removeFavorite
    }
  ) =>
    <>
      <TableRow>
        <TableCell align='center'>
          {firstName}
        </TableCell>
        <TableCell align='center'>
          {lastName}
        </TableCell>
        <TableCell align='center'>
          {mobile}
        </TableCell>
        <TableCell align='center'>
          <ButtonGroup>
            <Tooltip
              title={`${firstName} حذف`}
              placement='right'
              arrow
            >
              <IconButton onClick={() => handleDeleteUser(id)}>
                <DeleteForeverIcon color='error' />
              </IconButton>
            </Tooltip>
            {
              !isFavorite(id)
                ?
                <Tooltip title='مورد علاقه' placement='left' arrow>
                  <IconButton onClick={() => addFavorite(id, `${firstName} ${lastName}`)}>
                    <FavoriteBorderIcon color='primary' />
                  </IconButton>
                </Tooltip>
                :
                <Tooltip title='حذف علاقه' placement='left' arrow>
                  <IconButton onClick={() => removeFavorite(id)}>
                    <FavoriteIcon color='primary' />
                  </IconButton>
                </Tooltip>
            }
          </ButtonGroup>
        </TableCell>
      </TableRow>
    </>
);

UserRowView.displayName = 'UserRowView';

export default UserRowView;