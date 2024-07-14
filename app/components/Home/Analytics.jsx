import OrderChart from "@/app/common/OrderChart";
import { Grid } from "@mui/material";
import React from "react";

const Analytics = () => {
  const series = [
    {
      name: "Orders",
      data: [31, 40, 28, 51, 42, 109, 100, 91, 85, 72, 50, 67], // Example data
    },
  ];
  return (
    <div className="">
      <Grid container >
        <Grid item xs={12} md={4} className="px-2">
          <div className="p-3 bg-white rounded-2xl">
            <OrderChart series={series} />
          </div>
        </Grid>
        <Grid item xs={12} md={8} className="px-2">
         <div className="p-3 bg-white rounded-2xl">
            <h1 className="text-2xl font-semibold">Top Providers</h1>
         </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;
