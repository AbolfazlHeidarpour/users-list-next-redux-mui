import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const NavBar: React.FC = () =>
  <AppBar
    position="fixed"
    sx={{
      width: `calc(100% - ${240}px)`,
      ml: `${240}px`,
      backgroundColor: '#6f6c6c'
    }}
  >
    <Toolbar variant="dense">
      <Typography
        variant="h6"
        noWrap
        component="div"
      >
        سلام میهمان
      </Typography>
    </Toolbar>
  </AppBar>
;

export default NavBar;