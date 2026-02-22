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
          <div className="inline-flex items-center gap-2 bg-gray-800/50 text-gray-400 px-4 py-2 rounded-full mb-8 animate-bounce">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Powered by AI & Modern Technology</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 glow-silver">
            LabSoftwareServices
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
            AI-powered digital solutions for businesses, e-commerce, and branding.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('services')}
              className="group bg-gray-400 text-black px-8 py-4 rounded-lg hover:bg-gray-500 transition-all flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              View Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 text-gray-300 px-8 py-4 rounded-lg border border-gray-400 hover:bg-gray-700 hover:text-gray-100 transition-all text-lg font-semibold"
            >
              Get Started
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-100 mb-2">50+</div>
              <div>Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-100 mb-2">30+</div>
              <div>Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-100 mb-2">24/7</div>
              <div>Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-100 mb-2">100%</div>
              <div>Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}