import { ArrowRight, Github, Linkedin, Facebook, Instagram, BookOpen, Mail } from 'lucide-react';

interface HeroProps {
  onNavClick: (page: 'home' | 'about' | 'projects' | 'blog' | 'contact') => void;
  theme: 'light' | 'dark';
}

export default function Hero({ onNavClick, theme }: HeroProps) {
  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/yehsure' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/tấn-phát-nguyễn-a821093b3' },
    { icon: BookOpen, label: 'HackMD', url: 'https://hackmd.io/@yehsure' },
    { icon: Mail, label: 'Gmail', url: '/1000fitnguyen@gmail.com' },
    { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/nguyen.tan.phat.579945/' },
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/ptnandylenolton_1/' },
  ];

  const handleExplore = () => {
    onNavClick('about');
  };

  const bgGradient = theme === 'dark'
    ? 'bg-gradient-to-b from-slate-900 to-slate-800'
    : 'bg-gradient-to-b from-slate-50 to-white';

  const sidebarBg = theme === 'dark'
    ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
    : 'bg-slate-100/50 border-slate-300 hover:bg-slate-100';

  const textPrimary = theme === 'dark' ? 'text-slate-50' : 'text-slate-900';
  const textSecondary = theme === 'dark' ? 'text-slate-400' : 'text-slate-600';
  const textTertiary = theme === 'dark' ? 'text-slate-300' : 'text-slate-700';

  const sidebarText = theme === 'dark'
    ? 'text-slate-300 group-hover:text-cyan-400'
    : 'text-slate-700 group-hover:text-cyan-600';

  return (
    <section id="hero" className={`min-h-screen ${bgGradient} flex items-center justify-center px-4 pt-20`}>
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-3 gap-8 items-center">
        {/* Left Sidebar - Social Links */}
        <div className="md:col-span-1">
          <div className="space-y-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.label === 'Gmail' ? '_self' : '_blank'}
                  rel={social.label === 'Gmail' ? '' : 'noopener noreferrer'}
                  className={`flex items-center gap-3 p-3 rounded-lg border ${sidebarBg} transition group hover:border-cyan-400`}
                >
                  <Icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                  <span className={`${sidebarText} transition font-mono text-sm`}>
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Center - Main Content */}
        <div className="md:col-span-2 text-center md:text-left">
          <div className="mb-8">
            <h1 className={`text-6xl md:text-7xl font-bold ${textPrimary} mb-4`}>
              yehsure
            </h1>
            <p className={`text-xl md:text-2xl ${textSecondary} font-mono`}>
              Information Security Enthusiast
            </p>
          </div>

          <p className={`text-lg ${textTertiary} mb-12 leading-relaxed`}>
            CTF competitor • Digital Forensics & Reverse Engineering • SOC/DFIR focused
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={handleExplore}
              className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
            >
              Explore
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}