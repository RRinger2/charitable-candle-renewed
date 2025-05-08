'use client';

import Link from 'next/link';
import Button from './components/Button';
import PlaceholderImage from './placeholder';

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Lavender Dream',
      price: 24.99,
      description: 'A soothing blend of lavender and vanilla'
    },
    {
      id: 2,
      name: 'Ocean Breeze',
      price: 29.99,
      description: 'Fresh and invigorating sea salt scent'
    },
    {
      id: 3,
      name: 'Cinnamon Spice',
      price: 27.99,
      description: 'Warm and cozy cinnamon aroma'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Charitable Candle</h1>
        <p className="text-lg text-gray-600 mb-8">
          Beautiful candles that make a difference. Every purchase supports education and healthcare initiatives.
        </p>
        <Link href="/products">
          <Button variant="primary">Shop Now</Button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="text-3xl mb-4">🕯️</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Handcrafted Quality</h2>
          <p className="text-gray-600">
            Each candle is carefully made with premium materials and sustainable practices.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="text-3xl mb-4">❤️</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Charitable Impact</h2>
          <p className="text-gray-600">
            A portion of every sale goes directly to supporting education and healthcare initiatives.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="text-3xl mb-4">🌱</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h2>
          <p className="text-gray-600">
            Made with sustainable materials and environmentally conscious practices.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white rounded-lg shadow-md p-8 text-center animate-fade-in-up">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Mission</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          By choosing Charitable Candle, you're not just buying a beautiful candle – you're supporting 
          important causes and helping us make a difference in the world.
        </p>
        <Link href="/about">
          <Button variant="secondary">Learn More</Button>
        </Link>
      </div>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <PlaceholderImage name={product.name} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Handcrafted with sustainable materials</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Charitable Impact</h3>
            <p className="text-gray-600">25% of profits support important causes</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Free shipping on orders over $50</p>
          </div>
        </div>
      </section>
    </div>
  );
}
