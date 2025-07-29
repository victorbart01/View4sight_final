"use client";
import React, { useState } from "react";

export default function SignUpPage({ params }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <img 
                    src="/assets/images/logo_v4s.svg" 
                    alt="View4Sight" 
                    className="mb-3"
                    style={{ height: '40px' }}
                  />
                  <h1 className="h4 text-dark mb-2">Créer un compte</h1>
                  <p className="text-muted small">
                    Commencez votre essai gratuit de 30 jours
                  </p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="firstName" className="form-label small">
                        Prénom
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="form-control"
                        placeholder="Prénom"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="lastName" className="form-label small">
                        Nom
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="form-control"
                        placeholder="Nom"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label small">
                      Email professionnel
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="votre@entreprise.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="company" className="form-label small">
                      Entreprise
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="form-control"
                      placeholder="Nom de votre entreprise"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label small">
                      Mot de passe
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Au moins 8 caractères"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={8}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label small">
                      Confirmer le mot de passe
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                      placeholder="Confirmez votre mot de passe"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        className="form-check-input"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label small" htmlFor="agreeToTerms">
                        J'accepte les{" "}
                        <a href="/page-terms" className="text-decoration-none">
                          conditions d'utilisation
                        </a>{" "}
                        et la{" "}
                        <a href="/page-privacy" className="text-decoration-none">
                          politique de confidentialité
                        </a>
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 mb-3"
                    style={{ backgroundColor: '#FE552E', borderColor: '#FE552E' }}
                  >
                    Commencer l'essai gratuit
                  </button>
                </form>
                
                <div className="text-center">
                  <span className="small text-muted">Déjà un compte ? </span>
                  <a 
                    href="https://app.view4sight.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none small"
                  >
                    Se connecter
                  </a>
                  <div className="mt-2">
                    <small className="text-muted">
                      Aucune carte bancaire requise • Essai gratuit de 30 jours
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 