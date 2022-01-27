//Libraries
import React from "react";
import routes from "./config/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Home from "./Containers/Home/Home";
import Shop from "./Containers/Shop/Shop";
import Events from "./Containers/Events/Events";
import About from "./Containers/About/About";
import Contact from "./Containers/Contact/Contact";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={routes.HOME} element={<Home/>}/>
          <Route path={routes.SHOP} element={<Shop/>}/>
          <Route path={routes.EVENTS} element={<Events/>}/>
          <Route path={routes.ABOUT} element={<About/>}/>
          <Route path={routes.CONTACT} element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
