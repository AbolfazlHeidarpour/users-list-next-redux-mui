import {LabelDisplayedRowsArgs} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

export default function DisplayedRowsLabel(paginationInfo: LabelDisplayedRowsArgs): React.ReactNode {
  const from = React.useMemo(() => paginationInfo.from.toLocaleString('fa'), [paginationInfo.from]);
  const to = React.useMemo(() => paginationInfo.to.toLocaleString('fa'), [paginationInfo.to]);
  const total = React.useMemo(() => paginationInfo.count.toLocaleString('fa'), [paginationInfo.count]);

  return (
    <Typography sx={{fontFamily: 'nazanin'}}>
      {from}-{to} از {total}
    </Typography>
  );
}