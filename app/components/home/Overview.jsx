import { Grid } from "@mui/material";
import React from "react";
import HomeCards from "../common/HomeCards";
import {
    AttachMoney,
    LocalMallOutlined,
    TaskOutlined,
    PeopleOutline,
  } from "@mui/icons-material";
  
const Overview = () => {
  return (
    <div>
      <Grid container className="px-2">
        <Grid item xs={12} md={3}>
          <HomeCards
            fill={"#22C55E"}
            title={"Total Sales"}
            value={"$35,000"}
            CardIcon={LocalMallOutlined}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <HomeCards
            fill={"#FF5200"}
            title={"Total Income"}
            value={"$37,802"}
            CardIcon={AttachMoney}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <HomeCards
            fill={"#CBD5E1"}
            title={"Orders Paid"}
            value={"$35,000"}
            CardIcon={TaskOutlined}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <HomeCards
            fill={"#2377FC"}
            title={"Total Visitors"}
            value={"34,780"}
            CardIcon={PeopleOutline}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
