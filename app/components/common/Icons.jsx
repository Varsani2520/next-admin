import { IconButton } from '@mui/material'
import React from 'react'

const Icons = ({ iconName }) => {
    return (
        <IconButton sx={{background:'#eff2f6',marginX:'10px'}}>
            {iconName}
        </IconButton>
    )
}

export default Icons
