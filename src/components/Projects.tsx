import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  link?: string;
  image_url?: string;
  featured: boolean;
}

export default function Projects({ projects }: { projects: Project[] }) {
  const displayProjects = projects.length > 0
    ? projects
    : [
        {
          id: '1',
          title: 'Splunk SOC Lab',
          description: 'Built a complete SOC environment with Splunk for analyzing network traffic, system logs, and detecting lateral movement attacks.',
          category: 'Lab',
          technologies: ['Splunk', 'Linux', 'Network Analysis'],
          featured: true,
        },
        {
          id: '2',
          title: 'Malware Analysis - Emotet',
          description: 'Static and dynamic analysis of Emotet trojan, documenting IOCs, behavior patterns, and creating detection rules.',
          category: 'Malware Analysis',
          technologies: ['IDA Pro', 'Wireshark', 'Yara'],
          featured: true,
        },
        {
          id: '3',
          title: 'DFIR Case Study',
          description: 'Complete forensic investigation of a compromised Windows system, including timeline analysis and evidence preservation.',
          category: 'DFIR',
          technologies: ['Volatility', 'Timeline Explorer', 'Registry Analysis'],
          featured: true,
        },
      ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-slate-50">Projects</h2>
          <p className="text-slate-400 font-mono text-sm">labs, analysis, and research</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-cyan-400 transition"
            >
              {project.image_url && (
                <div className="mb-4 h-40 bg-slate-800 rounded overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
              )}

              <div className="mb-3 inline-block">
                <span className="px-2 py-1 bg-slate-800 text-cyan-400 font-mono text-xs rounded">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-slate-50 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-800/50 text-slate-300 font-mono text-xs rounded border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm transition"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            <p className="font-mono text-sm">Projects will appear here as you add them to the database</p>
          </div>
        )}
      </div>
    </section>
  );
}
