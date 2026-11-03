import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'purple' | 'subtle' | 'outline' | 'success';
  size?: 'sm' | 'md';
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  variant = 'purple',
  size = 'md',
  className = '',
  style,
}) => {
  const sizeStyles = {
    sm: {
      padding: '4px 10px',
      fontSize: '0.75rem',
      gap: '5px',
    },
    md: {
      padding: '7px 16px',
      fontSize: '0.85rem',
      gap: '8px',
    },
  }[size];

  const variantStyles = {
    purple: {
      background: 'rgba(124, 58, 237, 0.1)',
      color: '#6366f1',
      border: '1px solid rgba(167, 139, 250, 0.35)',
      boxShadow: '0 2px 10px rgba(124, 58, 237, 0.08)',
    },
    subtle: {
      background: '#f1f5f9',
      color: '#475569',
      border: '1px solid #e2e8f0',
      boxShadow: 'none',
    },
    outline: {
      background: 'rgba(255, 255, 255, 0.8)',
      color: '#6366f1',
      border: '1px solid #c7d2fe',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
    },
    success: {
      background: 'rgba(16, 185, 129, 0.1)',
      color: '#059669',
      border: '1px solid rgba(110, 231, 183, 0.4)',
      boxShadow: 'none',
    },
  }[variant];

  return (
    <span
      className={`custom-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontWeight: 600,
        borderRadius: '9999px',
        lineHeight: 1.2,
        userSelect: 'none',
        backdropFilter: 'blur(6px)',
        transition: 'all 0.2s ease',
        ...sizeStyles,
        ...variantStyles,
        ...style,
      }}
    >
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
