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
    <div
      className="su-page"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "84px 16px 44px",
        backgroundColor: "#0E0E0F",
        // Vertical gradient + dot texture, in the spirit of the hero sections
        // but fading top AND bottom (vertical) instead of just the bottom.
        backgroundImage: [
          "radial-gradient(56% 46% at 50% 38%, rgba(254,85,46,0.13) 0%, rgba(254,85,46,0) 66%)",
          "linear-gradient(180deg, #0E0E0F 0%, rgba(14,14,15,0) 17%, rgba(14,14,15,0) 83%, #0E0E0F 100%)",
          "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.5px)",
        ].join(", "),
        backgroundSize: "100% 100%, 100% 100%, 24px 24px",
      }}
    >
      <style>{`
        .su-card {
          width: 100%;
          max-width: 452px;
          background: #161618;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 28px 30px;
          box-shadow: 0 40px 90px -50px rgba(0,0,0,0.85);
        }
        @media (max-width: 575px) { .su-card { padding: 26px 22px; } }

        .su-label {
          display: block;
          margin-bottom: 5px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.62);
          letter-spacing: -0.01em;
        }
        .su-input {
          width: 100%;
          background: #0E0E0F;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 9px 14px;
          color: #fff;
          font-size: 15px;
          font-family: inherit;
          transition: border-color .15s ease, box-shadow .15s ease;
        }
        .su-input::placeholder { color: rgba(255,255,255,0.32); }
        .su-input:focus {
          outline: none;
          border-color: #FE552E;
          box-shadow: 0 0 0 3px rgba(254,85,46,0.18);
        }
        .su-input:-webkit-autofill,
        .su-input:-webkit-autofill:focus {
          -webkit-text-fill-color: #fff;
          -webkit-box-shadow: 0 0 0 1000px #0E0E0F inset;
          caret-color: #fff;
        }

        .su-btn {
          width: 100%;
          border: 0;
          border-radius: 10px;
          padding: 13px 18px;
          background: #FE552E;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: filter .15s ease, transform .15s ease;
        }
        .su-btn:hover { filter: brightness(1.06); }
        .su-btn:active { transform: translateY(1px); }

        .su-check {
          width: 17px; height: 17px; margin-top: 1px;
          accent-color: #FE552E;
          flex-shrink: 0; cursor: pointer;
        }
        .su-link { color: #FE552E; text-decoration: none; }
        .su-link:hover { text-decoration: underline; }
      `}</style>

      <div
        className="su-card"
        data-anime="onview:-100; targets: >*; translateY: [22, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(80, {start: 100});"
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "18px" }}>
          <img
            src="/assets/images/logo_v4s_light.png"
            alt="View4Sight"
            style={{ height: "32px", objectFit: "contain", marginBottom: "13px" }}
          />
          <h1 style={{ margin: 0, fontSize: "23px", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
            Créer un compte
          </h1>
          <p style={{ margin: "7px 0 0", fontSize: "13.5px", color: "rgba(255,255,255,0.5)" }}>
            Commencez votre essai gratuit de 30 jours
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="firstName" className="su-label">Prénom</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="su-input"
                placeholder="Prénom"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="lastName" className="su-label">Nom</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="su-input"
                placeholder="Nom"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="su-label">Email professionnel</label>
            <input
              id="email"
              name="email"
              type="email"
              className="su-input"
              placeholder="votre@entreprise.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="su-label">Entreprise</label>
            <input
              id="company"
              name="company"
              type="text"
              className="su-input"
              placeholder="Nom de votre entreprise"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="su-label">Mot de passe</label>
            <input
              id="password"
              name="password"
              type="password"
              className="su-input"
              placeholder="Au moins 8 caractères"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="su-label">Confirmer le mot de passe</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="su-input"
              placeholder="Confirmez votre mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <label
            htmlFor="agreeToTerms"
            style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer", fontSize: "13px", lineHeight: 1.45, color: "rgba(255,255,255,0.6)" }}
          >
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              className="su-check"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <span>
              J'accepte les{" "}
              <a href="/page-terms" className="su-link">conditions d'utilisation</a>{" "}
              et la{" "}
              <a href="/page-privacy" className="su-link">politique de confidentialité</a>
            </span>
          </label>

          <button type="submit" className="su-btn" style={{ marginTop: "4px" }}>
            Commencer l'essai gratuit
          </button>
        </form>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>Déjà un compte ? </span>
          <a
            href="https://app.view4sight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="su-link"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Se connecter
          </a>
          <p style={{ margin: "11px 0 0", fontSize: "12.5px", color: "rgba(255,255,255,0.4)" }}>
            Aucune carte bancaire requise • Essai gratuit de 30 jours
          </p>
        </div>
      </div>
    </div>
  );
}
