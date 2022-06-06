import type { NextPage } from 'next'
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import useSelectItem from "../hooks/useSelectItem";
import Content from "./Content";
import contentList from "./ContentList";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const rtlTheme = createTheme({ direction: "rtl" });


const Home: NextPage = () => {
  const [selectedButton, onSelect] = useSelectItem();

  return (
    <ThemeProvider theme={rtlTheme}>
      <CssBaseline />
      <Box sx={{mt: '48px'}} id='container'>
        <NavBar />
        <SideBar onSelect={onSelect}/>
        <Content>
          {contentList[selectedButton]}
        </Content>
      </Box>
    </ThemeProvider>
  );
};

export default Home;