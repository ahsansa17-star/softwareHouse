import { Globe, Palette, ShoppingCart, BookOpen } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'web-development',
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      color: 'blue',
      features: [
        'Business websites for corporate presence',
        'Portfolio websites for professionals',
        'Custom web applications for unique needs',
        'E-commerce websites with full functionality'
      ]
    },
    {
      id: 'branding-design',
      icon: Palette,
      title: 'Branding & Design',
      description: 'Create a memorable brand identity that resonates with your audience',
      color: 'green',
      features: [
        'Logo design that captures your essence',
        'Complete brand identity development',
        'Website UI/UX design',
        'Marketing material design'
      ]
    },
    {
      id: 'ecommerce-services',
      icon: ShoppingCart,
      title: 'E-commerce Services',
      description: 'Setup and manage online stores on Shopify, Amazon, eBay & WooCommerce',
      color: 'purple',
      features: [
        'Full store setup and product catalog creation',
        'Payment gateway integration',
        'Smooth shopping cart & checkout process',
        'Customer accounts and order tracking'
      ]
    },
    {
      id: 'ebook-services',
      icon: BookOpen,
      title: 'eBook Selling Services',
      description: 'Sell eBooks online efficiently with full store setup and management',
      color: 'teal',
      features: [
        'Upload and categorize eBooks for online sale',
        'Payment gateway integration',
        'Customer accounts & order tracking',
        'Marketing & analytics tools'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-900/20 text-blue-400',
      green: 'bg-green-900/20 text-green-400',
      purple: 'bg-purple-900/20 text-purple-400',
      teal: 'bg-teal-900/20 text-teal-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-black text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 glow-amber">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="block hover:no-underline fade-in fade-in-delay-1"
            >
              <div className="card-bg p-8 hover:scale-105 hover:shadow-glow transition-all duration-300">
                <div
                  className={`w-16 h-16 rounded-xl ${getColorClasses(service.color)} flex items-center justify-center mb-6`}
                >
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-100">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}