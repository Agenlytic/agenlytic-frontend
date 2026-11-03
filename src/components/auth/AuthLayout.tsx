import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';
import { ArrowLeft } from '../common/Icons';
import AuthShowcase from './AuthShowcase';
import BackgroundDecorations from '../onboarding/BackgroundDecorations';

const CURRENT_YEAR = new Date().getFullYear();

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#f8f9fc',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      {/* Background decorations matching onboarding */}
      <BackgroundDecorations />

      {/* Top Header Bar */}
      <header
        style={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: '20px 36px',
        }}
      >
        {/* Brand Logo & Back to Home */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <Logo size="md" />
          </div>

          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#64748b',
              padding: '6px 12px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#4f46e5';
              e.currentTarget.style.backgroundColor = 'rgba(238, 242, 255, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#64748b';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <ArrowLeft size={15} />
            <span>Back to Home</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1360px',
          width: '100%',
          margin: '0 auto',
          padding: '16px 28px 40px 28px',
        }}
      >
        <div
          className="auth-grid-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(420px, 1fr) minmax(440px, 1.05fr)',
            gap: '40px',
            width: '100%',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Visual Showcase (hidden on small viewports) */}
          <div className="auth-showcase-column" style={{ display: 'flex', flexDirection: 'column' }}>
            <AuthShowcase />
          </div>

          {/* Right Column: Form Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(226, 232, 240, 0.85)',
                boxShadow: '0 20px 45px -10px rgba(99, 102, 241, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
                padding: '36px 40px',
                width: '100%',
                maxWidth: '560px',
                margin: '0 auto',
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Footer Note */}
      <footer
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          fontSize: '0.8rem',
          color: '#94a3b8',
          borderTop: '1px solid rgba(226, 232, 240, 0.6)',
        }}
      >
        <span>© {CURRENT_YEAR} Agenlytics Inc.</span>
      </footer>

      <style>{`
        @media (max-width: 1024px) {
          .auth-grid-container {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .auth-showcase-column {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          header {
            padding: 16px 20px !important;
          }
          main {
            padding: 10px 16px 30px 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthLayout;
