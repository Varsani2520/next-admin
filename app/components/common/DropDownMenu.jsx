'use client'
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';

const DropDownMenu = ({ title, projectName1, projectName2, startIcon, isOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
        <IconButton sx={{ color: 'blue' }}>
          {startIcon}
        </IconButton>
        {isOpen && (
          <Typography
            variant="h6"
            onClick={toggleMenu}
            sx={{ cursor: 'pointer', marginLeft: 1 }}
          >
            {title}
          </Typography>
        )}
        {isOpen && (
          <IconButton sx={{ color: 'blue', marginLeft: 'auto' }} onClick={toggleMenu}>
            <ArrowDropDownIcon />
          </IconButton>
        )}
      </Box>

      {menuOpen && isOpen && (
        <Box sx={{ marginLeft: '24px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <IconButton sx={{ color: 'blue' }}>
              <StopOutlinedIcon />
            </IconButton>
            <Typography variant="body1">{projectName1}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <IconButton sx={{ color: 'blue' }}>
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
