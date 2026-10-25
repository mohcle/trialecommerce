import { Link } from 'react-router-dom';
import { ArrowRight, TruckIcon, ShieldCheck, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Classic Leather Watch',
      price: 599,
      image: 'https://images.unsplash.com/photo-1723328254549-24bb3deb4a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2F0Y2glMjBqZXdlbHJ5fGVufDF8fHx8MTc3MDU0MzMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Accessories'
    },
    {
      id: 2,
      name: 'Designer Handbag',
      price: 899,
      image: 'https://images.unsplash.com/photo-1758171692659-024183c2c272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MXx8fHwxNzcwNDY3NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Bags'
    },
    {
      id: 3,
      name: 'Premium Sneakers',
      price: 349,
      image: 'https://images.unsplash.com/photo-1765875485100-1afe930265ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzA1NDMzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Footwear'
    },
    {
      id: 4,
      name: 'Luxury Sunglasses',
      price: 459,
      image: 'https://images.unsplash.com/photo-1577909698488-3c3705c9c265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc3VuZ2xhc3Nlc3xlbnwxfHx8fDE3NzA1NDMzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Accessories'
    }
  ];

  const categories = [
    { name: 'WATCHES', count: 124, image: 'https://images.unsplash.com/photo-1723328254549-24bb3deb4a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2F0Y2glMjBqZXdlbHJ5fGVufDF8fHx8MTc3MDU0MzMyNnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'BAGS', count: 89, image: 'https://images.unsplash.com/photo-1758171692659-024183c2c272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MXx8fHwxNzcwNDY3NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'FOOTWEAR', count: 156, image: 'https://images.unsplash.com/photo-1765875485100-1afe930265ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzA1NDMzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'FRAGRANCES', count: 67, image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3MDQ0NTE4OHww&ixlib=rb-4.1.0&q=80&w=1080' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1768696083080-15d4218ce844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzcwNDc1NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="text-sm tracking-widest mb-4">SPRING COLLECTION 2026</p>
            <h1 className="text-6xl mb-6">Elevate Your Style</h1>
            <p className="text-xl mb-8 text-gray-200">
              Discover our curated collection of premium fashion and accessories.
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              SHOP NOW
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <TruckIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $200</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">100% secure transactions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Curated luxury items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to="/shop"
                className="group relative overflow-hidden aspect-square"
              >
                <ImageWithFallback 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl tracking-wide mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.count} Items</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl">Featured Products</h2>
            <Link to="/shop" className="text-sm tracking-wide hover:underline">
              VIEW ALL
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="relative aspect-square mb-4 overflow-hidden bg-white">
                  <ImageWithFallback 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="text-xs text-gray-500 tracking-wide mb-2">{product.category}</p>
                <h3 className="text-lg mb-2">{product.name}</h3>
                <p className="text-lg">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative h-[400px] bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1638799962843-a30f8e38cf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA1NDMzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white max-w-2xl px-4">
            <h2 className="text-5xl mb-6">Timeless Elegance</h2>
            <p className="text-xl mb-8 text-gray-200">
              Discover pieces that define your personal style
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-colors"
            >
              EXPLORE COLLECTION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
