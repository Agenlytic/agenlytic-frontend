import React from 'react';

interface EfficiencyBadgeProps {
  className?: string;
  style?: React.CSSProperties;
}

export const EfficiencyBadge: React.FC<EfficiencyBadgeProps> = ({
  className = '',
  style,
}) => {
  return (
    <div
      className={`efficiency-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 18px',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '16px',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        boxShadow: '0 15px 35px -5px rgba(79, 70, 229, 0.16), 0 5px 15px rgba(0, 0, 0, 0.04)',
        userSelect: 'none',
        ...style,
      }}
    >
      {/* Mini Upward Bar Chart with trend line */}
      <div
        style={{
          width: '42px',
          height: '38px',
          display: 'flex',
          alignItems: 'flex-end',
          position: 'relative',
        }}
      >
        {/* Trend arrow */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 2,
            width: '38px',
            height: '24px',
            overflow: 'visible',
          }}
          viewBox="0 0 38 24"
          fill="none"
        >
          <path
            d="M 2 20 L 14 12 L 24 16 L 36 2"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 28 2 L 36 2 L 36 10"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Chart Bars */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '3px',
            width: '100%',
            height: '24px',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              flex: 1,
              height: '8px',
              borderRadius: '2px 2px 0 0',
              background: 'rgba(199, 210, 254, 0.7)',
            }}
          />
          <div
            style={{
              flex: 1,
              height: '14px',
              borderRadius: '2px 2px 0 0',
              background: '#818cf8',
            }}
          />
          <div
            style={{
              flex: 1,
              height: '20px',
              borderRadius: '2px 2px 0 0',
              background: '#6366f1',
            }}
          />
          <div
            style={{
              flex: 1,
              height: '24px',
              borderRadius: '2px 2px 0 0',
              background: '#4f46e5',
            }}
          />
        </div>
      </div>

      {/* Stats text */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          +245%
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: '#64748b',
            lineHeight: 1.2,
          }}
        >
          Efficiency
        </span>
      </div>
    </div>
  );
};

export default EfficiencyBadge;
