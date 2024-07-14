// config.js

export const ApiName = process.browser
  ? localStorage.getItem("ApiName")
    ? localStorage.getItem("ApiName")
    : "ERequirement"
  : null;
export const WebName = "Partner";
