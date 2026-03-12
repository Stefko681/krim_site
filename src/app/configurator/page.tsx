"use client";
import { useState } from "react";
import { themes } from "@/lib/data";
import { ChevronRight, ChevronLeft, CheckCircle, Plus, Trash2 } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  theme: string;
  victimName: string;
  location: string;
  insideJokes: string;
  playerName: string;
  suspects: string[];
}

export default function ConfiguratorPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    theme: "",
    victimName: "",
    location: "",
    insideJokes: "",
    playerName: "",
    suspects: ["", ""],
  });

  const selectedTheme = themes.find((t) => t.id === form.theme);

  const updateForm = (key: keyof FormData, val: string | string[]) =>
    setForm((p) => ({ ...p, [key]: val }));

  const addSuspect = () =>
    updateForm("suspects", [...form.suspects, ""]);

  const removeSuspect = (i: number) =>
    updateForm("suspects", form.suspects.filter((_, idx) => idx !== i));

  const updateSuspect = (i: number, val: string) => {
    const s = [...form.suspects];
    s[i] = val;
    updateForm("suspects", s);
  };

  const handleSubmit = async () => {
    await fetch("/api/configurator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => { });
    setSubmitted(true);
  };

  const steps = [
    { num: 1, label: "Тема" },
    { num: 2, label: "Детайли" },
    { num: 3, label: "Заподозрени" },
    { num: 4, label: "Резюме" },
  ];

  if (submitted) {
    return (
      <div
        style={{
          paddingTop: "100px",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 1.5rem 3rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "500px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1.5rem", animation: "fadeIn 0.6s ease" }}>
            📬
          </div>
          <div
            style={{
              border: "3px solid #15803d",
              color: "#4ade80",
              fontFamily: "'Special Elite', cursive",
              fontSize: "1.5rem",
              letterSpacing: "0.1em",
              padding: "10px 30px",
              display: "inline-block",
              transform: "rotate(-2deg)",
              marginBottom: "1.5rem",
              animation: "stampIn 0.5s cubic-bezier(0.36,0.07,0.19,0.97) forwards",
              boxShadow: "0 0 20px rgba(21,128,61,0.3)",
            }}
          >
            ЗАЯВКАТА ПОЛУЧЕНА
          </div>
          <h2
            style={{
              fontFamily: "'Special Elite', cursive",
              color: "#E8E8E8",
              fontSize: "1.8rem",
              marginBottom: "1rem",
            }}
          >
            Досието ти е в процес на изготвяне!
          </h2>
          <p style={{ color: "#C8A96E", lineHeight: 1.7, marginBottom: "2rem" }}>
            Ще се свържем с теб в рамките на <strong>48 часа</strong> с персонализирана оферта и детайли по случая. Провери имейла си.
          </p>
          <a
            href="/"
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
            ← Начална Страница
          </a>
        </div>
        <style>{`
          @keyframes stampIn {
            0% { transform: scale(3) rotate(-10deg); opacity: 0; }
            70% { transform: scale(0.95) rotate(-3deg); opacity: 1; }
            100% { transform: scale(1) rotate(-2deg); opacity: 1; }
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
    <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
      {/* Header */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 1.5rem 3rem",
          borderBottom: "1px solid rgba(200,169,110,0.1)",
          background: "linear-gradient(180deg, rgba(31,40,51,0.3) 0%, transparent 100%)",
        }}
      >
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
          ✏️ Custom Досие
        </div>
        <h1
          style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#E8E8E8",
            marginBottom: "0.75rem",
          }}
        >
          Създай Своя Случай
        </h1>
        <p style={{ color: "#8892A4", maxWidth: "550px", margin: "0 auto" }}>
          Персонализирано досие с истински имена, вътрешни шеги и твои заподозрени.
        </p>
      </section>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {/* Progress bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          {/* Progress line */}
          <div
            style={{
              position: "absolute",
              top: "18px",
              left: "0",
              right: "0",
              height: "2px",
              background: "rgba(200,169,110,0.15)",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "18px",
              left: "0",
              width: `${((step - 1) / 3) * 100}%`,
              height: "2px",
              background: "linear-gradient(90deg, #C026D3, #9b1cb5)",
              zIndex: 1,
              transition: "width 0.4s ease",
            }}
          />
          {steps.map((s) => (
            <div key={s.num} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 2 }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    step > s.num ? "#15803d" : step === s.num ? "#C026D3" : "rgba(31,40,51,0.8)",
                  border:
                    step > s.num ? "2px solid #15803d" : step === s.num ? "2px solid #C026D3" : "2px solid rgba(200,169,110,0.2)",
                  transition: "all 0.3s",
                  color: step >= s.num ? "white" : "#8892A4",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "0.9rem",
                  boxShadow: step === s.num ? "0 0 12px rgba(192,38,211,0.5)" : "none",
                }}
              >
                {step > s.num ? <CheckCircle size={18} /> : s.num}
              </div>
              <span
                style={{
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "0.75rem",
                  color: step === s.num ? "#C026D3" : "#8892A4",
                  letterSpacing: "0.05em",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Step content */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a1108, #1F2833)",
            border: "1px solid rgba(200,169,110,0.2)",
            borderRadius: "8px",
            padding: "2.5rem",
            minHeight: "340px",
            animation: "fadeInStep 0.35s ease",
          }}
        >
          {/* STEP 1: Theme */}
          {step === 1 && (
            <div>
              <h2
                style={{
                  fontFamily: "'Special Elite', cursive",
                  color: "#E8E8E8",
                  fontSize: "1.4rem",
                  marginBottom: "0.5rem",
                }}
              >
                Стъпка 1: Избери Тема
              </h2>
              <p style={{ color: "#8892A4", fontSize: "0.9rem", marginBottom: "2rem" }}>
                Тематата определя сценарията и реквизита на случая.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => updateForm("theme", t.id)}
                    style={{
                      padding: "1.5rem",
                      background: form.theme === t.id ? "rgba(192,38,211,0.15)" : "rgba(11,12,16,0.5)",
                      border: form.theme === t.id ? "2px solid #C026D3" : "2px solid rgba(200,169,110,0.15)",
                      borderRadius: "6px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s",
                      boxShadow: form.theme === t.id ? "0 0 15px rgba(192,38,211,0.2)" : "none",
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{t.icon}</div>
                    <div
                      style={{
                        fontFamily: "'Special Elite', cursive",
                        color: form.theme === t.id ? "#C026D3" : "#E8E8E8",
                        fontSize: "1rem",
                        marginBottom: "4px",
                      }}
                    >
                      {t.label}
                    </div>
                    <div style={{ color: "#C026D3", fontFamily: "'Special Elite', cursive", fontSize: "0.9rem" }}>
                      от {t.price} лв
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Details */}
          {step === 2 && (
            <div>
              <h2
                style={{
                  fontFamily: "'Special Elite', cursive",
                  color: "#E8E8E8",
                  fontSize: "1.4rem",
                  marginBottom: "0.5rem",
                }}
              >
                Стъпка 2: Детайли на Случая
              </h2>
              <p style={{ color: "#8892A4", fontSize: "0.9rem", marginBottom: "2rem" }}>
                Тези детайли ще бъдат вплетени в историята на случая.
              </p>
              {[
                { key: "victimName" as const, label: "Име на жертвата", placeholder: "напр. Максим Велев", type: "text" },
                { key: "location" as const, label: "Локация", placeholder: "напр. Имение Черна Роза, Витоша", type: "text" },
                { key: "playerName" as const, label: "Твоето Детективско Псевдоним", placeholder: "напр. Инспектор Данов", type: "text" },
              ].map((field) => (
                <div key={field.key} style={{ marginBottom: "1.25rem" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#C8A96E",
                      fontFamily: "'Special Elite', cursive",
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.key]}
                    onChange={(e) => updateForm(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    style={{
                      width: "100%",
                      background: "rgba(11,12,16,0.7)",
                      border: "1px solid rgba(200,169,110,0.25)",
                      color: "#E8E8E8",
                      padding: "12px 16px",
                      borderRadius: "4px",
                      fontFamily: "'Courier Prime', monospace",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#C026D3"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.25)"; }}
                  />
                </div>
              ))}
              <div style={{ marginBottom: "1.25rem" }}>
                <label
                  style={{
                    display: "block",
                    color: "#C8A96E",
                    fontFamily: "'Special Elite', cursive",
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                  }}
                >
                  Вътрешни Шеги / Специфични Детайли
                </label>
                <textarea
                  value={form.insideJokes}
                  onChange={(e) => updateForm("insideJokes", e.target.value)}
                  placeholder="напр. Пешо винаги забравя рожденните дни, Мария е известна с готвенето..."
                  rows={3}
                  style={{
                    width: "100%",
                    background: "rgba(11,12,16,0.7)",
                    border: "1px solid rgba(200,169,110,0.25)",
                    color: "#E8E8E8",
                    padding: "12px 16px",
                    borderRadius: "4px",
                    fontFamily: "'Courier Prime', monospace",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "vertical",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#C026D3"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.25)"; }}
                />
              </div>
            </div>
          )}

          {/* STEP 3: Suspects */}
          {step === 3 && (
            <div>
              <h2
                style={{
                  fontFamily: "'Special Elite', cursive",
                  color: "#E8E8E8",
                  fontSize: "1.4rem",
                  marginBottom: "0.5rem",
                }}
              >
                Стъпка 3: Заподозрени
              </h2>
              <p style={{ color: "#8892A4", fontSize: "0.9rem", marginBottom: "2rem" }}>
                Добави имената на приятелите/колегите си — те ще станат заподозрени!
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.25rem" }}>
                {form.suspects.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <div
                      style={{
                        minWidth: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "rgba(220,20,60,0.15)",
                        border: "1px solid rgba(220,20,60,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#DC143C",
                        fontFamily: "'Special Elite', cursive",
                        fontSize: "0.8rem",
                      }}
                    >
                      {i + 1}
                    </div>
                    <input
                      type="text"
                      value={s}
                      onChange={(e) => updateSuspect(i, e.target.value)}
                      placeholder={`Заподозрян ${i + 1} (напр. Петър Иванов)`}
                      style={{
                        flex: 1,
                        background: "rgba(11,12,16,0.7)",
                        border: "1px solid rgba(200,169,110,0.25)",
                        color: "#E8E8E8",
                        padding: "10px 14px",
                        borderRadius: "4px",
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#C026D3"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.25)"; }}
                    />
                    {form.suspects.length > 2 && (
                      <button
                        onClick={() => removeSuspect(i)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#DC143C",
                          cursor: "pointer",
                          padding: "4px",
                          transition: "opacity 0.2s",
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {form.suspects.length < 8 && (
                <button
                  onClick={addSuspect}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "none",
                    border: "1px dashed rgba(200,169,110,0.3)",
                    color: "#C8A96E",
                    padding: "10px 18px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontFamily: "'Special Elite', cursive",
                    fontSize: "0.9rem",
                    transition: "all 0.2s",
                    width: "100%",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C026D3";
                    e.currentTarget.style.color = "#C026D3";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)";
                    e.currentTarget.style.color = "#C8A96E";
                  }}
                >
                  <Plus size={16} />
                  Добави Заподозрян
                </button>
              )}
            </div>
          )}

          {/* STEP 4: Summary */}
          {step === 4 && (
            <div>
              <h2
                style={{
                  fontFamily: "'Special Elite', cursive",
                  color: "#E8E8E8",
                  fontSize: "1.4rem",
                  marginBottom: "0.5rem",
                }}
              >
                Стъпка 4: Резюме & Изпращане
              </h2>
              <p style={{ color: "#8892A4", fontSize: "0.9rem", marginBottom: "2rem" }}>
                Прегледай данните си и изпрати заявката.
              </p>
              <div
                style={{
                  background: "rgba(11,12,16,0.6)",
                  border: "1px solid rgba(200,169,110,0.2)",
                  borderRadius: "6px",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {[
                  { label: "Тема", value: selectedTheme?.label || "-" },
                  { label: "Жертва", value: form.victimName || "-" },
                  { label: "Локация", value: form.location || "-" },
                  { label: "Детектив", value: form.playerName || "-" },
                  { label: "Заподозрени", value: form.suspects.filter(Boolean).join(", ") || "-" },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(200,169,110,0.08)",
                    }}
                  >
                    <span style={{ color: "#8892A4", fontFamily: "'Special Elite', cursive", fontSize: "0.85rem" }}>
                      {row.label}:
                    </span>
                    <span style={{ color: "#E8E8E8", fontFamily: "'Courier Prime', monospace", fontSize: "0.85rem", textAlign: "right", maxWidth: "60%" }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: "rgba(192,38,211,0.08)",
                  border: "1px solid rgba(192,38,211,0.25)",
                  borderRadius: "6px",
                  padding: "1.25rem",
                  marginBottom: "1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ color: "#8892A4", fontSize: "0.78rem", fontFamily: "'Special Elite', cursive" }}>
                    ОРИЕНТИРОВЪЧНА ЦЕНА
                  </p>
                  <p style={{ color: "#C026D3", fontFamily: "'Special Elite', cursive", fontSize: "1.8rem" }}>
                    {selectedTheme?.price || "—"} лв
                  </p>
                  <p style={{ color: "#8892A4", fontSize: "0.75rem" }}>
                    Финалната цена след консултация
                  </p>
                </div>
                <span style={{ fontSize: "2.5rem" }}>{selectedTheme?.icon || "🎭"}</span>
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
                  color: "white",
                  border: "none",
                  padding: "16px",
                  borderRadius: "4px",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 20px rgba(192,38,211,0.4)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                📨 Изпрати Заявката
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          {step > 1 ? (
            <button
              onClick={() => setStep((p) => (p - 1) as Step)}
              style={{
                background: "transparent",
                border: "1px solid rgba(200,169,110,0.25)",
                color: "#C8A96E",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "'Special Elite', cursive",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.2s",
              }}
            >
              <ChevronLeft size={16} />
              Назад
            </button>
          ) : (
            <div />
          )}

          {step < 4 && (
            <button
              onClick={() => {
                if (step === 1 && !form.theme) return;
                setStep((p) => (p + 1) as Step);
              }}
              disabled={step === 1 && !form.theme}
              style={{
                background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
                color: "white",
                border: "none",
                padding: "10px 24px",
                borderRadius: "4px",
                cursor: step === 1 && !form.theme ? "not-allowed" : "pointer",
                fontFamily: "'Special Elite', cursive",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                opacity: step === 1 && !form.theme ? 0.5 : 1,
                transition: "all 0.2s",
              }}
            >
              Напред
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInStep {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
