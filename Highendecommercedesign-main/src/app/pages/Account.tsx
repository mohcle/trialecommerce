import { useState } from 'react';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';

export function Account() {
  const [activeTab, setActiveTab] = useState('orders');

  const orders = [
    {
      id: 'LX2026XYZ123',
      date: 'February 1, 2026',
      status: 'Delivered',
      total: 1299,
      items: 2
    },
    {
      id: 'LX2026ABC456',
      date: 'January 15, 2026',
      status: 'In Transit',
      total: 549,
      items: 1
    },
    {
      id: 'LX2025DEF789',
      date: 'December 20, 2025',
      status: 'Delivered',
      total: 2148,
      items: 3
    }
  ];

  const tabs = [
    { id: 'orders', name: 'Orders', icon: Package },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl mb-2">My Account</h1>
          <p className="text-gray-600">Manage your orders and account settings</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white p-6">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm">John Doe</p>
                  <p className="text-xs text-gray-600">john@example.com</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${
                        activeTab === tab.id
                          ? 'bg-black text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-100 text-red-600">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Orders */}
            {activeTab === 'orders' && (
              <div className="bg-white p-6">
                <h2 className="text-2xl mb-6">Order History</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded text-sm ${
                          order.status === 'Delivered'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">{order.items} items</p>
                          <p className="text-lg">${order.total}</p>
                        </div>
                        <button className="border-2 border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors">
                          VIEW ORDER
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist */}
            {activeTab === 'wishlist' && (
              <div className="bg-white p-6">
                <h2 className="text-2xl mb-6">My Wishlist</h2>
                <p className="text-gray-600">You have 3 items in your wishlist</p>
                <div className="mt-6">
                  <a href="/wishlist" className="inline-block bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                    VIEW WISHLIST
                  </a>
                </div>
              </div>
            )}

            {/* Profile */}
            {activeTab === 'profile' && (
              <div className="bg-white p-6">
                <h2 className="text-2xl mb-6">Profile Information</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                  >
                    SAVE CHANGES
                  </button>
                </form>
              </div>
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="bg-white p-6">
                  <h2 className="text-2xl mb-6">Account Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="mb-1">Email Notifications</p>
                        <p className="text-sm text-gray-600">Receive updates about your orders</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="mb-1">Marketing Emails</p>
                        <p className="text-sm text-gray-600">Receive special offers and promotions</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <h2 className="text-xl mb-4">Change Password</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">Current Password</label>
                      <input
                        type="password"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                    >
                      UPDATE PASSWORD
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
