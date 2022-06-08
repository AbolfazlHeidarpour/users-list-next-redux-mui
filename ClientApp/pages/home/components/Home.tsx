import type { NextPage } from 'next'
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import useSelectItem from "../hooks/useSelectItem";
import Content from "./Content";
import contentList from "./ContentList";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import React from "react";

const rtlTheme = createTheme({ direction: "rtl" });

const Home: NextPage = () => {
  const [selectedButton, onSelect] = useSelectItem();


  return (
    <ThemeProvider theme={rtlTheme}>
      <CssBaseline />
      <Box
        sx={{
          mt: '48px',
          height: selectedButton === 0 ? 'fit-content' : '100%'
        }}
      >
        <NavBar />
        <SideBar
          onSelect={onSelect}
          selectedButton={selectedButton}
        />
        <Content>
          {contentList[selectedButton]}
        </Content>
      </Box>
    </ThemeProvider>
  );
};

export default Home;