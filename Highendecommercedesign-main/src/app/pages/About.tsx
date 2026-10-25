import { Award, Globe, Users, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We curate only the finest luxury items from renowned designers and brands worldwide.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Delivering exceptional fashion to customers in over 50 countries across the globe.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our dedicated team of fashion experts ensures every piece meets our high standards.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority, with personalized service and support every step.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '500+', label: 'Premium Products' },
    { number: '50+', label: 'Countries Served' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1768696083080-15d4218ce844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzcwNDc1NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Michael Chen', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1768696083080-15d4218ce844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzcwNDc1NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Emma Williams', role: 'Head of Buying', image: 'https://images.unsplash.com/photo-1768696083080-15d4218ce844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzcwNDc1NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'David Martinez', role: 'Customer Experience', image: 'https://images.unsplash.com/photo-1768696083080-15d4218ce844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzcwNDc1NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[500px] bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1770226415002-dbbd40327ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBzdG9yZXxlbnwxfHx8fDE3NzA0NzA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-5xl mb-6">About LUXE</h1>
            <p className="text-xl text-gray-200">
              Redefining luxury fashion with curated collections and exceptional service
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Founded in 2020, LUXE emerged from a passion for timeless elegance and exceptional craftsmanship. 
            What started as a small boutique has grown into a global destination for luxury fashion enthusiasts 
            who appreciate quality, authenticity, and style.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe that luxury is not just about the price tag—it's about the story behind each piece, 
            the attention to detail, and the feeling of confidence it brings. Our mission is to make premium 
            fashion accessible while maintaining the highest standards of quality and service.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl mb-2">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-4">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our diverse team of fashion experts and industry professionals work together 
            to bring you the best in luxury fashion
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square mb-4 overflow-hidden bg-gray-200">
                  <ImageWithFallback 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[400px] bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1638799962843-a30f8e38cf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA1NDMzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white max-w-2xl px-4">
            <h2 className="text-4xl mb-6">Join the LUXE Family</h2>
            <p className="text-xl mb-8 text-gray-200">
              Experience luxury fashion like never before
            </p>
            <a 
              href="/shop"
              className="inline-block bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
