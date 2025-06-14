// src/components/SignInButton.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function SignInButton({ provider = 'google' }) {
  const { signInWithProvider, loading } = useAuth();

  return (
    <button onClick={() => signInWithProvider(provider)} disabled={loading}>
      Sign in with {provider.charAt(0).toUpperCase() + provider.slice(1)}
    </button>
  );
}
