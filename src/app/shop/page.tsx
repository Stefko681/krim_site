"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cases } from "@/lib/data";
import { Clock, Users, Star, Filter } from "lucide-react";

export default function ShopPage() {
  const [difficulty, setDifficulty] = useState(0);
  const [sort, setSort] = useState("featured");

  const filtered = cases
    .filter((c) => difficulty === 0 || c.difficulty === difficulty)
    .sort((a, b) => {
      if (sort === "price-asc") return a.priceDigital - b.priceDigital;
      if (sort === "price-desc") return b.priceDigital - a.priceDigital;
      if (sort === "difficulty") return b.difficulty - a.difficulty;
      return 0;
    });

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(180deg, rgba(31,40,51,0.4) 0%, transparent 100%)",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(200,169,110,0.1)",
        }}
      >
        <div
          style={{
            fontFamily: "'Special Elite', cursive",
            color: "#8892A4",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          ⬥ Секретен Архив ⬥
        </div>
        <h1
          style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#E8E8E8",
            marginBottom: "1rem",
          }}
        >
          Досиетата
        </h1>
        <p style={{ color: "#8892A4", fontSize: "1rem", maxWidth: "550px", margin: "0 auto" }}>
          Всяко досие е уникален криминален случай. Физически кутии с материали или PDF за сваляне.
        </p>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#C8A96E", fontFamily: "'Special Elite', cursive" }}>
            <Filter size={16} />
            Филтри:
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[0, 1, 2, 3, 4, 5].map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                style={{
                  background: difficulty === d ? "rgba(192,38,211,0.2)" : "rgba(31,40,51,0.5)",
                  border: difficulty === d ? "1px solid #C026D3" : "1px solid rgba(200,169,110,0.2)",
                  color: difficulty === d ? "#C026D3" : "#8892A4",
                  padding: "6px 14px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "0.85rem",
                  transition: "all 0.2s",
                }}
              >
                {d === 0 ? "Всички" : `${d}★`}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              marginLeft: "auto",
              background: "rgba(31,40,51,0.8)",
              border: "1px solid rgba(200,169,110,0.2)",
              color: "#C8A96E",
              padding: "6px 12px",
              borderRadius: "4px",
              fontFamily: "'Special Elite', cursive",
              fontSize: "0.85rem",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="featured">Препоръчани</option>
            <option value="price-asc">Цена ↑</option>
            <option value="price-desc">Цена ↓</option>
            <option value="difficulty">Трудност</option>
          </select>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((c) => (
            <ShopCard key={c.id} c={c} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem", color: "#8892A4" }}>
            <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "1.2rem" }}>
              Няма намерени досиета.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ShopCard({ c }: { c: (typeof cases)[0] }) {
  const [hovered, setHovered] = useState(false);
  const [format, setFormat] = useState<"digital" | "physical">("digital");

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
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.4)" : "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
        <Image
          src={c.coverImage}
          alt={c.title}
          fill
          style={{ objectFit: "cover", transition: "transform 0.5s ease", transform: hovered ? "scale(1.05)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(11,12,16,0.65)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          <div
            style={{
              border: "4px solid #DC143C",
              color: "#DC143C",
              fontFamily: "'Special Elite', cursive",
              fontSize: "2rem",
              letterSpacing: "0.06em",
              padding: "8px 20px",
              transform: "rotate(-15deg)",
              textShadow: "0 0 15px rgba(220,20,60,0.5)",
            }}
          >
            TOP SECRET
          </div>
        </div>
        {/* Theme badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: "rgba(11,12,16,0.85)",
            border: "1px solid rgba(200,169,110,0.3)",
            color: "#C8A96E",
            fontFamily: "'Special Elite', cursive",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            padding: "3px 10px",
          }}
        >
          {c.theme.toUpperCase()}
        </div>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <span style={{ color: "#8892A4", fontSize: "0.75rem", fontFamily: "'Special Elite', cursive", letterSpacing: "0.1em" }}>
            {c.crimeType}
          </span>
          <div style={{ display: "flex", gap: "2px" }}>
            {[1, 2, 3, 4, 5].map((d) => (
              <div
                key={d}
                style={{
                  width: "7px",
                  height: "7px",
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
            fontSize: "1.15rem",
            color: "#E8E8E8",
            marginBottom: "0.35rem",
            lineHeight: 1.3,
          }}
        >
          {c.title}
        </h3>
        <p style={{ color: "#8892A4", fontSize: "0.85rem", marginBottom: "1rem" }}>
          {c.tagline}
        </p>

        {/* Quick stats */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          {[
            { icon: <Clock size={12} />, v: c.duration },
            { icon: <Users size={12} />, v: c.players + " играчи" },
          ].map((item, i) => (
            <span key={i} style={{ color: "#C8A96E", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "4px" }}>
              {item.icon} {item.v}
            </span>
          ))}
        </div>

        {/* Format selector */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
          {(["digital", "physical"] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setFormat(fmt)}
              style={{
                flex: 1,
                padding: "7px",
                background: format === fmt ? "rgba(192,38,211,0.2)" : "rgba(11,12,16,0.5)",
                border: format === fmt ? "1px solid #C026D3" : "1px solid rgba(200,169,110,0.2)",
                color: format === fmt ? "#C026D3" : "#8892A4",
                borderRadius: "4px",
                fontFamily: "'Special Elite', cursive",
                fontSize: "0.78rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {fmt === "digital" ? "📄 PDF" : "📦 Кутия"}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ color: "#C026D3", fontFamily: "'Special Elite', cursive", fontSize: "1.3rem" }}>
              {format === "digital" ? c.priceDigital : c.pricePhysical} лв
            </span>
            {format === "physical" && (
              <span style={{ color: "#8892A4", fontSize: "0.75rem", marginLeft: "6px" }}>
                + доставка
              </span>
            )}
          </div>
          <Link
            href={`/shop/${c.slug}`}
            style={{
              background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
              color: "white",
              textDecoration: "none",
              padding: "8px 18px",
              fontFamily: "'Special Elite', cursive",
              fontSize: "0.85rem",
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "all 0.3s",
            }}
          >
            Отвори Досие →
          </Link>
        </div>
      </div>
    </div>
  );
}
