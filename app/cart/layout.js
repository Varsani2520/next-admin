import React from "react";
import BreadCrumb from "../common/BreadCrumb";

const layout = ({ children }) => {
  return (
    <div>
      <BreadCrumb title={"Cart"} />
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default layout;
