import React from "react";
import ProviderDetails from "./ProviderDetails";

const General = ({ provider }) => {
  console.log("General", provider);
  return (
    <div className="p-2 my-2">
      {provider &&
        provider.map((SingleProvider) => (
          <ProviderDetails
            key={SingleProvider.id}
            SingleProvider={SingleProvider}
          />
        ))}
    </div>
  );
};

export default General;
