import React from "react";
import {UsersListTableContainerProps} from "../types/UsersListTableContainerProps";
import TableContainer from "@mui/material/TableContainer";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import UsersListTableHead from "./UsersListTableHead";
import UsersListTableBody from "./UsersListTableBody";
import Divider from "@mui/material/Divider";

const UsersListTableContainer: React.FC<UsersListTableContainerProps> = React.memo(
  (
    {
      users,
      isFetching,
      per_page,
      data,
      page
    }
  ) =>
    <TableContainer>
      <Divider />
      {
        isFetching
          ? <CircularProgress />
          :
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size='small'
          >
            <UsersListTableHead />
            <UsersListTableBody
              data={data}
              users={users}
              per_page={per_page}
              page={page}
            />
          </Table>
      }
    </TableContainer>
);

UsersListTableContainer.displayName = 'UsersListTableContainer';

export default UsersListTableContainer;