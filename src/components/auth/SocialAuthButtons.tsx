import React from 'react';
import { GoogleIcon } from '../common/Icons';

interface SocialAuthButtonsProps {
  onGoogleClick?: () => void;
  isLoading?: boolean;
  dividerText?: string;
}

export const SocialAuthButtons: React.FC<SocialAuthButtonsProps> = ({
  onGoogleClick,
  isLoading = false,
  dividerText = 'Or continue with email',
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
      {/* Single Google Sign-in Button */}
      <button
        type="button"
        disabled={isLoading}
        onClick={onGoogleClick}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '12px 18px',
          backgroundColor: '#ffffff',
          border: '1.5px solid rgba(226, 232, 240, 0.95)',
          borderRadius: '12px',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: '#1e293b',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
          opacity: isLoading ? 0.6 : 1,
        }}
        onMouseEnter={(e) => {
          if (!isLoading) {
            e.currentTarget.style.backgroundColor = '#f8fafc';
            e.currentTarget.style.borderColor = '#cbd5e1';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isLoading) {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.95)';
            e.currentTarget.style.transform = 'translateY(0px)';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04)';
          }
        }}
      >
        <GoogleIcon size={19} />
        <span>Continue with Google</span>
      </button>

      {/* Modern Divider */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          margin: '4px 0',
        }}
      >
        <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(226, 232, 240, 0.85)' }} />
        <span
          style={{
            fontSize: '0.78rem',
            fontWeight: 500,
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          {dividerText}
        </span>
        <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(226, 232, 240, 0.85)' }} />
      </div>
    </div>
  );
};

export default SocialAuthButtons;
