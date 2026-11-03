import React from 'react';

export const BackgroundDecorations: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Top right ambient gradient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '65vw',
          height: '65vw',
          maxWidth: '850px',
          maxHeight: '850px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(216, 180, 254, 0.35) 0%, rgba(238, 242, 255, 0.2) 45%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Top center soft blue-violet glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '30%',
          width: '40vw',
          height: '40vw',
          maxWidth: '600px',
          maxHeight: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(199, 210, 254, 0.25) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Sweeping elegant background SVG wave curves */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '65vw',
          height: '100vh',
          minWidth: '600px',
          opacity: 0.6,
        }}
        viewBox="0 0 800 1000"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 250 0 C 180 280, 150 480, 280 720 C 350 850, 480 940, 750 1000 L 800 1000 L 800 0 Z"
          fill="url(#bg-wave-grad-1)"
        />
        <defs>
          <linearGradient id="bg-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ede9fe" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#f5f3ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom organic waves */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '180px',
          minWidth: '1000px',
        }}
        viewBox="0 0 1440 220"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Layer 1 - soft background lavender wave */}
        <path
          d="M 0 100 C 320 40, 680 180, 1020 90 C 1220 35, 1360 80, 1440 110 L 1440 220 L 0 220 Z"
          fill="rgba(237, 233, 254, 0.6)"
        />
        {/* Layer 2 - foreground richer violet/indigo curve */}
        <path
          d="M 0 135 C 280 85, 540 170, 840 120 C 1140 70, 1340 145, 1440 160 L 1440 220 L 0 220 Z"
          fill="url(#bottom-wave-grad)"
        />
        <defs>
          <linearGradient id="bottom-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#ddd6fe" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundDecorations;
