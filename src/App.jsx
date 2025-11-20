import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';

const API_URL = 'https://fakestoreapi.com/products';

import React, { useState, useEffect, useCallback } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const addToCart = useCallback((product) => {
    const exists = cart.some(item => item.id === product.id);
    if (exists) {
      alert('⚠️ Item already added to the cart!');
      return;
    }
    setCart(prev => [...prev, { ...product, quantity: 1 }]);
  }, [cart]);

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='text-xl font-semibold text-blue-600'>Loading products...</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar cartCount={cart.length} openModal={() => setIsModalOpen(true)} />

      <main className='container mx-auto p-4 md:p-8'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>🛍️ Our Products</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <CartModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        cartItems={cart}
        removeItem={removeItem}
      />
    </div>
  );
}
