'use client'
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
const DropDownMenu = ({ title, projectName1, projectName2 ,startIcon}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Box>
            {/* Menu Title with Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                {/* Title on the right */}
                <IconButton sx={{ color: 'blue' }}>
                   {startIcon}
                </IconButton>
                <Typography
                    variant="h6"
                    onClick={toggleMenu}
                    sx={{ cursor: 'pointer', marginLeft: 1 }}
                >
                    {title}
                </Typography>
                {/* Blue Icon on the left */}
                <IconButton sx={{ color: 'blue', marginLeft: 'auto' }} onClick={toggleMenu}>
                    {<ArrowDropDownIcon />}
                </IconButton>

            </Box>

            {menuOpen && (
                <Box sx={{ marginLeft: '24px' }}>
                    {/* Option 1 */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                        <IconButton sx={{ color: 'blue' }}>
                            <StopOutlinedIcon />
                        </IconButton>
                        <Typography variant="body1">{projectName1}</Typography>
                    </Box>

                    {/* Option 2 */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                        <IconButton sx={{ color: 'blue' }} >
                            <StopOutlinedIcon />
                        </IconButton>
                        <Typography variant="body1">{projectName2}</Typography>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default DropDownMenu;
