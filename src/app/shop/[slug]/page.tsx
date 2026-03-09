"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cases } from "@/lib/data";
import { Clock, Users, MapPin, Search, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default function CaseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const c = cases.find((x) => x.slug === slug);

  const [format, setFormat] = useState<"digital" | "physical">("digital");
  const [added, setAdded] = useState(false);

  if (!c) return notFound();

  const price = format === "digital" ? c.priceDigital : c.pricePhysical;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {/* Breadcrumb */}
        <Link
          href="/shop"
          style={{
            color: "#8892A4",
            textDecoration: "none",
            fontSize: "0.85rem",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginBottom: "2rem",
            fontFamily: "'Special Elite', cursive",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A96E"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#8892A4"; }}
        >
          <ChevronLeft size={16} />
          Назад към Досиетата
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="case-detail-grid"
        >
          {/* Left: Image */}
          <div>
            <div
              style={{
                position: "relative",
                aspectRatio: "1",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(200,169,110,0.25)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src={c.coverImage}
                alt={c.title}
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(11,12,16,0.6) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* File/case info card styled as police report */}
            <div
              style={{
                marginTop: "1.5rem",
                background: "linear-gradient(135deg, #1a1108, #1e1b13)",
                border: "1px solid rgba(200,169,110,0.2)",
                borderRadius: "6px",
                padding: "1.5rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(200,169,110,0.04) 27px, rgba(200,169,110,0.04) 28px)",
                  borderRadius: "6px",
                  pointerEvents: "none",
                }}
              />
              <p
                style={{
                  fontFamily: "'Special Elite', cursive",
                  color: "#C8A96E",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                }}
              >
                🗂 РЕЗЮМЕ НА СЛУЧАЯ
              </p>
              {[
                { label: "ЖЕРТВА", value: c.victim },
                { label: "ЛОКАЦИЯ", value: c.location },
                { label: "ЗАПОДОЗРЕНИ", value: `${c.suspects} лица` },
                { label: "КЛАСИФИКАЦИЯ", value: c.crimeType },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid rgba(200,169,110,0.08)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Courier Prime', monospace",
                      color: "#8892A4",
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.label}:
                  </span>
                  <span
                    style={{
                      fontFamily: "'Courier Prime', monospace",
                      color: "#E8E8E8",
                      fontSize: "0.85rem",
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                background: "rgba(192,38,211,0.1)",
                border: "1px solid rgba(192,38,211,0.3)",
                color: "#C026D3",
                fontFamily: "'Special Elite', cursive",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                padding: "4px 14px",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              {c.theme}
            </div>

            <h1
              style={{
                fontFamily: "'Special Elite', cursive",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#E8E8E8",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              {c.title}
            </h1>
            <p
              style={{
                color: "#C8A96E",
                fontSize: "1.1rem",
                fontFamily: "'Special Elite', cursive",
                letterSpacing: "0.04em",
                marginBottom: "1.5rem",
              }}
            >
              {c.tagline}
            </p>

            {/* Indicators */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                padding: "1.25rem",
                background: "rgba(31,40,51,0.5)",
                border: "1px solid rgba(200,169,110,0.15)",
                borderRadius: "6px",
                marginBottom: "1.75rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: <Clock size={18} />, label: "Времетраене", value: c.duration },
                { icon: <Users size={18} />, label: "Играчи", value: c.players },
                { icon: <Search size={18} />, label: "Тежест", value: `${c.difficulty}/5` },
                { icon: <MapPin size={18} />, label: "Локация", value: c.location.split(",")[0] },
              ].map((item) => (
                <div key={item.label} style={{ textAlign: "center", flex: "1", minWidth: "80px" }}>
                  <div style={{ color: "#C026D3", marginBottom: "4px", display: "flex", justifyContent: "center" }}>
                    {item.icon}
                  </div>
                  <div style={{ color: "#8892A4", fontSize: "0.7rem", letterSpacing: "0.08em", fontFamily: "'Special Elite', cursive", textTransform: "uppercase" }}>
                    {item.label}
                  </div>
                  <div style={{ color: "#E8E8E8", fontSize: "0.9rem", fontWeight: 600 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Difficulty */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#8892A4", fontSize: "0.8rem", fontFamily: "'Special Elite', cursive", letterSpacing: "0.1em", marginBottom: "6px" }}>
                НИВО НА ТРУДНОСТ
              </p>
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                {[1, 2, 3, 4, 5].map((d) => (
                  <div
                    key={d}
                    style={{
                      width: "32px",
                      height: "8px",
                      borderRadius: "2px",
                      background: d <= c.difficulty ? "#DC143C" : "rgba(200,169,110,0.15)",
                      boxShadow: d <= c.difficulty ? "0 0 6px rgba(220,20,60,0.4)" : "none",
                      transition: "all 0.2s",
                    }}
                  />
                ))}
                <span style={{ color: "#DC143C", fontSize: "0.85rem", marginLeft: "8px", fontFamily: "'Special Elite', cursive" }}>
                  {c.difficulty === 5 ? "Майсторско" : c.difficulty === 4 ? "Трудно" : c.difficulty === 3 ? "Средно" : "Лесно"}
                </span>
              </div>
            </div>

            <p style={{ color: "#C8A96E", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "2rem", fontFamily: "'Courier Prime', monospace" }}>
              {c.description}
            </p>

            {/* Format selector */}
            <div style={{ marginBottom: "1.75rem" }}>
              <p style={{ color: "#8892A4", fontSize: "0.8rem", fontFamily: "'Special Elite', cursive", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                ФОРМАТ
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {([
                  { key: "digital", label: "📄 Дигитално (PDF)", sub: "Свали веднага" },
                  { key: "physical", label: "📦 Физическа Кутия", sub: "Доставка 2-3 дни" },
                ] as const).map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFormat(f.key as "digital" | "physical")}
                    style={{
                      flex: 1,
                      padding: "14px",
                      background: format === f.key ? "rgba(192,38,211,0.15)" : "rgba(11,12,16,0.5)",
                      border: format === f.key ? "2px solid #C026D3" : "1px solid rgba(200,169,110,0.2)",
                      borderRadius: "6px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{ color: format === f.key ? "#C026D3" : "#E8E8E8", fontFamily: "'Special Elite', cursive", fontSize: "0.9rem", marginBottom: "2px" }}>
                      {f.label}
                    </div>
                    <div style={{ color: "#8892A4", fontSize: "0.75rem" }}>{f.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5rem",
                background: "rgba(31,40,51,0.6)",
                border: "1px solid rgba(200,169,110,0.2)",
                borderRadius: "6px",
              }}
            >
              <div>
                <div style={{ color: "#8892A4", fontSize: "0.75rem", fontFamily: "'Special Elite', cursive", letterSpacing: "0.1em" }}>ЦЕНА</div>
                <div style={{ color: "#C026D3", fontFamily: "'Special Elite', cursive", fontSize: "2rem" }}>
                  {price} лв
                </div>
                {format === "physical" && (
                  <div style={{ color: "#8892A4", fontSize: "0.75rem" }}>+ 5 лв доставка</div>
                )}
              </div>
              <button
                onClick={handleAddToCart}
                style={{
                  background: added ? "linear-gradient(135deg, #15803d, #166534)" : "linear-gradient(135deg, #C026D3, #9b1cb5)",
                  color: "white",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "4px",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "1rem",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  transition: "all 0.3s",
                  boxShadow: added ? "0 4px 20px rgba(21,128,61,0.4)" : "0 4px 20px rgba(192,38,211,0.4)",
                }}
              >
                {added ? "✅ Добавено!" : format === "digital" ? "⚡ Свали Сега" : "🛒 Поръчай Кутия"}
              </button>
            </div>

            {/* Portal hint */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                background: "rgba(139,0,0,0.1)",
                border: "1px solid rgba(220,20,60,0.2)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>🔑</span>
              <p style={{ color: "#8892A4", fontSize: "0.85rem" }}>
                В кутията ще намериш уникален код за достъп до{" "}
                <Link href="/portal" style={{ color: "#DC143C" }}>
                  Детективския Портал
                </Link>
                — за жокери и финално обвинение.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .case-detail-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
