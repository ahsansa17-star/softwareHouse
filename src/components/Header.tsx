import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white shadow-lg py-2 border-b border-deep-blue/10' 
          : 'bg-white/95 backdrop-blur-md py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Company Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold transition-all duration-1000 
                ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}
                ${scrolled ? 'text-deep-blue' : 'text-deep-blue'}
              `}
            >
              LabSoftwareServices
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Services', id: 'services', color: 'hover:text-vibrant-teal' },
              { name: 'Portfolio', id: 'portfolio', color: 'hover:text-warm-amber' },
              { name: 'Pricing', id: 'pricing', color: 'hover:text-deep-blue' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-dark-gray ${item.color} relative group transition-all duration-300 font-medium`}
              >
                {item.name}
                <span className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-vibrant-teal transition-all group-hover:w-full`}></span>
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-deep-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-vibrant-teal hover:shadow-lg hover:shadow-vibrant-teal/30 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-deep-blue hover:text-vibrant-teal transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-xl border border-deep-blue/10 overflow-hidden animate-slideDown">
            <div className="p-4 space-y-2">
              {[
                { name: 'Services', id: 'services', color: 'hover:text-vibrant-teal' },
                { name: 'Portfolio', id: 'portfolio', color: 'hover:text-warm-amber' },
                { name: 'Pricing', id: 'pricing', color: 'hover:text-deep-blue' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-dark-gray hover:bg-soft-gray rounded-lg transition-all"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 bg-deep-blue text-white rounded-lg hover:bg-vibrant-teal transition-all font-semibold mt-4"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Footer */}
            <div className="bg-soft-gray p-4 border-t border-deep-blue/10">
              <p className="text-xs text-medium-gray text-center">
                Let's build something amazing together
              </p>
            </div>
          </div>
        )}
      </nav>

      {/* Custom Styles */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
}
