"use client";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "View4Sight m'a permis de réduire le temps de validation client de 40% en partageant directement les relevés 3D en ligne.",
      author: "Pierre Moreau",
      role: "Géomètre-expert",
      company: "Cabinet Moreau & Associés",
      tags: ["Collaboration", "Gain de temps"],
      image: "/assets/images/testimonials/pierre_moreau.jpeg"
    },
    {
      quote: "La plateforme nous a fait gagner 50% de déplacements sur site grâce à la visualisation 3D à distance.",
      author: "Sophie Laurent",
      role: "Architecte",
      company: "Laurent Architecture",
      tags: ["Visualisation", "Économies"],
      image: "/assets/images/testimonials/sophie_laurent.jpg"
    },
    {
      quote: "Hébergement français et conformité GDPR : exactement ce qu'il nous fallait pour nos projets sensibles.",
      author: "Marc Dubois",
      role: "Chef de projet BIM",
      company: "Ingénierie Dubois",
      tags: ["Sécurité", "Souveraineté"],
      image: "/assets/images/testimonials/marc_dubois.jpg"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration form submitted:', formData);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <style jsx>{`
        .testimonial-column {
          display: none;
        }
        @media (min-width: 768px) {
          .testimonial-column {
            display: flex !important;
          }
        }
      `}</style>
      {/* Dark form-field styling, scoped to this page (.sg-page beats Bootstrap defaults) */}
      <style>{`
        .sg-page .form-label { color: rgba(255,255,255,0.62); font-size: 13px; }
        .sg-page .form-control {
          background-color: #0E0E0F !important;
          border: 1px solid rgba(255,255,255,0.12) !important;
          color: #fff !important;
        }
        .sg-page .form-control::placeholder { color: rgba(255,255,255,0.32) !important; }
        .sg-page .form-control:focus {
          background-color: #0E0E0F !important;
          border-color: #FE552E !important;
          box-shadow: 0 0 0 3px rgba(254,85,46,0.18) !important;
          color: #fff !important;
        }
        .sg-page .form-control:-webkit-autofill,
        .sg-page .form-control:-webkit-autofill:focus {
          -webkit-text-fill-color: #fff;
          -webkit-box-shadow: 0 0 0 1000px #0E0E0F inset;
          caret-color: #fff;
        }
        .sg-eye {
          color: rgba(255,255,255,0.45);
          transition: color .15s ease;
        }
        .sg-eye:hover { color: rgba(255,255,255,0.8); }
        .sg-btn-primary { transition: filter .15s ease, transform .15s ease; }
        .sg-btn-primary:hover { filter: brightness(1.06); }
        .sg-btn-primary:active { transform: translateY(1px); }
      `}</style>
      <div
        className="sg-page"
        style={{
          display: 'flex',
          minHeight: '100vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0E0E0F',
          // Dot texture + vertical gradient (hero dots, faded vertically top & bottom)
          backgroundImage: [
            "linear-gradient(180deg, #0E0E0F 0%, rgba(14,14,15,0) 16%, rgba(14,14,15,0) 84%, #0E0E0F 100%)",
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.5px)",
          ].join(", "),
          backgroundSize: "100% 100%, 24px 24px",
        }}
      >
        <div style={{
          display: 'flex',
          width: '100%',
          maxWidth: '1280px',
          minHeight: '100vh'
        }}>
        {/* Left Column - Form */}
      <div style={{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
            <div
              className="w-100"
              style={{ maxWidth: '420px' }}
              data-anime="onview:-100; targets: >*; translateY: [22, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(80, {start: 100});"
            >
              {/* Logo View4Sight */}
              <div className="mb-4">
                <img
                  src="/assets/images/logo_v4s_light.png"
                  alt="View4Sight"
                  style={{ height: '38px', width: 'auto' }}
                />
              </div>

              <h1 className="h2 mb-2" style={{ color: '#fff', letterSpacing: '-0.01em' }}>Créer un compte</h1>
              <p className="mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Commencez à explorer et utiliser toutes les ressources<br />
                qui vous aideront à élever chaque projet.
              </p>

        <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-medium">
                    Nom complet
              </label>
              <input
                type="text"
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                onChange={handleChange}
                required
                    style={{
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '15px'
                    }}
                  />
          </div>

                {/* Email Field */}
          <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-medium">
                    Email
            </label>
            <input
              type="email"
                    className="form-control form-control-lg"
              id="email"
              name="email"
                    placeholder="votre@entreprise.com"
              value={formData.email}
              onChange={handleChange}
              required
                    style={{
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '15px'
                    }}
            />
          </div>

                {/* Password Field */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-medium">
              Mot de passe
            </label>
                  <div className="position-relative">
            <input
                      type={formData.showPassword ? "text" : "password"}
                      className="form-control form-control-lg"
              id="password"
              name="password"
                      placeholder="Au moins 8 caractères"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
                      style={{
                        borderRadius: '12px',
                        padding: '12px 16px',
                        paddingRight: '48px',
                        fontSize: '15px'
                      }}
                    />
                    <button
                      type="button"
                      className="sg-eye position-absolute d-flex align-items-center justify-content-center"
                      aria-label={formData.showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                      style={{
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        width: '32px',
                        height: '32px',
                        border: 0,
                        background: 'transparent',
                        padding: 0,
                        cursor: 'pointer'
                      }}
                      onClick={() => setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                    >
                      {formData.showPassword ? (
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
          </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-lg w-100 mb-4 sg-btn-primary"
                  style={{
                    backgroundColor: '#FE552E',
                    borderColor: '#FE552E',
                    color: 'white',
                    borderRadius: '12px',
                    padding: '14px',
                    fontWeight: '600'
                  }}
                >
                  Créer un compte
                </button>

              </form>

              {/* Sign In Link */}
              <p className="text-center mb-0">
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Vous avez déjà un compte ? </span>
                <a
                  href="https://app.view4sight.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none fw-medium"
                  style={{ color: '#FE552E' }}
                >
                  Se connecter
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div
            style={{
              flex: '1',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem',
              position: 'relative'
            }}
            className="testimonial-column"
          >
            {/* Fixed-size testimonial canvas, centered in the column (robust to column width) */}
            <div style={{ position: 'relative', width: '513px', height: '735px', flexShrink: 0 }}>
            {/* SVG Background rectangle-14 */}
            <img
              src="/assets/images/rectangle-14.svg"
              alt=""
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '513px',
                height: '735px',
                objectFit: 'cover',
                filter: 'brightness(0.9)'
              }}
            />

            {/* SVG Shape Rectangle-15 pour l'effet glassmorphism */}
            <img
              src="/assets/images/Rectangle-15.svg"
              alt=""
              style={{
                position: 'absolute',
                top: '465px',
                left: '16px',
                width: '483px',
                height: '252px'
              }}
            />

            {/* Tags - positioned ABOVE the wrapper */}
            <div
              style={{
                position: 'absolute',
                top: '414px',
                left: '32px',
                display: 'flex',
                gap: '16px',
                zIndex: 10
              }}
            >
              {testimonials[currentTestimonial].tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '8px 18px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '10px',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    fontFamily: '"Graphik", "IBM Plex Sans Arabic", sans-serif',
                    fontWeight: '400',
                    color: '#ffffff',
                    fontSize: '14px',
                    letterSpacing: '0',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Wrapper container for testimonial content inside Rectangle-15 */}
            <div
              style={{
                position: 'absolute',
                top: '465px',
                left: '15px',
                width: '483px',
                height: '252px',
                zIndex: 2
              }}
            >
                {/* Quote - positioned inside wrapper, moved up */}
                <blockquote
                  style={{
                    position: 'absolute',
                    top: '35%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    height: '55%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Graphik", "IBM Plex Sans Arabic", sans-serif',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontSize: '18px',
                    letterSpacing: '-0.2px',
                    lineHeight: '1.4',
                    padding: '24px 20px',
                    boxSizing: 'border-box',
                    textAlign: 'left',
                    margin: 0
                  }}
                >
                  {testimonials[currentTestimonial].quote}
                </blockquote>

              {/* Author - positioned below quote inside wrapper */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '8%',
                  left: '8%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  fontFamily: '"Graphik", "IBM Plex Sans Arabic", sans-serif',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    overflow: 'hidden'
                  }}
                >
                  {testimonials[currentTestimonial].image ? (
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')
                  )}
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)' }}>
                    {testimonials[currentTestimonial].role}<br />
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

              {/* Navigation Buttons - Positioned at bottom right of Rectangle-15 */}
              <div
                style={{
                  position: 'absolute',
                  top: '671px',
                  left: '356px',
                  display: 'flex',
                  gap: '10px',
                  zIndex: 15
                }}
              >
                <button
                  onClick={prevTestimonial}
                  style={{
                    width: '72px',
                    height: '54px',
                    borderRadius: '15px',
                    backgroundColor: 'white',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.2s',
                    padding: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f0f0';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <img
                    src="/assets/images/testimonials/arrowL.svg"
                    alt="Previous"
                    style={{ width: '24px', height: '24px' }}
                  />
                </button>
                <button
                  onClick={nextTestimonial}
                  style={{
                    width: '72px',
                    height: '54px',
                    borderRadius: '15px',
                    backgroundColor: 'white',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.2s',
                    padding: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f0f0';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <img
                    src="/assets/images/testimonials/arrowR.svg"
                    alt="Next"
                    style={{ width: '24px', height: '24px' }}
                  />
                </button>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
