import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  pill = true,
  leftIcon,
  rightIcon,
  className = '',
  style,
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.875rem',
      gap: '6px',
    },
    md: {
      padding: '12px 26px',
      fontSize: '1rem',
      gap: '8px',
    },
    lg: {
      padding: '15px 34px',
      fontSize: '1.05rem',
      gap: '10px',
    },
  }[size];

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      color: '#ffffff',
      border: 'none',
      boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.45)',
    },
    secondary: {
      background: 'rgba(238, 242, 255, 0.85)',
      color: '#4338ca',
      border: '1px solid rgba(199, 210, 254, 0.6)',
      boxShadow: '0 2px 6px rgba(99, 102, 241, 0.08)',
    },
    outline: {
      background: 'rgba(255, 255, 255, 0.8)',
      color: '#4f46e5',
      border: '1px solid rgba(224, 231, 255, 0.9)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    },
    ghost: {
      background: 'transparent',
      color: '#4f46e5',
      border: 'none',
      boxShadow: 'none',
    },
  }[variant];

  return (
    <button
      className={`custom-button ${className}`}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        borderRadius: pill ? '9999px' : '10px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        backdropFilter: 'blur(8px)',
        ...sizeStyles,
        ...variantStyles,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          if (variant === 'primary') {
            e.currentTarget.style.boxShadow = '0 12px 28px -2px rgba(79, 70, 229, 0.55)';
            e.currentTarget.style.filter = 'brightness(1.04)';
          } else if (variant === 'ghost') {
            e.currentTarget.style.background = 'rgba(245, 243, 255, 0.7)';
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(0px)';
          if (variant === 'primary') {
            e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(79, 70, 229, 0.45)';
            e.currentTarget.style.filter = 'none';
          } else if (variant === 'ghost') {
            e.currentTarget.style.background = 'transparent';
          }
        }
      }}
      {...props}
    >
      {leftIcon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
