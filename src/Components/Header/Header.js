//Libraries
import React from "react";
import classes from "./Header.module.scss";

//Components
import Navigation from "./Navigation/Navigation";

const Header = () => {

  return (
    <header className={classes.Header}>
      <nav>
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;