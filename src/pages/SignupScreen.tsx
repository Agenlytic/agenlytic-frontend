import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Mail,
  Lock,
  User as UserIcon,
  Building,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  AlertCircle,
} from '../components/common/Icons';
import InputField from '../components/auth/InputField';
import SocialAuthButtons from '../components/auth/SocialAuthButtons';
import PasswordStrengthMeter from '../components/auth/PasswordStrengthMeter';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/common/Button';

export const SignupScreen: React.FC = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!email.trim()) {
      errors.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Company Name is optional, so no required validation

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (!agreeTerms) {
      errors.terms = 'You must agree to the Terms of Service & Privacy Policy';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/home');
    }, 500);
  };

  const handleSocialAuth = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/home');
    }, 400);
  };

  return (
    <AuthLayout>
      {/* Quick Switch Tab Header */}
      <div
        style={{
          display: 'flex',
          backgroundColor: '#f1f5f9',
          padding: '4px',
          borderRadius: '12px',
          marginBottom: '24px',
        }}
      >
        <button
          type="button"
          onClick={() => navigate('/login')}
          style={{
            flex: 1,
            padding: '9px 0',
            textAlign: 'center',
            fontSize: '0.88rem',
            fontWeight: 600,
            borderRadius: '9px',
            backgroundColor: 'transparent',
            color: '#64748b',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#0f172a')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
        >
          Sign In
        </button>
        <button
          type="button"
          style={{
            flex: 1,
            padding: '9px 0',
            textAlign: 'center',
            fontSize: '0.88rem',
            fontWeight: 700,
            borderRadius: '9px',
            backgroundColor: '#ffffff',
            color: '#4f46e5',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
            border: 'none',
            cursor: 'default',
          }}
        >
          Create Account
        </button>
      </div>

      {/* Screen Title */}
      <div style={{ marginBottom: '20px' }}>
        <h1
          style={{
            fontSize: '1.7rem',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.03em',
            marginBottom: '4px',
          }}
        >
          Create your account
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>
          Start building multi-agent workflows.
        </p>
      </div>

      {/* Social Logins - Google Only */}
      <SocialAuthButtons
        onGoogleClick={handleSocialAuth}
        isLoading={loading}
        dividerText="Or register with work email"
      />

      {/* Error Alert */}
      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 14px',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '10px',
            marginTop: '16px',
            color: '#b91c1c',
            fontSize: '0.85rem',
            fontWeight: 500,
          }}
        >
          <AlertCircle size={18} color="#ef4444" />
          <span>{error}</span>
        </div>
      )}

      {/* Main Signup Form */}
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}
      >
        {/* Full Name & Optional Company Name in Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <InputField
            label="Full Name"
            placeholder="Ada Lovelace"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' });
            }}
            error={formErrors.fullName}
            icon={<UserIcon size={18} />}
            autoComplete="name"
            required
          />

          <InputField
            label="Company Name"
            helperText="(Optional)"
            placeholder="e.g. Acme Corp"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            icon={<Building size={18} />}
            required={false}
          />
        </div>

        {/* Work Email */}
        <InputField
          label="Work Email"
          type="email"
          placeholder="ada@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
          }}
          error={formErrors.email}
          icon={<Mail size={18} />}
          autoComplete="email"
          required
        />

        {/* Password Field */}
        <div>
          <InputField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (formErrors.password) setFormErrors({ ...formErrors, password: '' });
            }}
            error={formErrors.password}
            icon={<Lock size={18} />}
            autoComplete="new-password"
            required
            rightElement={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                }}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
          />
          {/* Dynamic Password Strength Meter */}
          <PasswordStrengthMeter password={password} />
        </div>

        {/* Terms of Service Checkbox */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '2px' }}>
          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              fontSize: '0.83rem',
              color: '#475569',
              lineHeight: 1.45,
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => {
                setAgreeTerms(e.target.checked);
                if (formErrors.terms) setFormErrors({ ...formErrors, terms: '' });
              }}
              style={{
                accentColor: '#4f46e5',
                width: '16px',
                height: '16px',
                marginTop: '2px',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            />
            <span>
              I agree to the{' '}
              <a href="#terms" onClick={(e) => e.preventDefault()} style={{ color: '#4f46e5', fontWeight: 600 }}>
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#privacy" onClick={(e) => e.preventDefault()} style={{ color: '#4f46e5', fontWeight: 600 }}>
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {formErrors.terms && (
            <div style={{ color: '#ef4444', fontSize: '0.78rem', fontWeight: 500, paddingLeft: '26px' }}>
              {formErrors.terms}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          pill={false}
          style={{ width: '100%', borderRadius: '12px', marginTop: '4px' }}
          disabled={loading}
          leftIcon={loading ? <Loader2 size={18} /> : undefined}
          rightIcon={!loading ? <ArrowRight size={18} /> : undefined}
        >
          {loading ? 'Creating your workspace...' : 'Create Free Account'}
        </Button>
      </form>

      {/* Switch to Login */}
      <div
        style={{
          marginTop: '22px',
          paddingTop: '18px',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)',
          textAlign: 'center',
          fontSize: '0.88rem',
          color: '#64748b',
        }}
      >
        <span>Already have an account? </span>
        <Link
          to="/login"
          style={{
            color: '#4f46e5',
            fontWeight: 700,
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          Sign in here
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignupScreen;
