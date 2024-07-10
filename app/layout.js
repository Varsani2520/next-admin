'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import './style/style.css'
import { Grid, Box } from "@mui/material";
import SideBar from "./Layouts/Sidebar";
import NavBar from "./Layouts/Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>Admin Panel | Partner</title>
      </head>
      <body className={inter.className}>
        <Grid container className="rootLayout">
          <Grid item md={sidebarOpen ? 2 : 0.5} xs={12} className="sidebar">
            <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          </Grid>
          <Grid item md={sidebarOpen ? 10 : 11.5} xs={12} className="content">
            <Box className="navbar">
              <NavBar />
            </Box>
            <Box className="mainContent">
              {children}
            </Box>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
