import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-cyan-100 border border-cyan-300 rounded-lg text-cyan-900 font-mono text-sm font-semibold">
            cybersecurity specialist
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Security Analyst
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-semibold rounded-lg transition flex items-center justify-center gap-2 group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-mono font-semibold rounded-lg transition"
          >
            Get in Touch
          </button>
        </div>

        <div className="mt-16 pt-16 border-t border-slate-800">
          <p className="text-slate-500 font-mono text-sm mb-4">Featured areas</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['SOC Analysis', 'DFIR', 'Malware Analysis'].map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 font-mono text-sm hover:border-cyan-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
