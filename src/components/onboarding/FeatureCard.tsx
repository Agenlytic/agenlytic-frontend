import React from 'react';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`feature-card ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '16px 14px',
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.85)',
        borderRadius: '16px',
        boxShadow: '0 4px 18px rgba(99, 102, 241, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        minHeight: '100px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(99, 102, 241, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.45)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.72)';
        e.currentTarget.style.boxShadow = '0 4px 18px rgba(99, 102, 241, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.85)';
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '38px',
          height: '38px',
          color: '#6366f1',
          marginBottom: '8px',
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#1e293b',
          lineHeight: 1.28,
          maxWidth: '120px',
          display: 'block',
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default FeatureCard;
