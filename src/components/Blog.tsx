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

export default function Blog({ posts }: { posts: BlogPost[] }) {
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
    const colors: Record<string, string> = {
      'DFIR': 'bg-blue-900/30 text-blue-400 border-blue-700',
      'Malware Analysis': 'bg-red-900/30 text-red-400 border-red-700',
      'Threat Hunting': 'bg-yellow-900/30 text-yellow-400 border-yellow-700',
      'Security Research': 'bg-purple-900/30 text-purple-400 border-purple-700',
    };
    return colors[category] || 'bg-slate-800/50 text-slate-400 border-slate-700';
  };

  return (
    <section id="blog" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-slate-50">Blog</h2>
          <p className="text-slate-400 font-mono text-sm">security research and writeups</p>
        </div>

        <div className="space-y-6">
          {displayPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-slate-700/40 border border-slate-600 rounded-lg p-6 hover:border-cyan-400 transition"
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
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.created_at)}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-50 group-hover:text-cyan-400 transition">
                {post.title}
              </h3>

              <p className="text-slate-400 mb-4">{post.excerpt}</p>

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
          <div className="text-center py-8 text-slate-500">
            <p className="font-mono text-sm">Blog posts will appear here as you publish them</p>
          </div>
        )}
      </div>
    </section>
  );
}
