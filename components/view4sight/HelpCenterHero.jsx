"use client";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function HelpCenterHero({ locale = 'en' }) {
  const { t } = useTranslation(locale);

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <div className="hero-badge mx-auto">
                {locale === 'fr' ? 'Centre d\'Aide' : 'Support Center'}
              </div>
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                {locale === 'fr' ? 'Comment pouvons-nous vous aider ?' : 'How can we help you?'}
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                {locale === 'fr' 
                  ? 'Trouvez des réponses à vos questions, explorez nos guides, ou contactez notre équipe de support pour une assistance personnalisée.'
                  : 'Find answers to your questions, explore our guides, or get in touch with our support team for personalized assistance.'}
              </p>
            </div>
            <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
              <div className="panel row child-cols-12 lg:child-cols-6 g-0">
                <div className="order-1 lg:order-0">
                  <div className="panel overflow-hidden rounded-3 h-100 min-h-350px">
                    <figure className="panel h-100 m-0 rounded">
                      <canvas className="h-100 w-100" />
                      <Image
                        className="media-cover image"
                        alt="Help Center"
                        src="/assets/images/template/hero-contact.jpg"
                        width="1500"
                        height="1000"
                      />
                    </figure>
                    <div className="position-cover text-white vstack justify-end p-4 lg:p-6 xl:p-9">
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-50" />
                      <div className="panel z-1">
                        <div className="vstack gap-3">
                          <p className="fs-5 xl:fs-4 fw-medium">
                            {locale === 'fr' 
                              ? '"L\'équipe de support View4Sight nous a aidés à intégrer la plateforme parfaitement dans notre flux de travail de relevé."'
                              : '"The View4Sight support team helped us integrate the platform seamlessly into our surveying workflow."'}
                          </p>
                          <div className="vstack gap-0">
                            <p className="fs-6 lg:fs-5 fw-medium">
                              Marie Dubois
                            </p>
                            <span className="fs-7 opacity-80">
                              {locale === 'fr' ? 'Directrice Technique chez GeoSurvey' : 'Technical Director at GeoSurvey'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-0 lg:order-1">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="vstack gap-2 p-3 sm:p-6 xl:p-8"
                  >
                    <h3 className="h5 text-dark dark:text-white mb-2">
                      {locale === 'fr' ? 'Besoin d\'un Support Direct ?' : 'Need Direct Support?'}
                    </h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                      {locale === 'fr' 
                        ? 'Vous ne trouvez pas ce que vous cherchez ? Notre équipe de support est là pour vous aider avec toute question technique ou problème.'
                        : "Can't find what you're looking for? Our support team is here to help with any technical questions or issues."}
                    </p>
                    <div className="row child-cols-12 sm:child-cols-6 g-2">
                      <div>
                        <input
                          className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="text"
                          placeholder={locale === 'fr' ? 'Votre nom' : 'Your name'}
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="email"
                          placeholder={locale === 'fr' ? 'Votre email' : 'Your email'}
                          required
                        />
                      </div>
                    </div>
                    <select className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white">
                      <option value="">{locale === 'fr' ? 'Sélectionner le type de problème' : 'Select issue type'}</option>
                      <option value="technical">{locale === 'fr' ? 'Problème Technique' : 'Technical Issue'}</option>
                      <option value="account">{locale === 'fr' ? 'Compte et Facturation' : 'Account & Billing'}</option>
                      <option value="features">{locale === 'fr' ? 'Question sur les Fonctionnalités' : 'Feature Question'}</option>
                      <option value="integration">{locale === 'fr' ? 'Support d\'Intégration' : 'Integration Support'}</option>
                      <option value="other">{locale === 'fr' ? 'Autre' : 'Other'}</option>
                    </select>
                    <textarea
                      className="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      placeholder={locale === 'fr' ? 'Décrivez votre problème ou question...' : 'Describe your issue or question...'}
                      required
                      defaultValue={""}
                    />
                    <button
                      className="btn btn-primary btn-md text-white mt-2"
                      type="submit"
                    >
                      {locale === 'fr' ? 'Envoyer la Demande de Support' : 'Send Support Request'}
                    </button>
                    <p className="text-center fs-7 text-dark dark:text-white text-opacity-60">
                      {locale === 'fr' 
                        ? 'Nous répondons généralement sous 2-4 heures pendant les heures de bureau'
                        : 'We typically respond within 2-4 hours during business hours'}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 