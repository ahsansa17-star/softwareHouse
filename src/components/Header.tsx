import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // State to trigger fade-in
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 500); // fade in after 0.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-black text-gray-300 py-32 text-center overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800/50 text-gray-400 px-4 py-2 rounded-full mb-8 animate-bounce glow-amber">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Powered by AI & Modern Technology</span>
          </div>

          {/* Main title with fade-in + gradient glow */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 transition-opacity duration-1000 ${
              showTitle ? 'opacity-100 animate-glow' : 'opacity-0'
            }`}
          >
            LabSoftwareServices
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed transition-opacity duration-1500 delay-500 ${showTitle ? 'opacity-100 glow-amber' : 'opacity-0'}`}>
            AI-powered digital solutions for businesses, e-commerce, and branding.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-opacity duration-1500 delay-700">
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
              { value: '50+', label: 'Projects Delivered', color: 'text-blue-400' },
              { value: '30+', label: 'Happy Clients', color: 'text-green-400' },
              { value: '24/7', label: 'Support Available', color: 'text-purple-400' },
              { value: '100%', label: 'Satisfaction Rate', color: 'text-teal-400' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center transition-opacity duration-2000 delay-[1000ms] opacity-100">
                <div className={`text-4xl font-bold mb-2 ${stat.color} animate-glow`}>
                  {stat.value}
                </div>
                <div>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow + subtle code effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-fade bg-gradient-to-r from-blue-900 via-purple-900 to-teal-900 opacity-10 w-full h-full"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="animate-floating-lines h-full w-full bg-[repeating-linear-gradient(transparent,transparent_20px,rgba(255,255,255,0.05)_21px)]"></div>
        </div>
      </div>

      <style>{`
        @keyframes glow {
          0%,100% { text-shadow: 0 0 10px rgba(255,191,0,0.7), 0 0 20px rgba(255,191,0,0.3); }
          50% { text-shadow: 0 0 20px rgba(255,191,0,0.9), 0 0 30px rgba(255,191,0,0.5); }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        .glow-amber {
          text-shadow: 0 0 8px rgba(255,191,0,0.7), 0 0 16px rgba(255,191,0,0.4);
        }
        .glow-amber-btn:hover {
          box-shadow: 0 0 12px rgba(255,191,0,0.6), 0 0 24px rgba(255,191,0,0.3);
        }

        @keyframes floating-lines {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
        .animate-floating-lines {
          animation: floating-lines 5s linear infinite;
        }

        @keyframes fade {
          0% { opacity: 0; }
          100% { opacity: 0.1; }
        }
        .animate-fade {
          animation: fade 4s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
