interface FooterProps {
  theme: 'light' | 'dark';
}

export default function Footer({ theme }: FooterProps) {
  const textClass = theme === 'dark' ? 'text-slate-400' : 'text-slate-600';
  const bgClass = theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-100';

  return (
    <footer className={`${bgClass} py-8 px-4 border-t ${theme === 'dark' ? 'border-slate-700' : 'border-slate-300'}`}>
      <div className="max-w-5xl mx-auto text-center">
        <p className={`font-mono text-sm ${textClass}`}>© 2026 yehsure. All rights reserved.</p>
      </div>
    </footer>
  );
}