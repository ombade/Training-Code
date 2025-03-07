// src/lib/api.ts
import { Product } from "../types";

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Error fetching products");
  return res.json();
};

export const getProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Error fetching product");
  return res.json();
};

export const loginUser = async ({
  username,
  password,
}: { username: string; password: string }): Promise<{ token: string }> => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error("Error logging in");
  return res.json();
};

// You can add more API functions (like getCarts) as needed.
export const getCarts = async (): Promise<any[]> => {
  const res = await fetch(`${BASE_URL}/carts`);
  if (!res.ok) throw new Error("Error fetching carts");
  return res.json();
};
