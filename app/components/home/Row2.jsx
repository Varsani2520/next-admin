"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import RecentOrdersChart from "../common/RecentOrdersChart";

const data = {
  labels: [
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
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2, 3, 15, 10, 8, 7, 13, 6],
      fill: true,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
    },
  ],
};

const Row2 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-2xl">
            <div className="flex justify-between">
                <h1 className="text-xl font-bold mx-5 mt-2">Recent Orders</h1>
                <a href="#" className="text-blue-500">View all</a>  
            </div>
          <RecentOrdersChart />
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Top Products</h2>
            <a href="#" className="text-blue-500">
              View all
            </a>
          </div>
          {/* List of products */}
          <ul>
            {/* Example product */}
            <li className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Product"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-gray-800 font-bold">Product Name</p>
                  <p className="text-gray-500">100 Items</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-800 font-bold">-15%</p>
                <p className="text-gray-500">$27.00</p>
              </div>
            </li>
            {/* Repeat similar items */}
          </ul>
        </div>

        {/* Top Countries By Sales */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Top Countries By Sales</h2>
            <a href="#" className="text-blue-500">
              View all
            </a>
          </div>
          <div className="text-3xl font-bold mb-2">$37,802</div>
          <div className="text-green-500 mb-4">1.56% since last weekend</div>
          {/* List of countries */}
          <ul>
            {/* Example country */}
            <li className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="mr-2">🇹🇷</span>
                <p className="text-gray-800">Turkey</p>
              </div>
              <p className="text-gray-800">6,972</p>
            </li>
            {/* Repeat similar items */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Row2;
