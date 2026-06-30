"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function CtaFinal() {
  const { t } = useTranslation();

  return (
    <div id="cta" className="cta section panel scrollSpysection">
      <div
        style={{
          position: "relative",
          backgroundColor: "#0E0E0F",
          overflow: "hidden",
          paddingTop: "84px",
          paddingBottom: "84px",
        }}
      >
        {/* Diffuse, irregular orange light halo (layered offset blobs) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(1560px, 96vw)",
            height: "560px",
            background: [
              "radial-gradient(38% 58% at 30% 40%, rgba(254,85,46,0.50) 0%, rgba(254,85,46,0) 72%)",
              "radial-gradient(46% 42% at 71% 60%, rgba(255,99,40,0.42) 0%, rgba(255,99,40,0) 70%)",
              "radial-gradient(30% 52% at 55% 24%, rgba(255,120,62,0.34) 0%, rgba(255,120,62,0) 66%)",
              "radial-gradient(40% 50% at 22% 74%, rgba(254,72,38,0.32) 0%, rgba(254,72,38,0) 64%)",
              "radial-gradient(34% 38% at 82% 30%, rgba(255,92,52,0.30) 0%, rgba(255,92,52,0) 62%)",
              "radial-gradient(28% 44% at 88% 68%, rgba(254,85,46,0.26) 0%, rgba(254,85,46,0) 60%)",
            ].join(", "),
            filter: "blur(44px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        {/* Edge fades: dissolve the halo into #0E0E0F at the top/bottom so it
            blends seamlessly with the sections above and below (no hard line) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to bottom, #0E0E0F 0%, rgba(14,14,15,0) 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, #0E0E0F 0%, rgba(14,14,15,0) 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="mx-2 lg:mx-auto max-w-xl rounded-3 overflow-hidden"
            data-anime="onview:-100; targets: >*; translateY: [28, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 150});"
            style={{
              position: "relative",
              backgroundColor: "#FE552E",
              padding: "clamp(34px, 3.4vw, 50px) clamp(24px, 5vw, 56px)",
              boxShadow: "0 18px 60px -28px rgba(254,85,46,0.4)",
            }}
          >
            <div
              className="vstack items-center text-center"
              style={{ gap: "14px", margin: "0 auto" }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#14100E",
                  fontWeight: 700,
                  fontSize: "clamp(27px, 3.4vw, 42px)",
                  lineHeight: 1.12,
                  maxWidth: "880px",
                  letterSpacing: "-0.01em",
                }}
              >
                {t("cta_final.title")}
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "rgba(20,16,14,0.78)",
                  fontSize: "clamp(15px, 1.5vw, 17px)",
                  lineHeight: 1.5,
                  maxWidth: "800px",
                }}
              >
                {t("cta_final.subtitle")}
              </p>
              <div
                className="hstack gap-2 flex-wrap"
                style={{ justifyContent: "center", marginTop: "8px" }}
              >
                <Link
                  href="/sign-up"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "#14100E",
                    color: "#FFFFFF",
                    padding: "12px 26px",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "15px",
                    textDecoration: "none",
                  }}
                >
                  <span>{t("cta_final.cta_primary")}</span>
                </Link>
                <button
                  type="button"
                  onClick={openContactModal}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    color: "#14100E",
                    padding: "10.5px 24px",
                    border: "1.5px solid rgba(20,16,14,0.5)",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "15px",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <span>{t("cta_final.cta_secondary")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
