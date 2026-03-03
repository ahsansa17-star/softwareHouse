import { Check, Star, Zap, Sparkles, Shield, Rocket } from 'lucide-react';

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
      icon: Rocket,
      color: 'deepBlue',
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
      icon: Sparkles,
      color: 'vibrantTeal',
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
      icon: Zap,
      color: 'warmAmber',
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

  const getColorClasses = (color: string, isPopular: boolean) => {
    const colors = {
      deepBlue: {
        light: 'bg-deep-blue/10 text-deep-blue border-deep-blue/20',
        medium: 'bg-deep-blue/20 text-deep-blue border-deep-blue/30',
        dark: 'bg-deep-blue text-white',
        gradient: 'from-deep-blue to-deep-blue/80',
        border: 'border-deep-blue',
        text: 'text-deep-blue',
        bg: 'bg-deep-blue',
        shadow: 'shadow-deep-blue/20'
      },
      vibrantTeal: {
        light: 'bg-vibrant-teal/10 text-vibrant-teal border-vibrant-teal/20',
        medium: 'bg-vibrant-teal/20 text-vibrant-teal border-vibrant-teal/30',
        dark: 'bg-vibrant-teal text-white',
        gradient: 'from-vibrant-teal to-vibrant-teal/80',
        border: 'border-vibrant-teal',
        text: 'text-vibrant-teal',
        bg: 'bg-vibrant-teal',
        shadow: 'shadow-vibrant-teal/20'
      },
      warmAmber: {
        light: 'bg-warm-amber/10 text-warm-amber border-warm-amber/20',
        medium: 'bg-warm-amber/20 text-warm-amber border-warm-amber/30',
        dark: 'bg-warm-amber text-white',
        gradient: 'from-warm-amber to-warm-amber/80',
        border: 'border-warm-amber',
        text: 'text-warm-amber',
        bg: 'bg-warm-amber',
        shadow: 'shadow-warm-amber/20'
      }
    };
    return colors[color as keyof typeof colors] || colors.deepBlue;
  };

  return (
    <section id="pricing" className="py-20 bg-white text-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Pricing Packages
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Ready-to-launch online store solutions tailored to your business size
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, idx) => {
            const colors = getColorClasses(plan.color, plan.popular);
            const Icon = plan.icon;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl bg-white border ${
                  plan.popular
                    ? 'border-vibrant-teal/30 shadow-lg scale-105 ring-2 ring-vibrant-teal/20'
                    : 'border-deep-blue/10 hover:border-deep-blue/30'
                } fade-in-up`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vibrant-teal text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Star size={14} fill="currentColor" className="text-white" />
                    Most Popular
                  </div>
                )}

                {/* Icon and Name */}
                <div className="mb-6 text-center">
                  <div className={`inline-flex p-3 rounded-xl ${colors.light} mb-4`}>
                    <Icon size={32} className={colors.text} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${colors.text}`}>
                    {plan.name}
                  </h3>
                  <p className="text-medium-gray">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 text-center">
                  <div className={`text-4xl font-bold ${colors.text}`}>
                    {plan.price}
                  </div>
                  <p className="text-sm text-medium-gray">
                    Contact for quote
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <div className={`p-0.5 rounded-full ${colors.light} group-hover:scale-110 transition-transform`}>
                        <Check size={18} className={colors.text} />
                      </div>
                      <span className="text-sm text-dark-gray group-hover:text-deep-blue transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? `bg-vibrant-teal text-white hover:bg-deep-blue hover:shadow-lg ${colors.shadow}`
                      : `${colors.light} ${colors.text} hover:${colors.bg} hover:text-white border-2 ${colors.border} border-opacity-30 hover:border-opacity-100`
                  }`}
                >
                  Get Started
                </button>

                {/* Feature Highlight for Popular Plan */}
                {plan.popular && (
                  <div className="mt-4 text-center">
                    <span className="text-xs text-medium-gray flex items-center justify-center gap-1">
                      <Shield size={12} className="text-vibrant-teal" />
                      Best value for growing businesses
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Solution CTA */}
        <div className="bg-gradient-to-br from-deep-blue to-vibrant-teal rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-white" size={28} />
                <h3 className="text-2xl font-bold">Custom Solutions Available</h3>
              </div>
              <p className="text-white/90 text-lg">
                Need something specific? We create custom packages for unique requirements including AI solutions, enterprise software, and complex integrations.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  { text: 'Enterprise Grade', color: 'bg-white/20' },
                  { text: 'Scalable Architecture', color: 'bg-white/20' },
                  { text: 'Dedicated Support', color: 'bg-white/20' }
                ].map((item, i) => (
                  <span key={i} className={`${item.color} px-3 py-1 rounded-full text-sm backdrop-blur-sm`}>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
            
            <button
              onClick={scrollToContact}
              className="bg-white text-deep-blue px-8 py-4 rounded-xl hover:bg-soft-gray transition-all duration-300 font-semibold whitespace-nowrap shadow-lg hover:scale-105 group"
            >
              <span className="flex items-center gap-2">
                Discuss Custom Project
                <Rocket size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          {[
            { icon: Shield, text: '100% Satisfaction Guarantee', color: 'text-deep-blue' },
            { icon: Zap, text: 'Fast Turnaround Time', color: 'text-vibrant-teal' },
            { icon: Sparkles, text: 'Free Consultation', color: 'text-warm-amber' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-medium-gray">
              <item.icon size={18} className={item.color} />
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
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

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .hover\\:shadow-deep-blue\\/20:hover {
          box-shadow: 0 20px 25px -5px rgba(30, 58, 138, 0.1), 0 10px 10px -5px rgba(30, 58, 138, 0.04);
        }

        .hover\\:shadow-vibrant-teal\\/20:hover {
          box-shadow: 0 20px 25px -5px rgba(20, 184, 166, 0.1), 0 10px 10px -5px rgba(20, 184, 166, 0.04);
        }

        .hover\\:shadow-warm-amber\\/20:hover {
          box-shadow: 0 20px 25px -5px rgba(245, 158, 11, 0.1), 0 10px 10px -5px rgba(245, 158, 11, 0.04);
        }
      `}</style>
    </section>
  );
}
