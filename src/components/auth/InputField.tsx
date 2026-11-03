import React, { useState } from 'react';
import { AlertCircle } from '../common/Icons';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  helperText?: string;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  icon,
  rightElement,
  helperText,
  required = false,
  id,
  type = 'text',
  disabled,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {/* Label & Required Star */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label
          htmlFor={inputId}
          style={{
            fontSize: '0.86rem',
            fontWeight: 600,
            color: '#1e293b',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            userSelect: 'none',
          }}
        >
          <span>{label}</span>
          {required && <span style={{ color: '#ef4444', fontSize: '0.9rem' }}>*</span>}
        </label>
        {helperText && !error && (
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{helperText}</span>
        )}
      </div>

      {/* Input Box Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: disabled ? '#f1f5f9' : isFocused ? '#ffffff' : 'rgba(248, 250, 252, 0.85)',
          border: `1.5px solid ${
            error
              ? '#ef4444'
              : isFocused
              ? '#6366f1'
              : 'rgba(226, 232, 240, 0.95)'
          }`,
          borderRadius: '12px',
          boxShadow: error
            ? '0 0 0 3px rgba(239, 68, 68, 0.12)'
            : isFocused
            ? '0 0 0 3.5px rgba(99, 102, 241, 0.14), 0 2px 8px rgba(99, 102, 241, 0.08)'
            : '0 1px 3px rgba(0, 0, 0, 0.02)',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: '0 12px',
        }}
      >
        {/* Left Icon */}
        {icon && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              color: error ? '#ef4444' : isFocused ? '#4f46e5' : '#94a3b8',
              transition: 'color 0.2s ease',
              flexShrink: 0,
            }}
          >
            {icon}
          </span>
        )}

        {/* Input */}
        <input
          id={inputId}
          type={type}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            flex: 1,
            width: '100%',
            padding: '12px 0',
            fontSize: '0.94rem',
            color: '#0f172a',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            fontFamily: 'inherit',
            ...style,
          }}
          {...props}
        />

        {/* Right Element (e.g. eye toggle) */}
        {rightElement && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '8px',
              flexShrink: 0,
            }}
          >
            {rightElement}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#ef4444',
            fontSize: '0.8rem',
            fontWeight: 500,
            marginTop: '2px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <AlertCircle size={14} color="#ef4444" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default InputField;
