import { Globe, Palette, Bot } from 'lucide-react';

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
      blue: 'bg-blue-800/10 text-blue-400',
      green: 'bg-green-800/10 text-green-400',
      orange: 'bg-orange-800/10 text-orange-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-black text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl ${getColorClasses(service.color)} flex items-center justify-center mb-6`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}