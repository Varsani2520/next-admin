import Link from "next/link";
import React from "react";

const BreadCrumb = ({ title, url, redirectReq, secondtitle, secondurl, First }) => {
  return (
    <div className="flex">
      <Link className="text-gray-500" href={"/"}>
        {First ? First : "Home"}
      </Link>
      <span className="mx-1">/</span>
      {secondtitle && (
        <>
          <Link className="text-gray-500" href={secondurl ? secondurl : "/"}>{secondtitle}</Link>
          <span className="mx-1">/</span>
        </>
      )}
      {redirectReq ? <Link href={url}>{title}</Link> : <h1>{title}</h1>}
    </div>
  );
};

export default BreadCrumb;
