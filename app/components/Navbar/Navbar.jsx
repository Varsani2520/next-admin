"use client";

import Poligon from "@/app/common/Poligon";
import { WebName } from "@/app/option/config";
import {
  ChatOutlined,
  MenuOutlined,
  DarkModeOutlined,
  LanguageOutlined,
  SettingsOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import { Avatar, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";

const Navbar = ({ toggleSidebar }) => {
  const [settingMenu, setSettingMenu] = useState(false);

  return (
    <div>
      <div className="navbar flex justify-between px-2 items-center bg-white p-5">
        {/* title - web */}
        <div className="title flex items-center gap-4">
          <IconButton onClick={() => toggleSidebar()}>
            <MenuOutlined />
          </IconButton>
          <input
            type="text"
            className=" p-4 w-[800px] border border-gray-200 rounded-md"
            placeholder="search here... "
          />
        </div>
        {/* right - icons */}
        <div className="flex justify-end gap-5 items-center">
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
            <div className="">
              <h1 className="text-sm">UserName</h1>
              <p className="text-sm">admin</p>
            </div>
          </div>

          <Divider className="ml-4" orientation="vertical" flexItem />

          <IconButton className="animate-spin pr-4">
            <SettingsOutlined className="h-8 w-8" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
