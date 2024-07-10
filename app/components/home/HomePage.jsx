import React from "react";
import HomeCards from "../common/HomeCards";
import { Grid } from "@mui/material";
import {
  AttachMoney,
  LocalMallOutlined,
  TaskOutlined,
  PeopleOutline,
  HomeMaxOutlined,
} from "@mui/icons-material";
import Row2 from "./Row2";

const HomePage = () => {
  return (
    <div className="mt-10">
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

      <Row2 />
    </div>
  );
};

export default HomePage;
