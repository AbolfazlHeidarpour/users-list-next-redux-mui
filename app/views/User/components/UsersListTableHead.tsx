import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import tableHeads from "../constants/tableHeads";
import TableCell from "@mui/material/TableCell";

const UsersListTableHead = React.memo(
  () =>
    <TableHead>
      <TableRow>
        {
          tableHeads.map(head =>
            <TableCell key={head.id} align='center'>
              {head.name}
            </TableCell>
          )
        }
      </TableRow>
    </TableHead>
);

UsersListTableHead.displayName = 'UsersListTableHead';

export default UsersListTableHead;