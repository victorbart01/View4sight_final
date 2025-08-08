"use client";

import { closeContactModal } from "@/utlis/toggleContactModal";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactModal() {
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);
  const { t } = useTranslation();

  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // UI state management
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeContactModal();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeContactModal();
  }, [pathname]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        // Close modal after 2 seconds
        setTimeout(() => {
          closeContactModal();
        }, 2000);
      } else {
        setSubmitStatus('error');
        console.error('Error submitting form:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      ref={containerRef}
      id="uc-contact-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog lg:max-w-650px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
          type="button"
          onClick={closeContactModal}
        >
          <i className="unicon-close" />
        </button>
        <div className="panel vstack gap-2 md:gap-4 text-center">
          <div className="panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
            <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
              <h4 className="h5 lg:h4 m-0">{t('demo_modal.title')}</h4>
              <div className="panel w-100 sm:w-350px md:w-500px mx-auto">
                <form
                  onSubmit={handleSubmit}
                  className="vstack gap-2"
                >
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={t('demo_modal.form.first_name')}
                      required
                    />
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={t('demo_modal.form.last_name')}
                      required
                    />
                  </div>
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('demo_modal.form.email')}
                      required
                    />
                    <input
                      className="form-control h-48px w-100 md:w-1/2 rtl:text-end bg-white dark:border-white dark:text-dark"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t('demo_modal.form.phone')}
                      required
                    />
                  </div>
                  <input
                    className="form-control h-48px w-full bg-white dark:border-white dark:text-dark"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t('demo_modal.form.company')}
                    required
                  />
                  <textarea
                    className="form-control min-h-150px w-full bg-white dark:border-white dark:text-dark"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('demo_modal.form.message')}
                  />
                  <button
                    className="btn btn-primary btn-md text-white mt-2"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        {t('common.loading', 'Envoi en cours...')}
                      </>
                    ) : (
                      t('demo_modal.submit_button')
                    )}
                  </button>

                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <div className="alert alert-success mt-3" role="alert">
                      <i className="unicon-check-circle me-2"></i>
                      Merci ! Votre demande de démo a été envoyée avec succès. Nous vous recontacterons très prochainement.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="alert alert-danger mt-3" role="alert">
                      <i className="unicon-times-circle me-2"></i>
                      Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement.
                    </div>
                  )}

                  {submitStatus !== 'success' && (
                    <p className="fs-7 opacity-70 mt-2 text-center">
                      {t('demo_modal.description')}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
