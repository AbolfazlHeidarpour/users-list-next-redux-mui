import React from "react";

export default interface TablePaginationActionsProps {
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}