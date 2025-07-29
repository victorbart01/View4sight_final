"use client";
import React, { useState } from "react";

export default function Signup() {
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
    <section className="section panel overflow-hidden">
      <div className="section-outer">
        <div className="container max-w-lg">
          <div className="section-inner">
            <div className="panel vstack gap-4 md:gap-6 lg:gap-8">
              <div className="panel vstack items-center gap-2 text-center">
                <h1 className="h2 lg:h1">Créer un compte</h1>
                <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                  Commencez votre essai gratuit de 30 jours
                </p>
              </div>
              
              <div className="panel">
                <form onSubmit={handleSubmit} className="vstack gap-3">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label fs-7" htmlFor="firstName">
                          Prénom
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          className="form-control"
                          placeholder="Votre prénom"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label fs-7" htmlFor="lastName">
                          Nom
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          className="form-control"
                          placeholder="Votre nom"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label fs-7" htmlFor="email">
                      Adresse email professionnelle
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
                  
                  <div className="form-group">
                    <label className="form-label fs-7" htmlFor="company">
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
                  
                  <div className="form-group">
                    <label className="form-label fs-7" htmlFor="password">
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
                  
                  <div className="form-group">
                    <label className="form-label fs-7" htmlFor="confirmPassword">
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
                  
                  <div className="form-group">
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
                      <label className="form-check-label fs-7" htmlFor="agreeToTerms">
                        J'accepte les{" "}
                        <a href="/page-terms" className="text-primary">
                          conditions d'utilisation
                        </a>{" "}
                        et la{" "}
                        <a href="/page-privacy" className="text-primary">
                          politique de confidentialité
                        </a>
                      </label>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-md w-100">
                    Commencer l'essai gratuit
                  </button>
                </form>
                
                <div className="panel vstack gap-2 mt-4 text-center">
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    Déjà un compte ?{" "}
                    <a href="/sign-in" className="text-primary">
                      Se connecter
                    </a>
                  </p>
                  <p className="fs-8 text-dark dark:text-white text-opacity-50">
                    Aucune carte bancaire requise • Essai gratuit de 30 jours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 