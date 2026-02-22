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
    web_development: 'bg-blue-100 text-blue-700',
    ecommerce: 'bg-green-100 text-green-700',
    branding: 'bg-purple-100 text-purple-700',
    software: 'bg-orange-100 text-orange-700'
  };

  return (
    <section id="portfolio" className="py-20 bg-black text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
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
                ? 'bg-amber-400 text-black'
                : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-amber-400'
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
                  ? 'bg-amber-400 text-black'
                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-amber-400'
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
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 h-48 flex items-center justify-center text-white text-2xl font-bold">
                  {project.title.slice(0, 1)}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${categoryColors[project.category]}`}>
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
    </section>
  );
}
