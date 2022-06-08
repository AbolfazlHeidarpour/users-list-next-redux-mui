import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import ContentProps from "../types/ContentProps";

const Content: React.FC<ContentProps> = ({children}) =>
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      backgroundColor: '#ececec',
      p: 3,
      width: `calc(100% - ${240}px)`,
    }}
    id='main'
  >
    {children}
  </Box>
;

export default Content;