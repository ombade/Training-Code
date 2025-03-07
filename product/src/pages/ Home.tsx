// src/pages/Home.tsx
import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../lib/api";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";

const Home: React.FC = () => {
  const { data, error, isLoading } = useQuery<Product[]>("products", getProducts);

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
