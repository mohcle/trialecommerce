import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Truck, RotateCcw, ShieldCheck, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 1,
    name: 'Classic Leather Watch',
    price: 599,
    description: 'Elevate your style with this timeless leather watch. Crafted with precision and attention to detail, this piece combines classic design with modern functionality.',
    images: [
      'https://images.unsplash.com/photo-1723328254549-24bb3deb4a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2F0Y2glMjBqZXdlbHJ5fGVufDF8fHx8MTc3MDU0MzMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1723328254549-24bb3deb4a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2F0Y2glMjBqZXdlbHJ5fGVufDF8fHx8MTc3MDU0MzMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Watches',
    inStock: true,
    rating: 4.8,
    reviews: 124
  };

  const [selectedImage, setSelectedImage] = useState(0);

  const relatedProducts = [
    { id: 2, name: 'Designer Handbag', price: 899, image: 'https://images.unsplash.com/photo-1758171692659-024183c2c272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MXx8fHwxNzcwNDY3NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 3, name: 'Premium Sneakers', price: 349, image: 'https://images.unsplash.com/photo-1765875485100-1afe930265ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzA1NDMzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 4, name: 'Luxury Sunglasses', price: 459, image: 'https://images.unsplash.com/photo-1577909698488-3c3705c9c265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc3VuZ2xhc3Nlc3xlbnwxfHx8fDE3NzA1NDMzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 5, name: 'Signature Perfume', price: 189, image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3MDQ0NTE4OHww&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="aspect-square mb-4 bg-gray-100">
              <ImageWithFallback 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 border-2 ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <ImageWithFallback 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-sm text-gray-600 tracking-wide mb-2">{product.category}</p>
            <h1 className="text-4xl mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-black text-black' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-3xl mb-6">${product.price}</p>

            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm">Size</label>
                <button className="text-sm underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border-2 py-3 text-sm transition-colors ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm mb-3 block">Quantity</label>
              <div className="flex items-center border border-gray-300 w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <Link 
                to="/cart"
                className="flex-1 bg-black text-white py-4 text-center hover:bg-gray-800 transition-colors"
              >
                ADD TO CART
              </Link>
              <button className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5" />
                <span className="text-sm">Free shipping on orders over $200</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5" />
                <span className="text-sm">Free returns within 30 days</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm">2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="border-b">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 text-sm tracking-wide ${
                  activeTab === 'description' 
                    ? 'border-b-2 border-black' 
                    : 'text-gray-600'
                }`}
              >
                DESCRIPTION
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-4 text-sm tracking-wide ${
                  activeTab === 'details' 
                    ? 'border-b-2 border-black' 
                    : 'text-gray-600'
                }`}
              >
                DETAILS
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-4 text-sm tracking-wide ${
                  activeTab === 'reviews' 
                    ? 'border-b-2 border-black' 
                    : 'text-gray-600'
                }`}
              >
                REVIEWS ({product.reviews})
              </button>
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  This premium timepiece represents the perfect marriage of form and function. 
                  Crafted from the finest materials, each watch undergoes rigorous quality control 
                  to ensure it meets our exacting standards. The classic design makes it suitable 
                  for any occasion, whether you're in the boardroom or at a black-tie event.
                </p>
              </div>
            )}
            {activeTab === 'details' && (
              <div className="grid grid-cols-2 gap-4 max-w-2xl">
                <div className="text-sm">
                  <span className="text-gray-600">Material:</span>
                  <span className="ml-2">Stainless Steel, Leather</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">Water Resistance:</span>
                  <span className="ml-2">50m</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">Movement:</span>
                  <span className="ml-2">Automatic</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">Warranty:</span>
                  <span className="ml-2">2 Years</span>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-black text-black" />
                        ))}
                      </div>
                      <span className="text-sm">by John D.</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Exceptional quality and craftsmanship. Worth every penny!
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="aspect-square mb-3 bg-gray-100 overflow-hidden">
                  <ImageWithFallback 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-sm mb-1">{product.name}</h3>
                <p className="text-sm">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
