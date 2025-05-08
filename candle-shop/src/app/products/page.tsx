'use client';

import { useState, useEffect } from 'react';
import { useSearch } from '../context/SearchContext';
import Button from '../components/Button';
import Notification from '../components/Notification';
import PlaceholderImage from '../placeholder';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  scent: string;
  burnTime: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Lavender Dream',
    description: 'A soothing blend of lavender and vanilla',
    price: 24.99,
    scent: 'Floral',
    burnTime: '40 hours'
  },
  {
    id: 2,
    name: 'Ocean Breeze',
    description: 'Fresh and invigorating sea salt scent',
    price: 29.99,
    scent: 'Fresh',
    burnTime: '45 hours'
  },
  {
    id: 3,
    name: 'Cinnamon Spice',
    description: 'Warm and cozy cinnamon aroma',
    price: 27.99,
    scent: 'Spicy',
    burnTime: '42 hours'
  },
  {
    id: 4,
    name: 'Vanilla Comfort',
    description: 'Sweet and comforting vanilla scent',
    price: 24.99,
    scent: 'Sweet',
    burnTime: '40 hours'
  },
  {
    id: 5,
    name: 'Forest Pine',
    description: 'Fresh and natural pine forest aroma',
    price: 29.99,
    scent: 'Woody',
    burnTime: '45 hours'
  },
  {
    id: 6,
    name: 'Citrus Burst',
    description: 'Energizing blend of citrus fruits',
    price: 26.99,
    scent: 'Citrus',
    burnTime: '38 hours'
  }
];

export default function ProductsPage() {
  const { searchQuery } = useSearch();
  const [selectedScent, setSelectedScent] = useState<string>('');
  const [cartItems, setCartItems] = useState<{ id: number; quantity: number }[]>([]);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const scents = Array.from(new Set(products.map(product => product.scent)));

  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    const matchesScent = selectedScent
      ? product.scent === selectedScent
      : true;

    return matchesSearch && matchesScent;
  });

  const addToCart = (productId: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === productId);
      if (existingItem) {
        return prev.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });

    setNotification({
      message: 'Product added to cart!',
      type: 'success'
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-lg text-gray-600">Discover our handcrafted candles</p>
      </div>

      {/* Scent Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <Button
          variant={selectedScent === '' ? 'primary' : 'secondary'}
          onClick={() => setSelectedScent('')}
          className="text-sm"
        >
          All Scents
        </Button>
        {scents.map(scent => (
          <Button
            key={scent}
            variant={selectedScent === scent ? 'primary' : 'secondary'}
            onClick={() => setSelectedScent(scent)}
            className="text-sm"
          >
            {scent}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in-up">
            <div className="relative h-64">
              <PlaceholderImage name={product.name} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">${product.price}</span>
                <span className="text-sm text-gray-500">{product.burnTime} burn time</span>
              </div>
              <Button
                variant="primary"
                onClick={() => addToCart(product.id)}
                className="w-full"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
} 