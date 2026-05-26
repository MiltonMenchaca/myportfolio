import React from 'react';
import FadeIn from '../components/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    name: "Full Stack Dev",
    description: "Creation of robust, scalable frontend and backend systems with modern technologies like React, Node.js, Django, and Laravel.",
  },
  {
    number: "02",
    name: "Penetration Testing",
    description: "Audits, vulnerability scans, and offensive security testing to identify and remediate risks before they go live.",
  },
  {
    number: "03",
    name: "API Pentesting",
    description: "Specialized assessment of REST and GraphQL APIs for authentication flaws, injection vulnerabilities, broken access control, and OWASP API Top-10 risks.",
  },
  {
    number: "04",
    name: "Malware Research",
    description: "In-depth analysis of malicious behaviors, anti-virus evasion techniques, network signatures, and proactive system defense.",
  },
  {
    number: "05",
    name: "Server Monitoring",
    description: "Infrastructure observability using Grafana dashboards, metric collection, alerting pipelines, and proactive performance tuning for production servers.",
  },
  {
    number: "06",
    name: "Incident Response",
    description: "Rapid triage, containment, and forensic investigation of security incidents. Post-incident reporting with remediation roadmaps and hardening recommendations.",
  },
  {
    number: "07",
    name: "Secure APIs & DevSecOps",
    description: "Architecting high-performance, secure REST APIs and integrating DevSecOps pipelines with automated testing, dependency scanning, and hardened CI/CD workflows.",
  },
];


export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-white text-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              duration={0.8}
              className="border-b border-[#0C0C0C]/15 last:border-b-0 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 w-full"
            >
              {/* Service Number on Left */}
              <div
                className="font-black leading-none text-[#0C0C0C]/90 min-w-[80px] md:min-w-[150px] select-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              {/* Service Details on Right */}
              <div className="flex-1 flex flex-col gap-2">
                <h3
                  className="font-medium uppercase select-none text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
