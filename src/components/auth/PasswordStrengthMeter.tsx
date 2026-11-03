import React from 'react';
import { Check } from '../common/Icons';

interface PasswordStrengthMeterProps {
  password: string;
}

export const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ password }) => {
  const criteria = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'Contains number', met: /[0-9]/.test(password) },
    { label: 'Contains special symbol', met: /[^A-Za-z0-9]/.test(password) },
  ];

  const metCount = criteria.filter((c) => c.met).length;

  const getStrengthInfo = () => {
    if (!password) return { text: '', color: '#e2e8f0', level: 0 };
    if (metCount <= 1) return { text: 'Weak', color: '#ef4444', level: 1 };
    if (metCount === 2) return { text: 'Fair', color: '#f59e0b', level: 2 };
    if (metCount === 3) return { text: 'Good', color: '#3b82f6', level: 3 };
    return { text: 'Strong', color: '#10b981', level: 4 };
  };

  const strength = getStrengthInfo();

  if (!password) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
      {/* Strength Bar & Label */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 500 }}>
          Password strength:
        </span>
        <span
          style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: strength.color,
            textTransform: 'capitalize',
            transition: 'color 0.25s ease',
          }}
        >
          {strength.text}
        </span>
      </div>

      {/* 4 Segment Bars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
        {[1, 2, 3, 4].map((seg) => {
          const isActive = seg <= strength.level;
          return (
            <div
              key={seg}
              style={{
                height: '4px',
                borderRadius: '9999px',
                backgroundColor: isActive ? strength.color : 'rgba(226, 232, 240, 0.9)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          );
        })}
      </div>

      {/* Criteria Checklist */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4px 12px',
          marginTop: '4px',
        }}
      >
        {criteria.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              color: item.met ? '#10b981' : '#94a3b8',
              fontWeight: item.met ? 600 : 400,
              transition: 'all 0.2s ease',
            }}
          >
            <span
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: item.met ? '#d1fae5' : '#f1f5f9',
                color: item.met ? '#059669' : '#94a3b8',
                fontSize: '10px',
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
            >
              {item.met ? <Check size={10} strokeWidth={3} /> : '•'}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
