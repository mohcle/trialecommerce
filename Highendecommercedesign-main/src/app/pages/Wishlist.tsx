import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Classic Leather Watch',
      price: 599,
      image: 'https://images.unsplash.com/photo-1723328254549-24bb3deb4a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2F0Y2glMjBqZXdlbHJ5fGVufDF8fHx8MTc3MDU0MzMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      inStock: true
    },
    {
      id: 3,
      name: 'Premium Sneakers',
      price: 349,
      image: 'https://images.unsplash.com/photo-1765875485100-1afe930265ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzA1NDMzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      inStock: true
    },
    {
      id: 4,
      name: 'Luxury Sunglasses',
      price: 459,
      image: 'https://images.unsplash.com/photo-1577909698488-3c3705c9c265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc3VuZ2xhc3Nlc3xlbnwxfHx8fDE3NzA1NDMzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      inStock: false
    }
  ]);

  const removeItem = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Save your favorite items here</p>
          <Link to="/shop" className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors">
            START SHOPPING
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-2">My Wishlist</h1>
          <p className="text-gray-600">{wishlistItems.length} items saved</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group relative">
              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>

              <Link to={`/product/${item.id}`}>
                <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white text-sm">OUT OF STOCK</span>
                    </div>
                  )}
                </div>
              </Link>

              <h3 className="text-lg mb-2">{item.name}</h3>
              <p className="text-lg mb-4">${item.price}</p>

              {item.inStock ? (
                <Link
                  to="/cart"
                  className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 text-sm hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  ADD TO CART
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-3 text-sm cursor-not-allowed"
                >
                  OUT OF STOCK
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <Link to="/shop" className="inline-block border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
}
