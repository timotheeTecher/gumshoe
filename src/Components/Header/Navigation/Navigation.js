//Libraries
import React from "react";
import routes from "../../../config/routes";
import classes from "./Navigation.module.scss";

//Components
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => {
  return(
    <ul className={classes.Navigation}>
      <NavigationItem to={routes.HOME}>Home</NavigationItem>
      <NavigationItem to={routes.SHOP}>Shop</NavigationItem>
      <NavigationItem to={routes.EVENTS}>Events</NavigationItem>
      <NavigationItem to={routes.ABOUT}>About us</NavigationItem>
      <NavigationItem to={routes.CONTACT}>Contact</NavigationItem>
    </ul>
  );
}

export default Navigation;