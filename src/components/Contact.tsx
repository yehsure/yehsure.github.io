import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-slate-50">Get in Touch</h2>
        <p className="text-slate-400 font-mono text-sm mb-12">let's connect</p>

        <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          I'm always interested in discussing cybersecurity, security research, and professional opportunities. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="group p-6 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 transition"
          >
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition" />
            <h3 className="font-semibold text-slate-50 mb-2">Email</h3>
            <p className="text-slate-400 text-sm break-all">your.email@example.com</p>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 transition"
          >
            <Github className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition" />
            <h3 className="font-semibold text-slate-50 mb-2">GitHub</h3>
            <p className="text-slate-400 text-sm">github.com/yourprofile</p>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 transition"
          >
            <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition" />
            <h3 className="font-semibold text-slate-50 mb-2">LinkedIn</h3>
            <p className="text-slate-400 text-sm">linkedin.com/in/yourprofile</p>
          </a>
        </div>

        <div className="border-t border-slate-800 pt-12">
          <p className="text-slate-400 font-mono text-sm">or message me directly</p>
          <form className="mt-8 max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="your email"
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded text-slate-50 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition font-mono"
            />
            <textarea
              placeholder="your message"
              rows={4}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded text-slate-50 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition font-mono resize-none"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-semibold rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
