import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'support@luxe.com',
      action: 'mailto:support@luxe.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Fashion Avenue, New York, NY 10001',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Sat: 9:00 AM - 8:00 PM',
      action: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-2">Contact Us</h1>
          <p className="text-gray-600">We're here to help. Get in touch with us.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white">
              <h2 className="text-2xl mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full md:w-auto bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 p-6 mb-6">
              <h2 className="text-2xl mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-1">{info.title}</h3>
                        {info.action.startsWith('mailto:') || info.action.startsWith('tel:') ? (
                          <a 
                            href={info.action}
                            className="text-sm text-gray-600 hover:text-black"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xl mb-4">Quick Help</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-black flex items-center gap-2">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black flex items-center gap-2">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black flex items-center gap-2">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black flex items-center gap-2">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black flex items-center gap-2">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-2">Visit Our Store</h2>
            <p className="text-gray-600">Experience luxury shopping in person</p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map would be displayed here</p>
          </div>
        </div>
      </section>
    </div>
  );
}
