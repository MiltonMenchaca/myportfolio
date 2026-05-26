import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';
import FadeIn from '../components/FadeIn';
import { img } from '../utils/getImageUrl';

interface Project {
  number: string;
  name: string;
  category: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    name: "VulnHunter",
    category: "Offensive Security Tool",
    col1Img1: img("/metasploit.png"),
    col1Img2: img("/ScareCrow.png"),
    col2Img: img("/logovulnhunter.png"),
    link: "https://github.com/MiltonMenchaca/VulnHunter"
  },
  {
    number: "02",
    name: "Inclúyeme en tu Mundo",
    category: "Production Web App",
    col1Img1: img("/ssetco.png"),
    col1Img2: img("/blog.png"),
    col2Img: img("/INCTM.png"),
    link: "https://www.incluyemeentumundo.org/"
  },
  {
    number: "03",
    name: "OSINT Platform",
    category: "Intelligence Platform",
    col1Img1: img("/nmap.png"),
    col1Img2: img("/osint.jpeg"),
    col2Img: img("/osintplatform.png"),
    link: "https://github.com/MiltonMenchaca/Osint_platform"
  }
];

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress across the projects container
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
      <div className="w-full max-w-6xl flex flex-col gap-24 relative">
        {PROJECTS.map((project, index) => {
          return (
            <Card
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
            />
          );
        })}
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

  // Scroll mapping for card scale-down effect
  const startScrollVal = index / totalCards;
  const endScrollVal = (index + 1) / totalCards;
  
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [startScrollVal, endScrollVal], [1, targetScale]);

  return (
    <div
      className="sticky w-full flex items-center justify-center py-[2vh]"
      style={{
        top: `${80 + index * 24}px`, // Sticking offset positions
        height: '80vh',
      }}
    >
      <motion.div
        ref={cardRef}
        style={{
          scale,
          willChange: 'transform',
        }}
        className="relative w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA]/15 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 md:gap-6 shadow-[0_30px_100px_rgba(0,0,0,0.95)] hover:border-[#B600A8]/70 hover:shadow-[0_0_60px_rgba(182,0,168,0.22)] transition-all duration-500"
      >
        {/* Top Row */}
        <div className="flex flex-wrap justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            {/* Project Number */}
            <span
              className="font-black leading-none text-[#D7E2EA]/20 select-none"
              style={{ fontSize: 'clamp(2rem, 8vw, 90px)' }}
            >
              {project.number}
            </span>

            {/* Label and Title */}
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Button Link */}
          <LiveProjectButton href={project.link} className="scale-90 sm:scale-100" />
        </div>

        {/* Bottom Row - Two Column Image Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-5 md:gap-6 overflow-hidden min-h-0">
          {/* Column 1 (40% width) - 2 stacked images */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-5 md:gap-6 min-h-0">
            <div
              className="w-full rounded-[25px] sm:rounded-[35px] md:rounded-[45px] overflow-hidden bg-[#141414] border border-[#D7E2EA]/10 flex-1 relative"
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} view 1`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 pointer-events-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo512.png';
                }}
              />
            </div>
            <div
              className="w-full rounded-[25px] sm:rounded-[35px] md:rounded-[45px] overflow-hidden bg-[#141414] border border-[#D7E2EA]/10 flex-1 relative"
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} view 2`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 pointer-events-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo512.png';
                }}
              />
            </div>
          </div>

          {/* Column 2 (60% width) - 1 tall image */}
          <div className="md:col-span-6 rounded-[25px] sm:rounded-[35px] md:rounded-[45px] overflow-hidden bg-[#141414] border border-[#D7E2EA]/10 h-full relative min-h-[150px] md:min-h-0">
            <img
              src={project.col2Img}
              alt={`${project.name} main showcase`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 pointer-events-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo512.png';
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
