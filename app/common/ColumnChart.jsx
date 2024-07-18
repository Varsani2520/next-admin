"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const ColumnChart = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    // Define the chart options and series data inside useEffect to ensure they are set after the component mounts
    setChartOptions({
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
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
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ]);
  }, []);

  // Ensure the component only renders in the browser
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className="column-chart bg-white rounded-md" id="chart">
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
