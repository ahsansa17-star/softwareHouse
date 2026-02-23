import { ArrowRight, Sparkles } from 'lucide-react';
import heroBg from '../assets/A_digital_photograph_for_LabSoftwareServices_featu.png';
import { useEffect, useState } from 'react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const [typedText, setTypedText] = useState('');
  const fullText = 'AI Lab Services for Modern Businesses';

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-black text-gray-300 py-32 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800/50 text-gray-400 px-4 py-2 rounded-full mb-8 animate-bounce glow-amber">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Powered by AI & Modern Technology</span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 animate-glow">
            LabSoftwareServices
          </h1>

          {/* Typing subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed glow-amber h-8">
            {typedText}
            <span className="animate-blink">|</span>
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
                <div className="text-4xl font-bold mb-2 text-amber-400 animate-glow">{stat.value}</div>
                <div className="glow-amber">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow & typing animations */}
      <style>{`
        .glow-amber {
          text-shadow: 0 0 8px rgba(255,191,0,0.7), 0 0 16px rgba(255,191,0,0.4);
        }
        .glow-amber-btn:hover {
          box-shadow: 0 0 12px rgba(255,191,0,0.6), 0 0 24px rgba(255,191,0,0.3);
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,191,0,0.2), 0 0 20px rgba(255,191,0,0.3); }
          50% { text-shadow: 0 0 20px rgba(255,191,0,0.4), 0 0 30px rgba(255,191,0,0.6); }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
