import BreadCrumb from "@/app/common/BreadCrumb";
import { providerRoutes } from "@/app/option/config";
import { GetHomeScreen } from "@/app/services/GetHomeScreen";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProviderLayout = ({ children }) => {
  const [providerInfo, setProviderInfo] = useState([]);
  const { id, slug, category } = useParams();

  useEffect(() => {
    // This code runs only on the client side
    if (typeof window !== "undefined") {
      const provider = JSON.parse(localStorage.getItem("provider"));

      async function GetProviderInformation() {
        if (provider) {
          setProviderInfo(provider);
        } else {
          const response = await GetHomeScreen();
          console.log("not in local storage", response);
          // Filter provider based on params id
          const providers = response.top_categories.filter((c) => c.id == id);
          setProviderInfo(providers);
          console.log("from network", providers);
          localStorage.setItem("provider", JSON.stringify(providers));
        }
      }

      GetProviderInformation();
    }
  }, [id]);

  return (
    <div>
      <div className="bg-white mt-4 p-4 rounded-2xl">
        <h1 className="font-bold text-2xl">
          {providerInfo && providerInfo.map((p) => p.title)}
        </h1>
        <BreadCrumb title={category ? category : "General"} />
      </div>
      <div className="provider-routes flex gap-4 mt-4 ml-2 overflow-x-auto">
        {providerRoutes.map((route) => (
          <Link key={route.name} href={`${route.url}`}>
            <h1 className="flex p-2 hover:bg-blue-500 active:bg-blue-500 rounded-md hover:text-white">
              {route.name}
            </h1>
          </Link>
        ))}
      </div>
      {/* dynamic content */}
      {children}
    </div>
  );
};

export default ProviderLayout;
