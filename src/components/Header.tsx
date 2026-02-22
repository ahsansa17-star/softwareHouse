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
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Branding */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 animate-glow hover:scale-105 transition-transform"
            >
              LabSoftwareServices
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['services', 'portfolio', 'pricing'].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-500 hover:to-teal-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-glow"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:scale-105 hover:shadow-glow transition-all font-semibold"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-black/95">
            {['services', 'portfolio', 'pricing'].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-500 hover:to-teal-500 hover:text-white rounded transition-all duration-300"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded hover:scale-105 hover:shadow-glow transition-all font-semibold"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Glow animation */}
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 8px rgba(255,255,255,0.2), 0 0 12px rgba(0,255,255,0.3); }
          50% { text-shadow: 0 0 12px rgba(255,255,255,0.4), 0 0 16px rgba(0,255,255,0.5); }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 12px rgba(0, 255, 255, 0.4), 0 0 24px rgba(0, 128, 255, 0.3);
        }
      `}</style>
    </header>
  );
}
