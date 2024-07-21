import React from "react";
import BreadCrumb from "../common/BreadCrumb";

const layout = ({ children }) => {
  return (
    <div className="">
      <div className="bg-white mt-4 p-4 rounded-2xl">
        <h1 className="font-bold text-2xl">Cart</h1>
        <BreadCrumb title={"Cart"} />
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default layout;
