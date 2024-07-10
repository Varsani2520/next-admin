"use client";

import Chart from "react-apexcharts";

const CardCharts = ({ chartOptions, chartSeries, color }) => {
  return (
    <Chart
      options={{
        ...chartOptions,
        chart: {
          ...chartOptions.chart,
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          ...chartOptions.xaxis,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        grid: {
          show: false,
        },
        stroke: {
          curve: "smooth",
          width: 4,
          colors: [color],
        },
      }}
      series={chartSeries}
      type="line"
      height={50}
    />
  );
};

export default CardCharts;