/**
 * ==============================================================
 * Project     : Zenth Cloud – Zenth Panel
 * File        : Login.tsx
 * Version     : 1.0.0
 * Description : Client Login Page
 * Author      : Sky Genesis Enterprise
 * Created on  : 2025-07-19
 * License     : AGPLv3
 * Forked from : N/A
 * Modified by : Liam Dispa <liam.dispa@skygenesisenterprise.com> (2025-08-09)
 * ==============================================================
 */

import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
    setSuccess(null);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/v1/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data: AuthResponse = await response.json();

      if (!response.ok) {
        setError(data.message || 'Erreur inconnue lors de la connexion.');
      } else if (data.success) {
        setSuccess('Connexion réussie !');
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        // TODO : redirection après connexion
      } else {
        setError(data.message || 'Échec de la connexion.');
      }
    } catch (err) {
      setError('Erreur réseau ou serveur indisponible.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <section className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-black border border-white/20">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight">
          Connexion
        </h1>

        {error && (
          <div className="mb-4 rounded border border-white/30 bg-black px-4 py-2 text-center font-semibold text-white">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 rounded border border-white/30 bg-white text-black px-4 py-2 text-center font-semibold">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              autoComplete="username"
              placeholder="exemple@domaine.com"
              className="w-full rounded-md border border-white/30 bg-black px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white transition"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
              autoComplete="current-password"
              placeholder="Votre mot de passe"
              className="w-full rounded-md border border-white/30 bg-black px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white transition"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className={`w-full rounded-md border border-white bg-white text-black font-bold py-2 mt-2 transition-colors duration-200 ${
              loading
                ? 'opacity-60 cursor-not-allowed'
                : 'hover:bg-black hover:text-white'
            }`}
            disabled={loading}
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Zenth Cloud. Tous droits réservés.
        </div>
      </section>
    </main>
  );
};

export default Login;
