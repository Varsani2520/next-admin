import { Typography } from '@mui/material'
import React from 'react'

const Heading = ({ title }) => {
    return (
        <>
            <Typography sx={{ fontWeight: 'bold', color: '#bdc7d3' }}>{title}</Typography></>
    )
}

export default Heading
