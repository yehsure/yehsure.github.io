import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function App() {
  const [projects, setProjects] = useState<any[]>([]);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [projectsRes, blogRes] = await Promise.all([
        supabase.from('projects').select('*').order('created_at', { ascending: false }),
        supabase.from('blog_posts').select('*').where('published', 'eq', true).order('created_at', { ascending: false })
      ]);

      if (projectsRes.data) setProjects(projectsRes.data);
      if (blogRes.data) setBlogPosts(blogRes.data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Blog posts={blogPosts} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
