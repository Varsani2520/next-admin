// config.js

export const ApiName = process.browser
  ? localStorage.getItem("ApiName")
    ? localStorage.getItem("ApiName")
    : "eRequirement"
  : null;
export const WebName = "Partner";
