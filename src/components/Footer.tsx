"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0B0C10",
        borderTop: "1px solid rgba(200,169,110,0.15)",
        padding: "4rem 1.5rem 2rem",
        marginTop: "6rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: "2rem",
              color: "#C026D3",
              letterSpacing: "0.12em",
              marginBottom: "1rem",
              textShadow: "0 0 15px rgba(192,38,211,0.4)",
            }}
          >
            ДОСИЕ
          </div>
          <p style={{ color: "#8892A4", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "260px" }}>
            Потопете се в света на криминалните мистерии. Всеки случай е ново разследване.
          </p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
            {["📸", "🎭", "💬"].map((icon, i) => (
              <span
                key={i}
                style={{
                  width: "38px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(200,169,110,0.25)",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              fontFamily: "'Special Elite', cursive",
              color: "#C8A96E",
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Навигация
          </h4>
          {[
            { href: "/shop", label: "Магазин — Досиета" },
            { href: "/configurator", label: "Custom Случай" },
            { href: "/portal", label: "Детективски Портал" },
            { href: "/admin", label: "Администрация" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                color: "#8892A4",
                textDecoration: "none",
                fontSize: "0.9rem",
                marginBottom: "0.75rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A96E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#8892A4"; }}
            >
              → {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: "'Special Elite', cursive",
              color: "#C8A96E",
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Контакт
          </h4>
          <p style={{ color: "#8892A4", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            📧kriminnal2@gmail.com
          </p>
          <p style={{ color: "#8892A4", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            📱 +359 88 764 9359
          </p>
          <p style={{ color: "#8892A4", fontSize: "0.9rem" }}>
            📍 София, България
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem",
              border: "1px solid rgba(200,169,110,0.2)",
              borderRadius: "4px",
              backgroundColor: "rgba(31,40,51,0.5)",
            }}
          >
            <p style={{ color: "#C8A96E", fontSize: "0.8rem", fontFamily: "'Special Elite', cursive" }}>
              🕐 Отговаряме в рамките на 24 часа
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(200,169,110,0.1)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            color: "#8892A4",
            fontSize: "0.8rem",
            fontFamily: "'Special Elite', cursive",
          }}
        >
          © 2025 ДОСИЕ. Всички права запазени.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <span
            style={{
              border: "2px solid rgba(220,20,60,0.5)",
              color: "#DC143C",
              fontFamily: "'Special Elite', cursive",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              padding: "1px 8px",
              transform: "rotate(-3deg)",
              display: "inline-block",
            }}
          >
            ПОВЕРИТЕЛНО
          </span>
        </div>
      </div>
    </footer>
  );
}
