import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  cartCount?: number;
  wishlistCount?: number;
}

export function Navigation({ cartCount = 0, wishlistCount = 0 }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl tracking-tight">
            LUXE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm tracking-wide transition-colors ${isActive('/') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              HOME
            </Link>
            <Link 
              to="/shop" 
              className={`text-sm tracking-wide transition-colors ${isActive('/shop') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              SHOP
            </Link>
            <Link 
              to="/about" 
              className={`text-sm tracking-wide transition-colors ${isActive('/about') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm tracking-wide transition-colors ${isActive('/contact') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              CONTACT
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-black transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/account" className="text-gray-600 hover:text-black transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/wishlist" className="text-gray-600 hover:text-black transition-colors relative">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-black transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm tracking-wide text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/shop" 
                className="text-sm tracking-wide text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link 
                to="/about" 
                className="text-sm tracking-wide text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                to="/contact" 
                className="text-sm tracking-wide text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
