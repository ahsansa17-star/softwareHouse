import { Globe, Palette, ShoppingCart, BookOpen, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DetailedServices() {
  const detailedServices = [
    {
      icon: Globe,
      title: 'Web Development',
      color: 'blue',
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
      color: 'green',
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
      color: 'purple',
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
      color: 'teal',
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
      blue: { bg: 'bg-blue-900/20', text: 'text-blue-400', border: 'border-blue-700' },
      green: { bg: 'bg-green-900/20', text: 'text-green-400', border: 'border-green-700' },
      purple: { bg: 'bg-purple-900/20', text: 'text-purple-400', border: 'border-purple-700' },
      teal: { bg: 'bg-teal-900/20', text: 'text-teal-400', border: 'border-teal-700' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-black text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 glow-amber">
            Complete Service Details
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-glow transition-transform duration-300 fade-in"
              >
                {/* Header */}
                <div className={`${colors.bg} border-b-2 ${colors.border} p-8`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-black ${colors.text} flex items-center justify-center`}>
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-100">{service.title}</h3>
                  </div>
                </div>

                {/* Main Services */}
                <div className="p-8 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-100 mb-4">Main Services</h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {service.mainServices.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check size={20} className={`${colors.text} mt-1 flex-shrink-0`} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Add-ons */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-100 mb-4">Add-on Services</h4>
                    <ul className="grid md:grid-cols-3 gap-3">
                      {service.addOns.map((item, i) => (
                        <li
                          key={i}
                          className={`${colors.bg} rounded-lg p-3 text-sm text-gray-300 hover:scale-105 hover:shadow-glow transition-all duration-300`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* UI/UX Focus */}
                  <div className={`${colors.bg} rounded-xl p-6 border-l-4 ${colors.border}`}>
                    <h4 className={`${colors.text} font-semibold mb-2`}>UI/UX Focus</h4>
                    <p className="text-gray-300">{service.uiux}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}