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
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'projects' | 'blog' | 'contact'>('home');

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

    // Load theme from localStorage, default to 'dark'
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setTheme(savedTheme || 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const bgClass = theme === 'dark' 
    ? 'min-h-screen bg-slate-900 text-slate-50' 
    : 'min-h-screen bg-white text-slate-900';

  return (
    <div className={bgClass}>
      <Header 
        onThemeToggle={toggleTheme} 
        theme={theme} 
        onNavClick={setCurrentPage}
        currentPage={currentPage}
      />
      <main>
        {currentPage === 'home' && <Hero onNavClick={setCurrentPage} theme={theme} />}
        {currentPage === 'about' && <About theme={theme} />}
        {currentPage === 'projects' && <Projects projects={projects} theme={theme} />}
        {currentPage === 'blog' && <Blog posts={blogPosts} theme={theme} />}
        {currentPage === 'contact' && <Contact theme={theme} />}
      </main>
      <Footer theme={theme} />
    </div>
  );
}