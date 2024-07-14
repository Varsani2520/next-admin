"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { Grid } from "@mui/material";
import Sidebar from "./components/Drawer/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [burgerMenu, setBurgerMenu] = useState(true);

  return (
    <html lang="en">
      <head>
        <title>Admin Panel | Partner</title>
      </head>
      <body className={inter.className}>
        <Grid container>
          <Grid item xs={12} md={burgerMenu ? 2 : 0} display={burgerMenu ? "block" : "none"}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={burgerMenu ? 10 : 12}>
            <Navbar toggleSidebar={() => setBurgerMenu(!burgerMenu)} />
            <div className="p-2">{children}</div>
            <Footer />
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
