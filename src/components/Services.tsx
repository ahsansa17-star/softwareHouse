import { Globe, Palette, Bot, ShoppingCart, Zap, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      color: 'blue',
      features: [
        'Business & Portfolio Websites',
        'Custom Web Applications',
        'E-commerce Solutions',
        'Mobile Responsive Design'
      ]
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'Create a memorable brand identity that resonates with your audience',
      color: 'green',
      features: [
        'Logo & Brand Identity',
        'Website UI/UX Design',
        'Marketing Materials',
        'E-commerce Store Branding'
      ]
    },
    {
      icon: Bot,
      title: 'Software & AI Solutions',
      description: 'Intelligent automation systems that transform your business operations',
      color: 'orange',
      features: [
        'Custom Software Development',
        'AI Automation Systems',
        'SaaS Products',
        'Business Intelligence Tools'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl ${getColorClasses(service.color)} flex items-center justify-center mb-6`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart size={32} />
              <h3 className="text-3xl font-bold">E-commerce Specialization</h3>
            </div>
            <p className="text-xl mb-8 text-blue-50">
              Launch your online store with our comprehensive e-commerce solutions
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap size={20} />
                  Platform Setup
                </h4>
                <ul className="space-y-2 text-blue-50">
                  <li>• Shopify & WooCommerce setup</li>
                  <li>• Daraz marketplace integration</li>
                  <li>• Payment gateway integration</li>
                  <li>• Product catalog management</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Code size={20} />
                  Optimization Services
                </h4>
                <ul className="space-y-2 text-blue-50">
                  <li>• SEO setup & optimization</li>
                  <li>• Website speed enhancement</li>
                  <li>• Mobile responsive fixes</li>
                  <li>• Security & maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
