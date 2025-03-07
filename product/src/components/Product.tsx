import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

const ProductPage = () => {
  const navigate = useNavigate();
  const { data: products, isLoading, error } = useQuery(['products'], fetchProducts);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [limit, setLimit] = useState(10);
  const [cart, setCart] = useState([]);

  const filteredProducts = products?.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? product.category === category : true)
  ).sort((a, b) =>
    sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  ).slice(0, limit);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="border p-2 rounded" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)} className="border p-2 rounded">
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <input 
          type="number" 
          placeholder="Limit" 
          className="border p-2 rounded" 
          value={limit} 
          onChange={(e) => setLimit(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button 
              className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button 
              className="bg-green-500 text-white p-2 rounded mt-2 w-full"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;