"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/shop", label: "Досиета" },
    { href: "/configurator", label: "Custom Случай" },
    { href: "/guess", label: "Познай Убиеца" },
    { href: "/zhokeri", label: "Жокери" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(11,12,16,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,169,110,0.15)" : "none",
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <img
            src="/logo.png"
            alt="It's Your Turn лого"
            style={{
              height: "58px",
              width: "auto",
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 2px 8px rgba(220,20,60,0.35))",
              transition: "filter 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLImageElement).style.filter = "drop-shadow(0 4px 16px rgba(220,20,60,0.6))";
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLImageElement).style.filter = "drop-shadow(0 2px 8px rgba(220,20,60,0.35))";
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="desktop-nav"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#C8A96E",
                textDecoration: "none",
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "0.95rem",
                letterSpacing: "0.06em",
                transition: "color 0.2s, text-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#DC143C";
                e.currentTarget.style.textShadow = "0 0 10px rgba(220,20,60,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#C8A96E";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/admin"
            style={{
              color: "#8892A4",
              textDecoration: "none",
              fontSize: "0.8rem",
              borderLeft: "1px solid rgba(200,169,110,0.2)",
              paddingLeft: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "color 0.2s",
              fontFamily: "'Cinzel Decorative', serif",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A96E"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#8892A4"; }}
          >
            <FileText size={14} />
            Архив
          </Link>

          <Link
            href="/shop"
            style={{
              background: "linear-gradient(135deg, #DC143C, #8B0000)",
              color: "white",
              textDecoration: "none",
              padding: "8px 20px",
              borderRadius: "4px",
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(220,20,60,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(220,20,60,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(220,20,60,0.25)";
            }}
          >
            <ShoppingCart size={16} />
            Магазин
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#C8A96E",
            cursor: "pointer",
            display: "none",
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            background: "rgba(11,12,16,0.98)",
            borderTop: "1px solid rgba(200,169,110,0.15)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: "#C8A96E",
                textDecoration: "none",
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "1.1rem",
                letterSpacing: "0.06em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
