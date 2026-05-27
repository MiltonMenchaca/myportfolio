import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center select-none"
    >
      <div className="w-full max-w-xl flex flex-col items-center z-10">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase text-center tracking-tight mb-12 sm:mb-16"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        {/* Form Container */}
        <FadeIn delay={0.2} y={30} duration={0.8} className="w-full">
          {submitted ? (
            <div className="w-full p-8 rounded-[30px] border border-[#D7E2EA]/20 bg-[#141414]/50 backdrop-blur-md text-center flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
                <Send size={28} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Message Sent!</h3>
              <p className="text-sm text-[#D7E2EA]/60 max-w-xs">
                Thank you, Milton will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-[20px] bg-[#141414]/50 border border-[#D7E2EA]/10 focus:border-[#D7E2EA]/30 outline-none text-[#D7E2EA] font-light placeholder-[#D7E2EA]/30 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-[20px] bg-[#141414]/50 border border-[#D7E2EA]/10 focus:border-[#D7E2EA]/30 outline-none text-[#D7E2EA] font-light placeholder-[#D7E2EA]/30 transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Let's build something together..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-[20px] bg-[#141414]/50 border border-[#D7E2EA]/10 focus:border-[#D7E2EA]/30 outline-none text-[#D7E2EA] font-light placeholder-[#D7E2EA]/30 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 w-full rounded-full uppercase tracking-widest text-white font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 text-xs sm:text-sm md:text-base"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
              >
                <span className="block py-4">Send Message</span>
              </button>
            </form>
          )}
        </FadeIn>

        {/* Social Icons Footer */}
        <FadeIn delay={0.4} y={20} duration={0.8} className="mt-16 sm:mt-24 flex items-center gap-8">
          <a
            href="https://github.com/MiltonMenchaca"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-[#D7E2EA]/10 bg-[#141414]/50 flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/milton-emilio-menchaca-manero-349519398/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-[#D7E2EA]/10 bg-[#141414]/50 flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:menchacamiltone@gmail.com"
            className="w-12 h-12 rounded-full border border-[#D7E2EA]/10 bg-[#141414]/50 flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://wa.me/529931045778"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-[#D7E2EA]/10 bg-[#141414]/50 flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-all duration-300 text-[#25D366] hover:text-[#25D366]"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </FadeIn>

        {/* Copyright */}
        <p className="mt-16 text-center text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/20 font-medium">
          © {new Date().getFullYear()} Milton Menchaca. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactFooter;
