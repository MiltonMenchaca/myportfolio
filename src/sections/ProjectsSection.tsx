import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { img } from '../utils/getImageUrl';

interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  link: string;
  github?: string;
  stars?: number;
  forks?: number;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'VulnHunter',
    category: 'Offensive Security Tool',
    description:
      'Automated exploitation framework integrating Metasploit, Nmap & custom payloads for network and application vulnerability assessment.',
    tech: ['Python', 'Metasploit', 'Nmap', 'Bash', 'Shodan'],
    col1Img1: img('/metasploit.png'),
    col1Img2: img('/ScareCrow.png'),
    col2Img: img('/logovulnhunter.png'),
    link: 'https://github.com/MiltonMenchaca/VulnHunter',
    github: 'https://github.com/MiltonMenchaca/VulnHunter',
    stars: 1,
    forks: 1,
  },
  {
    number: '02',
    name: 'Inclúyeme en tu Mundo',
    category: 'Production Web App',
    description:
      'Full-stack accessibility platform with blog, resource hub and donation system built for a non-profit supporting people with disabilities.',
    tech: ['React', 'Django', 'PostgreSQL', 'REST API', 'Tailwind'],
    col1Img1: img('/ssetco.png'),
    col1Img2: img('/blog.png'),
    col2Img: img('/INCTM.png'),
    link: 'https://www.incluyemeentumundo.org/',
  },
  {
    number: '03',
    name: 'OSINT Platform',
    category: 'Intelligence Platform',
    description:
      'Unified reconnaissance dashboard that aggregates Shodan, Nmap and open-source intelligence APIs into a single automated workflow.',
    tech: ['Python', 'FastAPI', 'Nmap', 'Shodan', 'OSINT'],
    col1Img1: img('/nmap.png'),
    col1Img2: img('/osint.jpeg'),
    col2Img: img('/osintplatform.png'),
    link: 'https://github.com/MiltonMenchaca/Osint_platform',
    github: 'https://github.com/MiltonMenchaca/Osint_platform',
  },
];

/* ── GitHub icon SVG ── */
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
);

/* ── Tech badge ── */
const TechBadge: React.FC<{ label: string }> = ({ label }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: '9999px',
      fontSize: '0.68rem',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'rgba(215,226,234,0.7)',
      border: '1px solid rgba(215,226,234,0.15)',
      background: 'rgba(215,226,234,0.05)',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </span>
);

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pb-32 -mt-10 sm:-mt-12 md:-mt-14 z-20 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="pt-24 pb-16 flex justify-center w-full">
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase text-center tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      {/* Sticky Project Cards Stack */}
      <div className="w-full max-w-6xl flex flex-col gap-20 relative">
        {PROJECTS.map((project, index) => (
          <Card
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: any;
}

const Card: React.FC<CardProps> = ({ project, index, totalCards, progress }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const startScrollVal = index / totalCards;
  const endScrollVal = (index + 1) / totalCards;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [startScrollVal, endScrollVal], [1, targetScale]);

  return (
    <div
      className="sticky w-full flex items-center justify-center py-[2vh]"
      style={{ top: `${80 + index * 20}px`, height: '62vh' }}
    >
      <motion.div
        ref={cardRef}
        style={{ scale, willChange: 'transform' }}
        className="relative w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA]/15 rounded-[32px] sm:rounded-[40px] p-4 sm:p-5 md:p-6 flex flex-col gap-3 shadow-[0_30px_100px_rgba(0,0,0,0.95)] hover:border-[#B600A8]/60 hover:shadow-[0_0_50px_rgba(182,0,168,0.18)] transition-all duration-500"
      >
        {/* ── Top Row ── */}
        <div className="flex flex-wrap justify-between items-start gap-3 flex-shrink-0">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number */}
            <span
              className="font-black leading-none text-[#D7E2EA]/15 select-none flex-shrink-0"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 60px)' }}
            >
              {project.number}
            </span>

            {/* Meta */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 font-medium">
                {project.category}
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-black uppercase text-[#D7E2EA] leading-tight">
                {project.name}
              </h3>

              {/* Description */}
              <p
                className="text-[#D7E2EA]/50 font-normal leading-snug mt-0.5 hidden sm:block"
                style={{ fontSize: 'clamp(0.68rem, 1vw, 0.82rem)', maxWidth: '440px' }}
              >
                {project.description}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/70 hover:text-[#D7E2EA] hover:border-[#D7E2EA]/40 transition-all duration-200 text-xs font-semibold uppercase tracking-wider"
                style={{ fontSize: '0.7rem' }}
              >
                <GithubIcon />
                GitHub
              </a>
            )}

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-200 font-bold uppercase tracking-wider"
              style={{ fontSize: '0.7rem' }}
            >
              {project.github ? 'Live' : 'Visit'}
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Tech Tags ── */}
        <div className="flex flex-wrap gap-1.5 flex-shrink-0">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        {/* ── Image Grid ── */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-10 gap-3 overflow-hidden min-h-0">
          {/* Col 1 – 2 stacked images (40%) */}
          <div className="md:col-span-4 flex flex-col gap-3 min-h-0">
            {[project.col1Img1, project.col1Img2].map((src, i) => (
              <div
                key={i}
                className="flex-1 rounded-[18px] overflow-hidden bg-[#141414] border border-[#D7E2EA]/8 relative"
              >
                <img
                  src={src}
                  alt={`${project.name} view ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Col 2 – main tall image (60%) */}
          <div className="md:col-span-6 rounded-[18px] overflow-hidden bg-[#141414] border border-[#D7E2EA]/8 relative min-h-[100px]">
            <img
              src={project.col2Img}
              alt={`${project.name} main`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
