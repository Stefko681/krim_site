"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cases, testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight, Star, Clock, Users, AlertTriangle, Mail, Eye } from "lucide-react";

// ── HERO SECTION ──────────────────────────────────────────────────────────
function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Разплети мистерията.";
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setPhase(1), 400);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image with parallax-like overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/hero.png"
          alt="Детективско бюро"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(11,12,16,0.75) 0%, rgba(11,12,16,0.55) 50%, rgba(11,12,16,0.9) 100%)",
          }}
        />
      </div>

      {/* Decorative red string lines */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "-5%",
            width: "40%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(220,20,60,0.4), transparent)",
            transform: "rotate(-8deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "55%",
            right: "-5%",
            width: "35%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(220,20,60,0.3), transparent)",
            transform: "rotate(5deg)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "2rem 1.5rem",
          maxWidth: "850px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(200,169,110,0.3)",
            color: "#C8A96E",
            fontFamily: "'Special Elite', cursive",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            padding: "5px 18px",
            marginBottom: "2rem",
            textTransform: "uppercase",
          }}
        >
          ⬥ Криминални Мистерии & Настолни Игри ⬥
        </div>

        <h1
          style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            lineHeight: 1.15,
            color: "#E8E8E8",
            marginBottom: "0.5rem",
          }}
        >
          {typedText}
          {typedText.length < fullText.length && (
            <span style={{ color: "#C026D3", animation: "blink 1s step-end infinite" }}>|</span>
          )}
        </h1>

        {phase >= 1 && (
          <h2
            style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              color: "#C026D3",
              marginBottom: "2rem",
              animation: "fadeIn 0.8s ease forwards",
            }}
          >
            Ти си Детективът.
          </h2>
        )}

        <p
          style={{
            color: "#C8A96E",
            fontSize: "1.1rem",
            marginBottom: "3rem",
            opacity: phase >= 1 ? 1 : 0,
            transition: "opacity 0.8s ease 0.3s",
            maxWidth: "600px",
            margin: "0 auto 3rem",
          }}
        >
          Досиета, шифри, улики, заподозрени. Разследвай убийства с приятели или колеги. Физически кутии и дигитални версии.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: phase >= 1 ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          <Link
            href="/shop"
            style={{
              background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
              color: "white",
              textDecoration: "none",
              padding: "14px 32px",
              fontFamily: "'Special Elite', cursive",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              transition: "all 0.3s",
              boxShadow: "0 4px 20px rgba(192,38,211,0.4)",
              borderRadius: "3px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(192,38,211,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(192,38,211,0.4)";
            }}
          >
            📂 Разгледай Досиетата
          </Link>
          <Link
            href="/configurator"
            style={{
              background: "transparent",
              color: "#C8A96E",
              textDecoration: "none",
              padding: "14px 32px",
              border: "2px solid #C8A96E",
              fontFamily: "'Special Elite', cursive",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              transition: "all 0.3s",
              borderRadius: "3px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#C8A96E";
              e.currentTarget.style.color = "#0B0C10";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#C8A96E";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            ✏️ Създай Custom Случай
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            color: "#C8A96E",
            opacity: 0.5,
            fontSize: "0.75rem",
            fontFamily: "'Special Elite', cursive",
            letterSpacing: "0.1em",
          }}
        >
          <span>СКРОЛИРАЙ</span>
          <span style={{ animation: "blink 1.5s ease infinite" }}>↓</span>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}

// ── LEAD MAGNET ───────────────────────────────────────────────────────────
function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const riddle = {
    question:
      "Детективът открива тялото в закрита стая. Прозорците са заключени отвътре. Вратата — също. Липсва само едно нещо от масата. Какво е то, ако убиецът е трябвало да излезе?",
    image: "🔍",
    answer:
      "Ключ! Убиецът е използвал восък, за да направи отпечатък на ключа. После е излязъл, заключил вратата отвън и е върнал оригиналния ключ на масата — но СВОЯ ключ е носил у себе си. Стаята е 'заключена', но не е непристъпна.",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setShowAnswer(true), 800);
    }
  };

  return (
    <section
      style={{
        maxWidth: "800px",
        margin: "8rem auto 0",
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1a1108 0%, #1F2833 60%, #1a1108 100%)",
          border: "1px solid rgba(200,169,110,0.25)",
          borderRadius: "8px",
          padding: "3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Paper lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(200,169,110,0.04) 27px, rgba(200,169,110,0.04) 28px)",
            pointerEvents: "none",
          }}
        />

        {/* Classified corner stamp */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            border: "2px solid rgba(220,20,60,0.6)",
            color: "#DC143C",
            fontFamily: "'Special Elite', cursive",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            padding: "2px 8px",
            transform: "rotate(12deg)",
          }}
        >
          ПОВЕРИТЕЛНО
        </div>

        <div style={{ position: "relative", textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🕵️</div>
          <h2
            style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: "#C8A96E",
              marginBottom: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            Тествай Детективския Си Инстинкт
          </h2>

          <div
            style={{
              background: "rgba(11,12,16,0.5)",
              border: "1px solid rgba(200,169,110,0.2)",
              borderRadius: "6px",
              padding: "1.5rem",
              marginBottom: "2rem",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontFamily: "'Courier Prime', monospace",
                color: "#E8E8E8",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: "#C026D3", marginRight: "8px" }}>ЗАГАДКА:</span>
              {riddle.question}
            </p>
          </div>

          {!submitted ? (
            <div>
              <p style={{ color: "#8892A4", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
                Готов с отговора? Въведи имейла си — и виж дали си прав.
              </p>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="твоя.имейл@dosie.bg"
                  required
                  style={{
                    background: "rgba(11,12,16,0.8)",
                    border: "1px solid rgba(200,169,110,0.3)",
                    color: "#E8E8E8",
                    padding: "12px 18px",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    width: "300px",
                    fontFamily: "'Courier Prime', monospace",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
                    color: "white",
                    border: "none",
                    padding: "12px 28px",
                    borderRadius: "4px",
                    fontFamily: "'Special Elite', cursive",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    letterSpacing: "0.05em",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.3s",
                  }}
                >
                  <Eye size={16} />
                  Разкрий Отговора
                </button>
              </form>
              <p style={{ color: "#8892A4", fontSize: "0.75rem", marginTop: "0.75rem" }}>
                📪 Не изпращаме спам. Само нови случаи и загадки.
              </p>
            </div>
          ) : (
            <div style={{ animation: "fadeIn 0.6s ease forwards" }}>
              {showAnswer ? (
                <div
                  style={{
                    background: "rgba(21,128,61,0.1)",
                    border: "1px solid rgba(21,128,61,0.4)",
                    borderRadius: "6px",
                    padding: "1.5rem",
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      color: "#4ade80",
                      fontFamily: "'Special Elite', cursive",
                      fontSize: "1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    ✅ РАЗКРИТО:
                  </p>
                  <p
                    style={{
                      fontFamily: "'Courier Prime', monospace",
                      color: "#E8E8E8",
                      lineHeight: 1.7,
                    }}
                  >
                    {riddle.answer}
                  </p>
                  <p style={{ color: "#C8A96E", marginTop: "1rem", fontSize: "0.9rem" }}>
                    🕵️ Отличен инстинкт! Разгледай пълните ни досиета →{" "}
                    <Link href="/shop" style={{ color: "#C026D3" }}>
                      Магазин
                    </Link>
                  </p>
                </div>
              ) : (
                <p style={{ color: "#C8A96E", fontFamily: "'Special Elite', cursive" }}>
                  Зареждане на секретния файл...
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

// ── FEATURED CASES ────────────────────────────────────────────────────────
function FeaturedCases() {
  const featured = cases.filter((c) => c.isFeatured);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p - 1 + featured.length) % featured.length);
  const next = () => setCurrent((p) => (p + 1) % featured.length);

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "8rem auto 0",
        padding: "0 1.5rem",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div
          style={{
            display: "inline-block",
            color: "#8892A4",
            fontFamily: "'Special Elite', cursive",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          ★ Топ Случаи ★
        </div>
        <h2
          style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#E8E8E8",
          }}
        >
          Избрани Досиета
        </h2>
        <div
          style={{
            height: "2px",
            background: "linear-gradient(90deg, transparent, #C8A96E, transparent)",
            maxWidth: "300px",
            margin: "1rem auto 0",
          }}
        />
      </div>

      {/* Desktop grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
        className="cases-grid"
      >
        {featured.map((c) => (
          <CaseCard key={c.id} c={c} />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="cases-carousel" style={{ display: "none" }}>
        <CaseCard c={featured[current]} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <button
            onClick={prev}
            style={{
              background: "rgba(200,169,110,0.1)",
              border: "1px solid rgba(200,169,110,0.3)",
              color: "#C8A96E",
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <span style={{ color: "#8892A4", alignSelf: "center", fontSize: "0.9rem" }}>
            {current + 1} / {featured.length}
          </span>
          <button
            onClick={next}
            style={{
              background: "rgba(200,169,110,0.1)",
              border: "1px solid rgba(200,169,110,0.3)",
              color: "#C8A96E",
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link
          href="/shop"
          style={{
            color: "#C8A96E",
            textDecoration: "none",
            fontFamily: "'Special Elite', cursive",
            fontSize: "0.95rem",
            letterSpacing: "0.08em",
            border: "1px solid rgba(200,169,110,0.3)",
            padding: "12px 28px",
            borderRadius: "4px",
            display: "inline-block",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#C8A96E";
            e.currentTarget.style.color = "#0B0C10";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#C8A96E";
          }}
        >
          → Виж Всички Досиета
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cases-grid { display: none !important; }
          .cases-carousel { display: block !important; }
        }
      `}</style>
    </section>
  );
}

function CaseCard({ c }: { c: (typeof cases)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "linear-gradient(135deg, #1a1108 0%, #1F2833 100%)",
        border: "1px solid rgba(200,169,110,0.2)",
        borderRadius: "6px",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(192,38,211,0.15)"
          : "0 4px 12px rgba(0,0,0,0.3)",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "1", overflow: "hidden" }}>
        <Image
          src={c.coverImage}
          alt={c.title}
          fill
          style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* TOP SECRET overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(11,12,16,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              border: "4px solid #DC143C",
              color: "#DC143C",
              fontFamily: "'Special Elite', cursive",
              fontSize: "1.8rem",
              letterSpacing: "0.08em",
              padding: "8px 20px",
              transform: "rotate(-15deg)",
              textShadow: "0 0 15px rgba(220,20,60,0.6)",
            }}
          >
            TOP SECRET
          </div>
        </div>
      </div>

      <div style={{ padding: "1.25rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <span
            style={{
              color: "#8892A4",
              fontSize: "0.75rem",
              fontFamily: "'Special Elite', cursive",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {c.crimeType}
          </span>
          <div style={{ display: "flex", gap: "3px" }}>
            {[1, 2, 3, 4, 5].map((d) => (
              <div
                key={d}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: d <= c.difficulty ? "#DC143C" : "rgba(200,169,110,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        <h3
          style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: "1.1rem",
            color: "#E8E8E8",
            marginBottom: "0.4rem",
            lineHeight: 1.3,
          }}
        >
          {c.title}
        </h3>
        <p
          style={{
            color: "#8892A4",
            fontSize: "0.85rem",
            marginBottom: "1rem",
            lineHeight: 1.5,
          }}
        >
          {c.tagline}
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: <Clock size={13} />, label: c.duration },
            { icon: <Users size={13} />, label: c.players + " играчи" },
          ].map((item, i) => (
            <span
              key={i}
              style={{
                color: "#C8A96E",
                fontSize: "0.8rem",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                color: "#C026D3",
                fontFamily: "'Special Elite', cursive",
                fontSize: "1.2rem",
              }}
            >
              от {c.priceDigital} лв
            </span>
          </div>
          <Link
            href={`/shop/${c.slug}`}
            style={{
              background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
              color: "white",
              textDecoration: "none",
              padding: "7px 16px",
              fontFamily: "'Special Elite', cursive",
              fontSize: "0.85rem",
              borderRadius: "3px",
              transition: "all 0.3s",
            }}
          >
            Досие →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── TESTIMONIALS ──────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "8rem auto 0",
        padding: "0 1.5rem",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div
          style={{
            display: "inline-block",
            color: "#8892A4",
            fontFamily: "'Special Elite', cursive",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          ★ Разсекретени Доклади ★
        </div>
        <h2
          style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#E8E8E8",
          }}
        >
          Какво Казват Детективите
        </h2>
        <div
          style={{
            height: "2px",
            background: "linear-gradient(90deg, transparent, #C8A96E, transparent)",
            maxWidth: "300px",
            margin: "1rem auto 0",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            style={{
              background: "linear-gradient(135deg, #1a1108 0%, #1e1b13 100%)",
              border: "1px solid rgba(200,169,110,0.2)",
              borderRadius: "6px",
              padding: "1.75rem",
              position: "relative",
            }}
          >
            {/* Paper lines */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(200,169,110,0.04) 27px, rgba(200,169,110,0.04) 28px)",
                borderRadius: "6px",
                pointerEvents: "none",
              }}
            />
            {t.classified && (
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  border: "2px solid rgba(220,20,60,0.5)",
                  color: "#DC143C",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "0.55rem",
                  letterSpacing: "0.12em",
                  padding: "1px 6px",
                  transform: "rotate(10deg)",
                  opacity: 0.7,
                }}
              >
                РАЗСЕКРЕТЕНО
              </div>
            )}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "rgba(200,169,110,0.15)",
                  position: "absolute",
                  top: "-10px",
                  left: "-5px",
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                }}
              >
                "
              </div>
              <p
                style={{
                  color: "#C8A96E",
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  paddingTop: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                {t.text}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid rgba(200,169,110,0.1)",
                  paddingTop: "1rem",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#E8E8E8",
                      fontFamily: "'Special Elite', cursive",
                      fontSize: "0.9rem",
                    }}
                  >
                    {t.author}
                  </p>
                  <p style={{ color: "#8892A4", fontSize: "0.75rem" }}>
                    {t.caseTitle}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      fill={s <= t.rating ? "#C8A96E" : "none"}
                      color={s <= t.rating ? "#C8A96E" : "#4a4a4a"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── HOW IT WORKS ──────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: "01", icon: "📦", title: "Поръчай Досие", desc: "Избери физическа кутия или PDF за сваляне. Доставка до 2-3 дни." },
    { num: "02", icon: "🔍", title: "Разследвай", desc: "Прочети досиетата, анализирай уликите и разпитай заподозрените." },
    { num: "03", icon: "💡", title: "Ползвай Жокери", desc: "Ако заседнеш — влез в Детективския Портал с кода от кутията." },
    { num: "04", icon: "⚖️", title: "Повдигни Обвинение", desc: "Разкрий убиеца в портала и вземи своята присъда!" },
  ];

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "8rem auto 0",
        padding: "0 1.5rem",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#E8E8E8",
            marginBottom: "0.5rem",
          }}
        >
          Как Работи
        </h2>
        <div
          style={{
            height: "2px",
            background: "linear-gradient(90deg, transparent, #C8A96E, transparent)",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {steps.map((step, i) => (
          <div
            key={step.num}
            style={{
              textAlign: "center",
              padding: "2rem 1.5rem",
              borderTop: `2px solid ${i % 2 === 0 ? "#C026D3" : "#C8A96E"}`,
              background: "rgba(31,40,51,0.3)",
              borderRadius: "0 0 6px 6px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontFamily: "'Special Elite', cursive",
                color: "rgba(200,169,110,0.2)",
                fontSize: "3.5rem",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {step.num}
            </div>
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{step.icon}</div>
            <h3
              style={{
                fontFamily: "'Special Elite', cursive",
                color: "#E8E8E8",
                fontSize: "1.1rem",
                marginBottom: "0.75rem",
              }}
            >
              {step.title}
            </h3>
            <p style={{ color: "#8892A4", fontSize: "0.9rem", lineHeight: 1.6 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CTA BANNER ────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "8rem auto 0",
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, rgba(192,38,211,0.15) 0%, rgba(139,0,0,0.15) 100%)",
          border: "1px solid rgba(192,38,211,0.3)",
          borderRadius: "8px",
          padding: "4rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            border: "2px solid rgba(220,20,60,0.4)",
            color: "#DC143C",
            fontFamily: "'Special Elite', cursive",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            padding: "2px 12px",
            transform: "translateX(-50%) rotate(-1deg)",
          }}
        >
          ТОП СЕКРЕТ
        </div>
        <h2
          style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#E8E8E8",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          Имаш Особена Идея?
        </h2>
        <p style={{ color: "#C8A96E", marginBottom: "2rem", fontSize: "1rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
          Създай напълно персонализиран случай за рожден ден, фирмен тиймбилдинг или незабравима сватба. Жертвата, убиецът, вътрешните шеги — всичко по твоя избор.
        </p>
        <Link
          href="/configurator"
          style={{
            background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
            color: "white",
            textDecoration: "none",
            padding: "14px 36px",
            fontFamily: "'Special Elite', cursive",
            fontSize: "1.1rem",
            letterSpacing: "0.08em",
            borderRadius: "4px",
            display: "inline-block",
            transition: "all 0.3s",
            boxShadow: "0 4px 20px rgba(192,38,211,0.4)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(192,38,211,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(192,38,211,0.4)";
          }}
        >
          ✏️ Конфигурирай Своя Случай
        </Link>
      </div>
    </section>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LeadMagnet />
      <FeaturedCases />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
}
