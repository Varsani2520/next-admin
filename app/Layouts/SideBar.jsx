import { Box, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { IconButton } from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CustomizedMenus from './dropDownMenu';


const SideBar = () => {
    return (
        <Grid container >
            <Grid lg={3} md={3} xs={12}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',


                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2
                    }}>
                        <Image src="/Images/logo.png" width={50} height={50} alt='admin panel logo' />
                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 2 }}>Partners</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton color="inherit">
                                <MenuOpenIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Divider sx={{ mb: 2, color: 'red' }} />
                    {/* drop down menu default  Dashboard and click on that then dissplay eshop ,erequiremnt,news web,spotify with icons*/}
                    <CustomizedMenus/>
                </Box>
            </Grid>
            <Grid lg={3} md={3} xs={12}>

            </Grid>
        </Grid>
    )
}

export default SideBar
