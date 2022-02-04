//Libraries
import React from "react";
import routes from "./config/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./Theme/theme";

//Components
import Home from "./Containers/Home/Home";
import Shop from "./Containers/Shop/Shop";
import Blog from "./Containers/Blog/Blog"
import Events from "./Containers/Events/Events";
import About from "./Containers/About/About";
import Contact from "./Containers/Contact/Contact";
import Header from "./Components/Header/Header";

//Components from MUI
import { ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path={routes.HOME} element={<Home/>}/>
            <Route path={routes.SHOP} element={<Shop/>}/>
            <Route path={routes.EVENTS} element={<Events/>}/>
            <Route path={routes.BLOG} element={<Blog/>}/>
            <Route path={routes.ABOUT} element={<About/>}/>
            <Route path={routes.CONTACT} element={<Contact/>}/>
          </Routes>
        </BrowserRouter>      
      </div>
    </ThemeProvider>
  );
}

export default App;
