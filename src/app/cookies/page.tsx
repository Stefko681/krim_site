"use client";
import Link from "next/link";

const cookieCategories = [
  {
    name: "Задължителни бисквитки",
    color: "#C8A96E",
    canDisable: false,
    description:
      "Тези бисквитки са абсолютно необходими за правилното функциониране на сайта. Без тях определени части от сайта не биха работили. Те не събират лична информация и не могат да бъдат изключени.",
    cookies: [
      {
        name: "dosie_cookie_consent",
        purpose: "Съхранява вашите предпочитания за бисквитките",
        duration: "1 година",
        provider: "dosie.bg (нашият сайт)",
        type: "Собствена",
      },
      {
        name: "next-auth.session-token",
        purpose: "Сесия за удостоверяване (ако сте влезли в профил)",
        duration: "Сесия / 30 дни",
        provider: "dosie.bg",
        type: "Собствена",
      },
    ],
  },
  {
    name: "Функционални бисквитки",
    color: "#6EA8DC",
    canDisable: true,
    description:
      "Тези бисквитки позволяват на сайта да запомни вашите избори (като предпочитания за съдържание) и предоставят подобрена, по-персонализирана функционалност. Не се използват за проследяване на трети страни.",
    cookies: [
      {
        name: "demo_leads",
        purpose: "Запазване на имейл при демонстрационен режим (localStorage)",
        duration: "Постоянна (localStorage)",
        provider: "dosie.bg",
        type: "Собствена",
      },
      {
        name: "demo_custom_cases",
        purpose: "Временно запазване на custom заявки при демонстрационен режим",
        duration: "Постоянна (localStorage)",
        provider: "dosie.bg",
        type: "Собствена",
      },
    ],
  },
];

export default function CookiesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0B0C10",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              border: "2px solid rgba(220,20,60,0.6)",
              color: "#DC143C",
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              padding: "3px 12px",
              transform: "rotate(-2deg)",
              marginBottom: "1.5rem",
              textShadow: "0 0 10px rgba(220,20,60,0.4)",
            }}
          >
            ДОСИЕ: БИСКВИТКИ
          </div>
          <h1
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#C8A96E",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "0.06em",
              marginBottom: "0.75rem",
            }}
          >
            Политика за Бисквитки
          </h1>
          <p style={{ color: "#8892A4", fontSize: "0.85rem", fontFamily: "'IBM Plex Mono', monospace" }}>
            Последна актуализация: 23 май 2025 г.
          </p>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.4), transparent)",
              margin: "2rem auto",
              maxWidth: "400px",
            }}
          />
        </div>

        {/* Intro */}
        <div
          style={{
            backgroundColor: "rgba(31,40,51,0.5)",
            border: "1px solid rgba(200,169,110,0.15)",
            borderRadius: "6px",
            padding: "1.75rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#E8E8E8",
              fontSize: "1.1rem",
              marginBottom: "1rem",
            }}
          >
            Какво са бисквитките?
          </h2>
          <p style={{ color: "#A0A8B4", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: "0.75rem" }}>
            Бисквитките са малки текстови файлове, съхранявани на вашето устройство (компютър,
            телефон, таблет) при посещение на уебсайт. Те позволяват на сайта да запомни вашите
            действия и предпочитания за определен период от време.
          </p>
          <p style={{ color: "#A0A8B4", lineHeight: 1.8, fontSize: "0.92rem" }}>
            Тази политика обяснява какви бисквитки използваме, защо и как можете да ги управлявате.
            За повече информация относно обработването на личните ви данни вижте нашата{" "}
            <Link href="/privacy" style={{ color: "#C8A96E" }}>
              Политика за поверителност
            </Link>
            .
          </p>
        </div>

        {/* Cookie categories */}
        {cookieCategories.map((category, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: "2.5rem",
              border: "1px solid rgba(200,169,110,0.12)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {/* Category header */}
            <div
              style={{
                backgroundColor: "rgba(31,40,51,0.7)",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "0.75rem",
                borderBottom: "1px solid rgba(200,169,110,0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: category.color,
                    boxShadow: `0 0 8px ${category.color}`,
                    flexShrink: 0,
                  }}
                />
                <h2
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    color: category.color,
                    fontSize: "0.9rem",
                    letterSpacing: "0.06em",
                    margin: 0,
                  }}
                >
                  {category.name}
                </h2>
              </div>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: category.canDisable ? "#8892A4" : "#C8A96E",
                  border: `1px solid ${category.canDisable ? "rgba(136,146,164,0.3)" : "rgba(200,169,110,0.3)"}`,
                  padding: "2px 10px",
                  borderRadius: "20px",
                }}
              >
                {category.canDisable ? "По избор" : "Задължителни"}
              </span>
            </div>

            {/* Category body */}
            <div style={{ padding: "1.25rem 1.5rem", backgroundColor: "rgba(11,12,16,0.5)" }}>
              <p
                style={{
                  color: "#A0A8B4",
                  lineHeight: 1.75,
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                }}
              >
                {category.description}
              </p>

              {/* Cookie table */}
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
                  <thead>
                    <tr>
                      {["Наименование", "Цел", "Срок", "Доставчик", "Тип"].map((h) => (
                        <th
                          key={h}
                          style={{
                            textAlign: "left",
                            padding: "0.6rem 0.75rem",
                            color: "#C8A96E",
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "0.7rem",
                            letterSpacing: "0.06em",
                            borderBottom: "1px solid rgba(200,169,110,0.15)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {category.cookies.map((cookie, i) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom: "1px solid rgba(200,169,110,0.06)",
                        }}
                      >
                        <td
                          style={{
                            padding: "0.65rem 0.75rem",
                            color: "#E8E8E8",
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: "0.78rem",
                          }}
                        >
                          {cookie.name}
                        </td>
                        <td style={{ padding: "0.65rem 0.75rem", color: "#A0A8B4" }}>
                          {cookie.purpose}
                        </td>
                        <td
                          style={{
                            padding: "0.65rem 0.75rem",
                            color: "#A0A8B4",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {cookie.duration}
                        </td>
                        <td style={{ padding: "0.65rem 0.75rem", color: "#A0A8B4" }}>
                          {cookie.provider}
                        </td>
                        <td
                          style={{
                            padding: "0.65rem 0.75rem",
                            color: cookie.type === "Собствена" ? "#C8A96E" : "#8892A4",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {cookie.type}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}

        {/* Managing cookies */}
        <div
          style={{
            marginBottom: "2.5rem",
            padding: "1.75rem",
            backgroundColor: "rgba(31,40,51,0.4)",
            border: "1px solid rgba(200,169,110,0.15)",
            borderRadius: "8px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#E8E8E8",
              fontSize: "1.2rem",
              paddingLeft: "0.75rem",
              borderLeft: "3px solid #DC143C",
              marginBottom: "1.25rem",
            }}
          >
            Как да управлявате бисквитките
          </h2>

          <p style={{ color: "#A0A8B4", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: "1rem" }}>
            <strong style={{ color: "#E8E8E8" }}>На нашия сайт:</strong> При всяко посещение можете
            да управлявате предпочитанията си чрез банера за бисквитки. Можете също да промените
            избора си по всяко време.
          </p>

          <p style={{ color: "#A0A8B4", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: "1rem" }}>
            <strong style={{ color: "#E8E8E8" }}>В браузъра:</strong> Повечето браузъри позволяват
            контрол на бисквитките чрез настройките. Имайте предвид, че деактивирането на всички
            бисквитки може да наруши функционалността на сайта.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            {[
              { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
              { name: "Firefox", url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
              { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
              { name: "Edge", url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406" },
            ].map((browser) => (
              <a
                key={browser.name}
                href={browser.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.6rem",
                  border: "1px solid rgba(200,169,110,0.2)",
                  borderRadius: "4px",
                  color: "#C8A96E",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontFamily: "'IBM Plex Mono', monospace",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(200,169,110,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(200,169,110,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(200,169,110,0.2)";
                }}
              >
                🌐 {browser.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div
          style={{
            textAlign: "center",
            padding: "1.5rem",
            border: "1px solid rgba(200,169,110,0.1)",
            borderRadius: "6px",
            marginBottom: "2rem",
          }}
        >
          <p style={{ color: "#A0A8B4", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>
            Имате въпроси относно нашата политика за бисквитки?
          </p>
          <a
            href="mailto:kriminnal2@gmail.com"
            style={{
              color: "#C8A96E",
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "0.82rem",
              letterSpacing: "0.06em",
            }}
          >
            📧 kriminnal2@gmail.com
          </a>
        </div>

        {/* Back link */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#C8A96E",
              textDecoration: "none",
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              border: "1px solid rgba(200,169,110,0.3)",
              padding: "0.75rem 1.5rem",
              borderRadius: "3px",
              transition: "all 0.3s ease",
            }}
          >
            ← Обратно към начало
          </Link>
          <p style={{ color: "#8892A4", fontSize: "0.8rem", marginTop: "1.5rem" }}>
            Вижте също:{" "}
            <Link href="/privacy" style={{ color: "#C8A96E" }}>
              Политика за поверителност
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
