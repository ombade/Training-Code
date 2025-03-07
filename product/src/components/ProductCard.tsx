// src/components/ProductCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-colors duration-300">
      <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{product.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
      <Link to={`/product/${product.id}`} className="mt-2 inline-block text-blue-500 hover:text-blue-700">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
