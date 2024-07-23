import React from "react";
import Heading from "@/app/common/Heading";
import { Grid } from "@mui/material";
const layout = ({ children }) => {
  return (
    <div>
      <Heading heading="Sliders" />
      <Grid container spacing={2} sx={{marginTop:'10px'}}>
        <Grid xs={12} md={3}></Grid>
        <Grid xs={12} md={9}>{children}</Grid>
      </Grid>
    </div>
  );
};

export default layout;
