import React, { useState } from 'react';
import {
  MessageSquare,
  Bot,
  Layers,
  Database,
  Workflow,
  BarChart2,
  Settings,
  Bell,
  ChevronDown,
  Sparkles,
  Send,
  Rocket,
  Zap,
} from '../common/Icons';
import Logo from '../common/Logo';
import QuickActionCard from './QuickActionCard';
import EfficiencyBadge from './EfficiencyBadge';

export const DashboardMockup: React.FC = () => {
  const [activeNav, setActiveNav] = useState('Chat');
  const [questionInput, setQuestionInput] = useState('');
  const [chatMessage, setChatMessage] = useState('How can I help you today?');

  const navItems = [
    { name: 'Chat', icon: <MessageSquare size={16} /> },
    { name: 'Agents', icon: <Bot size={16} /> },
    { name: 'MCP Connectors', icon: <Layers size={16} /> },
    { name: 'Knowledge Base', icon: <Database size={16} /> },
    { name: 'Automations', icon: <Workflow size={16} /> },
    { name: 'Analytics', icon: <BarChart2 size={16} /> },
    { name: 'Settings', icon: <Settings size={16} /> },
  ];

  const handleSendPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionInput.trim()) return;
    setChatMessage(`Analyzing "${questionInput}" across your connected agents...`);
    setQuestionInput('');
  };

  return (
    <div
      className="dashboard-mockup-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '650px',
        margin: '0 auto',
      }}
    >
      {/* Main Glass Window */}
      <div
        className="mockup-window"
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '24px',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 30px 70px -15px rgba(79, 70, 229, 0.18), 0 0 0 1px rgba(226, 232, 240, 0.7)',
          overflow: 'hidden',
          display: 'flex',
          minHeight: '440px',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Mockup Sidebar */}
        <aside
          style={{
            width: '185px',
            background: 'rgba(250, 250, 253, 0.95)',
            borderRight: '1px solid rgba(226, 232, 240, 0.8)',
            padding: '18px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            flexShrink: 0,
          }}
        >
          {/* Logo in sidebar */}
          <div style={{ padding: '0 6px 4px 6px' }}>
            <Logo size="sm" showText={true} />
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {navItems.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <button
                  key={item.name}
                  // onClick={() => setActiveNav(item.name)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#4f46e5' : '#475569',
                    backgroundColor: isActive ? 'rgba(238, 242, 255, 0.95)' : 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(241, 245, 249, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span
                    style={{
                      color: isActive ? '#4f46e5' : '#64748b',
                      display: 'inline-flex',
                    }}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mockup Main Workspace Area */}
        <main
          style={{
            flex: 1,
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            overflow: 'hidden',
          }}
        >
          {/* Workspace Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  lineHeight: 1.2,
                }}
              >
                <span>👋</span> Hello Abhishek!
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  color: '#64748b',
                  marginTop: '2px',
                }}
              >
                Ask anything, get insights, and automate tasks.
              </p>
            </div>

            {/* Profile & Notifications */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(241, 245, 249, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  cursor: 'pointer',
                }}
              >
                <Bell size={15} />
                <span
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#ef4444',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src="/images/user_avatar.jpg"
                  alt="Abhishek"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1.5px solid #e0e7ff',
                  }}
                />
                <ChevronDown size={14} color="#64748b" />
              </div>
            </div>
          </div>

          {/* Assistant Chat Area Banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(245, 243, 255, 0.9) 0%, rgba(238, 242, 255, 0.9) 100%)',
              border: '1px solid rgba(224, 231, 255, 0.9)',
              borderRadius: '16px',
              padding: '14px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.04)',
            }}
          >
            {/* 3D Robot & Chat Bubble */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(124, 58, 237, 0.15)',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src="/images/robot_avatar.jpg"
                  alt="AI Assistant"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Chat Speech Bubble */}
              <div
                style={{
                  position: 'relative',
                  background: '#ffffff',
                  padding: '9px 16px',
                  borderRadius: '14px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                {chatMessage}
              </div>
            </div>

            {/* Prompt Input Form */}
            <form
              onSubmit={handleSendPrompt}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#ffffff',
                borderRadius: '9999px',
                padding: '6px 8px 6px 14px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
              }}
            >
              <Sparkles size={15} color="#8b5cf6" style={{ marginRight: '8px', flexShrink: 0 }} />
              <input
                type="text"
                value={questionInput}
                onChange={(e) => setQuestionInput(e.target.value)}
                placeholder="Ask a question..."
                style={{
                  flex: 1,
                  fontSize: '0.82rem',
                  color: '#0f172a',
                  background: 'transparent',
                }}
              />
              <button
                type="submit"
                aria-label="Send message"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 2px 6px rgba(79, 70, 229, 0.4)',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <Send size={13} style={{ transform: 'translateX(-1px)' }} />
              </button>
            </form>
          </div>

          {/* Quick Actions Grid */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#334155',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Quick Actions
            </span>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
              }}
            >
              <QuickActionCard
                icon={<Rocket size={17} />}
                title="Create Agent"
                subtitle="Build custom agents"
                onClick={() => setChatMessage('Opening Agent Builder... Configure goals and actions.')}
              />
              <QuickActionCard
                icon={<Database size={17} />}
                title="Connect Data"
                subtitle="Add your data sources"
                onClick={() => setChatMessage('Connecting to MCP data sources and vectors...')}
              />
              <QuickActionCard
                icon={<Zap size={17} />}
                title="Start Automation"
                subtitle="Automate workflows"
                onClick={() => setChatMessage('Ready to orchestrate end-to-end task workflows.')}
              />
              <QuickActionCard
                icon={<BarChart2 size={17} />}
                title="View Analytics"
                subtitle="Track performance"
                onClick={() => setChatMessage('Loading agent operational telemetry & token usage...')}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Floating Efficiency Badge Overlapping Lower Left */}
      <div
        style={{
          position: 'absolute',
          bottom: '22px',
          left: '-40px',
          zIndex: 30,
        }}
      >
        <EfficiencyBadge />
      </div>
    </div>
  );
};

export default DashboardMockup;
