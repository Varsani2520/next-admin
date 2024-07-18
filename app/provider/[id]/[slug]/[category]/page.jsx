"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProviderLayout from "../ProviderLayout";
import General from "@/app/components/Provider/General";
import { GetHomeScreen } from "@/app/services/GetHomeScreen";
import Company from "@/app/components/Provider/Company";
import Bookings from "@/app/components/Provider/Bookings";
import Offers from "@/app/components/Provider/Offers";
import Services from "@/app/components/Provider/Services";
import Reviews from "@/app/components/Provider/Reviews";
import Payments from "@/app/components/Provider/Payments";

const page = () => {
  const [providerInfo, setProviderInfo] = useState([]);
  const { id, category } = useParams();

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
    <ProviderLayout>
      {category == "general" && <General provider={providerInfo} />}
      {category == "company" && <Company provider={providerInfo} />}
      {category == "services" && <Services provider={providerInfo} />}
      {category == "bookings" && <Bookings provider={providerInfo} />}
      {category == "offers" && <Offers provider={providerInfo} />}
      {category == "reviews" && <Reviews provider={providerInfo} />}
      {category == "payments" && <Payments provider={providerInfo} />}
    </ProviderLayout>
  );
};

export default page;
