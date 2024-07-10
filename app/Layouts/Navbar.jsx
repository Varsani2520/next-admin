'use client'
import { Badge, Box, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Icons from '../components/common/Icons';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOverscanOutlinedIcon from '@mui/icons-material/SettingsOverscanOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const NavBar = () => {
    const [theme, setTheme] = useState(true);
    const isMediumOrSmaller = useMediaQuery('(max-width:960px)'); // You can adjust the breakpoint value as needed

    return (
        <Box sx={{ background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            {/* search bar */}
            {!isMediumOrSmaller && (
                <Box sx={{ flexGrow: 1, maxWidth: '50%', marginLeft: '2%' }}>
                    <TextField
                        label="search.."
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Icons iconName={<SearchIcon />} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                {isMediumOrSmaller ? (
                    // Only display the settings icon on medium and smaller devices
                    <Icons iconName={<SettingsOutlinedIcon />} />
                ) : (
                    // Display all icons on larger devices
                    <>
                        {/* language icon */}
                        <Icons iconName={<TranslateOutlinedIcon />} />
                        {/* theme icon */}
                        {theme ? <Icons iconName={<LightModeOutlinedIcon />} /> : <Icons iconName={<NightsStayOutlinedIcon />} />}
                        {/* notification icon */}
                        <Icons iconName={
                            <Badge badgeContent={4} color="warning">
                                <NotificationsNoneOutlinedIcon />
                            </Badge>
                        } />
                        {/* message icon */}
                        <Icons iconName={
                            <Badge badgeContent={4} color="info">
                                <ChatBubbleOutlineOutlinedIcon />
                            </Badge>
                        } />
                        {/* scanner icon */}
                        <Icons iconName={<SettingsOverscanOutlinedIcon />} />
                        {/* menu icon */}
                        <Icons iconName={<WidgetsOutlinedIcon />} />
                        {/* profile icon */}
                        <Icons iconName={<AccountCircleOutlinedIcon />} />
                        <Box sx={{ display: 'block', marginLeft: '10px', textAlign: 'left' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Kristin Wastom</Typography>
                            <Typography sx={{ color: 'gray' }}>Admin</Typography>
                        </Box>
                        {/* setting icon */}
                        <Icons iconName={<SettingsOutlinedIcon />} />
                    </>
                )}
            </Box>
        </Box>
    );
}

export default NavBar;
