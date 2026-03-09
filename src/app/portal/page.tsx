"use client";
import { useState } from "react";
import { cases } from "@/lib/data";
import { Lock, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Eye } from "lucide-react";

export default function PortalPage() {
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [currentCase, setCurrentCase] = useState<(typeof cases)[0] | null>(null);
  const [activeTab, setActiveTab] = useState<"hints" | "accuse">("hints");

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

  if (!currentCase) {
    return (
      <div
        style={{
          paddingTop: "100px",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 1.5rem 3rem",
        }}
      >
        <div style={{ maxWidth: "500px", width: "100%", textAlign: "center" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "rgba(192,38,211,0.1)",
              border: "2px solid rgba(192,38,211,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}
          >
            <Lock size={32} color="#C026D3" />
          </div>

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
            ⬥ Ограничен Достъп ⬥
          </div>
          <h1
            style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: "2.2rem",
              color: "#E8E8E8",
              marginBottom: "1rem",
            }}
          >
            Детективски Портал
          </h1>
          <p style={{ color: "#8892A4", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Намери уникалния код в кутията на играта и го въведи по-долу за достъп до жокерите и финалното обвинение.
          </p>

          <form onSubmit={handleCodeSubmit}>
            <div style={{ position: "relative", marginBottom: "1rem" }}>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="XXXX0000"
                maxLength={12}
                style={{
                  width: "100%",
                  background: "rgba(31,40,51,0.8)",
                  border: codeError ? "2px solid #DC143C" : "2px solid rgba(200,169,110,0.25)",
                  color: "#E8E8E8",
                  padding: "16px 20px",
                  borderRadius: "6px",
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: "1.3rem",
                  letterSpacing: "0.2em",
                  textAlign: "center",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxShadow: codeError ? "0 0 15px rgba(220,20,60,0.3)" : "none",
                }}
                onFocus={(e) => { if (!codeError) e.currentTarget.style.borderColor = "#C026D3"; }}
                onBlur={(e) => { if (!codeError) e.currentTarget.style.borderColor = "rgba(200,169,110,0.25)"; }}
              />
            </div>
            {codeError && (
              <p
                style={{
                  color: "#DC143C",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                  animation: "shake 0.3s ease",
                }}
              >
                ✗ Невалиден код. Провери кутията отново.
              </p>
            )}
            <button
              type="submit"
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: "4px",
                fontFamily: "'Special Elite', cursive",
                fontSize: "1.05rem",
                cursor: "pointer",
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.3s",
                boxShadow: "0 4px 20px rgba(192,38,211,0.35)",
              }}
            >
              <Eye size={18} />
              Влез в Архива
            </button>
          </form>

          <p style={{ color: "#8892A4", fontSize: "0.78rem", marginTop: "1.5rem" }}>
            💡 Demo код: <span style={{ color: "#C026D3", fontFamily: "'Courier Prime', monospace" }}>KRIM2024</span> (Убийството в Мансардата)
          </p>
        </div>

        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-8px); }
            75% { transform: translateX(8px); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(180deg, rgba(31,40,51,0.4) 0%, transparent 100%)",
          padding: "3rem 1.5rem 2rem",
          borderBottom: "1px solid rgba(200,169,110,0.1)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "#8892A4", fontFamily: "'Special Elite', cursive", fontSize: "0.75rem", letterSpacing: "0.15em", marginBottom: "0.4rem" }}>
                🔓 ДОСТЪП РАЗРЕШЕН — ДОСИЕ #{currentCase.id.padStart(4, "0")}
              </p>
              <h1
                style={{
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  color: "#E8E8E8",
                }}
              >
                {currentCase.title}
              </h1>
            </div>
            <button
              onClick={() => { setCurrentCase(null); setCode(""); }}
              style={{
                background: "transparent",
                border: "1px solid rgba(200,169,110,0.2)",
                color: "#8892A4",
                padding: "8px 14px",
                cursor: "pointer",
                fontFamily: "'Special Elite', cursive",
                fontSize: "0.8rem",
                borderRadius: "4px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#DC143C"; e.currentTarget.style.color = "#DC143C"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.2)"; e.currentTarget.style.color = "#8892A4"; }}
            >
              🔒 Излез
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "2rem" }}>
            {(["hints", "accuse"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "9px 22px",
                  background: activeTab === tab ? "rgba(192,38,211,0.15)" : "transparent",
                  border: activeTab === tab ? "1px solid #C026D3" : "1px solid rgba(200,169,110,0.2)",
                  color: activeTab === tab ? "#C026D3" : "#8892A4",
                  cursor: "pointer",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "0.9rem",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                  letterSpacing: "0.04em",
                }}
              >
                {tab === "hints" ? "🗂 Секретен Архив (Жокери)" : "⚖️ Повдигни Обвинение"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {activeTab === "hints" && <HintsSection hints={currentCase.hints} />}
        {activeTab === "accuse" && (
          <AccuseSection case_={currentCase} />
        )}
      </div>
    </div>
  );
}

// ── HINTS ─────────────────────────────────────────────────────────────────
function HintsSection({ hints }: { hints: (typeof cases)[0]["hints"] }) {
  return (
    <div>
      <div
        style={{
          background: "rgba(220,20,60,0.05)",
          border: "1px solid rgba(220,20,60,0.15)",
          borderRadius: "6px",
          padding: "1rem 1.25rem",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "flex-start",
          gap: "0.75rem",
        }}
      >
        <AlertTriangle size={18} color="#DC143C" style={{ marginTop: "2px", flexShrink: 0 }} />
        <p style={{ color: "#C8A96E", fontSize: "0.88rem", lineHeight: 1.6 }}>
          <strong>Внимание:</strong> Жокерите се разкриват прогресивно. Всяко кликване дава по-конкретна насока. Избягвай да кликваш наведнъж, за да не развалиш изживяването!
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {hints.map((hint, i) => (
          <HintAccordion key={hint.id} hint={hint} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

function HintAccordion({
  hint,
  index,
}: {
  hint: (typeof cases)[0]["hints"][0];
  index: number;
}) {
  const [level, setLevel] = useState(0);

  const levels = [
    { label: "💡 Лека Насока", text: hint.level1, color: "#C8A96E" },
    { label: "🔦 Силен Жокер", text: hint.level2, color: "#C026D3" },
    { label: "🎯 Директен Отговор", text: hint.level3, color: "#DC143C" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1a1108, #1F2833)",
        border: "1px solid rgba(200,169,110,0.2)",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      {/* Question row */}
      <div
        style={{
          padding: "1.25rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          borderBottom: level > 0 ? "1px solid rgba(200,169,110,0.1)" : "none",
        }}
      >
        <div
          style={{
            minWidth: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "rgba(220,20,60,0.15)",
            border: "1px solid rgba(220,20,60,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#DC143C",
            fontFamily: "'Special Elite', cursive",
            fontSize: "0.85rem",
          }}
        >
          {index}
        </div>
        <p
          style={{
            flex: 1,
            color: "#E8E8E8",
            fontFamily: "'Courier Prime', monospace",
            fontSize: "0.95rem",
            lineHeight: 1.5,
          }}
        >
          {hint.question}
        </p>
        <div style={{ display: "flex", gap: "3px" }}>
          {[0, 1, 2].map((l) => (
            <div
              key={l}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: level > l ? "#C026D3" : "rgba(200,169,110,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Revealed levels */}
      {levels.slice(0, level).map((lv, i) => (
        <div
          key={i}
          style={{
            padding: "1rem 1.5rem 1rem 3.5rem",
            borderBottom: i < level - 1 ? "1px solid rgba(200,169,110,0.06)" : "none",
            animation: "fadeInHint 0.3s ease",
          }}
        >
          <p style={{ color: lv.color, fontFamily: "'Special Elite', cursive", fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "4px" }}>
            {lv.label}
          </p>
          <p style={{ color: "#C8A96E", fontFamily: "'Courier Prime', monospace", fontSize: "0.9rem", lineHeight: 1.6 }}>
            {lv.text}
          </p>
        </div>
      ))}

      {/* CTA button */}
      {level < 3 && (
        <div style={{ padding: "1rem 1.5rem" }}>
          <button
            onClick={() => setLevel((l) => l + 1)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "transparent",
              border: "1px solid rgba(200,169,110,0.25)",
              color: "#C8A96E",
              padding: "8px 18px",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "'Special Elite', cursive",
              fontSize: "0.85rem",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C026D3";
              e.currentTarget.style.color = "#C026D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,169,110,0.25)";
              e.currentTarget.style.color = "#C8A96E";
            }}
          >
            <ChevronDown size={15} />
            {level === 0 ? "Покажи Жокер" : level === 1 ? "Нужен Mi По-Силен Жокер" : "Покажи Отговора"}
          </button>
        </div>
      )}
      {level === 3 && (
        <div style={{ padding: "0.75rem 1.5rem", borderTop: "1px solid rgba(200,169,110,0.08)" }}>
          <p style={{ color: "#15803d", fontFamily: "'Special Elite', cursive", fontSize: "0.8rem" }}>
            ✅ Всички жокери са разкрити
          </p>
        </div>
      )}

      <style>{`
        @keyframes fadeInHint {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 200px; }
        }
      `}</style>
    </div>
  );
}

// ── ACCUSATION ────────────────────────────────────────────────────────────
function AccuseSection({ case_ }: { case_: (typeof cases)[0] }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [killer, setKiller] = useState("");
  const [motive, setMotive] = useState("");
  const [result, setResult] = useState<"idle" | "wrong" | "correct">("idle");

  const suspectList = case_.hints.length > 0
    ? ["Борис Велев", "Виктория Стоева", "Атанас Велев", "Никола Петров", "Мария Грозева", "Стефан Цонев"]
    : [];

  const motiveList = ["Наследство", "Корпоративен шпионаж", "Ревност", "Отмъщение", "Застрахователна измама", "Самозащита"];

  const handleSubmit = () => {
    const correct =
      killer.trim().toLowerCase() === case_.solution.killer.toLowerCase() &&
      motive.trim().toLowerCase() === case_.solution.motive.toLowerCase();
    setResult(correct ? "correct" : "wrong");
  };

  if (result === "wrong") {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <div
          style={{
            display: "inline-block",
            border: "5px solid #DC143C",
            color: "#DC143C",
            fontFamily: "'Special Elite', cursive",
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            letterSpacing: "0.08em",
            padding: "16px 40px",
            transform: "rotate(-5deg)",
            marginBottom: "2rem",
            textShadow: "0 0 20px rgba(220,20,60,0.5)",
            animation: "stampIn 0.5s cubic-bezier(0.36,0.07,0.19,0.97) forwards",
            boxShadow: "0 0 30px rgba(220,20,60,0.3), inset 0 0 30px rgba(0,0,0,0.5)",
            lineHeight: 1.2,
          }}
        >
          ОТХВЪРЛЕНО
          <br />
          <span style={{ fontSize: "0.6em", display: "block" }}>ГРЕШЕН ЗАПОДОЗРЯН</span>
        </div>
        <p
          style={{
            color: "#C8A96E",
            fontFamily: "'Special Elite', cursive",
            fontSize: "1.1rem",
            marginBottom: "1rem",
          }}
        >
          Шефът на полицията не е доволен.
        </p>
        <p style={{ color: "#8892A4", marginBottom: "2rem", lineHeight: 1.7 }}>
          Прегледайте отново алибитата и помислете за мотивите. Случаят остава открит.
        </p>
        <button
          onClick={() => { setResult("idle"); setStep(1); setKiller(""); setMotive(""); }}
          style={{
            background: "transparent",
            border: "2px solid rgba(200,169,110,0.3)",
            color: "#C8A96E",
            padding: "12px 28px",
            borderRadius: "4px",
            cursor: "pointer",
            fontFamily: "'Special Elite', cursive",
            fontSize: "0.95rem",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(200,169,110,0.1)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
        >
          🔍 Опитай Отново
        </button>
        <style>{`
          @keyframes stampIn {
            0% { transform: scale(3) rotate(-12deg); opacity: 0; }
            70% { transform: scale(0.9) rotate(-6deg); opacity: 1; }
            100% { transform: scale(1) rotate(-5deg); opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  if (result === "correct") {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <div
          style={{
            display: "inline-block",
            border: "5px solid #15803d",
            color: "#4ade80",
            fontFamily: "'Special Elite', cursive",
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            letterSpacing: "0.08em",
            padding: "16px 40px",
            transform: "rotate(-3deg)",
            marginBottom: "2rem",
            textShadow: "0 0 20px rgba(21,128,61,0.5)",
            animation: "caseClosedAnim 0.5s cubic-bezier(0.36,0.07,0.19,0.97) forwards",
            boxShadow: "0 0 30px rgba(21,128,61,0.4), inset 0 0 30px rgba(0,0,0,0.5)",
            lineHeight: 1.2,
          }}
        >
          СЛУЧАЯТ
          <br />
          <span style={{ fontSize: "0.9em" }}>Е ЗАКРИТ</span>
        </div>

        <p style={{ color: "#4ade80", fontFamily: "'Special Elite', cursive", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
          🎉 Брилянтно! Ти разкри убиеца!
        </p>
        <p style={{ color: "#8892A4", marginBottom: "2rem" }}>
          Убиецът: <strong style={{ color: "#E8E8E8" }}>{case_.solution.killer}</strong> | Мотив:{" "}
          <strong style={{ color: "#E8E8E8" }}>{case_.solution.motive}</strong>
        </p>

        {/* Confession */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a1108, #1F2833)",
            border: "1px solid rgba(21,128,61,0.3)",
            borderRadius: "8px",
            padding: "2rem",
            textAlign: "left",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            animation: "fadeIn 0.8s ease 0.5s both",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(200,169,110,0.04) 27px, rgba(200,169,110,0.04) 28px)",
              borderRadius: "8px",
              pointerEvents: "none",
            }}
          />
          <p style={{ color: "#C8A96E", fontFamily: "'Special Elite', cursive", fontSize: "0.78rem", letterSpacing: "0.12em", marginBottom: "1rem" }}>
            🎙 САМОПРИЗНАНИЕ — ПОВЕРИТЕЛНО
          </p>
          <p
            style={{
              color: "#C8A96E",
              fontFamily: "'Courier Prime', monospace",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            "{case_.confessionText}"
          </p>
          <p style={{ color: "#8892A4", fontSize: "0.78rem", marginTop: "1rem" }}>
            — {case_.solution.killer}
          </p>
        </div>

        <a
          href="/shop"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
            color: "white",
            textDecoration: "none",
            padding: "12px 28px",
            borderRadius: "4px",
            fontFamily: "'Special Elite', cursive",
            fontSize: "1rem",
          }}
        >
          📂 Разгледай Следващото Досие
        </a>

        <style>{`
          @keyframes caseClosedAnim {
            0% { transform: scale(3) rotate(-10deg); opacity: 0; }
            70% { transform: scale(0.95) rotate(-4deg); opacity: 1; }
            100% { transform: scale(1) rotate(-3deg); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px" }}>
      <h2
        style={{
          fontFamily: "'Special Elite', cursive",
          color: "#E8E8E8",
          fontSize: "1.5rem",
          marginBottom: "0.5rem",
        }}
      >
        Повдигни Обвинение
      </h2>
      <p style={{ color: "#8892A4", marginBottom: "2rem", lineHeight: 1.6 }}>
        Идентифицирай убиеца и мотива. Имаш само един шанс — помисли внимателно!
      </p>

      <div
        style={{
          background: "rgba(220,20,60,0.05)",
          border: "1px solid rgba(220,20,60,0.15)",
          borderRadius: "6px",
          padding: "1rem 1.25rem",
          marginBottom: "2rem",
          display: "flex",
          gap: "0.75rem",
          alignItems: "flex-start",
        }}
      >
        <AlertTriangle size={16} color="#DC143C" style={{ marginTop: "2px", flexShrink: 0 }} />
        <p style={{ color: "#8892A4", fontSize: "0.85rem" }}>
          Веднъж изпратена, заявката не може да бъде оттеглена. Убеди се в избора си!
        </p>
      </div>

      {/* Form */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
        <div>
          <label
            style={{
              display: "block",
              color: "#C8A96E",
              fontFamily: "'Special Elite', cursive",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            Кой е Убиецът?
          </label>
          <select
            value={killer}
            onChange={(e) => setKiller(e.target.value)}
            style={{
              width: "100%",
              background: "rgba(31,40,51,0.8)",
              border: "1px solid rgba(200,169,110,0.25)",
              color: killer ? "#E8E8E8" : "#8892A4",
              padding: "14px 16px",
              borderRadius: "6px",
              fontFamily: "'Courier Prime', monospace",
              fontSize: "0.95rem",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="">— Избери Заподозрян —</option>
            {case_.hints.length > 0 && [
              case_.solution.killer,
              "Виктория Стоева",
              "Атанас Велев",
              "Никола Петров",
              "Мария Грозева",
            ]
              .sort(() => Math.random() - 0.5)
              .map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label
            style={{
              display: "block",
              color: "#C8A96E",
              fontFamily: "'Special Elite', cursive",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            Какъв е Мотивът?
          </label>
          <select
            value={motive}
            onChange={(e) => setMotive(e.target.value)}
            style={{
              width: "100%",
              background: "rgba(31,40,51,0.8)",
              border: "1px solid rgba(200,169,110,0.25)",
              color: motive ? "#E8E8E8" : "#8892A4",
              padding: "14px 16px",
              borderRadius: "6px",
              fontFamily: "'Courier Prime', monospace",
              fontSize: "0.95rem",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="">— Избери Мотив —</option>
            {["Наследство", "Корпоративен шпионаж", "Ревност", "Отмъщение", "Застрахователна измама", "Самозащита"].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!killer || !motive}
        style={{
          width: "100%",
          background: killer && motive ? "linear-gradient(135deg, #DC143C, #8B0000)" : "rgba(31,40,51,0.5)",
          color: "white",
          border: "none",
          padding: "16px",
          borderRadius: "4px",
          fontFamily: "'Special Elite', cursive",
          fontSize: "1.1rem",
          cursor: killer && motive ? "pointer" : "not-allowed",
          letterSpacing: "0.05em",
          transition: "all 0.3s",
          opacity: killer && motive ? 1 : 0.5,
          boxShadow: killer && motive ? "0 4px 20px rgba(220,20,60,0.35)" : "none",
        }}
        onMouseEnter={(e) => {
          if (killer && motive) e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
      >
        ⚖️ Повдигни Обвинението
      </button>
    </div>
  );
}
