"use client";

import OrderChart from "@/app/common/OrderChart";
import ProviderCard from "@/app/common/ProviderCard";
import { GetHomeScreen } from "@/app/services/GetHomeScreen";
import { Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";

const Analytics = () => {
  const series = [
    {
      name: "Orders",
      data: [31, 40, 28, 51, 42, 109, 100, 91, 85, 72, 50, 67], // Example data
    },
  ];

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  // (1 - 1) * 3, (1 * 3) = 0, 3
  const displayedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
              {displayedData &&
                displayedData.map((provider) => (
                  <Grid item xs={12} md={4} key={provider.id}>
                    <ProviderCard provider={provider} />
                  </Grid>
                ))}
            </Grid>
            <div className="text-right flex justify-end w-full">
              <Pagination // 10 / 3 = 3
                count={Math.ceil(data.length / itemsPerPage)}
                page={currentPage} // 1 PAGE
                variant="text"
                color="primary"
                onChange={handlePageChange}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;
