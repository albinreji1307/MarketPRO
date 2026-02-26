const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return res.json();
};