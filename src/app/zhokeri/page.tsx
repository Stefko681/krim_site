"use client";
import { useState } from "react";
import { cases } from "@/lib/data";
import { Lock, Lightbulb, Flashlight, Target, ChevronDown, AlertTriangle, Eye, RotateCcw } from "lucide-react";

type Case = (typeof cases)[0];
type Hint = Case["hints"][0];

export default function ZhokeriPage() {
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [currentCase, setCurrentCase] = useState<Case | null>(null);

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = cases.find(
      (c) => c.portalCode.toUpperCase() === code.toUpperCase().trim()
    );
    if (found) {
      setCurrentCase(found);
      setCodeError(false);
    } else {
      setCodeError(true);
      setTimeout(() => setCodeError(false), 3000);
    }
  };

  const handleReset = () => {
    setCurrentCase(null);
    setCode("");
  };

  if (!currentCase) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 1.5rem 3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `
            radial-gradient(ellipse 60% 50% at 50% 0%, rgba(220,20,60,0.06) 0%, transparent 70%),
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(200,169,110,0.03) 59px, rgba(200,169,110,0.03) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(200,169,110,0.03) 59px, rgba(200,169,110,0.03) 60px)
          `,
        }} />

        <div style={{ maxWidth: "520px", width: "100%", textAlign: "center", position: "relative" }}>
          {/* Icon */}
          <div style={{
            width: "88px", height: "88px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(220,20,60,0.15) 0%, rgba(220,20,60,0.04) 100%)",
            border: "2px solid rgba(220,20,60,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 2rem",
            boxShadow: "0 0 40px rgba(220,20,60,0.15), inset 0 0 30px rgba(220,20,60,0.05)",
            animation: "pulseGlow 3s ease-in-out infinite",
          }}>
            <Lock size={36} color="#DC143C" />
          </div>

          <p style={{
            fontFamily: "'Cinzel Decorative', serif",
            color: "#8892A4", fontSize: "0.72rem", letterSpacing: "0.25em",
            textTransform: "uppercase", marginBottom: "0.75rem",
          }}>
            ⬥ Секретен Архив ⬥
          </p>

          <h1 style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
            color: "#E8E8E8", marginBottom: "1rem",
            textShadow: "0 0 30px rgba(220,20,60,0.2)",
            lineHeight: 1.2,
          }}>
            Жокери за Играта
          </h1>

          <p style={{ color: "#8892A4", marginBottom: "2.5rem", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Въведи секретния код от кутията на твоята игра и получи достъп до
            прогресивните жокери за съответния случай.
          </p>

          {/* Case buttons for quick reference */}
          <div className="zhokeri-cases-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem",
            marginBottom: "2rem",
          }}>
            {cases.map((c) => (
              <div
                key={c.id}
                style={{
                  background: "rgba(31,40,51,0.4)",
                  border: "1px solid rgba(200,169,110,0.12)",
                  borderRadius: "6px", padding: "0.6rem 0.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "0.65rem", color: "#8892A4", fontFamily: "'Cinzel Decorative', serif", letterSpacing: "0.08em", marginBottom: "2px" }}>
                  КОД:
                </div>
                <div style={{ fontSize: "0.78rem", color: "#DC143C", fontFamily: "'Courier Prime', monospace", letterSpacing: "0.12em", fontWeight: "bold" }}>
                  {c.portalCode}
                </div>
                <div style={{ fontSize: "0.68rem", color: "#C8A96E", fontFamily: "'Cinzel Decorative', serif", marginTop: "3px", lineHeight: 1.2 }}>
                  {c.title}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleCodeSubmit}>
            <div style={{ position: "relative", marginBottom: "0.85rem" }}>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="ВЪВЕДИ КОД..."
                maxLength={16}
                style={{
                  width: "100%",
                  background: "rgba(31,40,51,0.85)",
                  border: codeError ? "2px solid #DC143C" : "2px solid rgba(200,169,110,0.25)",
                  color: "#E8E8E8",
                  padding: "16px 20px",
                  borderRadius: "6px",
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: "1.3rem",
                  letterSpacing: "0.2em",
                  textAlign: "center",
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  boxShadow: codeError ? "0 0 20px rgba(220,20,60,0.4)" : "none",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => { if (!codeError) { e.currentTarget.style.borderColor = "rgba(220,20,60,0.5)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(220,20,60,0.1)"; } }}
                onBlur={(e) => { if (!codeError) { e.currentTarget.style.borderColor = "rgba(200,169,110,0.25)"; e.currentTarget.style.boxShadow = "none"; } }}
              />
            </div>

            {codeError && (
              <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center", marginBottom: "0.75rem" }}>
                <AlertTriangle size={14} color="#DC143C" />
                <p style={{
                  color: "#DC143C", fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "0.85rem", animation: "shake 0.4s ease",
                }}>
                  Невалиден код — провери кутията!
                </p>
              </div>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #DC143C, #8B0000)",
                color: "white", border: "none", padding: "15px",
                borderRadius: "5px", fontFamily: "'Cinzel Decorative', serif",
                fontSize: "1rem", cursor: "pointer", letterSpacing: "0.07em",
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "8px", transition: "all 0.3s",
                boxShadow: "0 6px 25px rgba(220,20,60,0.35)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 35px rgba(220,20,60,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 25px rgba(220,20,60,0.35)"; }}
            >
              <Eye size={18} />
              Отключи Жокерите
            </button>
          </form>
        </div>

        <style>{`
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 40px rgba(220,20,60,0.15), inset 0 0 30px rgba(220,20,60,0.05); }
            50% { box-shadow: 0 0 60px rgba(220,20,60,0.3), inset 0 0 30px rgba(220,20,60,0.08); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-5px); }
            80% { transform: translateX(5px); }
          }
        `}</style>
      </div>
    );
  }

  // ── UNLOCKED STATE ─────────────────────────────────────────────────────────
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, rgba(220,20,60,0.07) 0%, transparent 100%)",
        borderBottom: "1px solid rgba(200,169,110,0.12)",
        padding: "2.5rem 1.5rem 2rem",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "rgba(21,128,61,0.1)", border: "1px solid rgba(21,128,61,0.3)",
                borderRadius: "20px", padding: "4px 12px", marginBottom: "0.75rem",
              }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", animation: "blink 1.5s infinite" }} />
                <span style={{ color: "#4ade80", fontSize: "0.72rem", fontFamily: "'Cinzel Decorative', serif", letterSpacing: "0.12em" }}>
                  ДОСТЪП РАЗРЕШЕН
                </span>
              </div>
              <h1 style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
                color: "#E8E8E8", marginBottom: "0.3rem",
              }}>
                {currentCase.title}
              </h1>
              <p style={{ color: "#8892A4", fontSize: "0.85rem", fontFamily: "'Courier Prime', monospace" }}>
                Жертва: {currentCase.victim} · {currentCase.location}
              </p>
            </div>
            <button
              onClick={handleReset}
              style={{
                background: "transparent",
                border: "1px solid rgba(200,169,110,0.2)",
                color: "#8892A4", padding: "8px 16px",
                cursor: "pointer", fontFamily: "'Cinzel Decorative', serif",
                fontSize: "0.8rem", borderRadius: "4px",
                display: "flex", alignItems: "center", gap: "6px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#DC143C"; e.currentTarget.style.color = "#DC143C"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.2)"; e.currentTarget.style.color = "#8892A4"; }}
            >
              <RotateCcw size={13} />
              Смени Игра
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 1.5rem" }}>

        {/* Warning banner */}
        <div style={{
          background: "rgba(220,20,60,0.05)",
          border: "1px solid rgba(220,20,60,0.18)",
          borderRadius: "8px", padding: "1rem 1.25rem",
          marginBottom: "2.5rem",
          display: "flex", gap: "0.85rem", alignItems: "flex-start",
        }}>
          <AlertTriangle size={18} color="#DC143C" style={{ marginTop: "2px", flexShrink: 0 }} />
          <p style={{ color: "#C8A96E", fontSize: "0.88rem", lineHeight: 1.7 }}>
            <strong>Внимание:</strong> Жокерите се разкриват прогресивно — от лека насока до пълен отговор.
            Препоръчваме да кликнете само ако наистина ви трябва помощ, за да не развалите изживяването!
          </p>
        </div>

        {currentCase.hints.length === 0 ? (
          /* No hints configured yet */
          <div style={{
            textAlign: "center", padding: "4rem 2rem",
            background: "rgba(31,40,51,0.3)",
            border: "1px solid rgba(200,169,110,0.1)",
            borderRadius: "8px",
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
            <h2 style={{ fontFamily: "'Cinzel Decorative', serif", color: "#C8A96E", marginBottom: "0.75rem" }}>
              Жокерите се зареждат...
            </h2>
            <p style={{ color: "#8892A4", lineHeight: 1.7 }}>
              Жокерите за тази игра ще бъдат добавени скоро от организаторите. <br />
              Провери отново малко по-късно.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {currentCase.hints.map((hint, i) => (
              <HintCard key={hint.id} hint={hint} index={i + 1} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes revealHint {
          from { opacity: 0; transform: translateY(-8px); max-height: 0; }
          to { opacity: 1; transform: translateY(0); max-height: 300px; }
        }
      `}</style>
    </div>
  );
}

// ── HINT CARD ────────────────────────────────────────────────────────────────
function HintCard({ hint, index }: { hint: Hint; index: number }) {
  const [level, setLevel] = useState(0); // 0 = locked, 1/2/3 = revealed levels

  const levels = [
    {
      label: "💡 Лека Насока",
      text: hint.level1,
      color: "#C8A96E",
      bg: "rgba(200,169,110,0.06)",
      border: "rgba(200,169,110,0.2)",
    },
    {
      label: "🔦 Силен Жокер",
      text: hint.level2,
      color: "#E8A020",
      bg: "rgba(220,120,20,0.06)",
      border: "rgba(220,120,20,0.25)",
    },
    {
      label: "🎯 Директен Отговор",
      text: hint.level3,
      color: "#DC143C",
      bg: "rgba(220,20,60,0.06)",
      border: "rgba(220,20,60,0.25)",
    },
  ];

  const btnLabel = level === 0 ? "Покажи Жокер" : level === 1 ? "По-Силен Жокер" : "Пълен Отговор";

  return (
    <div style={{
      background: "linear-gradient(145deg, #141a1f, #1F2833)",
      border: "1px solid rgba(200,169,110,0.18)",
      borderRadius: "8px", overflow: "hidden",
      transition: "border-color 0.2s",
      boxShadow: level > 0 ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
    }}>
      {/* Question header */}
      <div style={{
        padding: "1.25rem 1.5rem",
        display: "flex", alignItems: "center", gap: "1rem",
        borderBottom: level > 0 ? "1px solid rgba(200,169,110,0.1)" : "none",
      }}>
        {/* Index badge */}
        <div style={{
          minWidth: "34px", height: "34px", borderRadius: "50%",
          background: level > 0 ? "rgba(220,20,60,0.18)" : "rgba(200,169,110,0.08)",
          border: `1px solid ${level > 0 ? "rgba(220,20,60,0.4)" : "rgba(200,169,110,0.2)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: level > 0 ? "#DC143C" : "#C8A96E",
          fontFamily: "'Cinzel Decorative', serif", fontSize: "0.9rem", fontWeight: "bold",
          transition: "all 0.3s",
        }}>
          {index}
        </div>

        <p style={{
          flex: 1, color: "#E8E8E8",
          fontFamily: "'Courier Prime', monospace",
          fontSize: "0.98rem", lineHeight: 1.55,
        }}>
          {hint.question}
        </p>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
          {[0, 1, 2].map((l) => (
            <div key={l} style={{
              width: "9px", height: "9px", borderRadius: "50%",
              background: level > l ? "#DC143C" : "rgba(200,169,110,0.18)",
              transition: "background 0.3s",
              boxShadow: level > l ? "0 0 6px rgba(220,20,60,0.5)" : "none",
            }} />
          ))}
        </div>
      </div>

      {/* Revealed levels */}
      {levels.slice(0, level).map((lv, i) => (
        <div
          key={i}
          style={{
            padding: "0.9rem 1.5rem 0.9rem 4.5rem",
            background: lv.bg,
            borderBottom: i < level - 1 ? "1px solid rgba(200,169,110,0.07)" : "none",
            animation: "revealHint 0.35s ease forwards",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "5px" }}>
            <p style={{
              color: lv.color, fontFamily: "'Cinzel Decorative', serif",
              fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase",
            }}>
              {lv.label}
            </p>
          </div>
          <p style={{
            color: "#D4C5A9", fontFamily: "'Courier Prime', monospace",
            fontSize: "0.92rem", lineHeight: 1.7,
          }}>
            {lv.text}
          </p>
        </div>
      ))}

      {/* Action area */}
      <div style={{ padding: "0.85rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        {level < 3 ? (
          <button
            onClick={() => setLevel((l) => l + 1)}
            style={{
              display: "flex", alignItems: "center", gap: "7px",
              background: "transparent",
              border: `1px solid ${level > 0 ? "rgba(220,20,60,0.3)" : "rgba(200,169,110,0.22)"}`,
              color: level > 0 ? "#DC143C" : "#C8A96E",
              padding: "8px 18px", borderRadius: "4px",
              cursor: "pointer", fontFamily: "'Cinzel Decorative', serif",
              fontSize: "0.82rem", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#DC143C"; e.currentTarget.style.color = "#DC143C"; e.currentTarget.style.background = "rgba(220,20,60,0.06)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = level > 0 ? "rgba(220,20,60,0.3)" : "rgba(200,169,110,0.22)"; e.currentTarget.style.color = level > 0 ? "#DC143C" : "#C8A96E"; e.currentTarget.style.background = "transparent"; }}
          >
            <ChevronDown size={14} />
            {btnLabel}
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80" }} />
            <span style={{ color: "#4ade80", fontFamily: "'Cinzel Decorative', serif", fontSize: "0.78rem" }}>
              Всички жокери разкрити
            </span>
          </div>
        )}

        {level > 0 && (
          <button
            onClick={() => setLevel(0)}
            style={{
              background: "transparent", border: "none",
              color: "#8892A4", cursor: "pointer",
              fontSize: "0.75rem", fontFamily: "'Cinzel Decorative', serif",
              display: "flex", alignItems: "center", gap: "4px",
              transition: "color 0.2s", padding: "4px",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A96E"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#8892A4"; }}
          >
            <RotateCcw size={11} />
            Скрий
          </button>
        )}
      </div>
    </div>
  );
}
