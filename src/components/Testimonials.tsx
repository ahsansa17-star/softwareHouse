import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Star, Loader } from 'lucide-react';

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

  return (
    <section className="py-20 bg-black text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 glow-amber">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what our satisfied clients have to say about working with us
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-amber-400" size={40} />
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No testimonials available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-900 rounded-2xl p-8 border-l-4 border-amber-400 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Rating */}
                {testimonial.rating && (
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-amber-400 text-amber-400 glow-star"
                      />
                    ))}
                  </div>
                )}

                {/* Content */}
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-gray-200">{testimonial.client_name}</p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  )}
                  {testimonial.company_name && (
                    <p className="text-sm text-amber-400 font-medium glow-text">
                      {testimonial.company_name}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Glowing Styles */}
      <style>{`
        .glow-amber {
          text-shadow: 0 0 8px rgba(255,191,0,0.7), 0 0 16px rgba(255,191,0,0.4);
        }
        .glow-star {
          filter: drop-shadow(0 0 4px rgba(255,191,0,0.7)) drop-shadow(0 0 8px rgba(255,191,0,0.4));
        }
        .glow-text {
          text-shadow: 0 0 6px rgba(255,191,0,0.5), 0 0 12px rgba(255,191,0,0.3);
        }
        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 12px rgba(255,191,0,0.5), 0 0 24px rgba(255,191,0,0.3);
        }
      `}</style>
    </section>
  );
}
