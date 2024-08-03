import axios from "axios";

export const ERequirement = axios.create({
  baseURL: "/api/requirement",
});

export const EShop = axios.create({
  baseURL: "/api/eshop",
});
