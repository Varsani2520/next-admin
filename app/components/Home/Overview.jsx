import { Grid } from "@mui/material";
import React from "react";
import OverviewCards from "../../common/OverviewCards.jsx";
import {
  AttachMoney,
  LocalMallOutlined,
  TaskOutlined,
  PeopleOutline,
} from "@mui/icons-material";

const chartOptions = {
  chart: {
    id: "basic-line",
  },
  xaxis: {
    categories: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
  },
};

const chartSeries = [
  {
    name: "series-1",
    data: [30, 240, 35, 50, 149, 60, 10, 591, 125],
  },
];

const Overview = () => {
  return (
    <div>
      <Grid container className="">
        <Grid item xs={12} md={3}>
          <OverviewCards
            fill={"#22C55E"}
            title={"Total Sales"}
            value={"$35,000"}
            CardIcon={LocalMallOutlined}
            chartOptions={chartOptions}
            chartSeries={chartSeries}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <OverviewCards
            fill={"#FF5200"}
            title={"Total Income"}
            value={"$37,802"}
            CardIcon={AttachMoney}
            chartOptions={chartOptions}
            chartSeries={chartSeries}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <OverviewCards
            fill={"#CBD5E1"}
            title={"Orders Paid"}
            value={"$35,000"}
            CardIcon={TaskOutlined}
            chartOptions={chartOptions}
            chartSeries={chartSeries}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <OverviewCards
            fill={"#2377FC"}
            title={"Total Visitors"}
            value={"34,780"}
            CardIcon={PeopleOutline}
            chartOptions={chartOptions}
            chartSeries={chartSeries}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;