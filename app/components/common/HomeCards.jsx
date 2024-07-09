import React from "react";
import { SvgIcon } from "@mui/material";

const HomeCards = ({ svg, fill, title, value, CardIcon }) => {
  return (
    <div>
      <div className="bg-white border p-5 w-auto mx-3 rounded-2xl mb-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="relative flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="52"
                viewBox="0 0 48 52"
                fill="none"
              >
                <path d={svg} fill={fill} />
              </svg>
              <SvgIcon
                component={CardIcon}
                className="absolute"
                style={{ width: "24px", height: "24px", color: "white" }}
              />
            </div>
            <div className="">
              <h1 className="text-gray-500">{title}</h1>
              {/* it will come dynamically from api */}
              <h1 className="font-bold text-3xl">{value}</h1>
            </div>
          </div>
          <div className="value">
            {/* it will come dynamically from api */}
            <h1>4.58%</h1>
          </div>
        </div>
        {/* Graph */}
        <div className="border-t-4 mt-4 "></div>
      </div>
    </div>
  );
};

export default HomeCards;
