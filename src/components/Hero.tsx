import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-black text-gray-300 relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-300/5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">

          {/* Top Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-gray-800/60 text-amber-400 px-4 py-2 rounded-full mb-8 transition-all duration-1000
              ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
            `}
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">
              Powered by AI & Modern Technology
            </span>
          </div>

          {/* Main Company Name */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-200
              ${show ? 'opacity-100 scale-100 glow-amber' : 'opacity-0 scale-90'}
            `}
          >
            LabSoftwareServices
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed transition-all duration-1000 delay-300
              ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            AI-powered digital solutions for businesses, e-commerce, and branding.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500
              ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-amber-400 text-black px-8 py-4 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-amber-400/50 transition-all flex items-center gap-2 text-lg font-semibold"
            >
              Start Your Project
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg hover:bg-amber-400 hover:text-black transition-all text-lg font-semibold"
            >
              View Services
            </button>
          </div>

          {/* Stats */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700
              ${show ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '30+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support Available' },
              { value: '100%', label: 'Satisfaction Rate' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-amber-400 glow-amber mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Glow Animation */}
      <style>{`
        .glow-amber {
          text-shadow:
            0 0 8px rgba(255,191,0,0.8),
            0 0 16px rgba(255,191,0,0.5),
            0 0 24px rgba(255,191,0,0.3);
          animation: pulseGlow 2.5s ease-in-out infinite alternate;
        }

        @keyframes pulseGlow {
          from {
            text-shadow:
              0 0 6px rgba(255,191,0,0.6),
              0 0 12px rgba(255,191,0,0.3);
          }
          to {
            text-shadow:
              0 0 14px rgba(255,191,0,1),
              0 0 28px rgba(255,191,0,0.6);
          }
        }
      `}</style>
    </section>
  );
}
