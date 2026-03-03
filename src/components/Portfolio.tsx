import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { ExternalLink, Loader, Eye, Calendar, User } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'web_development' | 'ecommerce' | 'branding' | 'software';
  client_name: string;
  results: string | null;
  technologies: string[];
  completed_at?: string;
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | Project['category']>('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('id, title, slug, description, category, client_name, results, technologies, completed_at')
          .eq('featured', true)
          .order('completed_at', { ascending: false })
          .limit(6);

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const categoryLabels: Record<Project['category'], string> = {
    web_development: 'Web Development',
    ecommerce: 'E-commerce',
    branding: 'Branding',
    software: 'Software'
  };

  const categoryColors: Record<Project['category'], { bg: string, text: string, border: string, gradient: string }> = {
    web_development: { 
      bg: 'bg-deep-blue/10', 
      text: 'text-deep-blue', 
      border: 'border-deep-blue',
      gradient: 'from-deep-blue to-vibrant-teal'
    },
    ecommerce: { 
      bg: 'bg-vibrant-teal/10', 
      text: 'text-vibrant-teal', 
      border: 'border-vibrant-teal',
      gradient: 'from-vibrant-teal to-warm-amber'
    },
    branding: { 
      bg: 'bg-warm-amber/10', 
      text: 'text-warm-amber', 
      border: 'border-warm-amber',
      gradient: 'from-warm-amber to-coral'
    },
    software: { 
      bg: 'bg-coral/10', 
      text: 'text-coral', 
      border: 'border-coral',
      gradient: 'from-coral to-deep-blue'
    }
  };

  const categoryHoverColors: Record<Project['category'], string> = {
    web_development: 'hover:border-deep-blue hover:shadow-deep-blue/20',
    ecommerce: 'hover:border-vibrant-teal hover:shadow-vibrant-teal/20',
    branding: 'hover:border-warm-amber hover:shadow-warm-amber/20',
    software: 'hover:border-coral hover:shadow-coral/20'
  };

  return (
    <section id="portfolio" className="py-20 bg-white text-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Featured Portfolio
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Showcasing our latest successful projects across all service categories
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-deep-blue text-white scale-105 shadow-lg'
                : 'bg-soft-gray text-medium-gray border border-deep-blue/10 hover:border-deep-blue hover:text-deep-blue hover:scale-105'
            }`}
          >
            All Projects
          </button>

          {Object.entries(categoryLabels).map(([cat, label]) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as Project['category'])}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? `${categoryColors[cat as Project['category']].bg} ${categoryColors[cat as Project['category']].text} border-2 ${categoryColors[cat as Project['category']].border} scale-105 shadow-md`
                  : 'bg-soft-gray text-medium-gray border border-deep-blue/10 hover:border-deep-blue hover:text-deep-blue hover:scale-105'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <Loader className="animate-spin text-deep-blue" size={40} />
              <div className="absolute inset-0 animate-ping">
                <Loader className="text-vibrant-teal opacity-20" size={40} />
              </div>
            </div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-soft-gray rounded-2xl">
            <p className="text-medium-gray text-lg">No projects found in this category.</p>
            <button 
              onClick={() => setFilter('all')}
              className="mt-4 text-deep-blue hover:text-vibrant-teal transition-colors font-semibold"
            >
              View all projects →
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const colors = categoryColors[project.category];
              
              return (
                <div
                  key={project.id}
                  className={`bg-soft-gray rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Header with Gradient */}
                  <div
                    className={`h-48 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-br ${colors.gradient} relative overflow-hidden`}
                  >
                    <span className="relative z-10">{project.title.slice(0, 2)}</span>
                    
                    {/* Overlay Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>

                    {/* Category Badge on Image */}
                    <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30`}>
                      {categoryLabels[project.category]}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Title and Client */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-dark-gray mb-2 group-hover:text-deep-blue transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-medium-gray">
                        <User size={14} className={colors.text} />
                        <span>{project.client_name}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-medium-gray text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Results (if available) */}
                    {project.results && (
                      <div className={`${colors.bg} rounded-lg p-3 mb-4 border-l-4 ${colors.border}`}>
                        <p className={`text-sm font-semibold ${colors.text} mb-1`}>Key Result:</p>
                        <p className="text-sm text-medium-gray">{project.results}</p>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span 
                          key={idx} 
                          className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border} border-opacity-30`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-white text-medium-gray border border-deep-blue/10">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-deep-blue/10">
                      <div className="flex items-center gap-3">
                        <button className={`flex items-center gap-1 text-sm ${colors.text} hover:opacity-80 transition-opacity`}>
                          <Eye size={16} />
                          <span>Case Study</span>
                        </button>
                        {project.completed_at && (
                          <div className="flex items-center gap-1 text-xs text-medium-gray">
                            <Calendar size={12} />
                            <span>{new Date(project.completed_at).getFullYear()}</span>
                          </div>
                        )}
                      </div>
                      <ExternalLink size={18} className={`${colors.text} group-hover:translate-x-1 transition-transform cursor-pointer`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View All Button */}
        {!loading && filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 text-deep-blue font-semibold hover:text-vibrant-teal transition-colors group">
              <span>View All Projects</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Category-specific hover shadows */
        .hover\\:shadow-deep-blue\\/20:hover {
          box-shadow: 0 10px 25px -5px rgba(30, 58, 138, 0.2);
        }
        .hover\\:shadow-vibrant-teal\\/20:hover {
          box-shadow: 0 10px 25px -5px rgba(20, 184, 166, 0.2);
        }
        .hover\\:shadow-warm-amber\\/20:hover {
          box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.2);
        }
        .hover\\:shadow-coral\\/20:hover {
          box-shadow: 0 10px 25px -5px rgba(248, 113, 113, 0.2);
        }
      `}</style>
    </section>
  );
}
