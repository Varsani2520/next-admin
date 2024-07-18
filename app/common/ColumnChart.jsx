"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const ColumnChart = () => {
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    // Define the chart options and series data inside useEffect to ensure they are set after the component mounts
    setChartOptions({
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
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
      yaxis: {
        title: {
          text: "Revenue (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    });

    setChartSeries([
      {
        name: "Net Revenue",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 67, 72, 78],
      },
      {
        name: "Gross Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 102, 111, 120],
      },
      {
        name: "Profit",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 55, 65],
      },
    ]);
  }, []);

  return (
    <div className="column-chart">
      {chartOptions && chartSeries.length > 0 && (
        <ApexCharts
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={350}
        />
      )}
    </div>
  );
};

export default ColumnChart;
