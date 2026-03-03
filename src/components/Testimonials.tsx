import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Star, Loader, Quote, User, Briefcase } from 'lucide-react';

interface Testimonial {
  id: string;
  client_name: string;
  company_name: string | null;
  role: string | null;
  content: string;
  rating: number | null;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('id, client_name, company_name, role, content, rating')
          .eq('featured', true)
          .order('created_at', { ascending: false })
          .limit(6);

        if (error) throw error;
        setTestimonials(data || []);
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-rotate testimonials for carousel effect
  useEffect(() => {
    if (testimonials.length > 3) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % (testimonials.length - 2));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-vibrant-teal';
    if (rating >= 3) return 'text-warm-amber';
    return 'text-coral';
  };

  return (
    <section className="py-20 bg-white text-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-soft-gray text-deep-blue px-4 py-2 rounded-full mb-4 border border-deep-blue/10">
            <Quote size={16} className="text-vibrant-teal" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            See what our satisfied clients have to say about working with us
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <Loader className="animate-spin text-deep-blue" size={40} />
              <div className="absolute inset-0 animate-ping">
                <Loader className="text-vibrant-teal opacity-20" size={40} />
              </div>
            </div>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20 bg-soft-gray rounded-2xl">
            <p className="text-medium-gray text-lg">No testimonials available yet.</p>
          </div>
        ) : (
          <>
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(activeIndex, activeIndex + 3).map((testimonial, idx) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx} />
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex 
                        ? 'w-8 bg-deep-blue' 
                        : 'bg-deep-blue/20 hover:bg-deep-blue/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Stats Summary */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Happy Clients', value: testimonials.length, color: 'text-deep-blue' },
                { label: 'Avg Rating', value: '4.8/5', color: 'text-vibrant-teal' },
                { label: 'Success Rate', value: '98%', color: 'text-warm-amber' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-soft-gray rounded-xl border border-deep-blue/10">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-medium-gray mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-vibrant-teal';
    if (rating >= 3) return 'text-warm-amber';
    return 'text-coral';
  };

  return (
    <div
      className="bg-soft-gray rounded-2xl p-6 border-l-4 border-deep-blue hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 fade-in-up relative group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote size={60} className="text-deep-blue" />
      </div>

      {/* Rating */}
      {testimonial.rating && (
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < testimonial.rating! 
                  ? `fill-current ${getRatingColor(testimonial.rating!)}` 
                  : 'text-medium-gray'
              } transition-all duration-300 group-hover:scale-110`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <p className="text-dark-gray mb-6 text-lg leading-relaxed relative z-10">
        "{testimonial.content}"
      </p>

      {/* Client Info */}
      <div className="border-t border-deep-blue/10 pt-4">
        <div className="flex items-start gap-3">
          {/* Avatar Placeholder */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-deep-blue to-vibrant-teal flex items-center justify-center text-white font-semibold text-sm">
            {testimonial.client_name.charAt(0)}
          </div>
          
          <div className="flex-1">
            <p className="font-semibold text-dark-gray group-hover:text-deep-blue transition-colors">
              {testimonial.client_name}
            </p>
            
            <div className="flex flex-col gap-1 mt-1">
              {testimonial.role && (
                <div className="flex items-center gap-1 text-xs text-medium-gray">
                  <Briefcase size={12} className="text-vibrant-teal" />
                  <span>{testimonial.role}</span>
                </div>
              )}
              
              {testimonial.company_name && (
                <div className="flex items-center gap-1 text-xs font-medium text-deep-blue">
                  <User size={12} className="text-warm-amber" />
                  <span>{testimonial.company_name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Verified Badge for High Ratings */}
      {testimonial.rating && testimonial.rating >= 4 && (
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center gap-1 bg-lime-green/10 text-lime-green text-xs px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-lime-green rounded-full animate-pulse"></span>
            Verified Client
          </div>
        </div>
      )}
    </div>
  );
}
