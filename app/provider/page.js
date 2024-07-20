"use client"; // Page Component

import React, { useEffect, useState } from "react";
import Heading from "../common/Heading";
import CustomTable from "../common/CustomTable";
import { GetHomeScreen } from "../services/GetHomeScreen";
import { useParams } from "next/navigation";
import { Box, Menu, MenuItem, TextField } from "@mui/material";
import CustomButton from "../common/CustomButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const Page = () => {
  const [providerInfo, setProviderInfo] = useState([]);
  const { id, category } = useParams();

  async function GetProvider() {
    const response = await GetHomeScreen();
    console.log("provider", response.top_categories);
    const providers = response.top_categories.map((category) => ({
      profile: {
        imageUrl: category.banner_image || "",
        name: category.title || "",
        email: category.provider_email || "",
      },
      providerName: category.title || "",
      companyName: category.insurance || "",
      stars: category.rating || 0,
      mobileNo: category.contact || "",
      type: category.type || "Individual",
      status: category.status || "Approved",
      operation: "Edit",
    }));
    setProviderInfo(providers);
  }

  useEffect(() => {
    GetProvider();
  }, []);

  const columns = [
    { field: "profile", headerName: "Profile" },
    { field: "providerName", headerName: "Provider Name" },
    { field: "companyName", headerName: "Company Name" },
    { field: "stars", headerName: "Stars" },
    { field: "mobileNo", headerName: "Mobile No" },
    { field: "type", headerName: "Type" },
    { field: "status", headerName: "Status" },
    { field: "operation", headerName: "Operation" },
  ];

  // For dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
     
      <Box p={2} className="bg-white my-4 rounded-md">
        <Box mb={2} display="flex" alignItems="center" gap={1} flexWrap="wrap">
          <CustomButton title="ALL" color="info" variant="outlined" />
          <CustomButton title="Approved" color="success" variant="outlined" />
          <CustomButton title="Disapproved" color="error" variant="outlined" />
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{ height: "40px" }}
          />
          <CustomButton
            startIcon={<FilterListIcon />}
            variant="outlined"
            sx={{ height: "40px" }}
          />
          <CustomButton
            startIcon={<DownloadIcon />}
            title="Download"
            variant="outlined"
            sx={{ height: "40px" }}
          />
          <Box flexGrow={1} />
          <CustomButton
            startIcon={<AddCircleOutlineRoundedIcon />}
            title="Add Provider"
            variant="contained"
            href="/provider/add_provider"
            sx={{ height: "40px" }}
          />
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Filter Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Filter Option 2</MenuItem>
          </Menu>
        </Box>
        <CustomTable columns={columns} rows={providerInfo} />
      </Box>
    </>
  );
};

export default Page;
