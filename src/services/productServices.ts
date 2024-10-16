import axios from "axios";
import { ProductI, ProductCategoryI } from "../modals/productModal";

/**
 *
 * @returns The `getProductCategories` function is returning the prodcut categories available
 *
 */
export async function getProductCategories() {
  try {
    const data = await axios.get<ProductCategoryI[]>(
      "https://jsonmockserver.vercel.app/api/shopping/furniture/categories"
    );

    return data.data;
  } catch (err) {
    console.log(err);
  }
}

/**
 *
 * @param {string} catId - The `catId` parameter is denoting the category type of the products to be fetched
 *
 * @returns The function `getProducts` is returning the set of prodcuts based on the catId.
 *
 */

export async function getProducts(
  catId: string | undefined,
  abortController: AbortController
) {
  try {
    const data = await axios.get<ProductI[]>(
      `https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${catId}`,
      { signal: abortController.signal }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
}