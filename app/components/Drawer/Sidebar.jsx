import Poligon from "@/app/common/Poligon";
import { WebName } from "@/app/option/config";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex p-4 gap-3 items-center">
        <Poligon fill={"#000"} text={WebName.slice(0, 1)} />
        <h1 className="font-bold text-2xl">{WebName}</h1>
      </div>
    </div>
  );
};

export default Sidebar;
