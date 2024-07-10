'use client'
import React from 'react';
import { Box } from '@mui/material';
import Logo from './Reusable/Logo';
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
import SidebarHeading from '../components/common/SidebarHeading';

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <Box sx={{ background: 'white', width: isOpen ? 319 : 80, transition: 'width 0.3s' }}>
      <Logo isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px', justifyContent: 'center' }}>
       
        {/* Dashboard */}
        {isOpen && <SidebarHeading title={"MAIN HOME"} />}
        <DropDownMenu title={"Dashboard"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<WidgetsOutlinedIcon />} isOpen={isOpen} />
       
        {isOpen && <SidebarHeading title={"PROVIDER MANAGEMENT"}  />}

        <DropDownMenu title={"Ecommerce"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<ShoppingCartOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Providers"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<LayersOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Services | Category"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<LayersOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Cart"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<UploadFileOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Orders"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<UploadFileOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Orders Payment"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<UploadFileOutlinedIcon />} isOpen={isOpen} />

        {isOpen && <SidebarHeading title={"SERVICE MANAGEMENT"}  />}

        <DropDownMenu title={"Sliders"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<UploadFileOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Featured Section"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<UploadFileOutlinedIcon />} isOpen={isOpen} />

        {isOpen && <SidebarHeading title={"CUSTOMER MANAGEMENT"}  />}

        <DropDownMenu title={"User"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PermIdentityOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Roles"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PersonAddAltOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Trancations"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PersonAddAltOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Addresses"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PersonAddAltOutlinedIcon />} isOpen={isOpen} />

        {isOpen && <SidebarHeading title={"PROMOTIONS MANAGEMENT"}  />}

        <DropDownMenu title={"Promo codes"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<CollectionsOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Send Notifications"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<CollectionsOutlinedIcon />} isOpen={isOpen} />
        <DropDownMenu title={"Send Emails"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<CollectionsOutlinedIcon />} isOpen={isOpen} />

        {isOpen && <SidebarHeading title={"SUBSCRIPTION MANAGEMENT"}  />}

        <DropDownMenu title={"Subscription"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PieChartOutlineOutlinedIcon />} isOpen={isOpen} />

        {isOpen && <SidebarHeading title={"SYSTEM MANAGEMENT"}  />}

        <DropDownMenu title={"Faqs"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PieChartOutlineOutlinedIcon />} isOpen={isOpen} />
      </Box>
    </Box>
  );
};

export default SideBar;
