import React from "react";
import {useTheme} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {TablePaginationActionsProps} from "@mui/material/TablePagination/TablePaginationActions";

const TablePaginationActions: React.ElementType<TablePaginationActionsProps> | undefined = React.memo((
  {
    page,
    onPageChange,
    rowsPerPage,
    count,
  }
) => {
  const theme = useTheme();

  const handleFirstPageButtonClick: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
    (event) =>
      onPageChange(event, 0)
  ,
    [onPageChange]
  );

  const handleBackButtonClick: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
    (event) =>
      onPageChange(event, page - 1)
    ,
    [onPageChange, page]
  );

  const handleNextButtonClick: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
    (event) =>
      onPageChange(event, page + 1)
    ,
    [onPageChange, page]
  );

  const handleLastPageButtonClick: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
    (event) =>
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
    ,
    [
      onPageChange,
      count,
      rowsPerPage
    ]
  );

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
})

TablePaginationActions.displayName = 'TablePaginationActions';

export default TablePaginationActions;