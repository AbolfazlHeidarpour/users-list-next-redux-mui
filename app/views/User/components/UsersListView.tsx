import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import UsersListViewProps from "../types/UserListViewProps";
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from '@mui/material/CircularProgress';
import TablePaginationActions from "./TablePaginationActions";
import DisplayedRowsLabel from "./DisplayedRowsLabel";
import UsersListTableContainer from "./UsersListTableContainer";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const UsersListView: React.FC<UsersListViewProps> = (
  {
    usersPagination: {
      handlePageChange,
      handlePerPageChange,
      page,
      per_page,
      data,
      users,
      isLoading,
      isFetching,
    }
  }
) =>
  <Box
    sx={{
      width: '100%',
      direction: 'ltr'
    }}
  >
    <Paper
      sx={{
        width: '100%',
        mb: 2
      }}
    >
      {
        isLoading
          ? <CircularProgress />
          :
          <>
            <Box
              display='flex'
              justifyContent='space-between'
              p={2}
            >
              <Typography
                variant='h5'
                sx={{
                  mb: 2,
                  width: '300px',
                  p: 0
                }}
                textAlign='left'
              >
                لیست کاربران
              </Typography>
              <TextField
                variant="outlined"
                placeholder="جستجوی کاربر"
                size="small"
              />
            </Box>
            <UsersListTableContainer
              data={data}
              page={page}
              per_page={per_page}
              isFetching={isFetching}
              users={users}
            />
            <TablePagination
              rowsPerPage={per_page}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handlePerPageChange}
              rowsPerPageOptions={[
                10,
                25,
                50,
                100,
                {
                  label: 'All',
                  value: -1
                }
              ]}
              count={data ? data.total : 10}
              component="div"
              showFirstButton
              showLastButton
              labelRowsPerPage='تعداد سطرها:'
              sx={{direction: 'ltr'}}
              ActionsComponent={TablePaginationActions}
              labelDisplayedRows={DisplayedRowsLabel}
            />
          </>
      }
    </Paper>
  </Box>
;

export default UsersListView;