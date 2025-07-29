"use client";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
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
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    // TODO: Implement registration logic
    console.log('Registration form submitted:', formData);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-5 px-3">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <h1 className="h3 mb-2">Créer un compte</h1>
          <p className="text-muted">Commencez votre essai gratuit sur View4Sight</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6 mb-3">
              <label htmlFor="firstName" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="lastName" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Adresse email professionnelle
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
              minLength="8"
            />
            <small className="text-muted">Minimum 8 caractères</small>
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="acceptTerms">
                J'accepte les{' '}
                <Link href="/page-terms" className="text-decoration-none">
                  conditions d'utilisation
                </Link>{' '}
                et la{' '}
                <Link href="/page-privacy" className="text-decoration-none">
                  politique de confidentialité
                </Link>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ backgroundColor: '#FE552E', borderColor: '#FE552E' }}
            disabled={!formData.acceptTerms}
          >
            Créer mon compte
          </button>
        </form>

        <div className="text-center">
          <p className="text-muted mb-0">
            Déjà un compte ?{' '}
            <Link href="/sign-in" className="text-decoration-none">
              Se connecter
            </Link>
          </p>
        </div>

        <div className="text-center mt-4">
          <small className="text-muted">
            Essai gratuit de 30 jours • Aucune carte bancaire requise
          </small>
        </div>
      </div>
    </div>
  );
} 