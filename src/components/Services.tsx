import { Globe, Palette, ShoppingCart, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'web-development',
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      color: 'deepBlue',
      features: [
        'Business websites for corporate presence',
        'Portfolio websites for professionals',
        'Custom web applications for unique needs',
        'E-commerce websites with full functionality'
      ],
      stat: '50+ Projects',
      gradient: 'from-deep-blue to-vibrant-teal'
    },
    {
      id: 'branding-design',
      icon: Palette,
      title: 'Branding & Design',
      description: 'Create a memorable brand identity that resonates with your audience',
      color: 'vibrantTeal',
      features: [
        'Logo design that captures your essence',
        'Complete brand identity development',
        'Website UI/UX design',
        'Marketing material design'
      ],
      stat: '100+ Brands',
      gradient: 'from-vibrant-teal to-warm-amber'
    },
    {
      id: 'ecommerce-services',
      icon: ShoppingCart,
      title: 'E-commerce Services',
      description: 'Setup and manage online stores on Shopify, Amazon, eBay & WooCommerce',
      color: 'warmAmber',
      features: [
        'Full store setup and product catalog creation',
        'Payment gateway integration',
        'Smooth shopping cart & checkout process',
        'Customer accounts and order tracking'
      ],
      stat: '30+ Stores',
      gradient: 'from-warm-amber to-coral'
    },
    {
      id: 'ebook-services',
      icon: BookOpen,
      title: 'eBook Selling Services',
      description: 'Sell eBooks online efficiently with full store setup and management',
      color: 'coral',
      features: [
        'Upload and categorize eBooks for online sale',
        'Payment gateway integration',
        'Customer accounts & order tracking',
        'Marketing & analytics tools'
      ],
      stat: '15+ Publishers',
      gradient: 'from-coral to-deep-blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      deepBlue: {
        bg: 'bg-deep-blue/10',
        text: 'text-deep-blue',
        border: 'border-deep-blue/20',
        hover: 'hover:border-deep-blue',
        light: 'bg-deep-blue/5',
        dot: 'bg-deep-blue'
      },
      vibrantTeal: {
        bg: 'bg-vibrant-teal/10',
        text: 'text-vibrant-teal',
        border: 'border-vibrant-teal/20',
        hover: 'hover:border-vibrant-teal',
        light: 'bg-vibrant-teal/5',
        dot: 'bg-vibrant-teal'
      },
      warmAmber: {
        bg: 'bg-warm-amber/10',
        text: 'text-warm-amber',
        border: 'border-warm-amber/20',
        hover: 'hover:border-warm-amber',
        light: 'bg-warm-amber/5',
        dot: 'bg-warm-amber'
      },
      coral: {
        bg: 'bg-coral/10',
        text: 'text-coral',
        border: 'border-coral/20',
        hover: 'hover:border-coral',
        light: 'bg-coral/5',
        dot: 'bg-coral'
      }
    };
    return colors[color as keyof typeof colors] || colors.deepBlue;
  };

  return (
    <section id="services" className="py-20 bg-white text-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-soft-gray text-deep-blue px-4 py-2 rounded-full mb-4 border border-deep-blue/10">
            <Sparkles size={16} className="text-vibrant-teal" />
            <span className="text-sm font-medium">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Our Services
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const colors = getColorClasses(service.color);

            return (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group block hover:no-underline fade-in-up"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className={`bg-soft-gray rounded-2xl p-8 hover:scale-105 transition-all duration-500 border-2 ${colors.border} ${colors.hover} hover:shadow-xl relative overflow-hidden`}>
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} className={colors.text} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 group-hover:${colors.text} transition-colors`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-medium-gray mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-2 group-hover:scale-125 transition-transform`}></div>
                        <span className="text-dark-gray text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer with Stat and Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-deep-blue/10">
                    <span className={`text-sm font-semibold ${colors.text}`}>
                      {service.stat}
                    </span>
                    <span className={`inline-flex items-center gap-1 text-sm font-medium ${colors.text} group-hover:gap-2 transition-all`}>
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-soft-gray rounded-full px-6 py-3 border border-deep-blue/10">
            <span className="text-medium-gray">All services include:</span>
            {['Free Consultation', '24/7 Support', 'Money-back Guarantee'].map((item, i) => (
              <span key={i} className="flex items-center gap-1 text-sm font-medium text-deep-blue">
                <span className="w-1 h-1 rounded-full bg-vibrant-teal"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
