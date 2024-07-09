'use client'
import React, { useState } from 'react';
import { Box, Divider, Grid, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import CustomizedMenus from './dropDownMenu';
import NavBar from './NavBar';

const SideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Grid container spacing={2}>
            {/* Sidebar Section */}
            {sidebarOpen && (
                <Grid item lg={3} md={3} xs={12}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}>
                        {/* Logo and Title */}
                       
                        <Divider sx={{ mb: 2, bgcolor: 'red' }} />
                        {/* Dropdown Menu */}
                        <CustomizedMenus />
                    </Box>
                </Grid>
            )}

            {/* Main Content Section */}
            <Grid item lg={sidebarOpen ? 9 : 12} md={sidebarOpen ? 9 : 12} xs={12}>
                <NavBar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
            </Grid>
        </Grid>
    );
};

export default SideBar;
