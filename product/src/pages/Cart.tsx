// src/pages/Cart.tsx
import React from "react";
// import {useCartStore} from "../store/useCartStore";
import { useCartStore } from '../store/useCartStore'; 
import { useQuery } from "react-query";
import { getProducts } from "../lib/api";
import { Product } from "../types";

const Cart: React.FC = () => {
  const { items, removeItem, clearCart } = useCartStore();
  const { data: products } = useQuery<Product[]>("products", getProducts);

  const getProductDetails = (productId: number) => {
    return products?.find((p) => p.id === productId);
  };

  const totalPrice = items.reduce((acc, item) => {
    const product = getProductDetails(item.productId);
    return acc + (product ? product.price * item.quantity : 0);
  }, 0);

  if (items.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Your Cart</h1>
      <div className="space-y-4">
        {items.map((item) => {
          const product = getProductDetails(item.productId);
          if (!product) return null;
          return (
            <div key={item.productId} className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
              <div className="flex items-center">
                <img src={product.image} alt={product.title} className="w-16 h-16 object-contain mr-4" />
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white">{product.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl text-gray-800 dark:text-white">${(product.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeItem(item.productId)} className="mt-2 text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 text-right">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Total: ${totalPrice.toFixed(2)}</h2>
        <button onClick={clearCart} className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
