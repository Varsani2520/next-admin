import axios from "axios";

export const ERequirement = axios.create({
  baseURL: "https://e-requirement-backend-v2.vercel.app/api/v2",
});

export const EShop = axios.create({
  baseURL: "https://eshop-backend-tau.vercel.app/api/v2",
});
