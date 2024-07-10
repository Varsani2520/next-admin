"use client";

import React from "react";
import { Box } from "@mui/material";
import Logo from "./Reusable/Logo";
import DropDownMenu from "../components/common/DropDownMenu";
import SidebarHeading from "../components/common/SidebarHeading";
import { WidgetsOutlined } from "@mui/icons-material";
import Routes from "../components/Navbar/Routes";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <Box
      sx={{
        background: "white",
        width: isOpen ? 319 : 80,
        transition: "width 0.3s",
      }}
    >
      <Logo isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Box className="flex flex-col p-3 justify-center">
        {/* Dashboard */}
        {isOpen && <SidebarHeading title={"MAIN HOME"} />}
        <DropDownMenu
          title={"Dashboard"}
          projectName2={"eShop"}
          projectName1={"eRequirements"}
          startIcon={<WidgetsOutlined />}
          isOpen={isOpen}
        />
        <Routes isOpen={isOpen} />
      </Box>
    </Box>
  );
};

export default SideBar;
