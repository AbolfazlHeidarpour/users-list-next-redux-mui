import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from '@mui/material/Table';
import tableHeads from "../constants/tableHeads";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const UsersListView: React.FC = () =>
  <Box
    sx={{
      width: '100%'
    }}
  >
    <Paper
      sx={{
        width: '100%',
        mb: 2
      }}
    >
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size='medium'
        >
          <TableHead>
            <TableRow>
              {
                tableHeads.map(head =>
                  <TableCell
                    key={head.id}
                    align='center'
                  >
                    {head.name}
                  </TableCell>
                )
              }
            </TableRow>
          </TableHead>
          <TableBody>
            
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </Box>
;

export default UsersListView;