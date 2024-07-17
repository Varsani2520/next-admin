import Link from "next/link";
import React from "react";

const ProviderCard = ({ provider }) => {
  return (
    <Link href={`/provider/${provider.id}/${provider.slug}`}>
      <div className="p-4 border border-gray-200 rounded-2xl items-center flex flex-col m-2">
        <div className="img">
          <img
            src={provider.logo_image}
            alt={provider.title}
            height={100}
            width={100}
            className="flex justify-center items-center border rounded-full p-2 aspect-square"
            srcset=""
          />
        </div>
        <div className="other-info text-center">
          <h1 className="font-semibold">{provider.title}</h1>
          <h1 className="bg-green-400 p-2 rounded-md">
            {provider.order_complete} order completed
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default ProviderCard;
