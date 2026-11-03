import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  textColor = '#0f172a',
}) => {
  const iconSizes = {
    sm: 26,
    md: 36,
    lg: 46,
  };

  const fontSizes = {
    sm: '1.15rem',
    md: '1.45rem',
    lg: '1.85rem',
  };

  const currentSize = iconSizes[size];

  return (
    <div
      className={`logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'sm' ? '8px' : '12px',
        userSelect: 'none',
      }}
    >
      <svg
        width={currentSize}
        height={currentSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="agenlytic-grad-1" x1="15%" y1="90%" x2="50%" y2="15%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <linearGradient id="agenlytic-grad-2" x1="50%" y1="15%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
          <linearGradient id="agenlytic-grad-3" x1="85%" y1="90%" x2="15%" y2="90%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
          <linearGradient id="agenlytic-facet-core" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>

        {/* Outer stylized geometric Mobius / Delta Prism */}
        {/* Left facet */}
        <path
          d="M 50 16 L 22 72 C 20 76 22 81 27 82 L 42 82 L 50 64 L 38 64 L 50 38 L 62 64 L 73 64 L 50 16 Z"
          fill="url(#agenlytic-grad-1)"
          opacity="0.9"
        />
        {/* Right facet */}
        <path
          d="M 50 16 L 78 72 C 80 76 78 81 73 82 L 58 82 L 50 64 L 62 64 L 50 38 L 38 64 L 27 64 L 50 16 Z"
          fill="url(#agenlytic-grad-2)"
        />
        {/* Bottom loop / connection facet */}
        <path
          d="M 27 82 L 73 82 C 77 82 80 79 78 75 L 70 58 L 58 82 L 42 82 L 30 58 L 22 75 C 20 79 23 82 27 82 Z"
          fill="url(#agenlytic-grad-3)"
        />
        {/* Inner dynamic core prism */}
        <polygon
          points="50,34 65,65 35,65"
          fill="url(#agenlytic-facet-core)"
          opacity="0.95"
        />
      </svg>

      {showText && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: fontSizes[size],
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: textColor,
            lineHeight: 1,
          }}
        >
          Agenlytics
        </span>
      )}
    </div>
  );
};

export default Logo;
