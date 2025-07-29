"use client";
import { useState } from "react";
import Link from "next/link";

export default function Resetpass1() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center py-5 px-3">
        <div className="w-100 text-center" style={{ maxWidth: '400px' }}>
          <div className="mb-4">
            <div 
              className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
              style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'rgba(254, 85, 46, 0.1)',
                color: '#FE552E'
              }}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            <h1 className="h3 mb-2">Email envoyé !</h1>
            <p className="text-muted">
              Nous avons envoyé un lien de réinitialisation à{' '}
              <strong>{email}</strong>
            </p>
          </div>

          <div className="text-start mb-4 p-3 bg-light rounded">
            <p className="mb-2 fw-medium">Prochaines étapes :</p>
            <ol className="ps-3 mb-0">
              <li className="mb-1">Vérifiez votre boîte de réception</li>
              <li className="mb-1">Cliquez sur le lien dans l'email</li>
              <li>Créez votre nouveau mot de passe</li>
            </ol>
          </div>

          <p className="text-muted small mb-4">
            Vous ne recevez pas l'email ? Vérifiez vos spams ou{' '}
            <button 
              type="button" 
              className="btn btn-link p-0 text-decoration-none"
              onClick={() => setIsSubmitted(false)}
            >
              réessayez
            </button>
          </p>

          <Link href="/sign-in" className="btn btn-outline-primary">
            Retour à la connexion
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-5 px-3">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <h1 className="h3 mb-2">Mot de passe oublié ?</h1>
          <p className="text-muted">
            Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Adresse email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nom@exemple.com"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ backgroundColor: '#FE552E', borderColor: '#FE552E' }}
          >
            Envoyer le lien de réinitialisation
          </button>
        </form>

        <div className="text-center">
          <Link href="/sign-in" className="text-decoration-none">
            ← Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  );
} 