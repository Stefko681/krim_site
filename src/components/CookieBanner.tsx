"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const pathname = usePathname();
  const isPolicyPage = pathname === "/privacy" || pathname === "/cookies";

  useEffect(() => {
    const consent = localStorage.getItem("dosie_cookie_consent");
    if (!consent) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: "1.0",
    };
    localStorage.setItem("dosie_cookie_consent", JSON.stringify(consent));
    setVisible(false);
  };

  const acceptSelected = () => {
    const consent = {
      ...prefs,
      timestamp: new Date().toISOString(),
      version: "1.0",
    };
    localStorage.setItem("dosie_cookie_consent", JSON.stringify(consent));
    setVisible(false);
  };

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: "1.0",
    };
    localStorage.setItem("dosie_cookie_consent", JSON.stringify(consent));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop — hidden on policy pages so user can read them */}
      {!isPolicyPage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 99998,
            backdropFilter: "blur(2px)",
          }}
        />
      )}

      {/* Banner */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          backgroundColor: "#0f1015",
          borderTop: "2px solid rgba(200,169,110,0.4)",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.8), 0 -2px 0 rgba(220,20,60,0.3)",
          animation: "slideUpBanner 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem 1.5rem",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {/* Classified stamp decoration */}
              <div
                style={{
                  border: "2px solid #DC143C",
                  color: "#DC143C",
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.18em",
                  padding: "3px 8px",
                  transform: "rotate(-8deg)",
                  flexShrink: 0,
                  opacity: 0.9,
                  textShadow: "0 0 8px rgba(220,20,60,0.4)",
                  whiteSpace: "nowrap",
                }}
              >
                ФАЙЛ №001
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  color: "#C8A96E",
                  fontSize: "1.1rem",
                  letterSpacing: "0.08em",
                  margin: 0,
                }}
              >
                Досие: Бисквитки
              </h2>
            </div>
            <button
              onClick={rejectAll}
              style={{
                background: "none",
                border: "none",
                color: "#8892A4",
                cursor: "pointer",
                fontSize: "1.2rem",
                padding: "0.25rem",
                lineHeight: 1,
                flexShrink: 0,
              }}
              title="Затвори"
            >
              ✕
            </button>
          </div>

          {/* Description */}
          <p
            style={{
              color: "#A0A8B4",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
              maxWidth: "820px",
            }}
          >
            Използваме бисквитки, за да гарантираме правилното функциониране на сайта и да подобрим
            вашето преживяване. Задължителните бисквитки са необходими за работата на сайта.
            Можете да управлявате предпочитанията си или да научите повече в нашата{" "}
            <Link
              href="/cookies"
              style={{ color: "#C8A96E", textDecoration: "underline" }}
            >
              Политика за бисквитки
            </Link>{" "}
            и{" "}
            <Link
              href="/privacy"
              style={{ color: "#C8A96E", textDecoration: "underline" }}
            >
              Политика за поверителност
            </Link>
            .
          </p>

          {/* Expandable details */}
          {showDetails && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.75rem",
                marginBottom: "1.25rem",
                padding: "1.25rem",
                backgroundColor: "rgba(31,40,51,0.6)",
                border: "1px solid rgba(200,169,110,0.15)",
                borderRadius: "6px",
              }}
            >
              {/* Necessary */}
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  cursor: "default",
                }}
              >
                <div style={{ position: "relative", flexShrink: 0, marginTop: "2px" }}>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    style={{ accentColor: "#C8A96E", width: 16, height: 16 }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      color: "#C8A96E",
                      fontSize: "0.8rem",
                      fontFamily: "'Cinzel Decorative', serif",
                      letterSpacing: "0.06em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Задължителни
                  </div>
                  <div style={{ color: "#8892A4", fontSize: "0.78rem", lineHeight: 1.5 }}>
                    Необходими за функционирането на сайта. Не могат да бъдат изключени.
                  </div>
                </div>
              </label>

              {/* Analytics */}
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) =>
                    setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                  }
                  style={{ accentColor: "#DC143C", width: 16, height: 16, marginTop: 2, flexShrink: 0 }}
                />
                <div>
                  <div
                    style={{
                      color: "#C8A96E",
                      fontSize: "0.8rem",
                      fontFamily: "'Cinzel Decorative', serif",
                      letterSpacing: "0.06em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Аналитични
                  </div>
                  <div style={{ color: "#8892A4", fontSize: "0.78rem", lineHeight: 1.5 }}>
                    Помагат ни да разберем как посетителите използват сайта (Google Analytics).
                  </div>
                </div>
              </label>

              {/* Marketing */}
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) =>
                    setPrefs((p) => ({ ...p, marketing: e.target.checked }))
                  }
                  style={{ accentColor: "#DC143C", width: 16, height: 16, marginTop: 2, flexShrink: 0 }}
                />
                <div>
                  <div
                    style={{
                      color: "#C8A96E",
                      fontSize: "0.8rem",
                      fontFamily: "'Cinzel Decorative', serif",
                      letterSpacing: "0.06em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Маркетингови
                  </div>
                  <div style={{ color: "#8892A4", fontSize: "0.78rem", lineHeight: 1.5 }}>
                    За показване на персонализирани реклами в социалните мрежи.
                  </div>
                </div>
              </label>
            </div>
          )}

          {/* Actions */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <button
              onClick={acceptAll}
              style={{
                background: "linear-gradient(135deg, #DC143C 0%, #8B0000 100%)",
                color: "white",
                border: "none",
                padding: "0.7rem 1.8rem",
                cursor: "pointer",
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                borderRadius: "3px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(220,20,60,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.target as HTMLButtonElement).style.boxShadow = "0 8px 25px rgba(220,20,60,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                (e.target as HTMLButtonElement).style.boxShadow = "0 4px 15px rgba(220,20,60,0.3)";
              }}
            >
              ✓ Приемам всички
            </button>

            {showDetails ? (
              <button
                onClick={acceptSelected}
                style={{
                  background: "transparent",
                  color: "#C8A96E",
                  border: "1px solid rgba(200,169,110,0.5)",
                  padding: "0.7rem 1.8rem",
                  cursor: "pointer",
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  borderRadius: "3px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "rgba(200,169,110,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
                }}
              >
                Запази избраните
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                style={{
                  background: "transparent",
                  color: "#C8A96E",
                  border: "1px solid rgba(200,169,110,0.5)",
                  padding: "0.7rem 1.8rem",
                  cursor: "pointer",
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  borderRadius: "3px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "rgba(200,169,110,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
                }}
              >
                ⚙ Управление
              </button>
            )}

            <button
              onClick={rejectAll}
              style={{
                background: "none",
                border: "none",
                color: "#8892A4",
                cursor: "pointer",
                fontSize: "0.82rem",
                fontFamily: "'IBM Plex Mono', monospace",
                textDecoration: "underline",
                padding: "0.5rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.color = "#E8E8E8";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.color = "#8892A4";
              }}
            >
              Само задължителните
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUpBanner {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}
