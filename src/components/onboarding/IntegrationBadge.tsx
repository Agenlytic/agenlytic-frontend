import React from 'react';

export type IntegrationType = 'drive' | 'notion' | 'slack' | 'salesforce' | 'database';

interface IntegrationBadgeProps {
  type: IntegrationType;
  label?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const IntegrationBadge: React.FC<IntegrationBadgeProps> = ({
  type,
  label,
  size = 46,
  className = '',
  style,
}) => {
  const renderIcon = () => {
    switch (type) {
      case 'drive':
        return (
          <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
            <path d="M43.65 25 29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44C.4 50 0 51.55 0 53.1h27.5z" fill="#00ac47"/>
            <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 10.1z" fill="#ea4335"/>
            <path d="M43.65 25 57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
            <path d="M59.8 53.1H87.3c0-1.55-.4-3.1-1.2-4.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L56.35 46.7z" fill="#2684fc"/>
            <path d="m73.55 76.8-13.75-23.7H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.4 4.5-1.2z" fill="#ffba00"/>
          </svg>
        );
      case 'notion':
        return (
          <svg width={size * 0.56} height={size * 0.56} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="14" fill="#000000" />
            <path
              d="M26 23 L44 21 L75 69 L75 23 L85 23 L85 77 L67 79 L36 31 L36 77 L26 77 Z"
              fill="#ffffff"
            />
          </svg>
        );
      case 'slack':
        return (
          <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 127 127" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#e01e5a"/>
            <path d="M47 27.2c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.7 39.7.8 47 .8c7.3 0 13.2 5.9 13.2 13.2v13.2H47zm0 6.6c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H14C6.7 60.2.8 54.3.8 47c0-7.3 5.9-13.2 13.2-13.2H47z" fill="#36c5f0"/>
            <path d="M99.8 47c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.8V47zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V14c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33z" fill="#2eb67d"/>
            <path d="M80 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8H80zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80z" fill="#ecb22e"/>
          </svg>
        );
      case 'salesforce':
        return (
          <div
            style={{
              width: size * 0.74,
              height: size * 0.48,
              background: '#00a1e0',
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '8px',
              fontWeight: 800,
              letterSpacing: '-0.2px',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)',
            }}
          >
            salesforce
          </div>
        );
      case 'database':
        return (
          <div
            style={{
              width: size * 0.65,
              height: size * 0.65,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
            </svg>
          </div>
        );
    }
  };

  return (
    <div
      title={label || type}
      className={`integration-badge ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 20px rgba(99, 102, 241, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)',
        border: '1.5px solid rgba(241, 245, 249, 0.95)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        flexShrink: 0,
        position: 'relative',
        zIndex: 10,
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
        e.currentTarget.style.boxShadow = '0 14px 28px rgba(99, 102, 241, 0.22)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)';
      }}
    >
      {renderIcon()}
    </div>
  );
};

export default IntegrationBadge;
