import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 glow-amber">LabSoftwareServices</h3>
            <p className="text-gray-400 mb-4">
              Building websites, software & brands powered by AI
            </p>
            <div className="flex gap-4 text-gray-400">
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} 
                className="hover:text-amber-400 transition-colors cursor-default"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} 
                className="hover:text-amber-400 transition-colors cursor-default"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} 
                className="hover:text-amber-400 transition-colors cursor-default"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} 
                className="hover:text-amber-400 transition-colors cursor-default"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="fade-in">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'E-commerce Solutions', 'Branding & Design', 'AI Solutions'].map((service, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-amber-400 transition-colors text-gray-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="fade-in">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Pricing', 'Contact'].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="hover:text-amber-400 transition-colors text-gray-300 text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-in">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-400" />
                <span>aiagentslabservices@gmail.com</span>
              </li>
              <li>+92 XXX XXXXXXX</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2026 LabSoftwareServices. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Glow Styles */}
      <style>{`
        .glow-amber {
          text-shadow: 0 0 8px rgba(255,191,0,0.7), 0 0 16px rgba(255,191,0,0.4);
        }
      `}</style>
    </footer>
  );
}
