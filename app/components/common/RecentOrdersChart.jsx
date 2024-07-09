"use client"

import React from "react";
import ReactApexChart from "react-apexcharts";

const RecentOrdersChart = () => {
  const series = [
    {
      name: "Orders",
      data: [31, 40, 28, 51, 42, 109, 100, 91, 85, 72, 50, 67], // Example data
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default RecentOrdersChart;
