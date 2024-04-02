/*=============================================================================
 | Purpose:  USE REACT-ROUTER-DOM COMPONENTS TO CREATE A CUSTOMIZABLE TOP
 |           NAVIGATION BAR THAT WILL ALSO INCLUDE THE APP LOGO AND LOGIN
 |           BUTTON.
 |           DOCUMENTATION: https://www.npmjs.com/package/react-router-dom
 |           ICONS FROM MATERIAL UI: https://mui.com/material-ui/material-icons/
 |
 | Input / Parameters:  NA.
 |   
 | Output / Returns:  NAVIGATES XXXXXX <<<< UPDATE LATER
 |
 *===========================================================================*/

import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

// importing icons from MUI Icons
import LoginIcon from "@mui/icons-material/Login";

/*====================
CREATE NAVBAR & SET ITS NAVIGATION LOGIC
====================*/

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <img
              src="/src/assets/factFlow_logo.png"
              width="192"
              height="35"
              className="d-inline-block align-top"
              alt=""
            ></img>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/main"
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/main"
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/main"
            >
              Main
            </NavLink>
          </li>
          <li>
            <button className={styles.loginButton}>
              Login <LoginIcon />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;