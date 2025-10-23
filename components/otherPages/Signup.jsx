"use client";
import { useState } from "react";
import Link from "next/link";

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
      <div style={{ 
        display: 'flex', 
        minHeight: '100vh', 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ 
          display: 'flex', 
          width: '100%', 
          maxWidth: '1600px',
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
            <div className="w-100" style={{ maxWidth: '450px' }}>
              {/* Logo View4Sight */}
              <div className="mb-4">
                <img 
                  src="/assets/images/logo_v4s.svg" 
                  alt="View4Sight" 
                  style={{ height: '40px', width: 'auto' }}
                />
              </div>

              <h1 className="h2 mb-2">Créer un compte</h1>
              <p className="text-muted mb-4">
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
                      border: '1px solid #e0e0e0'
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
                    placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
                    style={{
                      borderRadius: '12px',
                      padding: '12px 16px',
                      border: '1px solid #e0e0e0'
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
                      placeholder="Créer un mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
                      style={{
                        borderRadius: '12px',
                        padding: '12px 16px',
                        paddingRight: '48px',
                        border: '1px solid #e0e0e0'
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-link position-absolute"
                      style={{
                        top: '50%',
                        right: '8px',
                        transform: 'translateY(-50%)',
                        padding: '8px'
                      }}
                      onClick={() => setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                    >
                      {formData.showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
          </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-lg w-100 mb-4"
                  style={{
                    backgroundColor: '#FE552E',
                    borderColor: '#FE552E',
                    color: 'white',
                    borderRadius: '12px',
                    padding: '14px',
                    fontWeight: '500'
                  }}
                >
                  Créer un compte
                </button>

              </form>

              {/* Sign In Link */}
              <p className="text-center mb-0">
                <span className="text-muted">Vous avez déjà un compte ? </span>
                <Link 
                  href="/sign-in" 
                  className="text-decoration-none fw-medium"
                  style={{ color: '#FE552E' }}
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div 
            style={{
              flex: '0 0 62%',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem',
              position: 'relative'
            }}
            className="testimonial-column"
          >
            {/* SVG Background rectangle-14 */}
            <img 
              src="/assets/images/rectangle-14.svg" 
              alt=""
              style={{
                position: 'absolute',
                top: '58px',
                left: '76px',
                width: '513px',
                height: '735px',
                objectFit: 'cover'
              }}
            />
            
            {/* SVG Shape Rectangle-15 pour l'effet glassmorphism */}
            <img 
              src="/assets/images/Rectangle-15.svg" 
              alt=""
              style={{
                position: 'absolute',
                top: '523px',
                left: '92px',
                width: '483px',
                height: '252px'
              }}
            />

            {/* Tags - positioned ABOVE the wrapper */}
            <div 
              style={{
                position: 'absolute',
                top: '472px',
                left: '108px',
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
                top: '523px',
                left: '91px',
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
                  top: '729px',
                  left: '432px',
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
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.02)';
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
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.02)';
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
    </>
  );
} 