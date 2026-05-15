"use client";
import { useState } from "react";

export function ClientFormatSelector({ priceDigital, pricePhysical }: { priceDigital: number, pricePhysical: number }) {
  const [format, setFormat] = useState<"digital" | "physical">("digital");
  const [added, setAdded] = useState(false);
  
  const price = format === "digital" ? priceDigital : pricePhysical;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <div style={{ marginBottom: "1.75rem" }}>
        <p style={{ color: "#8892A4", fontSize: "0.8rem", fontFamily: "'Cinzel Decorative', serif", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
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
                background: format === f.key ? "rgba(220,20,60,0.1)" : "rgba(11,12,16,0.5)",
                border: format === f.key ? "2px solid #DC143C" : "1px solid rgba(200,169,110,0.2)",
                borderRadius: "6px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
              }}
            >
              <div style={{ color: format === f.key ? "#DC143C" : "#E8E8E8", fontFamily: "'Cinzel Decorative', serif", fontSize: "0.9rem", marginBottom: "2px" }}>
                {f.label}
              </div>
              <div style={{ color: "#8892A4", fontSize: "0.75rem" }}>{f.sub}</div>
            </button>
          ))}
        </div>
      </div>

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
          <div style={{ color: "#8892A4", fontSize: "0.75rem", fontFamily: "'Cinzel Decorative', serif", letterSpacing: "0.1em" }}>ЦЕНА</div>
          <div style={{ color: "#DC143C", fontFamily: "'Cinzel Decorative', serif", fontSize: "2rem" }}>
            {price} лв
          </div>
          {format === "physical" && (
            <div style={{ color: "#8892A4", fontSize: "0.75rem" }}>+ 5 лв доставка</div>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          style={{
            background: added ? "linear-gradient(135deg, #15803d, #166534)" : "linear-gradient(135deg, #DC143C, #8B0000)",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "4px",
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "1rem",
            cursor: "pointer",
            letterSpacing: "0.05em",
            transition: "all 0.3s",
            boxShadow: added ? "0 4px 20px rgba(21,128,61,0.4)" : "0 4px 20px rgba(220,20,60,0.35)",
          }}
        >
          {added ? "✅ Добавено!" : format === "digital" ? "⚡ Свали Сега" : "🛒 Поръчай Кутия"}
        </button>
      </div>
    </>
  );
}
