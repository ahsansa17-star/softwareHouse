import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { ExternalLink, Loader } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'web_development' | 'ecommerce' | 'branding' | 'software';
  client_name: string;
  results: string | null;
  technologies: string[];
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
          .select('id, title, slug, description, category, client_name, results, technologies')
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

  const categoryColors: Record<Project['category'], string> = {
    web_development: 'bg-blue-900/20 text-blue-400 border-blue-700',
    ecommerce: 'bg-green-900/20 text-green-400 border-green-700',
    branding: 'bg-purple-900/20 text-purple-400 border-purple-700',
    software: 'bg-teal-900/20 text-teal-400 border-teal-700'
  };

  return (
    <section id="portfolio" className="py-20 bg-black text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 glow-amber">
            Featured Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our latest successful projects across all service categories
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-amber-400 text-black glow-amber hover:scale-105'
                : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-amber-400 hover:scale-105 transition-transform'
            }`}
          >
            All Projects
          </button>

          {Object.keys(categoryLabels).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat as Project['category'])}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? 'glow-' + cat + ' text-white scale-105'
                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:scale-105 transition-transform hover:border-amber-400'
              }`}
            >
              {categoryLabels[cat as Project['category']]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-amber-400" size={40} />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className={`bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-glow transition-all duration-300 group`}
              >
                {/* Project Header */}
                <div
                  className={`h-48 flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-br from-blue-700 via-purple-700 to-teal-700 glow-card`}
                >
                  {project.title.slice(0, 1)}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 border ${categoryColors[project.category]}`}>
                    {categoryLabels[project.category]}
                  </span>

                  <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>

                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {project.results && (
                    <div className="bg-amber-100 rounded-lg p-3 mb-4">
                      <p className="text-sm text-amber-700 font-semibold">
                        Result: {project.results}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Client: {project.client_name}</span>
                    <ExternalLink size={18} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Glow Animations */}
      <style>{`
        .glow-card {
          box-shadow: 0 0 12px rgba(0, 255, 255, 0.3), 0 0 24px rgba(0,128,255,0.2);
          transition: box-shadow 0.3s ease-in-out;
        }
        .glow-card:hover {
          box-shadow: 0 0 16px rgba(0, 255, 255, 0.5), 0 0 32px rgba(0,128,255,0.4);
        }
        .glow-blue { box-shadow: 0 0 12px rgba(59,130,246,0.5); }
        .glow-green { box-shadow: 0 0 12px rgba(16,185,129,0.5); }
        .glow-purple { box-shadow: 0 0 12px rgba(139,92,246,0.5); }
        .glow-software { box-shadow: 0 0 12px rgba(20,184,166,0.5); }
        .glow-amber { text-shadow: 0 0 8px rgba(255,191,0,0.7), 0 0 16px rgba(255,191,0,0.4); }
      `}</style>
    </section>
  );
}
