"use client";

import {
  ChatOutlined,
  MenuOutlined,
  DarkModeOutlined,
  LanguageOutlined,
  SettingsOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Divider, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../Drawer/Sidebar";
import Settings from "../Drawer/Settings";

const Navbar = ({ toggleSidebar }) => {
  const [settingMenu, setSettingMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className="navbar flex justify-between px-2 items-center bg-white p-5">
        {/* title - web */}
        <div className="title flex items-center gap-4">
          <Box display={{ xs: "none", md: "block" }}>
            <IconButton onClick={() => toggleSidebar()}>
              <MenuOutlined />
            </IconButton>
            <input
              type="text"
              className=" p-4 w-[800px] border border-gray-200 rounded-md"
              placeholder="search here... "
            />
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton onClick={() => setOpenMenu(true)}>
              <MenuOutlined />
            </IconButton>
          </Box>
        </div>
        {/* right - icons */}
        <div className="flex justify-end gap-2 md:gap-5 items-center">
          <IconButton className="bg-gray-200">
            <LanguageOutlined />
          </IconButton>
          <IconButton className="bg-gray-200">
            <DarkModeOutlined />
          </IconButton>
          <IconButton className="bg-gray-200">
            <NotificationsOutlined />
          </IconButton>
          <IconButton className="bg-gray-200">
            <ChatOutlined />
          </IconButton>
          <div className="flex gap-2">
            <Avatar />
            <div className="hidden sm:block">
              <h1 className="text-sm">UserName</h1>
              <p className="text-sm">admin</p>
            </div>
          </div>

          <Divider className="ml-4" orientation="vertical" flexItem />

          <IconButton
            onClick={() => setSettingMenu(true)}
            className="animate-spin mr-4"
          >
            <SettingsOutlined className="h-8 w-8" />
          </IconButton>
        </div>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
        <Sidebar />
      </Drawer>
      <Drawer open={settingMenu} anchor="right" onClose={() => setSettingMenu(false)}>
        <Settings />
      </Drawer>
    </div>
  );
};

export default Navbar;
