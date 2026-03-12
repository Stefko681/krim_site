"use client";
import { useState, useEffect } from "react";
import { cases } from "@/lib/data";
import { AlertTriangle, Target, ChevronDown } from "lucide-react";

type ResultState = "idle" | "correct" | "wrong";

export default function GuessPage() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(cases[0].id);
  const [killer, setKiller] = useState("");
  const [result, setResult] = useState<ResultState>("idle");
  const [shuffledSuspects, setShuffledSuspects] = useState<string[]>([]);

  const currentCase = cases.find((c) => c.id === selectedCaseId)!;

  // Extra decoy suspects for each case (not the killer)
  const decoySuspects: Record<string, string[]> = {
    "1": ["Виктория Стоева", "Атанас Велев", "Никола Петров", "Мария Грозева"],
    "2": ["Виктор Асенов", "Стефан Неделчев", "Карина Иванова", "Десислава Тотева"],
    "3": ["Теодора Стоева", "Камен Вълчев", "Ивана Маринова", "Георги Станчев"],
    "4": ["Киара", "Стефко", "Даивд Де Хеа"],
  };

  // Shuffle suspects when case changes
  useEffect(() => {
    const decoys = decoySuspects[currentCase.id] ?? ["Заподозрян А", "Заподозрян Б", "Заподозрян В", "Заподозрян Г"];
    const all = [currentCase.solution.killer, ...decoys].sort(() => Math.random() - 0.5);
    setShuffledSuspects(all);
    setKiller("");
    setResult("idle");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCaseId]);

  const handleSubmit = () => {
    const correct = killer.trim().toLowerCase() === currentCase.solution.killer.toLowerCase();
    setResult(correct ? "correct" : "wrong");
  };

  const reset = () => {
    setKiller("");
    setResult("idle");
  };

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
      {/* ── Page header ───────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(180deg, rgba(31,40,51,0.5) 0%, transparent 100%)",
          padding: "3rem 1.5rem 2.5rem",
          borderBottom: "1px solid rgba(200,169,110,0.1)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "rgba(220,20,60,0.12)",
              border: "2px solid rgba(220,20,60,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem",
            }}
          >
            <Target size={30} color="#DC143C" />
          </div>
          <p
            style={{
              fontFamily: "'Special Elite', cursive",
              color: "#8892A4",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            ⬥ Детективска Предизвикателство ⬥
          </p>
          <h1
            style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              color: "#E8E8E8",
              marginBottom: "0.75rem",
              textShadow: "0 0 30px rgba(220,20,60,0.2)",
            }}
          >
            Познай Убиеца
          </h1>
          <p style={{ color: "#8892A4", lineHeight: 1.7, fontSize: "0.95rem" }}>
            Избери случай и посочи виновника. Имаш само един шанс — помисли внимателно!
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "3rem 1.5rem" }}>

        {/* ── Case picker ───────────────────────────────────────── */}
        <div style={{ marginBottom: "2.5rem" }}>
          <label
            style={{
              display: "block",
              color: "#C8A96E",
              fontFamily: "'Special Elite', cursive",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Избери Досие
          </label>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCaseId(c.id)}
                style={{
                  background:
                    selectedCaseId === c.id
                      ? "linear-gradient(135deg, rgba(220,20,60,0.12), rgba(31,40,51,0.9))"
                      : "linear-gradient(135deg, #1a1108, #1F2833)",
                  border:
                    selectedCaseId === c.id
                      ? "1px solid rgba(220,20,60,0.4)"
                      : "1px solid rgba(200,169,110,0.15)",
                  borderRadius: "8px",
                  padding: "1rem 1.25rem",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  transition: "all 0.2s",
                }}
              >
                <div
                  style={{
                    minWidth: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background:
                      selectedCaseId === c.id
                        ? "rgba(220,20,60,0.2)"
                        : "rgba(200,169,110,0.1)",
                    border: `1px solid ${selectedCaseId === c.id ? "rgba(220,20,60,0.5)" : "rgba(200,169,110,0.2)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: selectedCaseId === c.id ? "#DC143C" : "#C8A96E",
                    fontFamily: "'Special Elite', cursive",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                  }}
                >
                  {c.id}
                </div>
                <div>
                  <p
                    style={{
                      color: selectedCaseId === c.id ? "#E8E8E8" : "#C8A96E",
                      fontFamily: "'Special Elite', cursive",
                      fontSize: "1rem",
                      marginBottom: "2px",
                      transition: "color 0.2s",
                    }}
                  >
                    {c.title}
                  </p>
                  <p style={{ color: "#8892A4", fontFamily: "'Courier Prime', monospace", fontSize: "0.8rem" }}>
                    Жертва: {c.victim} · {c.location}
                  </p>
                </div>
                {selectedCaseId === c.id && (
                  <div
                    style={{
                      marginLeft: "auto",
                      color: "#DC143C",
                      fontFamily: "'Special Elite', cursive",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    ● ИЗБРАНО
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Result states ─────────────────────────────────────── */}
        {result === "wrong" && (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
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
            <p style={{ color: "#C8A96E", fontFamily: "'Special Elite', cursive", fontSize: "1.1rem", marginBottom: "0.75rem" }}>
              Грешен извод, детектив. Истинският виновник все още се измъква.
            </p>
            <p style={{ color: "#8892A4", marginBottom: "2rem", lineHeight: 1.7 }}>
              Разгледай отново доказателствата и прецизирай профила на заподозрения.
            </p>
            <button
              onClick={reset}
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
          </div>
        )}

        {result === "correct" && (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
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
              🎉 Брилянтно детектив! Ти разкри виновника!
            </p>
            <p style={{ color: "#8892A4", marginBottom: "2rem" }}>
              Виновник: <strong style={{ color: "#E8E8E8" }}>{currentCase.solution.killer}</strong>
            </p>



            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={reset}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(200,169,110,0.3)",
                  color: "#C8A96E",
                  padding: "11px 24px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "0.9rem",
                }}
              >
                🔄 Реши Друг Случай
              </button>
              <a
                href="/shop"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
                  color: "white",
                  textDecoration: "none",
                  padding: "11px 24px",
                  borderRadius: "4px",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "0.9rem",
                }}
              >
                📂 Купи Пълното Досие
              </a>
            </div>
          </div>
        )}

        {/* ── Accusation form (shown when result is idle) ───────── */}
        {result === "idle" && (
          <>
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
              <p style={{ color: "#8892A4", fontSize: "0.85rem", lineHeight: 1.6 }}>
                Веднъж изпратена, заявката не може да бъде оттеглена. Убеди се в избора си!
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
              {/* Killer select */}
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
                  Кой е Виновникът?
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
                  {shuffledSuspects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!killer}
              style={{
                width: "100%",
                background:
                  killer
                    ? "linear-gradient(135deg, #DC143C, #8B0000)"
                    : "rgba(31,40,51,0.5)",
                color: "white",
                border: "none",
                padding: "16px",
                borderRadius: "4px",
                fontFamily: "'Special Elite', cursive",
                fontSize: "1.1rem",
                cursor: killer ? "pointer" : "not-allowed",
                letterSpacing: "0.05em",
                transition: "all 0.3s",
                opacity: killer ? 1 : 0.5,
                boxShadow:
                  killer ? "0 4px 20px rgba(220,20,60,0.35)" : "none",
              }}
              onMouseEnter={(e) => {
                if (killer) e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              ⚖️ Повдигни Обвинението
            </button>

            <p style={{ color: "#8892A4", fontSize: "0.78rem", textAlign: "center", marginTop: "1.5rem", lineHeight: 1.6 }}>
              Искаш повече улики? Вземи пълното досие от{" "}
              <a href="/shop" style={{ color: "#C026D3", textDecoration: "none" }}>
                Магазина
              </a>{" "}
              и използвай{" "}
              <a href="/portal" style={{ color: "#C026D3", textDecoration: "none" }}>
                Детективския Портал
              </a>{" "}
              за жокери.
            </p>
          </>
        )}
      </div>

      <style>{`
        @keyframes stampIn {
          0% { transform: scale(3) rotate(-12deg); opacity: 0; }
          70% { transform: scale(0.9) rotate(-6deg); opacity: 1; }
          100% { transform: scale(1) rotate(-5deg); opacity: 1; }
        }
        @keyframes caseClosedAnim {
          0% { transform: scale(3) rotate(-10deg); opacity: 0; }
          70% { transform: scale(0.95) rotate(-4deg); opacity: 1; }
          100% { transform: scale(1) rotate(-3deg); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
