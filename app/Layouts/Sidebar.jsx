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
const SideBar = () => {
  return (
    <Box sx={{ background: 'white' }}>
      {/* Logo and Title */}
      <Logo />
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px', justifyContent: 'center' }}>
        <Heading title={"MAIN HOME"} sx={{ padding: '10px' }} />

        {/* Dashboard Menu */}
        <DropDownMenu title={"Dashboard"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<WidgetsOutlinedIcon />} />
        <Heading title={"ALL PAGES"} sx={{ padding: '10px' }} />

        {/* Dashboard Menu */}
        <DropDownMenu title={"Ecommerce"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<ShoppingCartOutlinedIcon />} />
        <DropDownMenu title={"Category"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<LayersOutlinedIcon />} />
        <DropDownMenu title={"Attributes"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<ViewInArOutlinedIcon />} />
        <DropDownMenu title={"Order"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<UploadFileOutlinedIcon />} />
        <DropDownMenu title={"User"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PermIdentityOutlinedIcon />} />
        <DropDownMenu title={"Roles"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PersonAddAltOutlinedIcon />} />
        <DropDownMenu title={"Gallery"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<CollectionsOutlinedIcon />} />
        <DropDownMenu title={"Report"} projectName2={"eShop"} projectName1={"eRequirements"} startIcon={<PieChartOutlineOutlinedIcon />} />
      </Box>
    </Box>
  );
};

export default SideBar;
