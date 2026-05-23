"use client";
export default function ConfiguratorPage() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
      <HowItWorks />
    </div>
  );
}

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
        margin: "4rem auto 4rem",
        padding: "0 1.5rem",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
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
              borderTop: `2px solid ${i % 2 === 0 ? "#DC143C" : "#C8A96E"}`,
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
                fontFamily: "'Cinzel Decorative', serif",
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
                fontFamily: "'Cinzel Decorative', serif",
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
