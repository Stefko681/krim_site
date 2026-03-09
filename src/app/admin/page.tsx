"use client";
import { useState, useEffect } from "react";
import { cases, testimonials } from "@/lib/data";
import { Shield, Package, Users, FileText, Plus, Edit, Trash2, Check, X, Settings } from "lucide-react";

const ADMIN_PASSWORD = "dosie2024";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [tab, setTab] = useState<"cases" | "orders" | "portal" | "requests">("cases");
  const [requests, setRequests] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("adminAuthed");
    if (stored === "true") setAuthed(true);
    // Load configurator requests
    fetch("/api/admin/requests")
      .then((r) => r.json())
      .then((d) => setRequests(d.requests || []))
      .catch(() => {});
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
      localStorage.setItem("adminAuthed", "true");
    } else {
      setPwError(true);
      setTimeout(() => setPwError(false), 2500);
    }
  };

  const handleLogout = () => {
    setAuthed(false);
    localStorage.removeItem("adminAuthed");
  };

  if (!authed) {
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
        <div style={{ maxWidth: "420px", width: "100%", textAlign: "center" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "rgba(139,0,0,0.1)",
              border: "2px solid rgba(220,20,60,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}
          >
            <Shield size={30} color="#DC143C" />
          </div>
          <h1
            style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: "2rem",
              color: "#E8E8E8",
              marginBottom: "0.5rem",
            }}
          >
            Администрация
          </h1>
          <p style={{ color: "#8892A4", marginBottom: "2rem", fontSize: "0.9rem" }}>
            Ограничен достъп. Само за оторизиран персонал.
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Парола..."
              style={{
                width: "100%",
                background: "rgba(31,40,51,0.8)",
                border: pwError ? "2px solid #DC143C" : "2px solid rgba(200,169,110,0.25)",
                color: "#E8E8E8",
                padding: "14px 18px",
                borderRadius: "6px",
                fontFamily: "'Courier Prime', monospace",
                fontSize: "1rem",
                textAlign: "center",
                letterSpacing: "0.1em",
                outline: "none",
                marginBottom: "0.75rem",
                boxShadow: pwError ? "0 0 15px rgba(220,20,60,0.3)" : "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            />
            {pwError && (
              <p style={{ color: "#DC143C", fontSize: "0.85rem", marginBottom: "0.75rem", fontFamily: "'Special Elite', cursive" }}>
                ✗ Грешна парола
              </p>
            )}
            <button
              type="submit"
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #DC143C, #8B0000)",
                color: "white",
                border: "none",
                padding: "13px",
                borderRadius: "4px",
                fontFamily: "'Special Elite', cursive",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              🔓 Влез
            </button>
          </form>
          <p style={{ color: "#8892A4", fontSize: "0.75rem", marginTop: "1rem" }}>
            Demo парола: <span style={{ color: "#DC143C", fontFamily: "'Courier Prime', monospace" }}>dosie2024</span>
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { key: "cases", label: "Досиета", icon: <FileText size={16} /> },
    { key: "orders", label: "Поръчки", icon: <Package size={16} /> },
    { key: "portal", label: "Портал Редактор", icon: <Settings size={16} /> },
    { key: "requests", label: "Custom Заявки", icon: <Users size={16} /> },
  ];

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          background: "rgba(139,0,0,0.08)",
          borderBottom: "1px solid rgba(220,20,60,0.15)",
          padding: "2rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ color: "#DC143C", fontFamily: "'Special Elite', cursive", fontSize: "0.75rem", letterSpacing: "0.15em", marginBottom: "0.3rem" }}>
              🔴 АДМИНИСТРАТИВЕН ПАНЕЛ — СТРОГО ПОВЕРИТЕЛНО
            </p>
            <h1 style={{ fontFamily: "'Special Elite', cursive", fontSize: "1.8rem", color: "#E8E8E8" }}>
              Архивен Команден Център
            </h1>
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              border: "1px solid rgba(220,20,60,0.3)",
              color: "#DC143C",
              padding: "8px 16px",
              cursor: "pointer",
              fontFamily: "'Special Elite', cursive",
              fontSize: "0.8rem",
              borderRadius: "4px",
              transition: "all 0.2s",
            }}
          >
            🔒 Изход
          </button>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { label: "Активни Досиета", value: cases.length.toString(), icon: "📂", color: "#C026D3" },
            { label: "Поръчки Тази Седмица", value: "12", icon: "📦", color: "#DC143C" },
            { label: "Custom Заявки", value: requests.length.toString(), icon: "✏️", color: "#C8A96E" },
            { label: "Активни Детективи", value: "38", icon: "🕵️", color: "#4ade80" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(31,40,51,0.5)",
                border: "1px solid rgba(200,169,110,0.15)",
                borderRadius: "6px",
                padding: "1.25rem",
                borderTop: `3px solid ${stat.color}`,
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{stat.icon}</div>
              <div style={{ color: stat.color, fontFamily: "'Special Elite', cursive", fontSize: "1.8rem" }}>
                {stat.value}
              </div>
              <div style={{ color: "#8892A4", fontSize: "0.8rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap", borderBottom: "1px solid rgba(200,169,110,0.1)", paddingBottom: "0" }}>
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key as typeof tab)}
              style={{
                padding: "10px 20px",
                background: "transparent",
                border: "none",
                borderBottom: tab === t.key ? "2px solid #C026D3" : "2px solid transparent",
                color: tab === t.key ? "#C026D3" : "#8892A4",
                cursor: "pointer",
                fontFamily: "'Special Elite', cursive",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.2s",
                marginBottom: "-1px",
              }}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === "cases" && <CasesTab />}
        {tab === "orders" && <OrdersTab />}
        {tab === "portal" && <PortalTab />}
        {tab === "requests" && <RequestsTab requests={requests} />}
      </div>
    </div>
  );
}

function CasesTab() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h2 style={{ fontFamily: "'Special Elite', cursive", color: "#E8E8E8", fontSize: "1.3rem" }}>
          Управление на Досиета
        </h2>
        <button
          style={{
            background: "linear-gradient(135deg, #C026D3, #9b1cb5)",
            color: "white",
            border: "none",
            padding: "9px 18px",
            borderRadius: "4px",
            cursor: "pointer",
            fontFamily: "'Special Elite', cursive",
            fontSize: "0.85rem",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Plus size={16} />
          Ново Досие
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {cases.map((c) => (
          <div
            key={c.id}
            style={{
              background: "rgba(31,40,51,0.5)",
              border: "1px solid rgba(200,169,110,0.15)",
              borderRadius: "6px",
              padding: "1.25rem 1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p style={{ color: "#E8E8E8", fontFamily: "'Special Elite', cursive", fontSize: "1rem", marginBottom: "2px" }}>
                {c.title}
              </p>
              <p style={{ color: "#8892A4", fontSize: "0.8rem" }}>
                Код: <span style={{ color: "#C026D3", fontFamily: "'Courier Prime', monospace" }}>{c.portalCode}</span>
                {" · "}Трудност: {c.difficulty}/5
                {" · "}Дигитално: {c.priceDigital} лв
                {" · "}Физическо: {c.pricePhysical} лв
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                style={{
                  background: "rgba(192,38,211,0.1)",
                  border: "1px solid rgba(192,38,211,0.3)",
                  color: "#C026D3",
                  padding: "7px 14px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Edit size={14} /> Редактирай
              </button>
              <button
                style={{
                  background: "rgba(220,20,60,0.1)",
                  border: "1px solid rgba(220,20,60,0.3)",
                  color: "#DC143C",
                  padding: "7px 14px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: "'Special Elite', cursive",
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Trash2 size={14} /> Изтрий
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrdersTab() {
  const mockOrders = [
    { id: "ORD-001", case: "Убийството в Мансардата", format: "Физическа", qty: 1, total: 79, status: "Изпратена", date: "2025-03-08" },
    { id: "ORD-002", case: "Отровната Игра", format: "PDF", qty: 2, total: 68, status: "Обработва се", date: "2025-03-09" },
    { id: "ORD-003", case: "Изчезналата Невеста", format: "Физическа", qty: 1, total: 99, status: "Изпратена", date: "2025-03-09" },
    { id: "ORD-004", case: "Убийството в Мансардата", format: "PDF", qty: 1, total: 29, status: "Завършена", date: "2025-03-07" },
  ];

  const statusColor = (s: string) => {
    if (s === "Изпратена") return "#4ade80";
    if (s === "Обработва се") return "#C8A96E";
    if (s === "Завършена") return "#8892A4";
    return "#E8E8E8";
  };

  return (
    <div>
      <h2 style={{ fontFamily: "'Special Elite', cursive", color: "#E8E8E8", fontSize: "1.3rem", marginBottom: "1.5rem" }}>
        Поръчки
      </h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Номер", "Досие", "Формат", "Сума", "Статус", "Дата"].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: "left",
                    color: "#C8A96E",
                    fontFamily: "'Special Elite', cursive",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    padding: "10px 12px",
                    borderBottom: "1px solid rgba(200,169,110,0.15)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((o) => (
              <tr
                key={o.id}
                style={{ borderBottom: "1px solid rgba(200,169,110,0.06)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(31,40,51,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <td style={{ padding: "12px", color: "#C026D3", fontFamily: "'Courier Prime', monospace", fontSize: "0.85rem" }}>{o.id}</td>
                <td style={{ padding: "12px", color: "#E8E8E8", fontSize: "0.9rem" }}>{o.case}</td>
                <td style={{ padding: "12px", color: "#8892A4", fontSize: "0.85rem" }}>{o.format}</td>
                <td style={{ padding: "12px", color: "#C8A96E", fontFamily: "'Special Elite', cursive" }}>{o.total} лв</td>
                <td style={{ padding: "12px" }}>
                  <span style={{ color: statusColor(o.status), fontSize: "0.85rem", fontFamily: "'Special Elite', cursive" }}>
                    ● {o.status}
                  </span>
                </td>
                <td style={{ padding: "12px", color: "#8892A4", fontSize: "0.85rem" }}>{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PortalTab() {
  return (
    <div>
      <h2 style={{ fontFamily: "'Special Elite', cursive", color: "#E8E8E8", fontSize: "1.3rem", marginBottom: "0.5rem" }}>
        Редактор на Портала
      </h2>
      <p style={{ color: "#8892A4", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Управлявай жокерите и правилните отговори за всеки случай.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {cases.map((c) => (
          <div
            key={c.id}
            style={{
              background: "rgba(31,40,51,0.4)",
              border: "1px solid rgba(200,169,110,0.15)",
              borderRadius: "6px",
              padding: "1.5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h3 style={{ fontFamily: "'Special Elite', cursive", color: "#E8E8E8", fontSize: "1rem" }}>
                {c.title}
              </h3>
              <span style={{ color: "#C026D3", fontFamily: "'Courier Prime', monospace", fontSize: "0.85rem" }}>
                Код: {c.portalCode}
              </span>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              {[
                { label: "Убиец", value: c.solution.killer },
                { label: "Мотив", value: c.solution.motive },
                { label: "Оръжие", value: c.solution.weapon },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "rgba(11,12,16,0.5)",
                    border: "1px solid rgba(220,20,60,0.2)",
                    borderRadius: "4px",
                    padding: "6px 12px",
                  }}
                >
                  <span style={{ color: "#8892A4", fontSize: "0.75rem", fontFamily: "'Special Elite', cursive" }}>
                    {s.label}:{" "}
                  </span>
                  <span style={{ color: "#DC143C", fontFamily: "'Courier Prime', monospace", fontSize: "0.85rem" }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ color: "#8892A4", fontSize: "0.8rem" }}>
              {c.hints.length} жокера конфигурирани
            </p>
            <button
              style={{
                marginTop: "0.75rem",
                background: "rgba(192,38,211,0.1)",
                border: "1px solid rgba(192,38,211,0.3)",
                color: "#C026D3",
                padding: "7px 14px",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "'Special Elite', cursive",
                fontSize: "0.8rem",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Edit size={14} /> Редактирай Жокери
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function RequestsTab({ requests }: { requests: Record<string, unknown>[] }) {
  if (requests.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "3rem", color: "#8892A4" }}>
        <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "1.1rem" }}>
          Няма получени custom заявки.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontFamily: "'Special Elite', cursive", color: "#E8E8E8", fontSize: "1.3rem", marginBottom: "1.5rem" }}>
        Custom Заявки ({requests.length})
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {requests.map((req, i) => (
          <div
            key={i}
            style={{
              background: "rgba(31,40,51,0.5)",
              border: "1px solid rgba(200,169,110,0.15)",
              borderRadius: "6px",
              padding: "1.25rem",
            }}
          >
            <pre style={{ color: "#C8A96E", fontFamily: "'Courier Prime', monospace", fontSize: "0.85rem", whiteSpace: "pre-wrap" }}>
              {JSON.stringify(req, null, 2)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
