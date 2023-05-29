import apiHandler from "../functions/apiHandler";

// Function used to fetch all available items in the shop
export const fetchListingItems = async () => {
  return await apiHandler("/database/shop-items.json", "GET");
};

