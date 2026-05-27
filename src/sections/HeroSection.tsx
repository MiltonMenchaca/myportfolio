import React from 'react';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';
import { img } from '../utils/getImageUrl';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C] select-none text-[#D7E2EA]">
      {/* top spacing so hero content clears the global FloatingNav */}
      <div className="pt-20" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 px-6 md:px-10 py-12 lg:py-0 max-w-7xl mx-auto w-full z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 max-w-xl lg:max-w-none">
          <FadeIn delay={0.1} y={30} duration={0.8}>
            <p className="text-white/45 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-3">
              Hi, I'm
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} y={30} duration={0.8}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.9] text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5.5vw] xl:text-[6vw] mb-6">
              Milton<br className="hidden lg:block" /> Menchaca
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3} y={30} duration={0.8}>
            <p className="text-white/70 font-light uppercase tracking-wide leading-relaxed text-sm sm:text-base md:text-lg max-w-md lg:max-w-lg mb-8">
              A Full Stack Developer & Cybersecurity Specialist crafting secure, resilient, and performant web & apps.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} y={30} duration={0.8}>
            <div className="flex justify-center lg:justify-start">
              <ContactButton onClick={() => scrollToSection('contact')} />
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Interactive portrait */}
        <div className="flex-1 flex items-center justify-center order-1 lg:order-2 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[460px]">
          <FadeIn delay={0.5} y={30} duration={0.9}>
            <Magnet
              padding={100}
              strength={4}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <div className="relative group w-full">
                <img
                  src={img('/Milton-menchaca.webp')}
                  alt="Milton Menchaca Portrait"
                  className="w-full h-auto object-contain rounded-[40px] border border-[#D7E2EA]/20 pointer-events-none select-none shadow-[0_0_60px_rgba(182,0,168,0.2)] filter brightness-95 contrast-105 transition-all duration-500 group-hover:border-[#B600A8]/55"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = img('/red-hacker.jpg');
                  }}
                />
                {/* Ambient background glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#B600A8]/20 to-transparent opacity-60 blur-2xl pointer-events-none rounded-[40px] -z-10 transition-opacity duration-500 group-hover:opacity-80" />
              </div>
            </Magnet>
          </FadeIn>
        </div>
        
      </div>

      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(182,0,168,0.05),transparent_70%)] pointer-events-none z-0" />
      
      {/* Tiny spacing at the bottom */}
      <div className="h-6" />
    </section>
  );
};

export default HeroSection;
