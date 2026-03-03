import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-soft-gray text-dark-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Branding - Larger Column */}
          <div className="md:col-span-2 fade-in-up">
            <h3 className="text-3xl font-bold text-deep-blue mb-4">
              LabSoftwareServices
            </h3>
            <p className="text-medium-gray mb-6 leading-relaxed">
              Building websites, software & brands powered by AI. 
              We transform ideas into powerful digital experiences.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h5 className="text-deep-blue font-semibold mb-3">Subscribe to our newsletter</h5>
              <div className="flex max-w-md">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-l-lg border-2 border-deep-blue/20 focus:border-vibrant-teal outline-none bg-white text-dark-gray"
                />
                <button className="bg-deep-blue text-white px-6 py-3 rounded-r-lg hover:bg-vibrant-teal transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, color: 'hover:bg-deep-blue' },
                { icon: Twitter, color: 'hover:bg-vibrant-teal' },
                { icon: Linkedin, color: 'hover:bg-deep-blue' },
                { icon: Instagram, color: 'hover:bg-warm-amber' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  onClick={(e) => e.preventDefault()} 
                  className={`w-10 h-10 rounded-lg bg-white text-deep-blue flex items-center justify-center hover:text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md border border-deep-blue/10`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-deep-blue font-bold text-lg mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-vibrant-teal rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'Web Development', 
                'E-commerce Solutions', 
                'Branding & Design', 
                'AI & Software Solutions',
                'Digital Marketing',
                'SEO Optimization'
              ].map((service, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-medium-gray hover:text-vibrant-teal transition-colors duration-300 text-left flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-vibrant-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-deep-blue font-bold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-warm-amber rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Contact', id: 'contact' },
                { name: 'About Us', id: 'about' }
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-medium-gray hover:text-warm-amber transition-colors duration-300 text-left flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-warm-amber rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-deep-blue font-bold text-lg mb-4 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-coral rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-medium-gray">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white text-deep-blue flex items-center justify-center group-hover:bg-vibrant-teal group-hover:text-white transition-all duration-300 border border-deep-blue/10">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block text-sm text-dark-gray font-semibold">Email</span>
                  <a href="mailto:aiagentslabservices@gmail.com" className="hover:text-vibrant-teal transition-colors">
                    aiagentslabservices@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white text-deep-blue flex items-center justify-center group-hover:bg-warm-amber group-hover:text-white transition-all duration-300 border border-deep-blue/10">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="block text-sm text-dark-gray font-semibold">Phone</span>
                  <span>+92 XXX XXXXXXX</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white text-deep-blue flex items-center justify-center group-hover:bg-coral group-hover:text-white transition-all duration-300 border border-deep-blue/10">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="block text-sm text-dark-gray font-semibold">Support</span>
                  <span>Available 24/7 for inquiries</span>
                </div>
              </li>
            </ul>

            {/* Trust Badge */}
            <div className="mt-6 bg-white p-4 rounded-xl border border-deep-blue/10">
              <p className="text-sm text-medium-gray flex items-center gap-2">
                <span className="w-2 h-2 bg-lime-green rounded-full animate-pulse"></span>
                Online & Ready to help
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-deep-blue/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-medium-gray text-sm order-2 md:order-1">
              &copy; {new Date().getFullYear()} LabSoftwareServices. Crafted with 
              <span className="text-coral mx-1">❤</span> 
              by our team.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-4 order-1 md:order-2">
              <span className="text-sm text-medium-gray">We Accept:</span>
              <div className="flex gap-2">
                {['Visa', 'Mastercard', 'PayPal', 'JazzCash'].map((method, i) => (
                  <span key={i} className="px-3 py-1 bg-white text-dark-gray text-xs rounded-full border border-deep-blue/10 hover:border-vibrant-teal transition-colors">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance', 'Sitemap'].map((link, i) => (
              <a 
                key={i}
                href="#" 
                className="text-xs text-medium-gray hover:text-deep-blue transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vibrant-teal group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex justify-center gap-6 mt-6">
            <span className="text-xs text-medium-gray bg-white px-3 py-1 rounded-full border border-deep-blue/10">
              ISO 27001 Certified
            </span>
            <span className="text-xs text-medium-gray bg-white px-3 py-1 rounded-full border border-deep-blue/10">
              GDPR Compliant
            </span>
            <span className="text-xs text-medium-gray bg-white px-3 py-1 rounded-full border border-deep-blue/10">
              SSL Secure
            </span>
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

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
