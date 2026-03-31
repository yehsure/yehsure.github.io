import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-slate-800/80 backdrop-blur-md border-b border-slate-700 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 group"
        >
          <Shield className="w-6 h-6 text-cyan-500 group-hover:text-cyan-400 transition" />
          <span className="font-mono font-bold text-lg text-slate-50">portfolio</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-300 hover:text-cyan-400 transition font-mono text-sm"
          >
            about
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-slate-300 hover:text-cyan-400 transition font-mono text-sm"
          >
            projects
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className="text-slate-300 hover:text-cyan-400 transition font-mono text-sm"
          >
            blog
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-slate-300 hover:text-cyan-400 transition font-mono text-sm"
          >
            contact
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-cyan-400"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-800/95 border-t border-slate-700">
          <div className="px-4 py-4 space-y-4 font-mono text-sm">
            <button
              onClick={() => scrollToSection('about')}
              className="block text-slate-300 hover:text-cyan-400 transition"
            >
              about
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block text-slate-300 hover:text-cyan-400 transition"
            >
              projects
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block text-slate-300 hover:text-cyan-400 transition"
            >
              blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-slate-300 hover:text-cyan-400 transition"
            >
              contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
