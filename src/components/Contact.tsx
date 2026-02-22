import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const serviceTypeMap: Record<string, 'website' | 'ecommerce' | 'branding' | 'software' | 'other'> = {
    web: 'website',
    ecommerce: 'ecommerce',
    branding: 'branding',
    software: 'software',
    custom: 'other'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: submitError } = await supabase
        .from('inquiry_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          company_name: formData.company || null,
          phone: formData.phone || null,
          project_type: serviceTypeMap[formData.service as keyof typeof serviceTypeMap] || 'other',
          message: formData.message,
          user_agent: navigator.userAgent
        });

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 glow-amber">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss how we can help transform your digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-6 glow-amber">Get in Touch</h3>
            <p className="text-gray-400 mb-8">
              Have a project in mind? We'd love to hear about it. Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Us', value: 'hello@nexusdev.com', bg: 'bg-blue-900', text: 'text-amber-400 glow-amber' },
                { icon: Phone, title: 'Call Us', value: '+92 XXX XXXXXXX', bg: 'bg-green-900', text: 'text-amber-400 glow-amber' },
                { icon: MessageSquare, title: 'WhatsApp', value: 'Available for quick queries', bg: 'bg-orange-900', text: 'text-amber-400 glow-amber' }
              ].map((contact, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`${contact.bg} ${contact.text} p-3 rounded-lg`}>
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-1 glow-amber">{contact.title}</h4>
                    <p className="text-gray-400">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gray-900 rounded-2xl p-8 text-gray-200">
              <h4 className="text-xl font-bold mb-3 text-amber-400 glow-amber">Why Choose Us?</h4>
              <ul className="space-y-2">
                {['Fast turnaround time', 'Competitive pricing', '24/7 support available', '100% satisfaction guarantee'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 glow-amber"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-900 border-l-4 border-red-600 p-4 rounded glow-amber">
                  <p className="text-red-400 font-semibold">Error</p>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="bg-green-900 border-l-4 border-green-500 p-4 rounded glow-amber">
                  <p className="text-green-400 font-semibold">Success!</p>
                  <p className="text-green-300 text-sm">Thank you for your inquiry. We'll contact you within 24 hours.</p>
                </div>
              )}

              {/* Form Inputs */}
              <div className="grid gap-4 md:grid-cols-2">
                {['name', 'email', 'company', 'phone'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-semibold text-gray-200 mb-2 glow-amber">
                      {field.charAt(0).toUpperCase() + field.slice(1)}{field !== 'company' && ' *'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      required={field !== 'company'}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg bg-black text-gray-200 focus:border-amber-400 glow-amber focus:outline-none disabled:bg-gray-800"
                      placeholder={field === 'phone' ? '+92 XXX XXXXXXX' : `Your ${field}`}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-200 mb-2 glow-amber">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg bg-black text-gray-200 focus:border-amber-400 glow-amber focus:outline-none disabled:bg-gray-800"
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="ecommerce">E-commerce Store</option>
                  <option value="branding">Branding & Design</option>
                  <option value="software">Software & AI Solutions</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2 glow-amber">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg bg-black text-gray-200 focus:border-amber-400 glow-amber focus:outline-none resize-none disabled:bg-gray-800"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-400 text-black py-4 rounded-lg hover:bg-amber-500 glow-amber-btn transition-colors font-semibold flex items-center justify-center gap-2 disabled:bg-gray-700 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send size={20} />}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Glowing Styles */}
      <style>{`
        .glow-amber {
          text-shadow: 0 0 8px rgba(255,191,0,0.7), 0 0 16px rgba(255,191,0,0.4);
        }
        .glow-amber-btn:hover {
          box-shadow: 0 0 12px rgba(255,191,0,0.6), 0 0 24px rgba(255,191,0,0.3);
        }
      `}</style>
    </section>
  );
}
