interface ContactProps {
  theme: 'light' | 'dark';
}

export default function Contact({ theme }: ContactProps) {
  const bgSectionClass = theme === 'dark' ? 'bg-slate-800/30' : 'bg-slate-100/50';
  const textHeadingClass = theme === 'dark' ? 'text-slate-50' : 'text-slate-900';
  const textSubClass = theme === 'dark' ? 'text-slate-400' : 'text-slate-600';
  const cardBgClass = theme === 'dark' ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-200/40 border-slate-300';

  return (
    <section className={`py-20 px-4 ${bgSectionClass}`}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${textHeadingClass}`}>Get In Touch</h2>
        </div>

        <div className={`p-6 border rounded-lg ${cardBgClass}`}>
          <p className={textSubClass}>Contact information will appear here</p>
        </div>
      </div>
    </section>
  );
}