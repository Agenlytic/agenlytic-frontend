import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, AlertCircle } from '../components/common/Icons';
import InputField from '../components/auth/InputField';
import SocialAuthButtons from '../components/auth/SocialAuthButtons';
import ForgotPasswordModal from '../components/auth/ForgotPasswordModal';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/common/Button';

export const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const errors: { email?: string; password?: string } = {};
    if (!email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setError(null);
    setLoading(true);

    // Simulated UI loading transition
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
          marginBottom: '28px',
        }}
      >
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
          Sign In
        </button>
        <button
          type="button"
          onClick={() => navigate('/signup')}
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
          Create Account
        </button>
      </div>

      {/* Screen Title */}
      <div style={{ marginBottom: '24px' }}>
        <h1
          style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.03em',
            marginBottom: '6px',
          }}
        >
          Welcome back
        </h1>
        <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.5 }}>
          Enter your credentials to access your autonomous agent pipelines.
        </p>
      </div>


      {/* Social Logins */}
      <SocialAuthButtons
        onGoogleClick={handleSocialAuth}
        isLoading={loading}
        dividerText="Or continue with email"
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

      {/* Main Login Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '16px' }}>
        <InputField
          label="Work Email"
          type="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
          }}
          error={formErrors.email}
          icon={<Mail size={18} />}
          autoComplete="email"
          required
        />

        <InputField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (formErrors.password) setFormErrors({ ...formErrors, password: undefined });
          }}
          error={formErrors.password}
          icon={<Lock size={18} />}
          autoComplete="current-password"
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

        {/* Remember Me & Forgot Password Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{
                accentColor: '#4f46e5',
                width: '16px',
                height: '16px',
                cursor: 'pointer',
              }}
            />
            <span style={{ color: '#475569', fontWeight: 500 }}>Remember me for 30 days</span>
          </label>

          <button
            type="button"
            onClick={() => setIsForgotModalOpen(true)}
            style={{
              color: '#4f46e5',
              fontWeight: 600,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: '0.85rem',
              padding: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            Forgot password?
          </button>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          pill={false}
          style={{ width: '100%', borderRadius: '12px', marginTop: '6px' }}
          disabled={loading}
          leftIcon={loading ? <Loader2 size={18} /> : undefined}
          rightIcon={!loading ? <ArrowRight size={18} /> : undefined}
        >
          {loading ? 'Authenticating...' : 'Sign In to Workspace'}
        </Button>
      </form>

      {/* Switch to Signup */}
      <div
        style={{
          marginTop: '24px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)',
          textAlign: 'center',
          fontSize: '0.88rem',
          color: '#64748b',
        }}
      >
        <span>New to Agenlytics? </span>
        <Link
          to="/signup"
          style={{
            color: '#4f46e5',
            fontWeight: 700,
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          Create a free account
        </Link>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
        defaultEmail={email}
      />
    </AuthLayout>
  );
};

export default LoginScreen;
