import React from "react";
import Analytics from "./Analytics";
import Overview from "./Overview";

const HomePage = () => {
  return (
    <div className="mt-10">
      <Overview />
      <Analytics />
    </div>
  );
};

export default HomePage;
