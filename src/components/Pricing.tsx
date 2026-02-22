import { Check, Star, Zap } from 'lucide-react';

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const pricingPlans = [
    {
      name: 'Starter Store',
      description: 'Perfect for launching your first online store',
      price: 'Custom',
      popular: false,
      features: [
        'Basic WooCommerce or Shopify setup',
        'Up to 20 products',
        'Mobile responsive design',
        'Basic payment gateway (1 method)',
        'Product catalog setup',
        'Contact form integration',
        '1 month support',
        'SSL certificate setup'
      ]
    },
    {
      name: 'Business Store',
      description: 'Complete package for growing businesses',
      price: 'Custom',
      popular: true,
      features: [
        'Professional e-commerce website',
        'Unlimited products',
        'Custom branding & logo design',
        'Multiple payment gateways',
        'SEO setup & optimization',
        'Social media integration',
        'Inventory management',
        'Order tracking system',
        'Email notifications',
        'Analytics dashboard',
        '3 months support',
        'Free training session'
      ]
    },
    {
      name: 'Enterprise Store + AI',
      description: 'Advanced automation for scaling businesses',
      price: 'Custom',
      popular: false,
      features: [
        'Everything in Business Store',
        'AI chatbot for customer support',
        'WhatsApp automation',
        'Inventory automation',
        'CRM integration',
        'Custom workflow automation',
        'Advanced analytics & reporting',
        'Multi-channel selling (Daraz, etc)',
        'ERP-lite system integration',
        'API integrations',
        '6 months priority support',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 glow-amber">
            E-commerce Pricing Packages
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready-to-launch online store solutions tailored to your business size
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105'
                  : 'bg-gray-900 border border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 glow-amber-badge">
                  <Star size={14} fill="black" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-amber-400 glow-amber'}`}>
                  {plan.name}
                </h3>
                <p className={`${plan.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-amber-400 glow-amber'}`}>
                  {plan.price}
                </div>
                <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                  Contact for quote
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-blue-200' : 'text-amber-400 glow-amber'
                      }`}
                    />
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-amber-400 text-black hover:bg-amber-500 glow-amber-btn'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-amber-400 glow-amber" size={28} />
                <h3 className="text-2xl font-bold text-gray-100 glow-amber">Custom Solutions Available</h3>
              </div>
              <p className="text-gray-400 text-lg">
                Need something specific? We create custom packages for unique requirements including AI solutions, enterprise software, and complex integrations.
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="bg-amber-400 text-black px-8 py-4 rounded-lg hover:bg-amber-500 transition-colors font-semibold whitespace-nowrap glow-amber-btn"
            >
              Discuss Custom Project
            </button>
          </div>
        </div>
      </div>

      {/* Glowing Styles */}
      <style>{`
        .glow-amber {
          text-shadow: 0 0 8px rgba(255,191,0,0.7), 0 0 16px rgba(255,191,0,0.4);
        }
        .glow-amber-badge {
          box-shadow: 0 0 8px rgba(255,191,0,0.7), 0 0 16px rgba(255,191,0,0.4);
        }
        .glow-amber-btn:hover {
          box-shadow: 0 0 12px rgba(255,191,0,0.6), 0 0 24px rgba(255,191,0,0.3);
        }
        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 12px rgba(255,191,0,0.5), 0 0 24px rgba(255,191,0,0.3);
        }
      `}</style>
    </section>
  );
}
