import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'white' | 'glass' | 'subtle' | 'accent';
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  hoverEffect = false,
  padding = 'md',
  borderRadius = '16px',
  className = '',
  style,
  ...props
}) => {
  const paddingStyles = {
    none: '0px',
    sm: '12px 16px',
    md: '20px 24px',
    lg: '28px 32px',
  }[padding];

  const variantStyles = {
    white: {
      backgroundColor: '#ffffff',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      boxShadow: '0 4px 20px rgba(99, 102, 241, 0.05)',
    },
    glass: {
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.85)',
      boxShadow: '0 10px 30px rgba(99, 102, 241, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)',
    },
    subtle: {
      backgroundColor: 'rgba(248, 250, 252, 0.8)',
      border: '1px solid rgba(241, 245, 249, 0.9)',
      boxShadow: 'none',
    },
    accent: {
      backgroundColor: 'rgba(245, 243, 255, 0.85)',
      border: '1px solid rgba(221, 214, 254, 0.8)',
      boxShadow: '0 4px 15px rgba(124, 58, 237, 0.06)',
    },
  }[variant];

  return (
    <div
      className={`custom-card ${className}`}
      style={{
        borderRadius,
        padding: paddingStyles,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        ...variantStyles,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 14px 35px rgba(99, 102, 241, 0.12)';
          e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.5)';
        }
      }}
      onMouseLeave={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = variantStyles.boxShadow || 'none';
          e.currentTarget.style.borderColor = variantStyles.border.split(' ')[2] || 'transparent';
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
