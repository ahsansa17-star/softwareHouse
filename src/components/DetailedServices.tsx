import { Globe, Palette, ShoppingCart, BookOpen, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DetailedServices() {
  const detailedServices = [
    {
      icon: Globe,
      title: 'Web Development',
      color: 'deepBlue',
      mainServices: [
        'Business websites for corporate presence',
        'Portfolio websites for professionals',
        'Custom web applications for unique needs',
        'E-commerce websites with full functionality'
      ],
      addOns: [
        'E-commerce platform setup (Shopify, WooCommerce)',
        'Marketplace integration (Amazon, eBay, Daraz)',
        'Payment gateway setup (JazzCash, EasyPaisa, PayPal)',
        'Website redesign and modernization',
        'Landing page design for campaigns',
        'Mobile responsive fixes',
        'Basic SEO setup',
        'Speed optimization',
        'Ongoing maintenance & security'
      ],
      uiux: 'Clean, intuitive navigation from products to checkout, responsive design, and easy-to-manage dashboards for store owners'
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      color: 'vibrantTeal',
      mainServices: [
        'Logo design that captures your essence',
        'Complete brand identity development',
        'Website UI/UX design',
        'Marketing material design'
      ],
      addOns: [
        'Social media post graphics',
        'Business cards & brochure design',
        'Company profiles & pitch decks',
        'Brand guideline creation',
        'E-commerce store branding (banners, thumbnails, icons)',
        'Product photography styling',
        'Email template design',
        'Presentation design'
      ],
      uiux: 'Consistent branding builds trust, with well-designed product presentation and intuitive navigation for better conversions'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Services',
      color: 'warmAmber',
      mainServices: [
        'Full store setup on Shopify, WooCommerce, Amazon, or eBay',
        'Product catalog creation with images, descriptions, and pricing',
        'Smooth checkout and shopping cart functionality',
        'Customer accounts and order tracking'
      ],
      addOns: [
        'Shipping & delivery setup with tracking',
        'Payment gateway integration (PayPal, Stripe, local cards)',
        'Marketing tools: coupons, discounts, email notifications',
        'Analytics and reporting on sales, popular products, and customer behavior',
        'Customer support setup: chat, WhatsApp, or email'
      ],
      uiux: 'Easy-to-use e-commerce flow with clear product pages, checkout process, and management dashboard'
    },
    {
      icon: BookOpen,
      title: 'eBook Selling Services',
      color: 'coral',
      mainServices: [
        'Upload and categorize eBooks for online sale',
        'Set up payment gateways for purchases',
        'Customer accounts and order tracking',
        'Marketing and promotion tools'
      ],
      addOns: [
        'Discount management and promotional campaigns',
        'Basic SEO setup for visibility',
        'Analytics to track sales and revenue trends',
        'Integration with e-commerce platforms or marketplaces'
      ],
      uiux: 'Intuitive navigation for buyers, organized product pages, and easy-to-manage dashboard for authors and sellers'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      deepBlue: { 
        bg: 'bg-deep-blue/10', 
        text: 'text-deep-blue', 
        border: 'border-deep-blue',
        lightBg: 'bg-deep-blue/5',
        hover: 'hover:bg-deep-blue/20'
      },
      vibrantTeal: { 
        bg: 'bg-vibrant-teal/10', 
        text: 'text-vibrant-teal', 
        border: 'border-vibrant-teal',
        lightBg: 'bg-vibrant-teal/5',
        hover: 'hover:bg-vibrant-teal/20'
      },
      warmAmber: { 
        bg: 'bg-warm-amber/10', 
        text: 'text-warm-amber', 
        border: 'border-warm-amber',
        lightBg: 'bg-warm-amber/5',
        hover: 'hover:bg-warm-amber/20'
      },
      coral: { 
        bg: 'bg-coral/10', 
        text: 'text-coral', 
        border: 'border-coral',
        lightBg: 'bg-coral/5',
        hover: 'hover:bg-coral/20'
      }
    };
    return colors[color as keyof typeof colors] || colors.deepBlue;
  };

  return (
    <section className="py-20 bg-white text-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Complete Service Details
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Everything you need to launch and grow your digital presence
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-12">
          {detailedServices.map((service, idx) => {
            const colors = getColorClasses(service.color);

            return (
              <div
                key={idx}
                className="bg-soft-gray rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 fade-in-up"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Header */}
                <div className={`${colors.bg} border-b-2 ${colors.border} p-8`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-white ${colors.text} flex items-center justify-center shadow-md`}>
                      <service.icon size={28} />
                    </div>
                    <h3 className={`text-3xl font-bold ${colors.text}`}>{service.title}</h3>
                  </div>
                </div>

                {/* Main Services */}
                <div className="p-8 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-deep-blue mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-vibrant-teal rounded-full"></span>
                      Main Services
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {service.mainServices.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <div className={`${colors.bg} p-1 rounded-full transition-all duration-300 group-hover:scale-110`}>
                            <Check size={18} className={colors.text} />
                          </div>
                          <span className="text-dark-gray group-hover:text-deep-blue transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Add-ons */}
                  <div>
                    <h4 className="text-xl font-semibold text-deep-blue mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-warm-amber rounded-full"></span>
                      Add-on Services
                    </h4>
                    <div className="grid md:grid-cols-3 gap-3">
                      {service.addOns.map((item, i) => (
                        <div
                          key={i}
                          className={`${colors.lightBg} rounded-lg p-3 text-sm text-medium-gray border ${colors.border} border-opacity-20 hover:${colors.bg} hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* UI/UX Focus */}
                  <div className={`${colors.lightBg} rounded-xl p-6 border-l-4 ${colors.border} bg-white`}>
                    <h4 className={`${colors.text} font-semibold mb-2 flex items-center gap-2`}>
                      <span className="w-2 h-2 rounded-full bg-current"></span>
                      UI/UX Focus
                    </h4>
                    <p className="text-medium-gray leading-relaxed">{service.uiux}</p>
                  </div>

                  {/* Stats/Benefits */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {[
                      { label: 'Projects', value: '150+' },
                      { label: 'Satisfaction', value: '98%' },
                      { label: 'Support', value: '24/7' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-2xl font-bold ${colors.text}`}>{stat.value}</div>
                        <div className="text-xs text-medium-gray uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className={`px-8 py-4 ${colors.bg} border-t ${colors.border} border-opacity-20`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-medium-gray">Starting from</span>
                    <span className={`text-2xl font-bold ${colors.text}`}>$499</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-deep-blue rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Package?</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We can tailor our services to perfectly match your specific requirements and budget.
          </p>
          <button className="bg-white text-deep-blue px-8 py-4 rounded-xl font-semibold hover:bg-vibrant-teal hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get a Custom Quote
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .hover-lift {
          transition: transform 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
}
