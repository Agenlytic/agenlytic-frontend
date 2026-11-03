import React, { useState } from 'react';
import {
  MessageSquare,
  Share2,
  Database,
  ShieldCheck,
  Zap,
  TrendingUp,
  ArrowRight,
  Play,
  ChevronRight,
  Sparkles,
} from '../components/common/Icons';
import Logo from '../components/common/Logo';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import CarouselDots from '../components/common/CarouselDots';
import FeatureCard from '../components/onboarding/FeatureCard';
import IntegrationOrbit from '../components/onboarding/IntegrationOrbit';
import DashboardMockup from '../components/onboarding/DashboardMockup';
import BackgroundDecorations from '../components/onboarding/BackgroundDecorations';

export const OnboardingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const features = [
    {
      icon: <MessageSquare size={24} strokeWidth={2.2} />,
      title: 'Natural Conversations',
    },
    {
      icon: <Share2 size={24} strokeWidth={2.2} />,
      title: 'Multi-Agent Workflows',
    },
    {
      icon: <Database size={24} strokeWidth={2.2} />,
      title: 'Connect Your Data (MCP)',
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={2.2} />,
      title: 'Trusted & Secure',
    },
    {
      icon: <Zap size={24} strokeWidth={2.2} />,
      title: 'Automate Anything',
    },
    {
      icon: <TrendingUp size={24} strokeWidth={2.2} />,
      title: 'Get Actionable Insights',
    },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev < 3 ? prev + 1 : 0));
  };

  const handleSkip = () => {
    setCurrentStep(3);
  };

  return (
    <div
      className="onboarding-page-root"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#fbfbfe',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      {/* Background waves, glows and SVG art */}
      <BackgroundDecorations />

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: '24px 36px 36px 36px',
        }}
      >
        {/* Top Navigation Bar */}
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '20px',
          }}
        >
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Carousel Pagination & Skip Button */}
          {/* <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <CarouselDots
              total={4}
              activeIndex={currentStep}
              onChange={(idx) => setCurrentStep(idx)}
            />

            <button
              onClick={handleSkip}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '7px 18px',
                background: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#334155',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#c7d2fe';
                e.currentTarget.style.color = '#4f46e5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.75)';
                e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)';
                e.currentTarget.style.color = '#334155';
              }}
            >
              <span>Skip</span>
              <ChevronRight size={16} />
            </button>
          </div> */}
        </header>

        {/* Hero Section Content Grid */}
        <main
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'minmax(420px, 1.05fr) minmax(480px, 1.25fr)',
            alignItems: 'center',
            gap: '48px',
            paddingTop: '16px',
            paddingBottom: '24px',
          }}
          className="onboarding-main-grid"
        >
          {/* Left Column: Headline, Description & Features */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '560px',
            }}
          >
            {/* Pill Badge */}
            <div>
              <Badge
                variant="purple"
                size="md"
                icon={<Sparkles size={14} color="#7c3aed" />}
              >
                Your AI-Powered Agentic Platform
              </Badge>
            </div>

            {/* Main Headline */}
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(2.5rem, 4vw, 3.6rem)',
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  color: '#0f172a',
                  marginBottom: '4px',
                }}
              >
                Welcome to
              </h1>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(2.5rem, 4vw, 3.6rem)',
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Agenlytics
              </span>
            </div>

            {/* Subtitle / Description */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                lineHeight: 1.6,
                color: '#475569',
                maxWidth: '480px',
              }}
            >
              Build, deploy and collaborate with intelligent AI agents that understand your business, connect your data, and automate workflows.
            </p>

            {/* Feature Cards Grid (3 cols x 2 rows) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginTop: '4px',
              }}
            >
              {features.map((item, idx) => (
                <FeatureCard
                  key={idx}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </div>

            {/* CTA Buttons Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginTop: '12px',
              }}
            >
              <Button
                variant="primary"
                size="lg"
                pill={true}
                rightIcon={<ArrowRight size={18} />}
                onClick={handleNext}
              >
                Get Started
              </Button>

              {/* <button
                type="button"
                onClick={() => alert('Agenlytics Tour: Watch how autonomous multi-agent pipelines transform your enterprise workflows.')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  border: 'none',
                  color: '#4338ca',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '9999px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#312e81';
                  e.currentTarget.style.background = 'rgba(238, 242, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#4338ca';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: '2px solid #6366f1',
                    color: '#6366f1',
                  }}
                >
                  <Play size={11} fill="#6366f1" style={{ transform: 'translateX(1px)' }} />
                </span>
                <span>Learn More</span>
              </button> */}
            </div>
          </div>

          {/* Right Column: Connected Orbit & 3D Dashboard Mockup */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              width: '100%',
              paddingLeft: '12px',
            }}
          >
            {/* Connected Tools Orbit Arc */}
            <IntegrationOrbit />

            {/* Dashboard Mockup */}
            <DashboardMockup />
          </div>
        </main>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .onboarding-main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .onboarding-page-root header {
            padding-bottom: 12px !important;
          }
          .onboarding-main-grid {
            padding-top: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OnboardingScreen;
