import { providerRoutes } from "@/app/option/config";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-2xl">
        {/* provider Name Dynamic */}
        <h1>Provider Name - Info</h1>
      </div>
      <div className="provider-routes flex gap-4 mt-4 ml-2">
        {providerRoutes.map((route) => (
          // add url in config file for all routes
          <Link key={route.name} href={route.url}>
            <h1 className="flex p-2 hover:bg-blue-500 rounded-md hover:text-white">
              {route.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
