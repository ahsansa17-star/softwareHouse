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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our satisfied clients have to say about working with us
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-blue-600" size={40} />
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No testimonials available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {testimonial.rating && (
                    <>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </>
                  )}
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.client_name}
                  </p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  )}
                  {testimonial.company_name && (
                    <p className="text-sm text-blue-600 font-medium">
                      {testimonial.company_name}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
