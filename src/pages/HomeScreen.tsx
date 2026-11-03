import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bot,
  Layers,
  Database,
  Workflow,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from '../components/common/Icons';
import Logo from '../components/common/Logo';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const displayName = 'Explorer';
  const displayEmail = 'developer@agenlytic.ai';
  const displayOrg = 'Agenlytic AI Labs';
  const displayRole = 'Lead AI Engineer';

  const stats = [
    { label: 'Active Agents', value: '6', change: '+2 this week', icon: <Bot size={20} color="#4f46e5" /> },
    { label: 'Connected MCPs', value: '14', change: 'All healthy', icon: <Layers size={20} color="#06b6d4" /> },
    { label: 'Vector Stores', value: '3', change: 'pgvector active', icon: <Database size={20} color="#8b5cf6" /> },
    { label: 'Workflow Runs', value: '1,420', change: '99.9% success', icon: <TrendingUp size={20} color="#10b981" /> },
  ];

  const agentWorkflows = [
    {
      name: 'Data Lake Synthesizer',
      desc: 'Retrieves multi-modal datasets and updates vector embeddings on Snowflake & pgvector',
      status: 'Running',
      latency: '142ms',
      type: 'LangGraph Orchestrator',
    },
    {
      name: 'Customer Intelligence Agent',
      desc: 'Monitors inbound queries and delegates tool execution via MCP protocol',
      status: 'Idle',
      latency: '85ms',
      type: 'Autonomous Agent',
    },
    {
      name: 'Security & Guardrail Validator',
      desc: 'Inspects tool execution payloads and enforces enterprise RBAC isolation',
      status: 'Active',
      latency: '18ms',
      type: 'Policy Engine',
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Navigation */}
      <header
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
          padding: '16px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <Logo size="md" />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#f1f5f9',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              color: '#475569',
              fontWeight: 600,
            }}
          >
            <span>Workspace:</span>
            <strong style={{ color: '#0f172a' }}>{displayOrg}</strong>
          </div>
        </div>

        {/* User Profile & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.9rem',
                boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)',
              }}
            >
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>
                {displayName}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                {displayRole} • {displayEmail}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.84rem',
              fontWeight: 600,
              color: '#ef4444',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fef2f2';
              e.currentTarget.style.borderColor = '#fecaca';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main
        style={{
          flex: 1,
          maxWidth: '1360px',
          width: '100%',
          margin: '0 auto',
          padding: '36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        {/* Welcome Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)',
            borderRadius: '20px',
            padding: '36px 40px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px -10px rgba(30, 27, 75, 0.35)',
          }}
        >
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px' }}>
            <Badge
              variant="purple"
              size="sm"
              icon={<Sparkles size={12} color="#c084fc" />}
              style={{
                backgroundColor: 'rgba(124, 58, 237, 0.3)',
                color: '#e9d5ff',
                marginBottom: '14px',
              }}
            >
              Enterprise Agent Console
            </Badge>
            <h1
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                marginBottom: '8px',
              }}
            >
              Welcome back, {displayName}!
            </h1>
            <p style={{ fontSize: '0.96rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              Your Agenlytic workspace is active. Autonomous multi-agent pipelines and MCP tools are synced and monitoring your enterprise data streams.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '12px' }}>
            <Button
              variant="outline"
              size="md"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
              onClick={() => navigate('/')}
            >
              Landing Page
            </Button>
            <Button
              variant="primary"
              size="md"
              rightIcon={<ArrowRight size={16} />}
              onClick={() => alert('New Agent Wizard: Deploying specialized LangGraph agent...')}
            >
              New Agent
            </Button>
          </div>
        </div>

        {/* Workspace Quick Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                padding: '20px 24px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
                  {stat.label}
                </span>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '4px 0 2px 0' }}>
                  {stat.value}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
                  {stat.change}
                </span>
              </div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Active Agents Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
                Active Agent Pipelines
              </h2>
              <p style={{ fontSize: '0.86rem', color: '#64748b' }}>
                Live autonomous orchestration running under {displayOrg}
              </p>
            </div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#10b981',
              }}
            >
              <ShieldCheck size={16} /> All guardrails passing
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {agentWorkflows.map((agent, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(79, 70, 229, 0.1)',
                      color: '#4f46e5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Workflow size={22} color="#4f46e5" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a' }}>
                        {agent.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          padding: '2px 8px',
                          borderRadius: '6px',
                        }}
                      >
                        {agent.type}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '4px 0 0 0' }}>
                      {agent.desc}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>Avg Latency</span>
                    <strong style={{ fontSize: '0.86rem', color: '#0f172a' }}>{agent.latency}</strong>
                  </div>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      backgroundColor:
                        agent.status === 'Running' || agent.status === 'Active'
                          ? 'rgba(16, 185, 129, 0.12)'
                          : 'rgba(241, 245, 249, 0.9)',
                      color:
                        agent.status === 'Running' || agent.status === 'Active'
                          ? '#059669'
                          : '#64748b',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor:
                          agent.status === 'Running' || agent.status === 'Active'
                            ? '#10b981'
                            : '#94a3b8',
                      }}
                    />
                    {agent.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
