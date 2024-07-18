import React from "react";

const ServiceInfo = ({ Icon, title, desc }) => {
  return (
    <div className="flex gap-2 items-center my-4">
      <div className="bg-blue-500 p-2 flex justify-center items-center rounded-md w-max">
        {/* dynamic icon */}
        <Icon className="h-5 w-5 text-white" />
      </div>
      {/* dynamic service information */}
      <div className="max-w-[300px]">
        <h1 className="font-semibold">{title}</h1>
        <h1 className="text-gray-600">{desc}</h1>
      </div>
    </div>
  );
};

export default ServiceInfo;
