import React from "react";
import ProviderDetails from "./ProviderDetails";

const General = ({ provider }) => {
  console.log("General", provider);
  return (
    <div className="p-2">
      {provider &&
        provider.map((SingleProvider) => (
          <ProviderDetails SingleProvider={SingleProvider} />
        ))}
    </div>
  );
};

export default General;
