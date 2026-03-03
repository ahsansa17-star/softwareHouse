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
    <section id="contact" className="py-20 bg-white text-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Let's discuss how we can help transform your digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-deep-blue mb-6">Get in Touch</h3>
            <p className="text-medium-gray mb-8">
              Have a project in mind? We'd love to hear about it. Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: Mail, 
                  title: 'Email Us', 
                  value: 'hello@nexusdev.com', 
                  bg: 'bg-deep-blue', 
                  text: 'text-white',
                  hover: 'hover:bg-vibrant-teal'
                },
                { 
                  icon: Phone, 
                  title: 'Call Us', 
                  value: '+92 XXX XXXXXXX', 
                  bg: 'bg-vibrant-teal', 
                  text: 'text-white',
                  hover: 'hover:bg-deep-blue'
                },
                { 
                  icon: MessageSquare, 
                  title: 'WhatsApp', 
                  value: 'Available for quick queries', 
                  bg: 'bg-warm-amber', 
                  text: 'text-white',
                  hover: 'hover:bg-deep-blue'
                }
              ].map((contact, idx) => (
                <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                  <div className={`${contact.bg} ${contact.text} p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-deep-blue mb-1 transition-colors group-hover:text-vibrant-teal`}>
                      {contact.title}
                    </h4>
                    <p className="text-medium-gray">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-soft-gray rounded-2xl p-8 text-dark-gray border border-deep-blue/10">
              <h4 className="text-xl font-bold mb-3 text-deep-blue">Why Choose Us?</h4>
              <ul className="space-y-3">
                {[
                  'Fast turnaround time', 
                  'Competitive pricing', 
                  '24/7 support available', 
                  '100% satisfaction guarantee'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-vibrant-teal group-hover:bg-warm-amber transition-colors"></div>
                    <span className="text-medium-gray group-hover:text-deep-blue transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="bg-soft-gray text-deep-blue px-4 py-2 rounded-full text-sm font-semibold border border-deep-blue/10">
                ⚡ 24h Response
              </span>
              <span className="bg-soft-gray text-deep-blue px-4 py-2 rounded-full text-sm font-semibold border border-deep-blue/10">
                🛡️ Secure & Confidential
              </span>
              <span className="bg-soft-gray text-deep-blue px-4 py-2 rounded-full text-sm font-semibold border border-deep-blue/10">
                💯 Satisfaction Guaranteed
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-soft-gray rounded-2xl shadow-xl p-8 border border-deep-blue/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-coral/10 border-l-4 border-coral p-4 rounded">
                  <p className="text-coral font-semibold">Error</p>
                  <p className="text-medium-gray text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="bg-lime-green/10 border-l-4 border-lime-green p-4 rounded">
                  <p className="text-lime-green font-semibold">Success!</p>
                  <p className="text-medium-gray text-sm">Thank you for your inquiry. We'll contact you within 24 hours.</p>
                </div>
              )}

              {/* Form Inputs */}
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { name: 'name', label: 'Name', type: 'text', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'company', label: 'Company', type: 'text', required: false },
                  { name: 'phone', label: 'Phone', type: 'tel', required: false, placeholder: '+92 XXX XXXXXXX' }
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-semibold text-deep-blue mb-2">
                      {field.label}{field.required && ' *'}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      disabled={loading}
                      placeholder={field.placeholder || `Your ${field.label.toLowerCase()}`}
                      className="w-full px-4 py-3 border-2 border-deep-blue/20 rounded-lg bg-white text-dark-gray focus:border-vibrant-teal focus:outline-none disabled:bg-soft-gray transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-deep-blue mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 border-deep-blue/20 rounded-lg bg-white text-dark-gray focus:border-vibrant-teal focus:outline-none disabled:bg-soft-gray transition-colors"
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
                <label htmlFor="message" className="block text-sm font-semibold text-deep-blue mb-2">
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
                  className="w-full px-4 py-3 border-2 border-deep-blue/20 rounded-lg bg-white text-dark-gray focus:border-vibrant-teal focus:outline-none resize-none disabled:bg-soft-gray transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-deep-blue text-white py-4 rounded-lg hover:bg-vibrant-teal transition-all duration-300 font-semibold flex items-center justify-center gap-2 disabled:bg-medium-gray disabled:cursor-not-allowed group hover:shadow-lg"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>

              {/* Form Footer */}
              <p className="text-xs text-medium-gray text-center mt-4">
                By submitting this form, you agree to our privacy policy and consent to being contacted.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px white inset;
          -webkit-text-fill-color: #111827;
          border: 2px solid #14B8A6;
        }
      `}</style>
    </section>
  );
}
