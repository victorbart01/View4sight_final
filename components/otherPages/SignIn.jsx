"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-5 px-3">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <h1 className="h3 mb-2">Connexion</h1>
          <p className="text-muted">Accédez à votre espace View4Sight</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Adresse email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="remember">
                Se souvenir de moi
              </label>
            </div>
            <Link href="/reset-password" className="text-decoration-none">
              Mot de passe oublié ?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ backgroundColor: '#FE552E', borderColor: '#FE552E' }}
          >
            Se connecter
          </button>
        </form>

        <div className="text-center">
          <p className="text-muted mb-0">
            Pas encore de compte ?{' '}
            <Link href="/sign-up" className="text-decoration-none">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 