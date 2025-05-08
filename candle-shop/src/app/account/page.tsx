'use client';

import { useState } from 'react';
import Button from '../components/Button';
import Notification from '../components/Notification';

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Delivered' | 'Processing' | 'Shipped';
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

// Mock user data - in a real app, this would come from an API
const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  address: '123 Main St, City, State 12345',
  phone: '(555) 123-4567'
};

// Mock order history
const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    date: '2024-03-15',
    total: 74.97,
    status: 'Delivered',
    items: [
      { name: 'Lavender Dream', quantity: 2, price: 24.99 },
      { name: 'Ocean Breeze', quantity: 1, price: 24.99 }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-03-01',
    total: 49.98,
    status: 'Shipped',
    items: [
      { name: 'Cinnamon Spice', quantity: 2, price: 24.99 }
    ]
  }
];

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(mockUser);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const handleSaveProfile = () => {
    // In a real app, this would make an API call to update the user's profile
    setIsEditing(false);
    setNotification({
      message: 'Profile updated successfully!',
      type: 'success'
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Account</h1>
        <p className="text-lg text-gray-600">Manage your profile and view order history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant="secondary"
                className="text-sm"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>

            {isEditing ? (
              <form onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    value={userData.address}
                    onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Save Changes
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-gray-900">{userData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900">{userData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-900">{userData.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900">{userData.phone}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order History Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in-up">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order History</h2>
            <div className="space-y-6">
              {mockOrders.map((order) => (
                <div key={order.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Order #{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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