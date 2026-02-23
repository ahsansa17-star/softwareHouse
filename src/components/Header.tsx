import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Company Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-amber-400 glow-amber hover:scale-105 transition-all"
            >
              NexusDev
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            {['services','portfolio','pricing'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-amber-400 relative group transition-all duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full"></span>
              </button>
            ))}

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-400 text-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-400/50 hover:scale-105 transition-all glow-amber-btn"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 bg-black/95 rounded-lg mt-2 p-4">

            {['services','portfolio','pricing'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-amber-400 transition-all"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 bg-amber-400 text-black rounded font-semibold hover:shadow-lg hover:shadow-amber-400/50 transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Glow Styles */}
      <style>{`
        .glow-amber {
          text-shadow: 0 0 8px rgba(255,191,0,0.8),
                       0 0 16px rgba(255,191,0,0.4);
        }

        .glow-amber-btn:hover {
          box-shadow: 0 0 12px rgba(255,191,0,0.6),
                      0 0 24px rgba(255,191,0,0.3);
        }
      `}</style>
    </header>
  );
}
