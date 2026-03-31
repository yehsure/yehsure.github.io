import { Code2, Brain, Shield, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: 'Security Operations',
      items: ['SIEM Management', 'Log Analysis', 'Alert Triage', 'Incident Response', 'Threat Hunting']
    },
    {
      category: 'Digital Forensics',
      items: ['Memory Forensics', 'Disk Forensics', 'Timeline Analysis', 'Event Log Analysis', 'Chain of Custody']
    },
    {
      category: 'Malware Analysis',
      items: ['Static Analysis', 'Dynamic Analysis', 'Behavior Analysis', 'Reverse Engineering', 'Detection Rules']
    },
    {
      category: 'Tools & Platforms',
      items: ['Splunk', 'ELK Stack', 'Wireshark', 'Volatility', 'IDA Pro', 'Ghidra', 'Yara']
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-50">About Me</h2>
          <p className="text-slate-400 font-mono text-sm mb-4">_blue_team_analyst</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I'm a cybersecurity specialist focused on defensive security and threat investigation. My passion lies in understanding attacker behavior, uncovering indicators of compromise, and building robust detection mechanisms.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Through hands-on labs, real-world incident analysis, and continuous learning, I'm developing expertise in security operations and digital forensics. I believe in documenting my findings and contributing to the security community through writeups and detection rules.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-50">Security Focused</h3>
                <p className="text-slate-400 text-sm">Dedicated to defensive operations and threat analysis</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <Brain className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-50">Research Driven</h3>
                <p className="text-slate-400 text-sm">Deep dives into malware and attack techniques</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-50">Lab Enthusiast</h3>
                <p className="text-slate-400 text-sm">Hands-on learning through CTFs and labs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-600 pt-16">
          <h3 className="text-2xl font-bold mb-8 text-slate-50">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="font-mono text-sm text-cyan-400 mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700 border border-slate-600 rounded text-slate-200 font-mono text-xs hover:border-cyan-400 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
