import React from "react";
import SideBarProps from "../types/SideBarProps";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const SideBar: React.FC<SideBarProps> = ({onSelect}) =>
  <Drawer
    sx={{
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        backgroundColor: '#aeaeae',
        width: 240,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar>لوگو</Toolbar>
    <Divider />
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={() => onSelect(0)}>
          <ListItemText primary='لیست کاربران' sx={{textAlign: 'center'}}/>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => onSelect(1)}>
          <ListItemText primary='افزودن کاربر' sx={{textAlign: 'center'}} />
          <ListItemIcon>
            <GroupAddIcon/>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
;

export default SideBar;