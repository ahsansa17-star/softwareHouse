import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-black text-gray-300 py-32 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800/50 text-gray-400 px-4 py-2 rounded-full mb-8 animate-bounce">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Powered by AI & Modern Technology</span>
          </div>

          {/* Main title with gradient glow */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 animate-glow">
            LabSoftwareServices
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
            AI-powered digital solutions for businesses, e-commerce, and branding.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('services')}
              className="group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2 text-lg font-semibold"
            >
              View Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg border border-gray-400 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-lg font-semibold"
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
              <div key={idx} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${stat.color} animate-glow`}>
                  {stat.value}
                </div>
                <div>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS glow animation */}
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(0, 255, 255,0.3); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.4), 0 0 30px rgba(0, 255, 255,0.6); }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
