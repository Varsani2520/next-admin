import React from 'react'
import { Box, Typography, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const Logo = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '17px' }}>
                <Box sx={{ width: 40, height: 40 }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#1976d2" />
                        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">P</text>
                    </svg>
                </Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '10px' }}>Partner</Typography>
                <IconButton sx={{ marginLeft: 'auto' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Divider />
        </div>
    )
}

export default Logo
