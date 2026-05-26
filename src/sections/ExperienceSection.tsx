import React from 'react';
import FadeIn from '../components/FadeIn';
import { img } from '../utils/getImageUrl';

interface Experience {
  role: string;
  company: string;
  period: string;
  logo: string;
  url?: string;
  bullets?: string[];
  accent?: string;
}

const EXPERIENCES: Experience[] = [
  {
    role: 'Backend Developer',
    company: 'Atura',
    period: '6 months',
    logo: img('/gruposame.png'),
    url: 'https://www.cumulo.com.mx/',
    bullets: [
      'Development of full REST APIs with PHP / Laravel and Node.js',
      'Technical documentation of endpoints with Swagger / Postman',
      'MySQL database integration, schema design, and query optimization',
      'Authentication and authorization using JWT and OAuth2',
      'Deployment and maintenance of environments on Linux servers',
    ],
    accent: '#7B61FF',
  },
  {
    role: 'Network and Application Security Specialist',
    company: 'Grupo Same',
    period: 'Present · Recently Promoted',
    logo: img('/cumulo.png'),
    url: 'https://www.gruposame.mx/',
    bullets: [
      'Creation and configuration of Linux servers optimized for secure web deployment',
      'Conducting continuous penetration testing (pentesting) on web applications',
      'Proactive monitoring and rapid incident response to security events',
    ],
    accent: '#00B4D8',
  },
  {
    role: 'Developer & Security Researcher',
    company: '0x12 Dark Development',
    period: 'Since Jan 2025',
    logo: img('/0x12darkdev.png'),
    url: 'https://0x12darkdev.net/',
    bullets: [
      'Development of educational malware and advanced offensive techniques',
      'Creation of educational cybersecurity content for the community',
      'Research on evasion techniques for Windows and Android operating systems',
    ],
    accent: '#B600A8',
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Remote',
    period: 'Sep 2024 – Present',
    logo: img('/turing.png'),
    bullets: [
      'Interface development with React and backend with Django / Node.js',
      'Building REST APIs, database integration, and deployment',
      'Automation of technical tasks and security testing',
    ],
    accent: '#22C55E',
  },
];

const HARD_SKILLS = [
  'Full Stack Development (React, Node.js, Django, PHP/Laravel)',
  'API architecture & database optimisation',
  'Application & network security (defense-in-depth, hardening)',
  'Pentesting & red teaming (Metasploit, Mythic, ScareCrow, AV evasion)',
  'Malware analysis & evasion (Ghidra, offensive techniques)',
  'OSINT & digital forensics',
  'Automation & scripting (Python, PowerShell)',
  'Cybersecurity tools (Wireshark, OWASP Top 10, Empire)',
];

const SOFT_SKILLS = [
  'Effective bilingual communication (ES / EN)',
  'Analytical thinking',
  'Problem solving',
  'Team collaboration',
  'Cross-disciplinary collaboration',
  'Adaptability across environments & tech stacks',
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 z-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── HEADING ── */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="font-black uppercase tracking-tight leading-none mb-4"
            style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
          >
            Experience
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} y={20} duration={0.7}>
          <p
            className="text-[#0C0C0C]/50 font-light uppercase tracking-widest mb-16 sm:mb-20"
            style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
          >
            Where code meets security — across industry & research
          </p>
        </FadeIn>

        {/* ── TIMELINE ── */}
        <div className="relative flex flex-col gap-6 mb-24">
          {/* Vertical line */}
          <div className="absolute left-[70px] sm:left-[95px] top-0 bottom-0 w-px bg-[#0C0C0C]/8 hidden sm:block" />

          {EXPERIENCES.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1} y={30} duration={0.7}>
              <div className="group flex gap-5 sm:gap-7 items-start">
                {/* Logo card — wider & bigger */}
                <div
                  className="relative z-10 flex-shrink-0 w-[140px] h-[88px] sm:w-[190px] sm:h-[120px] rounded-xl bg-white flex items-center justify-center border shadow-sm transition-all duration-400 overflow-hidden"
                  style={{ borderColor: `${exp.accent}33` }}
                >
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                  {/* coloured ring on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `0 0 0 2px ${exp.accent}` }}
                  />
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-2xl border bg-[#0C0C0C]/[0.02] p-5 sm:p-6 transition-all duration-300 group-hover:shadow-md"
                  style={{ borderColor: `${exp.accent}22` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 mb-2">
                    <h3 className="font-bold text-[#0C0C0C] text-base sm:text-lg leading-tight">
                      {exp.role}
                    </h3>
                    <span
                      className="text-[10px] uppercase tracking-widest font-semibold whitespace-nowrap"
                      style={{ color: exp.accent }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline transition-opacity"
                      style={{ color: exp.accent }}
                    >
                      {exp.company} ↗
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-[#0C0C0C]/50">{exp.company}</p>
                  )}

                  {exp.bullets && (
                    <ul className="mt-3 space-y-1">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm text-[#0C0C0C]/65">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── SKILLS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Hard skills */}
          <FadeIn delay={0} y={30} duration={0.8}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#B600A8] font-semibold mb-5 flex items-center gap-2">
                <span className="w-5 h-px bg-[#B600A8]" />
                Hard Skills
              </p>
              <ul className="space-y-3">
                {HARD_SKILLS.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#0C0C0C]/75">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B600A8] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Soft skills */}
          <FadeIn delay={0.1} y={30} duration={0.8}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#00B4D8] font-semibold mb-5 flex items-center gap-2">
                <span className="w-5 h-px bg-[#00B4D8]" />
                Soft Skills
              </p>
              <ul className="space-y-3">
                {SOFT_SKILLS.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#0C0C0C]/75">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00B4D8] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Company logos strip */}
              <div className="mt-10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#0C0C0C]/35 font-medium mb-4">
                  Companies & Orgs
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  {[
                    { src: img('/gruposame.png'), alt: 'Grupo Same' },
                    { src: img('/cumulo.png'), alt: 'Atura' },
                    { src: img('/ssetco-logo.png'), alt: 'Ssetco' },
                    { src: img('/0x12darkdev.png'), alt: '0x12 Dark Dev' },
                    { src: img('/turing.png'), alt: 'Turing' },
                  ].map((l) => (
                    <img
                      key={l.alt}
                      src={l.src}
                      alt={l.alt}
                      className="h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
