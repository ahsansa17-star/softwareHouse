import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-black text-gray-300 py-32 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800/50 text-gray-400 px-4 py-2 rounded-full mb-8 animate-bounce glow-amber">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Powered by AI & Modern Technology</span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-amber-400 glow-amber">
            LabSoftwareServices
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed glow-amber">
            AI-powered digital solutions for businesses, e-commerce, and branding.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('services')}
              className="group bg-amber-400 text-black px-8 py-4 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-amber-400/50 transition-all flex items-center gap-2 text-lg font-semibold glow-amber-btn"
            >
              View Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-400 text-black px-8 py-4 rounded-lg border border-gray-400 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/50 transition-all text-lg font-semibold glow-amber-btn"
            >
              Get Started
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '30+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support Available' },
              { value: '100%', label: 'Satisfaction Rate' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold mb-2 text-amber-400 glow-amber">
                  {stat.value}
                </div>
                <div className="glow-amber">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow styles */}
      <style>{`
        .glow-amber {
          text-shadow: 0 0 8px rgba(255,191,0,0.7), 0 0 16px rgba(255,191,0,0.4);
        }
        .glow-amber-btn:hover {
          box-shadow: 0 0 12px rgba(255,191,0,0.6), 0 0 24px rgba(255,191,0,0.3);
        }
      `}</style>
    </section>
  );
}
