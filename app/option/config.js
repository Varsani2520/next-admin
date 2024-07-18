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
    url: "general",
  },
  {
    name: "Company",
    url: "company",
  },
  {
    name: "Services",
    url: "services",
  },
  {
    name: "Bookings",
    url: "bookings",
  },
  {
    name: "Offers",
    url: "offers",
  },
  {
    name: "Reviews",
    url: "reviews",
  },
  {
    name: "Booking Payment",
    url: "payments",
  },
];
