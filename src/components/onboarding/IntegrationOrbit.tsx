import React from 'react';
import IntegrationBadge, { IntegrationType } from './IntegrationBadge';

export const IntegrationOrbit: React.FC = () => {
  const integrations: { type: IntegrationType; label: string; x: number; y: number; delay: string }[] = [
    { type: 'drive', label: 'Google Drive', x: 8, y: 78, delay: '0s' },
    // { type: 'notion', label: 'Notion', x: 28, y: 28, delay: '0.4s' },
    { type: 'slack', label: 'Slack', x: 50, y: 10, delay: '0.8s' },
    // { type: 'salesforce', label: 'Salesforce', x: 72, y: 35, delay: '1.2s' },
    { type: 'database', label: 'Enterprise MCP Database', x: 92, y: 88, delay: '1.6s' },
  ];

  return (
    <div
      className="integration-orbit-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '90px',
        marginBottom: '16px',
        zIndex: 20,
      }}
    >
      {/* Dashed connecting arc line */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'visible',
        }}
        viewBox="0 0 500 90"
        preserveAspectRatio="none"
      >
        <path
          d="M 40 85 Q 250 -10 460 90"
          fill="none"
          stroke="rgba(167, 139, 250, 0.45)"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
      </svg>

      {/* Floating Badges */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {integrations.map((item) => (
          <div
            key={item.type}
            style={{
              position: 'absolute',
              left: `${item.x}%`,
              top: `${item.y}%`,
              transform: 'translate(-50%, -50%)',
              animation: `floatGentle 4s ease-in-out infinite`,
              animationDelay: item.delay,
            }}
          >
            <IntegrationBadge type={item.type} label={item.label} size={44} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationOrbit;
