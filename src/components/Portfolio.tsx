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

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      web_development: 'Web Development',
      ecommerce: 'E-commerce',
      branding: 'Branding',
      software: 'Software'
    };
    return labels[category] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      web_development: 'bg-blue-100 text-blue-700',
      ecommerce: 'bg-green-100 text-green-700',
      branding: 'bg-purple-100 text-purple-700',
      software: 'bg-orange-100 text-orange-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our latest successful projects across all service categories
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-600'
            }`}
          >
            All Projects
          </button>
          {['web_development', 'ecommerce', 'branding', 'software'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat as Project['category'])}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-600'
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-blue-600" size={40} />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-48 flex items-center justify-center text-white text-2xl font-bold">
                  {project.title.slice(0, 1)}
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(project.category)}`}>
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  {project.results && (
                    <div className="bg-blue-50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-blue-900 font-semibold">
                        Result: {project.results}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Client: {project.client_name}
                    </span>
                    <ExternalLink size={18} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
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
