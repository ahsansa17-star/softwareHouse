import { Globe, Palette, Bot, Check } from 'lucide-react';

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
        'Marketplace integration (Daraz, local platforms)',
        'Payment gateway setup (JazzCash, EasyPaisa, PayPal)',
        'Website redesign and modernization',
        'Landing page design for campaigns',
        'Mobile responsive fixes',
        'Basic SEO setup',
        'Speed optimization',
        'Ongoing maintenance & security'
      ],
      uiux: 'Intuitive e-commerce flow with clean product pages, easy navigation from products to checkout, and user-friendly dashboards for store management'
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
      uiux: 'Consistent store branding builds trust, while thoughtful product presentation and navigation drive conversions'
    },
    {
      icon: Bot,
      title: 'Software & AI Solutions',
      color: 'orange',
      mainServices: [
        'Custom software development',
        'AI automation systems',
        'AI agents for business operations',
        'SaaS product development',
        'Internal business tools'
      ],
      addOns: [
        'CRM setup for small businesses',
        'Inventory & POS management',
        'WhatsApp automation for stores',
        'Customer support chatbots',
        'Data dashboards & analytics',
        'Workflow automation',
        'ERP-lite systems',
        'API integration',
        'Business intelligence tools'
      ],
      uiux: 'Simple dashboards and panels let store owners manage products, orders, and customers without confusion'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Service Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch and grow your digital presence
          </p>
        </div>

        <div className="space-y-12">
          {detailedServices.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`${colors.bg} border-b-2 ${colors.border} p-8`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-white ${colors.text} flex items-center justify-center`}>
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Main Services</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.mainServices.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check size={20} className={`${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Add-on Services</h4>
                    <div className="grid md:grid-cols-3 gap-3">
                      {service.addOns.map((item, idx) => (
                        <div key={idx} className={`${colors.bg} rounded-lg p-3 text-sm text-gray-700`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${colors.bg} rounded-xl p-6 border-l-4 ${colors.border}`}>
                    <h4 className={`text-lg font-semibold ${colors.text} mb-2`}>UI/UX Focus</h4>
                    <p className="text-gray-700">{service.uiux}</p>
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
