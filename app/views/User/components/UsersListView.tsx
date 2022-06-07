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
    search: {
      keyword,
      handleKeywordChange,
      handleSearch,
    },
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
                  p: 0,
                  fontFamily: 'titr'
                }}
                textAlign='left'
              >
                لیست کاربران
              </Typography>
              <TextField
                variant="outlined"
                placeholder="جستجوی کاربر..."
                size="small"
                value={keyword}
                InputLabelProps={{
                  sx: {
                    fontFamily: 'nazanin'
                  }
                }}
                InputProps={{
                  sx: {
                    fontFamily: 'nazanin'
                  }
                }}
                onChange={handleKeywordChange}
              />
            </Box>
            <UsersListTableContainer
              handleSearch={handleSearch}
              page={page}
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
              labelRowsPerPage={<Typography fontFamily='nazanin'>تعداد سطرها:</Typography>}
              sx={{ direction: 'ltr' }}
              SelectProps={{ sx: { fontFamily: 'nazanin' } }}
              ActionsComponent={TablePaginationActions}
              labelDisplayedRows={DisplayedRowsLabel}
            />
          </>
      }
    </Paper>
  </Box>
;

export default UsersListView;