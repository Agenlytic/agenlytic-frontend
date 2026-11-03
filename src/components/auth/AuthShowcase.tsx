import React from 'react';

export const AuthShowcase: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        minHeight: '580px',
        padding: '40px',
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #1e1b4b 0%, #0f172a 60%, #1e1b4b 100%)',
        color: '#ffffff',
        boxShadow: '0 25px 60px -15px rgba(30, 27, 75, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Background ambient radial glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.35) 0%, transparent 70%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative Grid SVG overlay */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.08,
          pointerEvents: 'none',
        }}
      >
        <pattern id="auth-grid-pattern" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#ffffff" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#auth-grid-pattern)" />
      </svg>

      {/* Centerpiece: Animated 3D AI Agent Icon with Orbiting Glow */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Outer decorative orbit ring */}
        <div
          style={{
            position: 'absolute',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            border: '1px dashed rgba(168, 85, 247, 0.25)',
            animation: 'spin 40s linear infinite',
            pointerEvents: 'none',
          }}
        />

        {/* Inner decorative orbit ring */}
        <div
          style={{
            position: 'absolute',
            width: '310px',
            height: '310px',
            borderRadius: '50%',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            pointerEvents: 'none',
          }}
        />

        {/* Pulsing Backlight Halo */}
        <div
          style={{
            position: 'absolute',
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(79, 70, 229, 0.3) 50%, transparent 70%)',
            filter: 'blur(30px)',
            animation: 'pulseGlow 4s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />

        {/* Floating Animated Agent Character */}
        <div
          className="animate-float-slow"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src="/images/ai_agent_avatar.jpg"
            alt="Agenlytic Autonomous Agent"
            style={{
              width: '240px',
              height: '240px',
              borderRadius: '36px',
              objectFit: 'cover',
              border: '2.5px solid rgba(255, 255, 255, 0.22)',
              boxShadow: '0 25px 60px -10px rgba(79, 70, 229, 0.55), 0 0 40px rgba(139, 92, 246, 0.35)',
              display: 'block',
            }}
          />

          {/* Active Agent Status Pill */}
          <div
            style={{
              marginTop: '22px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(52, 211, 153, 0.45)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.35)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 8px #10b981',
                animation: 'pulseGlow 2s ease-in-out infinite',
              }}
            />
            <span
              style={{
                fontSize: '0.84rem',
                fontWeight: 700,
                color: '#34d399',
                letterSpacing: '0.02em',
              }}
            >
              AI Agent Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthShowcase;
