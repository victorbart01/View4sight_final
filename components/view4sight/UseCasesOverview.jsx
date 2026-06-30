import Link from "next/link";
import Brands from "@/components/common/Brands";

// Picto orange filter (matches the brand #FE552E), reused from the original domain row.
const ORANGE_FILTER =
  "brightness(0) saturate(100%) invert(45%) sepia(52%) saturate(6328%) hue-rotate(346deg) brightness(103%) contrast(94%)";

const tx = (val, locale) => (val && typeof val === "object" ? val[locale] ?? val.fr : val);

// One entry per kept category picto. Quotes/authors come from the real case studies for
// Urbanisme / Infrastructure / Construction; the other three show a value statement + KPI.
const sectors = [
  {
    key: "urbanisme",
    picto: "/assets/images/custom-icons/urbain.svg",
    name: { fr: "Urbanisme", en: "Urban planning" },
    blurb: {
      fr: "Concertation citoyenne et projets d'aménagement partagés en 3D.",
      en: "Citizen engagement and development projects shared in 3D.",
    },
    cta: { label: { fr: "En savoir plus", en: "Learn more" }, href: "/ressources/use-cases/urban-planning" },
    quote: {
      fr: "Les citoyens comprennent enfin nos projets et participent vraiment.",
      en: "Citizens finally understand our projects and truly take part.",
    },
    proof: { type: "client", txt: { fr: "SERVICE URBANISME", en: "CITY PLANNING DEPT" } },
  },
  {
    key: "infrastructure",
    picto: "/assets/images/custom-icons/Infrastructure.svg",
    name: { fr: "Infrastructure", en: "Infrastructure" },
    blurb: {
      fr: "Inspection prédictive et gestion d'actifs, à distance.",
      en: "Predictive inspection and remote asset management.",
    },
    cta: { label: { fr: "En savoir plus", en: "Learn more" }, href: "/ressources/use-cases/infrastructure-inspection" },
    quote: {
      fr: "On prévient les problèmes avant qu'ils ne coûtent cher.",
      en: "We prevent issues before they ever get costly.",
    },
    proof: { type: "client", txt: { fr: "GROUPE INFRASTRUCTURE", en: "INFRASTRUCTURE CORP" } },
  },
  {
    key: "construction",
    picto: "/assets/images/custom-icons/construction.svg",
    name: { fr: "Construction", en: "Construction" },
    blurb: {
      fr: "Suivi de chantier comparé au BIM, semaine après semaine.",
      en: "Site progress tracked against your BIM, week after week.",
    },
    cta: { label: { fr: "En savoir plus", en: "Learn more" }, href: "/ressources/use-cases/construction-monitoring" },
    quote: {
      fr: "On détecte les écarts tôt et on tient les délais.",
      en: "We catch deviations early and stay on schedule.",
    },
    proof: { type: "client", txt: { fr: "CONSTRUCTION PLUS", en: "CONSTRUCTION PLUS" } },
  },
  {
    key: "patrimoine",
    picto: "/assets/images/custom-icons/Patrimoine.svg",
    name: { fr: "Patrimoine", en: "Heritage" },
    blurb: {
      fr: "Numérisation et conservation des monuments au millimètre.",
      en: "Millimeter digitization and preservation of monuments.",
    },
    cta: { label: { fr: "Demander une démo", en: "Request a demo" }, href: "/page-contact" },
    quote: {
      fr: "Figez l'état exact d'un site et conservez un jumeau numérique consultable à vie.",
      en: "Capture a site's exact state and keep a digital twin to consult for good.",
    },
    proof: { type: "kpi", n: "0,1 mm", l: { fr: "de précision", en: "precision" } },
  },
  {
    key: "industrie",
    picto: "/assets/images/custom-icons/Industrie.svg",
    name: { fr: "Industrie", en: "Industry" },
    blurb: {
      fr: "Jumeaux numériques d'usines et planification d'implantations.",
      en: "Factory digital twins and layout planning.",
    },
    cta: { label: { fr: "Demander une démo", en: "Request a demo" }, href: "/page-contact" },
    quote: {
      fr: "Documentez vos installations en 3D et partagez leur état réel avec vos équipes.",
      en: "Document your installations in 3D and share their real state with your teams.",
    },
    proof: { type: "kpi", n: "3x", l: { fr: "plus rapide", en: "faster surveys" } },
  },
  {
    key: "securite",
    picto: "/assets/images/custom-icons/Safety.svg",
    name: { fr: "Sécurité", en: "Security" },
    blurb: {
      fr: "Hébergement français et conformité RGPD de bout en bout.",
      en: "French hosting and end-to-end GDPR compliance.",
    },
    cta: { label: { fr: "Découvrir", en: "Explore" }, href: "/securite" },
    quote: {
      fr: "Vos relevés sensibles restent en France. Aucune donnée ne quitte le territoire.",
      en: "Your sensitive scans stay in France. No data ever leaves the country.",
    },
    proof: { type: "kpi", n: "100%", l: { fr: "hébergé en France", en: "hosted in France" } },
  },
];

function QuoteMark() {
  return (
    <svg className="uc2-qmark" viewBox="0 0 32 24" width="32" height="24" aria-hidden="true">
      <path
        d="M0 24V13.6C0 6.1 4.3 1.2 12 0l1.6 3.8C9.4 5.2 7.1 7.6 6.7 11.2H12V24H0Zm18 0V13.6C18 6.1 22.3 1.2 30 0l1.6 3.8c-4.2 1.4-6.5 3.8-6.9 7.4H30V24H18Z"
        fill="#FE552E"
      />
    </svg>
  );
}

export default function UseCasesOverview({ locale = "fr" }) {
  return (
    <div className="uc2">
      <style>{`
        .uc2 { padding-top: 56px; padding-bottom: 96px; background: #0E0E0F; }

        .uc2__grid {
          position: relative; z-index: 1; max-width: 1180px; margin: 0 auto;
          border: 1px solid rgba(255,255,255,0.09); border-radius: 16px; overflow: hidden;
        }
        .uc2__inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: rgba(255,255,255,0.08);
        }
        .uc2__cell {
          background: #29292E; padding: 32px 36px;
          display: flex; flex-direction: column; gap: 16px;
        }
        .uc2__head { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .uc2__id { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .uc2__ic { width: 40px; height: 40px; object-fit: contain; flex-shrink: 0; filter: ${ORANGE_FILTER}; }
        .uc2__name {
          font-family: "Lexend", sans-serif; font-size: 20px; font-weight: 600;
          letter-spacing: -0.02em; color: #fff;
        }
        .uc2__more {
          display: inline-flex; align-items: center; gap: 7px; flex-shrink: 0;
          padding: 8px 14px; border-radius: 9px; border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.8);
          font-size: 13px; font-weight: 500; text-decoration: none;
          transition: background .18s ease, border-color .18s ease, color .18s ease;
        }
        .uc2__more:hover { background: #FE552E; border-color: transparent; color: #0E0E0F; }
        .uc2__more i { font-size: 13px; }

        .uc2__blurb { font-size: 14.5px; line-height: 1.5; color: rgba(255,255,255,0.52); margin: 0; }

        .uc2__card {
          flex: 1; display: flex; flex-direction: column; justify-content: space-between;
          gap: 16px; min-height: 188px;
          background: #19191D; border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 24px 26px;
        }
        .uc2-qmark { display: block; }
        .uc2__quote { font-size: 14.5px; line-height: 1.55; color: rgba(255,255,255,0.74); margin: 12px 0 0; }
        .uc2__proof-client {
          text-align: right; font-family: "Lexend", sans-serif; font-size: 18px; font-weight: 700;
          letter-spacing: 0.04em; color: rgba(255,255,255,0.16);
        }
        .uc2__proof-kpi { display: flex; align-items: baseline; gap: 8px; }
        .uc2__proof-num {
          font-family: "Lexend", sans-serif; font-size: 30px; font-weight: 700;
          letter-spacing: -0.04em; color: #FE552E; line-height: 1;
        }
        .uc2__proof-lbl { font-size: 12.5px; color: rgba(255,255,255,0.45); }

        .uc2__frieze {
          position: relative; z-index: 1; max-width: 1180px; margin: 0 auto;
          padding: 44px 24px 8px; display: flex; flex-direction: column; align-items: center; gap: 22px;
        }
        .uc2__frieze-label {
          font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .uc2__frieze-logos { width: 100%; }

        @media (max-width: 991px) {
          .uc2__inner { grid-template-columns: 1fr; }
          .uc2__cell { padding: 26px 22px; }
        }
      `}</style>

      <div className="uc2__grid">
        <div className="uc2__inner">
          {sectors.map((s) => (
            <div className="uc2__cell" key={s.key}>
              <div className="uc2__head">
                <div className="uc2__id">
                  <img src={s.picto} alt="" className="uc2__ic" aria-hidden="true" />
                  <span className="uc2__name">{tx(s.name, locale)}</span>
                </div>
                <Link href={s.cta.href} className="uc2__more">
                  <span>{tx(s.cta.label, locale)}</span>
                  <i className="unicon-arrow-right fw-bold rtl:rotate-180" />
                </Link>
              </div>

              <p className="uc2__blurb">{tx(s.blurb, locale)}</p>

              <div className="uc2__card">
                <div>
                  <QuoteMark />
                  <p className="uc2__quote">{tx(s.quote, locale)}</p>
                </div>
                {s.proof.type === "client" ? (
                  <div className="uc2__proof-client">{tx(s.proof.txt, locale)}</div>
                ) : (
                  <div className="uc2__proof-kpi">
                    <span className="uc2__proof-num">{s.proof.n}</span>
                    <span className="uc2__proof-lbl">{tx(s.proof.l, locale)}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="uc2__frieze">
        <span className="uc2__frieze-label">
          {locale === "en" ? "Works with every 3D scanner" : "Compatible avec tous les scanners 3D"}
        </span>
        <div className="uc2__frieze-logos element-brands text-primary dark:text-white mask-x">
          <Brands />
        </div>
      </div>
    </div>
  );
}
