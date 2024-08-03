import { ApiName } from "../option/config";
import { ERequirement, EShop } from "../option/httpAxios";

export async function GetHomeScreen() {
  try {
    let response;
    if (ApiName === "ERequirement") {
      response = await ERequirement.get("/get-home-screen-data");
    } else {
      response = await EShop.get("/home-screen-data");
    }
    return response.data;
  } catch (error) {
    console.error("Error in getting Data", error);
    throw error; 
  }
}
