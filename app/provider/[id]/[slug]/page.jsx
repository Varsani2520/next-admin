"use client";

import General from "@/app/components/Provider/General";
import { providerRoutes } from "@/app/option/config";
import { GetHomeScreen } from "@/app/services/GetHomeScreen";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [providerInfo, setProviderInfo] = useState([]);
  const { id } = useParams();

  // convert single object into array
  const provider = [JSON.parse(localStorage.getItem("provider"))];

  // if provider store in localstorage then fetch from there otherwise send req to api
  async function GetProviderInformation() {
    if (provider) {
      setProviderInfo(provider);
    } else {
      const response = await GetHomeScreen();
      console.log("not in local sotrage", response);
      // filter provider based on params id
      const providers = response.top_categories.filter((c) => c.id == id);
      setProviderInfo(providers);
      console.log("from network ", providers);
    }
  }

  useEffect(() => {
    GetProviderInformation();
  }, []);

  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-2xl">
        <h1 className="font-bold text-2xl">
          {providerInfo && providerInfo.map((p) => p.title)}
        </h1>
      </div>
      <div className="provider-routes flex gap-4 mt-4 ml-2">
        {providerRoutes.map((route) => (
          <Link key={route.name} href={route.url}>
            <h1 className="flex p-2 hover:bg-blue-500 rounded-md hover:text-white">
              {route.name}
            </h1>
          </Link>
        ))}
      </div>
      <General provider={providerInfo} />
    </div>
  );
};

export default page;
