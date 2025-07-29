"use client";
import React, { useState } from "react";

export default function Resetpass1() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reset password requested for:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="section panel overflow-hidden">
        <div className="section-outer">
          <div className="container max-w-lg">
            <div className="section-inner">
              <div className="panel vstack gap-4 md:gap-6 lg:gap-8">
                <div className="panel vstack items-center gap-4 text-center">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-circle d-flex items-center justify-center">
                    <i className="unicon-email text-primary fs-4"></i>
                  </div>
                  <div className="vstack gap-2">
                    <h1 className="h2 lg:h1">Email envoyé !</h1>
                    <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                      Nous avons envoyé un lien de réinitialisation à{" "}
                      <strong>{email}</strong>
                    </p>
                  </div>
                </div>
                
                <div className="panel vstack gap-3 text-center">
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    Vous n'avez pas reçu l'email ? Vérifiez votre dossier spam ou{" "}
                    <button 
                      type="button" 
                      className="btn-link text-primary p-0 border-0 bg-transparent"
                      onClick={() => setIsSubmitted(false)}
                    >
                      essayez une autre adresse
                    </button>
                  </p>
                  
                  <a href="/sign-in" className="btn btn-outline-primary btn-md">
                    Retour à la connexion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section panel overflow-hidden">
      <div className="section-outer">
        <div className="container max-w-lg">
          <div className="section-inner">
            <div className="panel vstack gap-4 md:gap-6 lg:gap-8">
              <div className="panel vstack items-center gap-2 text-center">
                <h1 className="h2 lg:h1">Mot de passe oublié ?</h1>
                <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                  Pas de problème, nous vous envoyons un lien de réinitialisation
                </p>
              </div>
              
              <div className="panel">
                <form onSubmit={handleSubmit} className="vstack gap-4">
                  <div className="form-group">
                    <label className="form-label fs-7" htmlFor="email">
                      Adresse email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Entrez votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-md w-100">
                    Envoyer le lien de réinitialisation
                  </button>
                </form>
                
                <div className="panel vstack gap-2 mt-4 text-center">
                  <a href="/sign-in" className="fs-7 text-primary">
                    ← Retour à la connexion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 