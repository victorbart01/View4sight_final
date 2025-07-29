"use client";
import React, { useState } from "react";

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
                <h1 className="h2 lg:h1">Connexion</h1>
                <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                  Connectez-vous à votre compte View4Sight
                </p>
              </div>
              
              <div className="panel">
                <form onSubmit={handleSubmit} className="vstack gap-3">
                  <div className="form-group">
                    <label className="form-label fs-7" htmlFor="email">
                      Adresse email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="votre@email.com"
                      value={formData.email}
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
                      placeholder="Votre mot de passe"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        className="form-check-input"
                        checked={formData.remember}
                        onChange={handleChange}
                      />
                      <label className="form-check-label fs-7" htmlFor="remember">
                        Se souvenir de moi
                      </label>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-md w-100">
                    Se connecter
                  </button>
                </form>
                
                <div className="panel vstack gap-2 mt-4 text-center">
                  <a href="/reset-password" className="fs-7 text-primary">
                    Mot de passe oublié ?
                  </a>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    Pas encore de compte ?{" "}
                    <a href="/sign-up" className="text-primary">
                      Créer un compte
                    </a>
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