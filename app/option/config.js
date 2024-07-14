// config.js

export const ApiName = process.browser
  ? localStorage.getItem("ApiName")
    ? localStorage.getItem("ApiName")
    : "ERequirement"
  : null;
export const WebName = "Partner";

export const providerRoutes = [
  {
    name: "General",
    url: "",
  },
  {
    name: "Company",
    url: "",
  },
  {
    name: "Services",
    url: "",
  },
  {
    name: "Bookings",
    url: "",
  },
  {
    name: "Offers",
    url: "",
  },
  {
    name: "Reviews",
    url: "",
  },
  {
    name: "Booking Payment",
    url: "",
  },
];
