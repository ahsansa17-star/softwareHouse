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
      className="relative pt-32 pb-20 bg-black text-gray-300 overflow-hidden"
    >

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-300/5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">

        {/* Animated Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-gray-800/60 text-amber-400 px-4 py-2 rounded-full mb-8 transition-all duration-1000
          ${show ? 'opacity-100 translate-y-0 glow-badge' : 'opacity-0 -translate-y-6'}
        `}
        >
          <Sparkles size={16} className="animate-pulse" />
          <span className="text-sm font-medium tracking-wide">
            Intelligent Innovation • AI-Driven Development
          </span>
        </div>

        {/* Company Name */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-200
          ${show ? 'opacity-100 scale-100 glow-amber' : 'opacity-0 scale-90'}
        `}
        >
          LabSoftwareServices
        </h1>

        {/* Story-Based Subtitle */}
        <p
          className={`text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
        >
          At LabSoftwareServices, we transform ambitious ideas into powerful digital
          experiences. By combining advanced AI systems, strategic design, and modern
          engineering, we help businesses scale faster, operate smarter, and compete
          confidently in the digital era.
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

      </div>

      {/* Animations */}
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

        .glow-badge {
          box-shadow:
            0 0 8px rgba(255,191,0,0.4),
            0 0 16px rgba(255,191,0,0.2);
          animation: badgePulse 2s ease-in-out infinite alternate;
        }

        @keyframes badgePulse {
          from {
            box-shadow:
              0 0 6px rgba(255,191,0,0.3),
              0 0 12px rgba(255,191,0,0.2);
          }
          to {
            box-shadow:
              0 0 14px rgba(255,191,0,0.6),
              0 0 28px rgba(255,191,0,0.3);
          }
        }

        .particle {
          position: absolute;
          bottom: -10px;
          width: 4px;
          height: 4px;
          background: rgba(255,191,0,0.7);
          border-radius: 50%;
          animation: floatUp linear infinite;
        }

        @keyframes floatUp {
          from {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          to {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
