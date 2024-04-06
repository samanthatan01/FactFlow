/*=============================================================================
 | Purpose:  USE REACT-PRO-SIDEBAR COMPONENTS TO CREATE A HIGH LEVEL AND
 |           CUSTOMIZABLE SIDE NAVIGATION
 |           DOCUMENTATION: https://www.npmjs.com/package/react-pro-sidebar
 |           ICONS FROM MATERIAL UI: https://mui.com/material-ui/material-icons/
 |
 | Input / Parameters:  NA.
 |   
 | Output / Returns:  NAVIGATES XXXXXX <<<< UPDATE LATER
 |
 *===========================================================================*/

import React, { useState, useContext } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import styles from "./SideBar.module.css";
import UserContext from "../context/user";

// importing icons from MUI Icons
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import AttractionsOutlinedIcon from "@mui/icons-material/AttractionsOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const userCtx = useContext(UserContext);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sidebar
      className={styles.sidebar}
      collapsed={collapsed}
      onToggle={toggleSidebar}
    >
      <Menu>
        <MenuItem
          icon={collapsed ? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />}
          onClick={() => {
            toggleSidebar();
          }}
        ></MenuItem>
        {!collapsed && (
          <MenuItem>
            <p className={styles.sidebar}>Top Articles</p>
          </MenuItem>
        )}
        <SubMenu icon={<AttachMoneyOutlinedIcon />} label="Finance">
          {" "}
          <MenuItem>Test</MenuItem>
          <MenuItem>Test 2</MenuItem>
          <MenuItem>Test 3</MenuItem>
        </SubMenu>
        <MenuItem icon={<DirectionsRunOutlinedIcon />}> Sports</MenuItem>
        <MenuItem icon={<WorkOutlineOutlinedIcon />}> Business</MenuItem>
        <MenuItem icon={<AccountBalanceOutlinedIcon />}> Politics</MenuItem>
        <MenuItem icon={<MemoryOutlinedIcon />}> Tech</MenuItem>
        <MenuItem icon={<AttractionsOutlinedIcon />}> Entertainment</MenuItem>

        {/* render the additional side bar links if user is logged in */}
        {/* {userCtx && userCtx.role === "user" ? ( */}
        {userCtx ? (
          <MenuItem>
            <p className={styles.sidebar}>Feed</p>
          </MenuItem>
        ) : (
          ""
        )}
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
