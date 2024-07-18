"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProviderLayout from "../ProviderLayout";
import General from "@/app/components/Provider/General";
import { GetHomeScreen } from "@/app/services/GetHomeScreen";
import Company from "@/app/components/Provider/Company";

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
      {category == "services" && <h1>Services</h1>}
      {category == "bookings" && <h1>Bookings</h1>}
      {category == "offers" && <h1>Promo Codes</h1>}
      {category == "reviews" && <h1>Reviews</h1>}
      {category == "payments" && <h1>Payment</h1>}
    </ProviderLayout>
  );
};

export default page;
