import React, { useState, useEffect } from 'react';
import FadeIn from '../components/FadeIn';
import { img } from '../utils/getImageUrl';

interface Certificate {
  img?: string;
  pdf?: string;
  title: string;
  issuer: string;
  isAws?: boolean;
  url?: string;
}

const CERTIFICATES: Certificate[] = [
  {
    img: img('/htb-bug-bounty.png'),
    title: 'Bug Bounty Hunter',
    issuer: 'Hack The Box',
    url: 'https://academy.hackthebox.com/achievement/2283240/path/17',
  },
  {
    img: img('/certificado.jpg'),
    title: 'Full Stack Web Development Bootcamp',
    issuer: 'Bootcamp',
  },
  {
    img: img('/ethcissco.png'),
    title: 'Ethical Hacker',
    issuer: 'Cisco',
  },
  {
    img: img('/jran.png'),
    title: 'Junior Cybersecurity Analyst',
    issuer: 'Cisco',
  },
  {
    img: img('/certificado-core.png'),
    title: 'Pentesting Bootcamp',
    issuer: 'Bootcamp',
  },
  {
    img: img('/operaciones de infiltracion.jpeg'),
    title: 'Infiltration Operations',
    issuer: 'Training Program',
  },
  {
    img: img('/ETH.png'),
    title: 'Introduction to Hacking',
    issuer: 'Course',
  },
  {
    img: img('/pyof.png'),
    title: 'Offensive Python',
    issuer: 'Course',
  },
  {
    img: img('/Malware development.png'),
    title: 'Introduction to Malware Development',
    issuer: 'Course',
  },
  {
    img: img('/aws-data-engineering.png'),
    title: 'AWS Academy Graduate — Data Engineering',
    issuer: 'Amazon Web Services',
    isAws: true,
  },
  {
    img: img('/aws-cloud-foundations.png'),
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services',
    isAws: true,
  },
];

// AWS Badge Card
const AwsPdfCard: React.FC<{ cert: Certificate; isSelected: boolean; onClick: () => void }> = ({
  cert,
  isSelected,
  onClick,
}) => (
  <div
    className={`group relative rounded-[24px] overflow-hidden cursor-pointer transition-all duration-500 bg-[#0C0C0C] border-2 ${
      isSelected
        ? 'border-[#FF9900] ring-2 ring-[#FF9900] shadow-[0_0_30px_rgba(255,153,0,0.30)]'
        : 'border-[#0C0C0C]/10 hover:border-[#FF9900]/40 hover:shadow-[0_0_25px_rgba(255,153,0,0.25)] hover:-translate-y-1'
    }`}
    onClick={onClick}
  >
    {/* AWS Badge Image */}
    <div className="relative overflow-hidden aspect-[4/3] bg-[#1a1a1a] flex items-center justify-center p-4">
      <img
        src={cert.img}
        alt={cert.title}
        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Expand hint */}
      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 11L11 1M11 1H4M11 1V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>

    {/* Card text */}
    <div className="p-4 bg-white border-t border-[#0C0C0C]/5">
      <p className="font-medium text-[#0C0C0C] leading-tight mb-1" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)' }}>
        {cert.title}
      </p>
      <p className="text-[10px] uppercase tracking-widest text-[#FF9900] font-medium">
        {cert.issuer}
      </p>
    </div>
  </div>
);

// Main Section
export const CertificatesSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCardClick = (cert: Certificate, index: number) => {
    setExpanded(expanded === index ? null : index);
    if (cert.img) {
      setActiveCert(cert);
    }
  };

  const regularCerts = CERTIFICATES.filter((c) => !c.isAws);
  const awsCerts = CERTIFICATES.filter((c) => c.isAws);

  return (
    <section
      id="certificates"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 z-30 select-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="font-black uppercase text-center mb-4 tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Certificates
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20} duration={0.8}>
          <p
            className="text-center text-[#0C0C0C]/50 font-light uppercase tracking-widest mb-16 sm:mb-20 md:mb-24"
            style={{ fontSize: 'clamp(0.7rem, 1.3vw, 1rem)' }}
          >
            Certified across full stack development, cloud & offensive security
          </p>
        </FadeIn>

        <div className="w-full mb-8">
          <FadeIn delay={0.05} y={20} duration={0.7}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF9900] font-medium mb-4 flex items-center gap-2">
              <span className="w-5 h-px bg-[#FF9900]" />
              AWS Academy
              <span className="w-5 h-px bg-[#FF9900]" />
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl">
            {awsCerts.map((cert, i) => {
              const globalIndex = regularCerts.length + i;
              return (
                <FadeIn key={`aws-${i}`} delay={i * 0.08} y={30} duration={0.7}>
                  <AwsPdfCard
                    cert={cert}
                    isSelected={expanded === globalIndex}
                    onClick={() => handleCardClick(cert, globalIndex)}
                  />
                </FadeIn>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.1} y={0} duration={0.5} className="w-full mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#0C0C0C]/8" />
            <span className="text-[10px] uppercase tracking-widest text-[#0C0C0C]/30 font-medium">More Certifications</span>
            <div className="flex-1 h-px bg-[#0C0C0C]/8" />
          </div>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-5 w-full">
          {regularCerts.map((cert, index) => (
            <FadeIn
              key={index}
              delay={index * 0.07}
              y={30}
              duration={0.7}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
            >
              <div
                className={`group relative rounded-[24px] overflow-hidden cursor-pointer transition-all duration-500 bg-[#0C0C0C] border-2 border-[#0C0C0C]/10 ${
                  expanded === index
                    ? 'ring-2 ring-[#B600A8] shadow-[0_0_30px_rgba(182,0,168,0.25)]'
                    : 'hover:shadow-[0_8px_40px_rgba(12,12,12,0.18)] hover:-translate-y-1'
                }`}
                onClick={() => handleCardClick(cert, index)}
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[#1a1a1a]">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Expand hint */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Card text */}
                <div className="p-4 bg-white border-t border-[#0C0C0C]/5">
                  <p className="font-medium text-[#0C0C0C] leading-tight mb-1" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)' }}>
                    {cert.title}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-[#0C0C0C]/40 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom badge count */}
        <FadeIn delay={0.6} y={20} duration={0.8} className="mt-16 sm:mt-20">
          <div className="flex items-center gap-4 px-8 py-4 rounded-full border border-[#0C0C0C]/10">
            <span
              className="font-black text-[#0C0C0C]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            >
              11
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#0C0C0C]/50 font-medium">Certifications</span>
              <span className="text-xs uppercase tracking-widest text-[#0C0C0C]/30 font-light">& counting</span>
            </div>
            <div className="w-px h-10 bg-[#0C0C0C]/10 mx-2" />
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#0C0C0C]/50 font-medium">Areas</span>
              <span className="text-xs uppercase tracking-widest text-[#0C0C0C]/30 font-light">Dev · Cloud · Security</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Lightbox / Zoom Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
          onClick={() => setActiveCert(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white cursor-pointer transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/10"
            onClick={() => setActiveCert(null)}
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {/* Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] p-2 flex flex-col items-center justify-center animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCert.img}
              alt={activeCert.title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transition-transform duration-500 hover:scale-[1.08] cursor-zoom-in"
            />
            <div className="mt-4 text-center text-white flex flex-col items-center gap-2">
              <h3 className="font-bold text-lg leading-tight">{activeCert.title}</h3>
              <p className="text-xs uppercase tracking-widest text-white/55 font-medium">{activeCert.issuer}</p>
              {activeCert.url && (
                <a
                  href={activeCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/25 transition-all duration-300 text-white cursor-pointer"
                >
                  Verify Credential ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
