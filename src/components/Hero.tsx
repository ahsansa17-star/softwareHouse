import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
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
      className="relative pt-32 pb-20 bg-white text-dark-gray overflow-hidden"
    >
      {/* Modern Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-deep-blue rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-vibrant-teal rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-warm-amber rounded-full filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, ${'#1E3A8A'} 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        opacity: 0.03
      }}></div>

      {/* Floating Particles - Updated Colors */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
              background: i % 3 === 0 ? '#1E3A8A' : i % 3 === 1 ? '#14B8A6' : '#F59E0B'
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-deep-blue/20 to-vibrant-teal/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-warm-amber/20 to-coral/20 rounded-full filter blur-3xl animate-float delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Animated Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-soft-gray text-deep-blue px-4 py-2 rounded-full mb-8 transition-all duration-1000 border border-deep-blue/10 shadow-sm
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
        `}
        >
          <Sparkles size={16} className="text-vibrant-teal animate-pulse" />
          <span className="text-sm font-medium tracking-wide">
            Intelligent Innovation • AI-Driven Development
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-200
          ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        `}
        >
          <span className="bg-gradient-to-r from-deep-blue via-vibrant-teal to-warm-amber bg-clip-text text-transparent">
            LabSoftwareServices
          </span>
        </h1>

        {/* Story-Based Subtitle */}
        <p
          className={`text-xl md:text-2xl text-medium-gray mb-10 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
        >
          At <span className="font-semibold text-deep-blue">LabSoftwareServices</span>, we transform ambitious ideas into powerful digital
          experiences. By combining advanced AI systems, strategic design, and modern
          engineering, we help businesses scale faster, operate smarter, and compete
          confidently in the digital era.
        </p>

        {/* Trust Indicators */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-10 transition-all duration-1000 delay-400
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
        >
          <div className="flex items-center gap-2 text-sm text-medium-gray">
            <Shield size={16} className="text-vibrant-teal" />
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-medium-gray">
            <Zap size={16} className="text-warm-amber" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-medium-gray">
            <div className="w-2 h-2 bg-lime-green rounded-full animate-pulse"></div>
            <span>98% Client Satisfaction</span>
          </div>
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="group bg-deep-blue text-white px-8 py-4 rounded-lg hover:bg-vibrant-teal hover:scale-105 hover:shadow-lg hover:shadow-vibrant-teal/30 transition-all duration-300 flex items-center gap-2 text-lg font-semibold"
          >
            Start Your Project
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className="border-2 border-deep-blue text-deep-blue px-8 py-4 rounded-lg hover:bg-deep-blue hover:text-white transition-all duration-300 text-lg font-semibold hover:scale-105"
          >
            View Services
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-8 border-t border-deep-blue/10 transition-all duration-1000 delay-600
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
        >
          {[
            { value: '150+', label: 'Projects Delivered', color: 'text-deep-blue' },
            { value: '98%', label: 'Success Rate', color: 'text-vibrant-teal' },
            { value: '24/7', label: 'Client Support', color: 'text-warm-amber' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-medium-gray mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }

        .particle {
          position: absolute;
          bottom: -10px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: floatUp linear infinite;
          opacity: 0.6;
        }

        @keyframes floatUp {
          from {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          to {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
