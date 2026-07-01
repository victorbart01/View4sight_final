import Link from "next/link";
import CtaFinal from "@/components/view4sight/CtaFinal";

// Bilingual helper: returns v[locale] for {fr,en} objects, or v itself for plain strings/arrays.
const tx = (v, locale) =>
  v && typeof v === "object" && !Array.isArray(v) && ("fr" in v || "en" in v)
    ? v[locale] ?? v.fr
    : v;

function BrowserFrame({ url = "app.view4sight.com", children }) {
  return (
    <div className="uc3__browser">
      <div className="uc3__browser-bar">
        <span className="uc3__dot" />
        <span className="uc3__dot" />
        <span className="uc3__dot" />
        <span className="uc3__url">{url}</span>
      </div>
      <div className="uc3__browser-body">{children}</div>
    </div>
  );
}

function Media({ media, fallback = "/assets/images/mockup-view4sight.png", alt }) {
  const m = media || { type: "image", src: fallback };
  if (m.type === "video") {
    return (
      <video className="uc3__media" autoPlay muted loop playsInline poster={m.poster}>
        <source src={m.src} type="video/mp4" />
      </video>
    );
  }
  return <img className="uc3__media" src={m.src} alt={alt || ""} />;
}

export default function UseCaseDetail({ useCase, locale = "fr" }) {
  const en = locale === "en";
  const logo = useCase.client?.logo;
  const tags = useCase.tags ? tx(useCase.tags, locale) : [useCase.category];
  const facts = useCase.facts || [];

  return (
    <article className="uc3">
      <style>{`
        .uc3 { background:#0E0E0F; color:#fff; overflow:hidden; }
        .uc3__container { max-width:1080px; margin:0 auto; padding:0 24px; }
        .uc3__prose { max-width:720px; }

        /* ---- Hero ---- */
        .uc3__hero {
          position:relative;
          background-color:#131315;
          background-image:
            radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.5px),
            linear-gradient(180deg, rgba(14,14,15,0) calc(100% - 220px), #0E0E0F 100%);
          background-size:24px 24px, 100% 100%;
          padding:112px 0 0;
        }
        .uc3__crumbs { display:flex; align-items:center; gap:9px; font-size:13px;
          color:rgba(255,255,255,0.45); margin-bottom:40px; flex-wrap:wrap; }
        .uc3__crumbs a { color:rgba(255,255,255,0.6); text-decoration:none; }
        .uc3__crumbs a:hover { color:#FE552E; }
        .uc3__crumbs span.sep { color:rgba(255,255,255,0.25); }

        .uc3__client-logo { height:34px; width:auto; opacity:0.9; margin-bottom:26px; display:block; }
        .uc3__eyebrow-badge {
          display:inline-block; margin-bottom:22px; padding:5px 13px; border-radius:999px;
          border:1px solid rgba(254,85,46,0.35); background:rgba(254,85,46,0.08);
          color:#FE552E; font-size:12px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
        }
        .uc3__title {
          font-family:"Lexend",sans-serif; font-weight:600;
          font-size:clamp(2rem, 4.6vw, 3.4rem); line-height:1.07; letter-spacing:-0.025em;
          margin:0 0 24px; max-width:16ch; color:#fff;
        }
        .uc3__deck {
          font-size:clamp(1.05rem, 1.7vw, 1.3rem); line-height:1.55; font-weight:400;
          color:rgba(255,255,255,0.62); margin:0 0 30px; max-width:600px;
        }
        .uc3__tags { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:52px; }
        .uc3__tag {
          font-size:12.5px; font-weight:500; color:rgba(255,255,255,0.72);
          padding:5px 12px; border-radius:8px;
          border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.03);
        }

        .uc3__hero-visual { position:relative; z-index:1; padding-bottom:8px; }

        /* ---- Browser frame ---- */
        .uc3__browser {
          border-radius:14px; overflow:hidden; background:#161618;
          border:1px solid rgba(255,255,255,0.09);
          box-shadow:0 40px 90px -40px rgba(0,0,0,0.9);
        }
        .uc3__browser-bar {
          display:flex; align-items:center; gap:7px; padding:11px 15px;
          background:#1C1C1F; border-bottom:1px solid rgba(255,255,255,0.06);
        }
        .uc3__dot { width:10px; height:10px; border-radius:50%; background:rgba(255,255,255,0.18); }
        .uc3__url {
          margin-left:12px; font-size:12px; color:rgba(255,255,255,0.4);
          background:#0E0E0F; border:1px solid rgba(255,255,255,0.07);
          padding:4px 14px; border-radius:7px; max-width:60%;
          overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
        }
        .uc3__browser-body { display:block; line-height:0; background:#0E0E0F; }
        .uc3__media { display:block; width:100%; height:auto; }

        /* ---- Lead + stats band ---- */
        .uc3__lead {
          font-size:clamp(1.25rem, 2.2vw, 1.6rem); line-height:1.5; font-weight:500;
          color:rgba(255,255,255,0.92); max-width:760px; margin:0;
          letter-spacing:-0.01em;
        }
        .uc3__lead b, .uc3__lead strong { color:#FE552E; font-weight:600; }

        .uc3__stats { border-top:1px solid rgba(255,255,255,0.08); border-bottom:1px solid rgba(255,255,255,0.08); }
        .uc3__metrics { display:grid; grid-template-columns:repeat(4,1fr); }
        .uc3__metric { padding:38px 24px; }
        .uc3__metric + .uc3__metric { border-left:1px solid rgba(255,255,255,0.08); }
        .uc3__metric-num {
          font-family:"Lexend",sans-serif; font-weight:700; color:#FE552E;
          font-size:clamp(2.2rem, 3.6vw, 3rem); line-height:1; letter-spacing:-0.03em;
        }
        .uc3__metric-lbl { margin-top:12px; font-size:14px; color:rgba(255,255,255,0.8); font-weight:500; }
        .uc3__metric-sub { margin-top:4px; font-size:12.5px; color:rgba(255,255,255,0.42); line-height:1.4; }

        .uc3__facts { display:flex; flex-wrap:wrap; gap:44px; padding:30px 0; }
        .uc3__fact-lbl { font-size:11px; text-transform:uppercase; letter-spacing:.1em; color:rgba(255,255,255,0.4); }
        .uc3__fact-val { margin-top:5px; font-size:15px; color:#fff; font-weight:500; }

        /* ---- Narrative sections ---- */
        .uc3__section { padding:84px 0; }
        .uc3__section--alt { background:#111113; border-top:1px solid rgba(255,255,255,0.06); border-bottom:1px solid rgba(255,255,255,0.06); }
        .uc3__eyebrow { display:block; font-size:12.5px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#FE552E; margin-bottom:18px; }
        .uc3__h2 { font-family:"Lexend",sans-serif; font-weight:600; font-size:clamp(1.6rem, 3vw, 2.3rem); line-height:1.15; letter-spacing:-0.02em; margin:0 0 22px; color:#fff; }
        .uc3__body { font-size:16.5px; line-height:1.72; color:rgba(255,255,255,0.66); margin:0 0 18px; }
        .uc3__body:last-child { margin-bottom:0; }

        .uc3__pains { list-style:none; margin:34px 0 0; padding:0; display:grid; gap:14px; max-width:720px; }
        .uc3__pains li { display:flex; gap:14px; align-items:flex-start; font-size:15.5px; line-height:1.55; color:rgba(255,255,255,0.72); }
        .uc3__pains li::before {
          content:""; flex-shrink:0; width:20px; height:20px; margin-top:1px; border-radius:6px;
          background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12);
          background-image:linear-gradient(45deg, transparent 44%, rgba(255,255,255,0.4) 44%, rgba(255,255,255,0.4) 56%, transparent 56%),
                           linear-gradient(-45deg, transparent 44%, rgba(255,255,255,0.4) 44%, rgba(255,255,255,0.4) 56%, transparent 56%);
        }

        .uc3__split { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; }
        .uc3__features { list-style:none; margin:32px 0 0; padding:0; display:grid; gap:20px; }
        .uc3__feature { display:flex; gap:15px; align-items:flex-start; }
        .uc3__feature-ic {
          flex-shrink:0; width:34px; height:34px; border-radius:9px; display:flex; align-items:center; justify-content:center;
          background:rgba(254,85,46,0.12); border:1px solid rgba(254,85,46,0.3);
        }
        .uc3__feature-ic svg { width:17px; height:17px; stroke:#FE552E; fill:none; stroke-width:2; }
        .uc3__feature h3 { font-size:16px; font-weight:600; color:#fff; margin:2px 0 4px; }
        .uc3__feature p { font-size:14.5px; line-height:1.55; color:rgba(255,255,255,0.6); margin:0; }

        /* ---- Quote ---- */
        .uc3__quote-wrap { padding:96px 0; text-align:center; position:relative;
          background:
            radial-gradient(60% 120% at 50% 0%, rgba(254,85,46,0.10) 0%, rgba(254,85,46,0) 60%);
        }
        .uc3__qmark { display:block; font-family:Georgia,serif; font-size:64px; line-height:0.5; color:#FE552E; margin:0 auto 24px; height:34px; }
        .uc3__quote { font-family:"Lexend",sans-serif; font-weight:500; font-size:clamp(1.4rem, 2.7vw, 2.15rem); line-height:1.4; letter-spacing:-0.015em; color:#fff; margin:0 auto 40px; max-width:900px; }
        .uc3__quote-by { display:inline-flex; align-items:center; gap:16px; }
        .uc3__quote-photo { width:52px; height:52px; border-radius:50%; object-fit:cover; }
        .uc3__quote-meta { text-align:left; }
        .uc3__quote-name { font-size:15px; font-weight:600; color:#fff; }
        .uc3__quote-role { font-size:13.5px; color:rgba(255,255,255,0.55); margin-top:2px; }
        .uc3__quote-logo { height:26px; width:auto; opacity:0.55; margin-left:8px; padding-left:20px; border-left:1px solid rgba(255,255,255,0.15); }

        /* ---- Back ---- */
        .uc3__back { text-align:center; padding:56px 0 88px; }
        .uc3__back a { color:rgba(255,255,255,0.6); text-decoration:none; font-size:14.5px; font-weight:500; display:inline-flex; align-items:center; gap:8px; }
        .uc3__back a:hover { color:#FE552E; }

        .uc3__pad { padding-top:64px; padding-bottom:64px; }

        @media (max-width:860px) {
          .uc3__hero { padding-top:92px; }
          .uc3__metrics { grid-template-columns:repeat(2,1fr); }
          .uc3__metric:nth-child(3) { border-left:0; }
          .uc3__metric:nth-child(n+3) { border-top:1px solid rgba(255,255,255,0.08); }
          .uc3__section { padding:60px 0; }
          .uc3__split { grid-template-columns:1fr; gap:36px; }
          .uc3__facts { gap:28px; }
        }
      `}</style>

      {/* ============ HERO ============ */}
      <header className="uc3__hero">
        <div className="uc3__container">
          <nav className="uc3__crumbs" aria-label="breadcrumb">
            <Link href="/ressources/use-cases">{en ? "Case studies" : "Cas clients"}</Link>
            <span className="sep">/</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>{tx(useCase.category, locale)}</span>
          </nav>

          {logo ? (
            <img className="uc3__client-logo" src={logo} alt={useCase.client?.name || ""} />
          ) : (
            <span className="uc3__eyebrow-badge">{tx(useCase.category, locale)}</span>
          )}

          <h1 className="uc3__title">{tx(useCase.title, locale)}</h1>
          <p className="uc3__deck">{tx(useCase.subtitle, locale)}</p>

          <div className="uc3__tags">
            {tags.map((t, i) => (
              <span className="uc3__tag" key={i}>{t}</span>
            ))}
          </div>
        </div>

        <div className="uc3__container uc3__hero-visual">
          <BrowserFrame url={useCase.hero?.url || "app.view4sight.com"}>
            <Media media={useCase.hero?.media} alt={tx(useCase.title, locale)} />
          </BrowserFrame>
        </div>
      </header>

      {/* ============ LEAD ============ */}
      {useCase.hero?.description && (
        <div className="uc3__container uc3__pad">
          <p className="uc3__lead" dangerouslySetInnerHTML={{ __html: tx(useCase.hero.description, locale) }} />
        </div>
      )}

      {/* ============ METRICS + FACTS ============ */}
      <section className="uc3__stats">
        <div className="uc3__container">
          <div className="uc3__metrics">
            {(useCase.results?.metrics || []).slice(0, 4).map((m, i) => (
              <div className="uc3__metric" key={i}>
                <div className="uc3__metric-num">{m.value}</div>
                <div className="uc3__metric-lbl">{tx(m.label, locale)}</div>
                {m.description && <div className="uc3__metric-sub">{tx(m.description, locale)}</div>}
              </div>
            ))}
          </div>
          {facts.length > 0 && (
            <div className="uc3__facts" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {facts.map((f, i) => (
                <div key={i}>
                  <div className="uc3__fact-lbl">{tx(f.label, locale)}</div>
                  <div className="uc3__fact-val">{tx(f.value, locale)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ CHALLENGE ============ */}
      <section className="uc3__section">
        <div className="uc3__container uc3__prose">
          <span className="uc3__eyebrow">{tx(useCase.challenge.title, locale)}</span>
          {useCase.challenge.headline && <h2 className="uc3__h2">{tx(useCase.challenge.headline, locale)}</h2>}
          <p className="uc3__body">{tx(useCase.challenge.description, locale)}</p>
          {useCase.challenge.points && (
            <ul className="uc3__pains">
              {tx(useCase.challenge.points, locale).map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ============ SOLUTION ============ */}
      <section className="uc3__section uc3__section--alt">
        <div className="uc3__container">
          <div className="uc3__split">
            <div className="uc3__prose">
              <span className="uc3__eyebrow">{tx(useCase.solution.title, locale)}</span>
              {useCase.solution.headline && <h2 className="uc3__h2">{tx(useCase.solution.headline, locale)}</h2>}
              <p className="uc3__body">{tx(useCase.solution.description, locale)}</p>
              <ul className="uc3__features">
                {(useCase.solution.features || []).map((f, i) => (
                  <li className="uc3__feature" key={i}>
                    <span className="uc3__feature-ic" aria-hidden="true">
                      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg>
                    </span>
                    <div>
                      <h3>{tx(f.title, locale)}</h3>
                      <p>{tx(f.description, locale)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <BrowserFrame url={useCase.solution?.url || "app.view4sight.com"}>
                <Media media={useCase.solution?.media} alt={tx(useCase.solution.title, locale)} />
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RESULTS ============ */}
      <section className="uc3__section">
        <div className="uc3__container uc3__prose">
          <span className="uc3__eyebrow">{tx(useCase.results.title, locale)}</span>
          {useCase.results.headline && <h2 className="uc3__h2">{tx(useCase.results.headline, locale)}</h2>}
          {useCase.results.body && <p className="uc3__body">{tx(useCase.results.body, locale)}</p>}
        </div>
        {useCase.results.media && (
          <div className="uc3__container" style={{ marginTop: "48px" }}>
            <BrowserFrame url={useCase.results.url || "app.view4sight.com"}>
              <Media media={useCase.results.media} alt={tx(useCase.results.title, locale)} />
            </BrowserFrame>
          </div>
        )}
      </section>

      {/* ============ QUOTE ============ */}
      <section className="uc3__quote-wrap">
        <div className="uc3__container">
          <span className="uc3__qmark" aria-hidden="true">&rdquo;</span>
          <blockquote className="uc3__quote">{tx(useCase.testimonial.quote, locale)}</blockquote>
          <div className="uc3__quote-by">
            {useCase.testimonial.image && (
              <img className="uc3__quote-photo" src={useCase.testimonial.image} alt={useCase.testimonial.author} />
            )}
            <div className="uc3__quote-meta">
              <div className="uc3__quote-name">{useCase.testimonial.author}</div>
              <div className="uc3__quote-role">
                {tx(useCase.testimonial.role, locale)}, {useCase.testimonial.company}
              </div>
            </div>
            {logo && <img className="uc3__quote-logo" src={logo} alt={useCase.client?.name || ""} />}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CtaFinal />

      <div className="uc3__back">
        <Link href="/ressources/use-cases">
          <i className="unicon-arrow-left" /> {en ? "All case studies" : "Tous les cas clients"}
        </Link>
      </div>
    </article>
  );
}
