"use client";
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StopOutlinedIcon from "@mui/icons-material/StopOutlined";

const DropDownMenu = ({
  title,
  projectName1,
  projectName2,
  startIcon,
  isOpen,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
        <IconButton>{startIcon}</IconButton>
        {isOpen && (
          <Typography
            variant="h6"
            onClick={toggleMenu}
          >
            {title}
          </Typography>
        )}
        {isOpen && (
          <IconButton
            sx={{ color: "blue", marginLeft: "auto" }}
            onClick={toggleMenu}
          >
            <ArrowDropDownIcon />
          </IconButton>
        )}
      </Box>

      {menuOpen && isOpen && (
        <div className="ml-4">
          <div className="flex items-center mb-1 hover:bg-blue-500 p-2 font-bold rounded-md hover:text-white hover:cursor-pointer" onClick={() => localStorage.setItem("ApiName", "ERequirement")}>
            <IconButton sx={{ color: "blue" }}>
              <StopOutlinedIcon />
            </IconButton>
            <h1>{projectName1}</h1>
          </div>
          <div className="flex items-center mb-1 hover:bg-blue-500 p-2 font-bold rounded-md hover:text-white hover:cursor-pointer" onClick={() => localStorage.setItem("ApiName", "EShop")}>
            <IconButton sx={{ color: "blue" }}>
              <StopOutlinedIcon />
            </IconButton>
            <h1>{projectName2}</h1>
          </div>
        </div>
      )}
    </Box>
  );
};

export default DropDownMenu;
