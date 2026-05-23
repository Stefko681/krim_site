"use client";
import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    {
      id: "administrator",
      title: "1. Администратор на личните данни",
      content: (
        <>
          <p>
            Администратор на личните данни е <strong>ДОСИЕ</strong> (криминални мистерии и настолни игри),
            с контакти:
          </p>
          <ul>
            <li>📧 Имейл: kriminnal2@gmail.com</li>
            <li>📱 Телефон: +359 88 764 9359</li>
            <li>📍 Адрес: София, България</li>
          </ul>
          <p>
            Обработването на лични данни се извършва в съответствие с Регламент (ЕС) 2016/679
            (GDPR), Закона за защита на личните данни (ЗЗЛД) и приложимото българско законодателство.
          </p>
        </>
      ),
    },
    {
      id: "data-collected",
      title: "2. Какви данни събираме",
      content: (
        <>
          <p>В зависимост от начина на взаимодействие с нашия сайт, можем да събираме следните данни:</p>
          <p><strong>а) Данни, предоставени доброволно от вас:</strong></p>
          <ul>
            <li>Три имена и имейл адрес (при поръчка или запитване)</li>
            <li>Телефонен номер (при заявка за контакт)</li>
            <li>Адрес за доставка (при поръчка на продукт)</li>
            <li>Информация за събитието (при custom поръчка чрез Конфигуратора)</li>
          </ul>
          <p><strong>б) Данни, събирани автоматично:</strong></p>
          <ul>
            <li>IP адрес и приблизително местоположение</li>
            <li>Тип браузър и операционна система</li>
            <li>Посетени страници и продължителност на престоя</li>
            <li>Дата и час на посещението</li>
            <li>Референциран URL (откъде сте дошли)</li>
          </ul>
          <p><strong>в) Бисквитки и подобни технологии:</strong></p>
          <p>
            Използваме бисквитки съгласно нашата{" "}
            <Link href="/cookies" style={{ color: "#C8A96E" }}>
              Политика за бисквитки
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      id: "purposes",
      title: "3. Цели и правни основания за обработване",
      content: (
        <>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0.75rem", borderBottom: "1px solid rgba(200,169,110,0.2)", color: "#C8A96E" }}>Цел</th>
                  <th style={{ textAlign: "left", padding: "0.75rem", borderBottom: "1px solid rgba(200,169,110,0.2)", color: "#C8A96E" }}>Правно основание</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Обработване на поръчки и запитвания", "Изпълнение на договор (чл. 6, ал. 1, б. б)"],
                  ["Отговор на въпроси и комуникация с клиенти", "Законен интерес (чл. 6, ал. 1, б. е)"],
                  ["Анализ на използването на сайта", "Съгласие (чл. 6, ал. 1, б. а)"],
                  ["Маркетингови съобщения (ако сте се абонирали)", "Съгласие (чл. 6, ал. 1, б. а)"],
                  ["Спазване на законови задължения", "Правно задължение (чл. 6, ал. 1, б. в)"],
                ].map(([cel, osnov], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(200,169,110,0.08)" }}>
                    <td style={{ padding: "0.75rem", color: "#E8E8E8" }}>{cel}</td>
                    <td style={{ padding: "0.75rem", color: "#A0A8B4" }}>{osnov}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "retention",
      title: "4. Срок на съхранение",
      content: (
        <>
          <p>Съхраняваме личните ви данни само толкова дълго, колкото е необходимо за конкретните цели:</p>
          <ul>
            <li><strong>Данни от поръчки</strong> — 5 години (съгласно счетоводното законодателство)</li>
            <li><strong>Данни от запитвания</strong> — до 2 години от последния контакт</li>
            <li><strong>Маркетингови данни</strong> — до оттегляне на съгласието</li>
            <li><strong>Аналитични данни (бисквитки)</strong> — съгласно политиката за бисквитки</li>
          </ul>
          <p>
            При изтичане на срока или при оттегляне на съгласие, данните се изтриват или анонимизират.
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "5. Споделяне с трети страни",
      content: (
        <>
          <p>
            <strong>Не продаваме и не предоставяме лични данни на трети страни за маркетингови цели.</strong>
          </p>
          <p>Можем да споделяме данни с:</p>
          <ul>
            <li>
              <strong>Доставчици на услуги</strong> — платформи за имейл (напр. Gmail/Google),
              куриерски фирми за доставка на продукти, системи за онлайн плащания
            </li>
            <li>
              <strong>Google Analytics</strong> — анонимизирани статистически данни за посещаемостта
              (само при ваше съгласие)
            </li>
            <li>
              <strong>Публични органи</strong> — при законово изискване (напр. КЗЛД, съдилища)
            </li>
          </ul>
          <p>
            Всички трети страни са задължени да спазват приложимото законодателство за защита на данните.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      title: "6. Вашите права",
      content: (
        <>
          <p>Съгласно GDPR имате следните права:</p>
          <ul>
            <li>
              <strong>Право на достъп</strong> — да получите копие от личните данни, които обработваме
            </li>
            <li>
              <strong>Право на коригиране</strong> — да поискате корекция на неточни данни
            </li>
            <li>
              <strong>Право на изтриване ("право да бъдеш забравен")</strong> — при определени условия
            </li>
            <li>
              <strong>Право на ограничаване на обработването</strong> — при оспорване на точността или законността
            </li>
            <li>
              <strong>Право на преносимост</strong> — да получите данните си в машинно четим формат
            </li>
            <li>
              <strong>Право на възражение</strong> — срещу обработване въз основа на законен интерес
            </li>
            <li>
              <strong>Право на оттегляне на съгласие</strong> — по всяко време, без да се засяга
              законосъобразността на обработването преди оттеглянето
            </li>
          </ul>
          <p>
            За упражняване на правата си, свържете се с нас на{" "}
            <a href="mailto:kriminnal2@gmail.com" style={{ color: "#C8A96E" }}>
              kriminnal2@gmail.com
            </a>
            . Ще отговорим в срок от 30 дни.
          </p>
          <p>
            Имате право да подадете жалба до{" "}
            <strong>Комисията за защита на личните данни (КЗЛД)</strong>:{" "}
            <a
              href="https://www.cpdp.bg"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#C8A96E" }}
            >
              www.cpdp.bg
            </a>
            , ул. „Проф. Цветан Лазаров" №2, 1592 София.
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "7. Сигурност на данните",
      content: (
        <>
          <p>
            Прилагаме подходящи технически и организационни мерки за защита на личните ви данни,
            включително:
          </p>
          <ul>
            <li>SSL/TLS криптиране на всички комуникации</li>
            <li>Ограничен достъп до лични данни само за оторизирани лица</li>
            <li>Редовно преглеждане и актуализиране на мерките за сигурност</li>
          </ul>
          <p>
            В случай на нарушение на сигурността на данните, ще уведомим компетентния надзорен
            орган и, при необходимост, засегнатите лица в законовоустановените срокове.
          </p>
        </>
      ),
    },
    {
      id: "minors",
      title: "8. Деца",
      content: (
        <p>
          Нашите услуги не са предназначени за лица под 16 години. Не събираме съзнателно лични
          данни от деца. Ако установим, че сме събрали такива данни, ще ги изтрием незабавно.
          Ако сте родител или настойник и смятате, че детето ви ни е предоставило данни, моля
          свържете се с нас.
        </p>
      ),
    },
    {
      id: "updates",
      title: "9. Промени в политиката",
      content: (
        <p>
          Можем да актуализираме тази политика периодично. При съществени промени ще публикуваме
          известие на сайта. Датата на последна актуализация е посочена в горната част на страницата.
          Препоръчваме редовно да преглеждате тази страница.
        </p>
      ),
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0B0C10",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
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
            ПОВЕРИТЕЛНО
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
            Политика за Поверителност
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
          <p style={{ color: "#A0A8B4", lineHeight: 1.8, fontSize: "0.95rem" }}>
            В ДОСИЕ ценим вашата поверителност. Тази политика обяснява как събираме, използваме
            и защитаваме личните ви данни при използване на нашия уебсайт и услуги.
          </p>
        </div>

        {/* Table of contents */}
        <div
          style={{
            backgroundColor: "rgba(31,40,51,0.5)",
            border: "1px solid rgba(200,169,110,0.15)",
            borderRadius: "6px",
            padding: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#C8A96E",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            Съдържание
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {sections.map((s) => (
              <li key={s.id} style={{ marginBottom: "0.4rem" }}>
                <a
                  href={`#${s.id}`}
                  style={{
                    color: "#8892A4",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontFamily: "'IBM Plex Mono', monospace",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "#C8A96E"; }}
                  onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "#8892A4"; }}
                >
                  → {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            style={{
              marginBottom: "2.5rem",
              paddingBottom: "2.5rem",
              borderBottom: "1px solid rgba(200,169,110,0.08)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#E8E8E8",
                fontSize: "1.25rem",
                marginBottom: "1.25rem",
                paddingLeft: "0.75rem",
                borderLeft: "3px solid #DC143C",
              }}
            >
              {section.title}
            </h2>
            <div
              style={{
                color: "#A0A8B4",
                lineHeight: 1.8,
                fontSize: "0.92rem",
              }}
              className="privacy-content"
            >
              {section.content}
            </div>
          </div>
        ))}

        {/* Back link */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
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
            <Link href="/cookies" style={{ color: "#C8A96E" }}>
              Политика за бисквитки
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        .privacy-content ul {
          padding-left: 1.5rem;
          margin: 0.75rem 0;
        }
        .privacy-content li {
          margin-bottom: 0.4rem;
        }
        .privacy-content p {
          margin-bottom: 0.75rem;
        }
        .privacy-content strong {
          color: #E8E8E8;
        }
        .privacy-content a {
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .privacy-content table {
          border-radius: 4px;
          overflow: hidden;
        }
        .privacy-content th, .privacy-content td {
          border-left: none;
          border-right: none;
        }
      `}</style>
    </div>
  );
}
