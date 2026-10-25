import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';

export function OrderConfirmation() {
  const orderNumber = 'LX' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const orderDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const orderItems = [
    { name: 'Classic Leather Watch', quantity: 1, price: 599 },
    { name: 'Designer Handbag', quantity: 1, price: 899 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-2">Thank you for your purchase</p>
          <p className="text-gray-600">
            A confirmation email has been sent to your email address
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white p-8 mb-6">
          <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b">
            <div>
              <p className="text-sm text-gray-600 mb-1">Order Number</p>
              <p className="text-lg">#{orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Order Date</p>
              <p className="text-lg">{orderDate}</p>
            </div>
          </div>

          {/* Items */}
          <h2 className="text-2xl mb-6">Order Items</h2>
          <div className="space-y-4 mb-6 pb-6 border-b">
            {orderItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p>${item.price}</p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>$1,498.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span>$119.84</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between text-xl">
                <span>Total</span>
                <span>$1,617.84</span>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-white p-8 mb-6">
          <h2 className="text-2xl mb-6">What Happens Next?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="mb-1">Order Confirmation</h3>
                <p className="text-sm text-gray-600">
                  You'll receive an email confirmation shortly with your order details
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="mb-1">Order Processing</h3>
                <p className="text-sm text-gray-600">
                  We're preparing your items for shipment
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="mb-1">Shipping</h3>
                <p className="text-sm text-gray-600">
                  You'll receive tracking information once your order ships
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/account"
            className="flex-1 bg-black text-white text-center py-4 hover:bg-gray-800 transition-colors"
          >
            VIEW ORDER STATUS
          </Link>
          <Link 
            to="/shop"
            className="flex-1 border-2 border-black text-center py-4 hover:bg-gray-100 transition-colors"
          >
            CONTINUE SHOPPING
          </Link>
        </div>

        {/* Support */}
        <div className="mt-12 text-center text-sm text-gray-600">
          <p>Need help with your order?</p>
          <Link to="/contact" className="text-black hover:underline">
            Contact our support team
          </Link>
        </div>
      </div>
    </div>
  );
}
