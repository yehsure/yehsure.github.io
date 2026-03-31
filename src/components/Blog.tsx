import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  created_at: string;
  featured: boolean;
}

interface BlogProps {
  posts: BlogPost[];
  theme: 'light' | 'dark';
}

export default function Blog({ posts, theme }: BlogProps) {
  const displayPosts = posts.length > 0
    ? posts.slice(0, 6)
    : [
        {
          id: '1',
          title: 'Understanding YARA Rules for Malware Detection',
          slug: 'yara-rules-malware-detection',
          excerpt: 'A comprehensive guide to writing effective YARA rules for detecting malware samples, with practical examples from real malware analysis.',
          category: 'Malware Analysis',
          created_at: new Date().toISOString(),
          featured: true,
        },
        {
          id: '2',
          title: 'DFIR Essentials: Windows Event Log Analysis',
          slug: 'dfir-windows-event-logs',
          excerpt: 'Deep dive into critical Windows event logs for incident response, covering authentication, process execution, and network connections.',
          category: 'DFIR',
          created_at: new Date(Date.now() - 86400000).toISOString(),
          featured: true,
        },
        {
          id: '3',
          title: 'Threat Hunting with Splunk: Detection Rules',
          slug: 'threat-hunting-splunk-rules',
          excerpt: 'Building effective Splunk searches and detection rules for identifying suspicious behavior in enterprise environments.',
          category: 'Threat Hunting',
          created_at: new Date(Date.now() - 172800000).toISOString(),
          featured: false,
        },
      ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    const darkColors: Record<string, string> = {
      'DFIR': 'bg-blue-900/30 text-blue-400 border-blue-700',
      'Malware Analysis': 'bg-red-900/30 text-red-400 border-red-700',
      'Threat Hunting': 'bg-yellow-900/30 text-yellow-400 border-yellow-700',
      'Security Research': 'bg-purple-900/30 text-purple-400 border-purple-700',
    };
    
    const lightColors: Record<string, string> = {
      'DFIR': 'bg-blue-100 text-blue-700 border-blue-300',
      'Malware Analysis': 'bg-red-100 text-red-700 border-red-300',
      'Threat Hunting': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'Security Research': 'bg-purple-100 text-purple-700 border-purple-300',
    };
    
    const colors = theme === 'dark' ? darkColors : lightColors;
    return colors[category] || (theme === 'dark' ? 'bg-slate-800/50 text-slate-400 border-slate-700' : 'bg-slate-200 text-slate-600 border-slate-300');
  };

  const bgSectionClass = theme === 'dark' ? 'bg-slate-800/30' : 'bg-slate-100/50';
  const textHeadingClass = theme === 'dark' ? 'text-slate-50' : 'text-slate-900';
  const textSubClass = theme === 'dark' ? 'text-slate-400' : 'text-slate-600';
  const cardBgClass = theme === 'dark' ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-200/40 border-slate-300';
  const textBodyClass = theme === 'dark' ? 'text-slate-400' : 'text-slate-600';

  return (
    <section className={`py-20 px-4 ${bgSectionClass}`}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${textHeadingClass}`}>Blog</h2>
        </div>

        <div className="space-y-6">
          {displayPosts.map((post) => (
            <article
              key={post.id}
              className={`group ${cardBgClass} border rounded-lg p-6 hover:border-cyan-400 transition`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 font-mono text-xs rounded border ${getCategoryColor(
                      post.category
                    )}`}
                  >
                    {post.category}
                  </span>
                  <div className={`flex items-center gap-2 font-mono text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.created_at)}
                  </div>
                </div>
              </div>

              <h3 className={`text-xl font-bold mb-3 ${textHeadingClass} group-hover:text-cyan-400 transition`}>
                {post.title}
              </h3>

              <p className={`${textBodyClass} mb-4`}>{post.excerpt}</p>

              <a
                href={`#blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm transition"
              >
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className={`text-center py-8 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
            <p className="font-mono text-sm">Blog posts will appear here as you publish them</p>
          </div>
        )}
      </div>
    </section>
  );
}