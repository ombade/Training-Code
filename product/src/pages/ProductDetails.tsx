import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductById } from "../lib/api";
import { Product } from "../types/";
import { useCartStore } from '../store/useCartStore';  // ✅ Named import (CORRECT)

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery<Product>(["product", id], () => getProductById(id!));
  const addItem = useCartStore((state) => state.addItem);

  if (isLoading) return <div>Loading product details...</div>;
  if (error) return <div>Error loading product details</div>;

  const handleAddToCart = () => {
    if (!data) return;
    addItem({ productId: data.id, quantity: 1 });
    alert("Product added to cart!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <img src={data?.image} alt={data?.title} className="object-contain w-full h-96" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{data?.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 my-4">${data?.price}</p>
        <p className="text-gray-700 dark:text-gray-400">{data?.description}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
