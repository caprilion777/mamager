'use client';

import React, { useEffect, useState } from "react";

const COOKIE_KEY = "cookie_consent";

function getConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setConsent(consent: "all" | "essential") {
  localStorage.setItem(
    COOKIE_KEY,
    JSON.stringify({ consent, ts: new Date().toISOString() })
  );
}

const buttonStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  border: "none",
  borderRadius: 999,
  background: "#EB6E8A",
  color: "white",
  cursor: "pointer",
  transition: "all 0.3s ease",
  whiteSpace: "nowrap",
  display: "inline-block",
  padding: "0 20px",
  height: 40,
  minWidth: 100,
  lineHeight: "40px",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 4px 15px rgba(235, 110, 138, 0.3)",
};
const secondaryButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: "#444",
  color: "#fff",
  boxShadow: "none",
};

export default function CookieBanner({ onConsent }: { onConsent?: (consent: "all" | "essential") => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const c = getConsent();
    if (!c) setVisible(true);
  }, []);

  const handleChoice = (consent: "all" | "essential") => {
    setConsent(consent);
    setVisible(false);
    onConsent?.(consent);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#222",
        color: "#fff",
        padding: 16,
        fontSize: 16,
        zIndex: 1000,
        boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 70,
        height: "auto",
      }}
    >
      <style>{`
        @media (max-width: 600px) {
          .cookie-banner-inner {
            flex-direction: column !important;
            align-items: stretch !important;
            min-height: 100px !important;
            gap: 12px !important;
            text-align: left !important;
          }
          .cookie-banner-message {
            margin-bottom: 0 !important;
            text-align: left !important;
          }
          .cookie-banner-buttons {
            flex-direction: column !important;
            gap: 8px !important;
            width: 100% !important;
          }
        }
      `}</style>
      <div
        className="cookie-banner-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: 900,
          gap: 24,
        }}
      >
        <span className="cookie-banner-message" style={{ flex: 1, marginRight: 16 }}>
          We use cookies to improve your experience. See our{' '}
          <a
            href="/cookies"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#EB6E8A", textDecoration: "underline" }}
          >
            Cookie Policy
          </a>.
        </span>
        <div className="cookie-banner-buttons" style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => handleChoice("all")}
            style={buttonStyle}
          >
            Accept all
          </button>
          <button
            onClick={() => handleChoice("essential")}
            style={secondaryButtonStyle}
          >
            Only essential
          </button>
        </div>
      </div>
    </div>
  );
}
