import React from "react";
import { Verified } from "@mui/icons-material";
import OverviewCards from "@/app/common/OverviewCards";
import { Grid } from "@mui/material";
import ColumnChart from "@/app/common/ColumnChart";

const ProviderDetails = ({ SingleProvider }) => {
  return (
    <>
      <Grid container key={SingleProvider.id} className="">
        <Grid item xs={12} md={6}>
          {/* provider logo and banner image */}
          <div className="logo border p-2 mx-2 rounded-2xl">
            <div className="logo">
              <img
                src={SingleProvider.logo_image}
                height={"150px"}
                width={"150px"}
                className="object-cover absolute rounded-br-2xl border-4 border-black border-t-0 border-l-0 "
                alt=""
              />
            </div>
            <div className="img">
              <img
                src={SingleProvider.banner_image}
                height={"300px"}
                className="rounded-2xl h-[300px] object-cover"
                width={"100%"}
                alt=""
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="info border p-2 mx-2 rounded-2xl">
            <div className="flex items-center gap-2">
              <h1 className="text-xl py-2 font-bold">{SingleProvider.title}</h1>
              {SingleProvider.verified && <Verified color="primary" />}
            </div>

            <div className="flex gap-2 flex-col sm:flex-row">
              <p className="py-2 bg-red-500 hover:bg-red-600 hover:cursor-pointer w-max px-2 rounded-md text-white">
                upto {SingleProvider.discount} off
              </p>

              <h1 className="py-2 bg-blue-500 w-max rounded-md px-2 hover:cursor-pointer hover:bg-blue-600 text-white">
                {SingleProvider.years_of_work} years of Experience
              </h1>
            </div>

            <p className="text-gray-500 py-2">
              {SingleProvider.small_description}
            </p>

            <h1 className="py-2 bg-green-500 px-2 text-white hover:bg-green-600 rounded-md w-max hover:cursor-pointer">
              {SingleProvider.order_complete} order completed
            </h1>

            <h1 className="py-2 font-semibold ">Contact Information</h1>
            <div className="contact">
              <h1 className="font-medium italic my-1">
                {SingleProvider.provider_email}
              </h1>
              <h1 className="font-medium italic my-1">{SingleProvider.city}</h1>
              <h1 className="font-medium italic my-1">
                {SingleProvider.country}
              </h1>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className="mt-5">
        <Grid item xs={12} md={6}>
          <div className="col-span-6">
            <OverviewCards
              fill={"#22C55E"}
              title={"Total Sales"}
              value={"$35,000"}
            />
          </div>
          <div className="col-span-6">
            <OverviewCards
              fill={"#FF5200"}
              title={"Total Income"}
              value={"$37,802"}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
            <ColumnChart />
        </Grid>
      </Grid>
    </>
  );
};

export default ProviderDetails;
