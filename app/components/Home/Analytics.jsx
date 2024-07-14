"use client";

import OrderChart from "@/app/common/OrderChart";
import ProviderCard from "@/app/common/ProviderCard";
import { GetHomeScreen } from "@/app/services/GetHomeScreen";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

const Analytics = () => {
  const series = [
    {
      name: "Orders",
      data: [31, 40, 28, 51, 42, 109, 100, 91, 85, 72, 50, 67], // Example data
    },
  ];

  const [data, setData] = useState([]);

  async function GetHomeScreenData() {
    try {
      const response = await GetHomeScreen();
      setData(response.top_categories);
      console.log("response", response);
    } catch (error) {
      console.log("Error in getting Data", error);
    }
  }

  useEffect(() => {
    GetHomeScreenData();
  }, []);

  return (
    <div className="">
      <Grid container>
        <Grid item xs={12} md={4} className="px-2">
          <div className="p-3 bg-white rounded-2xl">
            <OrderChart series={series} />
          </div>
        </Grid>
        <Grid item xs={12} md={8} className="px-2">
          <div className="p-3 bg-white rounded-2xl">
            <h1 className="text-2xl font-semibold">Top Providers</h1>
            <Grid container className="mt-2">
              {data &&
                data.map((provider) => (
                  <Grid item xs={12} md={4}>
                    <ProviderCard key={provider.id} provider={provider} />
                  </Grid>
                ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;
