import React, { useEffect, useState } from 'react';

const LINKS = ['About', 'Experience', 'Projects', 'Contact'];

const FloatingNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  const ease = '0.55s cubic-bezier(0.4,0,0.2,1)';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        paddingTop: scrolled ? '16px' : '0px',
        transition: `padding-top ${ease}`,
      }}
    >
      <nav
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          /* fixed width pill so it never collapses */
          width: scrolled ? '680px' : '100%',
          maxWidth: '100%',
          borderRadius: scrolled ? '9999px' : '0px',
          padding: scrolled ? '14px 36px' : '22px 40px',
          background: scrolled ? 'rgba(14,14,14,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
          border: scrolled ? '1px solid rgba(215,226,234,0.12)' : '1px solid transparent',
          boxShadow: scrolled
            ? '0 12px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset'
            : 'none',
          transition: [
            `width ${ease}`,
            `border-radius ${ease}`,
            `padding ${ease}`,
            'background 0.4s ease',
            'border-color 0.4s ease',
            'box-shadow 0.5s ease',
          ].join(', '),
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontWeight: 800,
            color: '#D7E2EA',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontSize: scrolled ? '0.88rem' : '1.15rem',
            whiteSpace: 'nowrap',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            flexShrink: 0,
            transition: `font-size ${ease}`,
          }}
        >
          Milton M.
        </button>

        {/* Divider — only visible when scrolled */}
        <div
          style={{
            width: '1px',
            height: scrolled ? '20px' : '0px',
            background: 'rgba(215,226,234,0.18)',
            flexShrink: 0,
            transition: `height ${ease}`,
          }}
        />

        {/* Links */}
        <div
          style={{
            display: 'flex',
            gap: scrolled ? '28px' : '40px',
            transition: `gap ${ease}`,
          }}
        >
          {LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                color: '#D7E2EA',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: scrolled ? '0.78rem' : '0.95rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                opacity: 0.75,
                transition: `font-size ${ease}, opacity 0.2s ease`,
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = '0.75';
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default FloatingNav;
