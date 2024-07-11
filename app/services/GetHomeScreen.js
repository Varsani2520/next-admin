import { ApiName } from "../option/config";
import { ERequirement, EShop } from "../option/httpAxios";

export async function GetHomeScreen() {
  try {
    if (ApiName == "ERequirement") {
      const response = await ERequirement.get("/get-home-screen-data");
      return response.data;
    }
    const response = await EShop.get("/home-screen-data");
    return response.data;
  } catch (error) {
    console.log("Error in getting Data", error);
  }
}
