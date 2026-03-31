interface ProjectsProps {
  projects: any[];
  theme: 'light' | 'dark';
}

export default function Projects({ projects, theme }: ProjectsProps) {
  const bgSectionClass = theme === 'dark' ? 'bg-slate-800/30' : 'bg-slate-100/50';
  const textHeadingClass = theme === 'dark' ? 'text-slate-50' : 'text-slate-900';
  const textSubClass = theme === 'dark' ? 'text-slate-400' : 'text-slate-600';
  const cardBgClass = theme === 'dark' ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-200/40 border-slate-300';

  return (
    <section className={`py-20 px-4 ${bgSectionClass}`}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${textHeadingClass}`}>Projects</h2>
        </div>

        {projects.length === 0 ? (
          <div className={`text-center py-8 ${textSubClass}`}>
            <p className="font-mono text-sm">Projects will appear here</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {projects.map((project) => (
              <div key={project.id} className={`p-6 border rounded-lg ${cardBgClass}`}>
                <h3 className={`text-xl font-bold mb-2 ${textHeadingClass}`}>{project.name}</h3>
                <p className={textSubClass}>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}