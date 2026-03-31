import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onThemeToggle: () => void;
  theme: 'light' | 'dark';
  onNavClick: (page: 'home' | 'about' | 'projects' | 'blog' | 'contact') => void;
  currentPage: 'home' | 'about' | 'projects' | 'blog' | 'contact';
}

export default function Header({ onThemeToggle, theme, onNavClick, currentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', id: 'about' as const },
    { label: 'Projects', id: 'projects' as const },
    { label: 'Blog', id: 'blog' as const },
  ];

  const handleNavClick = (id: 'home' | 'about' | 'projects' | 'blog' | 'contact') => {
    setIsOpen(false);
    onNavClick(id);
  };

  const bgClass = theme === 'dark' 
    ? 'bg-slate-800/80 border-slate-700' 
    : 'bg-white/80 border-slate-200';
  
  const textClass = theme === 'dark' 
    ? 'text-slate-50' 
    : 'text-slate-900';
  
  const navTextClass = theme === 'dark' 
    ? 'text-slate-300 hover:text-cyan-400' 
    : 'text-slate-700 hover:text-cyan-600';

  return (
    <header className={`fixed top-0 w-full ${bgClass} backdrop-blur-md border-b z-50`}>
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group"
        >
          <span className={`font-mono font-bold text-lg ${textClass}`}>yehsure</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`${navTextClass} transition font-mono text-sm ${
                currentPage === item.id ? 'text-cyan-400 font-bold' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onThemeToggle}
            className={`p-2 rounded-lg transition ${
              theme === 'dark' 
                ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' 
                : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
            }`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${navTextClass} transition`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-slate-800/95 border-slate-700' : 'bg-white/95 border-slate-200'} border-t`}>
          <div className="px-4 py-4 space-y-4 font-mono text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block ${navTextClass} transition ${
                  currentPage === item.id ? 'text-cyan-400 font-bold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}