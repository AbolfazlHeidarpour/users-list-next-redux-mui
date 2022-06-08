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
import Typography from "@mui/material/Typography";

const SideBar: React.FC<SideBarProps> = ({ onSelect, selectedButton }) =>
  <Drawer
    sx={{
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        backgroundColor: '#d7e9f4',
        width: 240,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar>
      <Typography
        sx={{
          width: '100%',
          fontFamily: 'titr'
        }}
        textAlign='center'
        variant='h6'
      >
        داشبورد مدیریت کاربران
      </Typography>
    </Toolbar>
    <Divider />
    <List>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => onSelect(0)}
          sx={{
            backgroundColor: selectedButton === 0
              ? '#fafafa'
              : undefined
          }}
        >
          <ListItemText
            primary={
              <Typography fontFamily='lotus'>
                لیست کاربران
              </Typography>
            }
            sx={{ textAlign: 'center' }}
          />
          <ListItemIcon>
            <GroupIcon color='primary'/>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => onSelect(1)}
          sx={{
            backgroundColor: selectedButton === 1
              ? '#fafafa'
              : undefined
          }}
        >
          <ListItemText
            primary={
              <Typography fontFamily='lotus'>
                ثبت کاربران جدید
              </Typography>
            }
            sx={{ textAlign: 'center' }}
          />
          <ListItemIcon>
            <GroupAddIcon color='primary'/>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
;

export default SideBar;