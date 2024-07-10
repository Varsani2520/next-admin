'use client'
import React from 'react';
import { Box } from '@mui/material';
import Logo from './Reusable/Logo';
import Heading from '../components/common/Heading';
import DropDownMenu from '../components/common/DropDownMenu';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <Box sx={{ background: 'white', width: isOpen ? 319 : 80, transition: 'width 0.3s' }}>
      <Logo isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px', justifyContent: 'center' }}>
        {isOpen && <Heading title={"MAIN HOME"} sx={{ padding: '10px' }} />}
        <DropDownMenu title={"Dashboard"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<WidgetsOutlinedIcon />} isOpen={isOpen} />
        {isOpen && <Heading title={"ALL PAGES"} sx={{ padding: '10px' }} />}
        <DropDownMenu title={"Ecommerce"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<ShoppingCartOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Category"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<LayersOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Attributes"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<ViewInArOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Order"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<UploadFileOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"User"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PermIdentityOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Roles"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PersonAddAltOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Gallery"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<CollectionsOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Report"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PieChartOutlineOutlinedIcon />} isOpen={isOpen} />
      </Box>
    </Box>
  );
};

export default SideBar;
