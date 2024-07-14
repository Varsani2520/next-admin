import { NavigateNext } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const NavigationLink = ({ target, title, icon, isOpen }) => {
  return (
    <Link href={target}>
      <div className="link flex justify-between w-full my-2 p-3 rounded-md hover:bg-blue-500 hover:text-white ">
        <div className="flex gap-3">
          {icon}
          <h1 className="font-semibold">{title}</h1>
        </div>
        <div className="">
          <NavigateNext />
        </div>
      </div>
    </Link>
  );
};

export default NavigationLink;
