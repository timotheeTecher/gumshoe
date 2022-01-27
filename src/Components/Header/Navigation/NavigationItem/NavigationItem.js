//Libraries 
import React from "react";
import classes from "./NavigationItem.module.scss";
import { NavLink } from "react-router-dom";

const NavigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.to} className={classes.NavigationItem}>{props.children}</NavLink>
    </li>
  );
}

export default NavigationItem;