import { useState, useCallback } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const STATUS_COLORS = {
  SUCCESS:   { bg: "#f0fdf4", text: "#16a34a", dot: "#22c55e", border: "#bbf7d0" },
  FAILED:    { bg: "#fef2f2", text: "#dc2626", dot: "#ef4444", border: "#fecaca" },
  INITIATED: { bg: "#fefce8", text: "#ca8a04", dot: "#eab308", border: "#fef08a" },
};

function StatusBadge({ status }) {
  const c = STATUS_COLORS[status] || STATUS_COLORS.INITIATED;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: c.bg, color: c.text,
      padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600,
      letterSpacing: 0.4, border: `1px solid ${c.border}`
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.dot, display: "inline-block" }} />
      {status}
    </span>
  );
}

function StatCard({ label, value, accent }) {
  return (
    <div style={{
      background: "#fff", border: "1px solid #e5e7eb",
      borderRadius: 12, padding: "20px 24px", flex: 1, minWidth: 140,
      borderTop: `3px solid ${accent}`, boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
    }}>
      <div style={{ color: "#9ca3af", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
      <div style={{ color: "#111827", fontSize: 26, fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>{value}</div>
    </div>
  );
}

function Table({ columns, rows, emptyMsg }) {
  if (!rows || rows.length === 0) return (
    <div style={{ textAlign: "center", color: "#9ca3af", padding: "40px 0", fontSize: 14 }}>{emptyMsg || "No data found"}</div>
  );
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            {columns.map(c => (
              <th key={c.key} style={{
                padding: "10px 14px", textAlign: "left", color: "#6b7280",
                fontSize: 11, fontWeight: 700, letterSpacing: 1,
                textTransform: "uppercase", borderBottom: "1px solid #e5e7eb",
                whiteSpace: "nowrap"
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}
              onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {columns.map(c => (
                <td key={c.key} style={{ padding: "10px 14px", color: "#374151", whiteSpace: c.wrap ? "normal" : "nowrap" }}>
                  {c.render ? c.render(row[c.key], row) : (row[c.key] ?? "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      value={value} onChange={e => onChange(e.target.value)}
      placeholder={placeholder || "Search..."}
      style={{
        background: "#fff", border: "1px solid #d1d5db", color: "#111827",
        padding: "8px 14px", borderRadius: 8, fontSize: 13, width: 240,
        outline: "none", fontFamily: "inherit", boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
      }}
    />
  );
}

const btnStyle = (type = "primary") => type === "primary" ? {
  background: "#4f46e5", color: "#fff", border: "none",
  padding: "8px 18px", borderRadius: 8, fontWeight: 600,
  fontSize: 13, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap"
} : {
  background: "#fff", color: "#6b7280", border: "1px solid #d1d5db",
  padding: "8px 18px", borderRadius: 8, fontWeight: 600,
  fontSize: 13, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap"
};

const inputStyle = {
  background: "#fff", border: "1px solid #d1d5db", color: "#111827",
  padding: "8px 14px", borderRadius: 8, fontSize: 13, fontFamily: "inherit",
  outline: "none", minWidth: 160, boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
};

// ─── REGISTRATIONS TAB ───────────────────────────────────────────────────────
function RegistrationsTab({ password }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/admin/download-registrations`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      if (!res.ok) { alert("Wrong password or server error"); setLoading(false); return; }
      const text = await res.text();
      const lines = text.trim().split("\n");
      const headers = lines[0].replace(/"/g, "").split(",");
      const parsed = lines.slice(1).map(line => {
        const vals = line.match(/(".*?"|[^,]+|(?<=,)(?=,)|^(?=,)|(?<=,)$)/g) || [];
        const obj = {};
        headers.forEach((h, i) => { obj[h] = (vals[i] || "").replace(/^"|"$/g, ""); });
        return obj;
      });
      setRows(parsed); setLoaded(true);
    } catch (e) { alert("Failed to load"); }
    setLoading(false);
  }, [password]);

  const download = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/admin/download-registrations`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      if (!res.ok) { alert("Error"); setLoading(false); return; }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = "ISML_Registrations.csv";
      document.body.appendChild(a); a.click(); a.remove();
    } catch(e) { alert("Download failed"); }
    setLoading(false);
  };

  const filtered = rows.filter(r => {
    const matchStatus = statusFilter === "ALL" || r.payment_status === statusFilter;
    const q = search.toLowerCase();
    const matchSearch = !q || r.name?.toLowerCase().includes(q) || r.email?.toLowerCase().includes(q) || r.phone?.includes(q);
    return matchStatus && matchSearch;
  });

  const counts = {
    total: rows.length,
    success: rows.filter(r => r.payment_status === "SUCCESS").length,
    initiated: rows.filter(r => r.payment_status === "INITIATED").length,
    failed: rows.filter(r => r.payment_status === "FAILED").length,
    revenue: rows.filter(r => r.payment_status === "SUCCESS").reduce((s, r) => s + parseFloat(r.amount || 0), 0)
  };

  const columns = [
    { key: "name", label: "Name", render: v => <span style={{ fontWeight: 600, color: "#111827" }}>{v}</span> },
    { key: "email", label: "Email", render: v => <span style={{ color: "#6b7280" }}>{v}</span> },
    { key: "phone", label: "Phone" },
    { key: "batch", label: "Batch" },
    { key: "language", label: "Language" },
    { key: "state", label: "State" },
    { key: "amount", label: "Amount", render: v => <span style={{ fontWeight: 600 }}>₹{v}</span> },
    { key: "payment_status", label: "Status", render: v => <StatusBadge status={v} /> },
    { key: "created_at", label: "Date", render: v => v ? new Date(v).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
  ];

  return (
    <div>
      {!loaded ? (
        <div style={{ textAlign: "center", paddingTop: 80 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📋</div>
          <p style={{ color: "#6b7280", marginBottom: 20 }}>Click below to load all registration data</p>
          <button onClick={load} disabled={loading} style={btnStyle("primary")}>
            {loading ? "Loading..." : "Load Registrations"}
          </button>
        </div>
      ) : (
        <>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
            <StatCard label="Total" value={counts.total} accent="#4f46e5" />
            <StatCard label="Success" value={counts.success} accent="#22c55e" />
            <StatCard label="Initiated" value={counts.initiated} accent="#eab308" />
            <StatCard label="Failed" value={counts.failed} accent="#ef4444" />
            <StatCard label="Revenue" value={`₹${counts.revenue.toLocaleString("en-IN")}`} accent="#06b6d4" />
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
            <SearchBar value={search} onChange={setSearch} placeholder="Search name, email, phone..." />
            <div style={{ display: "flex", gap: 6 }}>
              {["ALL", "SUCCESS", "INITIATED", "FAILED"].map(s => (
                <button key={s} onClick={() => setStatusFilter(s)} style={{
                  padding: "7px 14px", borderRadius: 8, border: "1px solid",
                  fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                  borderColor: statusFilter === s ? "#4f46e5" : "#d1d5db",
                  background: statusFilter === s ? "#eef2ff" : "#fff",
                  color: statusFilter === s ? "#4f46e5" : "#6b7280"
                }}>{s}</button>
              ))}
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <button onClick={load} style={btnStyle("secondary")} disabled={loading}>↻ Refresh</button>
              <button onClick={download} style={btnStyle("primary")} disabled={loading}>↓ Export CSV</button>
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6", color: "#9ca3af", fontSize: 12 }}>
              Showing {filtered.length} of {rows.length} records
            </div>
            <Table columns={columns} rows={filtered} emptyMsg="No records match your filter" />
          </div>
        </>
      )}
    </div>
  );
}

// ─── INFLUENCERS TAB ─────────────────────────────────────────────────────────
function InfluencersTab({ password }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [name, setName] = useState(""); const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); const [generatedLink, setGeneratedLink] = useState("");
  const [creating, setCreating] = useState(false);
  const [copied, setCopied] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/admin/download-influencers`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      if (!res.ok) { alert("Wrong password or server error"); setLoading(false); return; }
      const text = await res.text();
      const lines = text.trim().split("\n");
      const headers = lines[0].replace(/"/g, "").split(",");
      const parsed = lines.slice(1).map(line => {
        const vals = line.match(/(".*?"|[^,]+|(?<=,)(?=,)|^(?=,)|(?<=,)$)/g) || [];
        const obj = {};
        headers.forEach((h, i) => { obj[h] = (vals[i] || "").replace(/^"|"$/g, ""); });
        return obj;
      });
      setRows(parsed); setLoaded(true);
    } catch(e) { alert("Failed to load"); }
    setLoading(false);
  }, [password]);

  const createInfluencer = async () => {
    if (!name || !email || !phone) { alert("Fill all fields"); return; }
    setCreating(true);
    try {
      const res = await fetch(`${BACKEND_URL}/admin/create-influencer`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, name, email, phone })
      });
      const data = await res.json();
      if (!res.ok) { alert(data.error); setCreating(false); return; }
      setGeneratedLink(data.link);
      setName(""); setEmail(""); setPhone("");
      if (loaded) load();
    } catch(e) { alert("Error"); }
    setCreating(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filtered = rows.filter(r => {
    const q = search.toLowerCase();
    return !q || r.name?.toLowerCase().includes(q) || r.ref_code?.toLowerCase().includes(q);
  });

  const columns = [
    { key: "ref_code", label: "Ref Code", render: v => <span style={{ fontFamily: "'DM Mono', monospace", color: "#4f46e5", fontWeight: 600 }}>{v}</span> },
    { key: "name", label: "Name", render: v => <span style={{ fontWeight: 600, color: "#111827" }}>{v}</span> },
    { key: "email", label: "Email", render: v => <span style={{ color: "#6b7280" }}>{v}</span> },
    { key: "phone", label: "Phone" },
    { key: "initiated", label: "Initiated", render: v => <span style={{ color: "#ca8a04", fontWeight: 600 }}>{v || 0}</span> },
    { key: "success", label: "Success", render: v => <span style={{ color: "#16a34a", fontWeight: 600 }}>{v || 0}</span> },
    { key: "failed", label: "Failed", render: v => <span style={{ color: "#dc2626", fontWeight: 600 }}>{v || 0}</span> },
    { key: "revenue", label: "Revenue", render: v => <span style={{ color: "#0891b2", fontWeight: 700 }}>₹{parseFloat(v || 0).toLocaleString("en-IN")}</span> },
  ];

  return (
    <div>
      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 20, marginBottom: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <div style={{ color: "#6b7280", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>Create New Influencer</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          {[["Name", name, setName], ["Email", email, setEmail], ["Phone", phone, setPhone]].map(([p, v, s]) => (
            <input key={p} placeholder={p} value={v} onChange={e => s(e.target.value)} style={inputStyle} />
          ))}
          <button onClick={createInfluencer} disabled={creating} style={btnStyle("primary")}>
            {creating ? "Creating..." : "+ Generate Link"}
          </button>
        </div>
        {generatedLink && (
          <div style={{ marginTop: 14, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#16a34a", fontSize: 12, fontWeight: 700 }}>✓ LINK GENERATED</span>
            <span style={{ color: "#374151", fontSize: 13, fontFamily: "'DM Mono', monospace", flex: 1, wordBreak: "break-all" }}>{generatedLink}</span>
            <button onClick={copyLink} style={btnStyle("secondary")}>{copied ? "✓ Copied!" : "Copy"}</button>
          </div>
        )}
      </div>

      {!loaded ? (
        <div style={{ textAlign: "center", paddingTop: 20 }}>
          <button onClick={load} disabled={loading} style={btnStyle("primary")}>
            {loading ? "Loading..." : "Load Influencers"}
          </button>
        </div>
      ) : (
        <>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
            <SearchBar value={search} onChange={setSearch} placeholder="Search name or ref code..." />
            <div style={{ marginLeft: "auto" }}>
              <button onClick={load} style={btnStyle("secondary")} disabled={loading}>↻ Refresh</button>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6", color: "#9ca3af", fontSize: 12 }}>
              {filtered.length} influencers
            </div>
            <Table columns={columns} rows={filtered} emptyMsg="No influencers found" />
          </div>
        </>
      )}
    </div>
  );
}

// ─── MAIN ADMIN ──────────────────────────────────────────────────────────────
export default function Admin() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState("registrations");
  const [authLoading, setAuthLoading] = useState(false);

  const handleAuth = async () => {
    if (!password) return;
    setAuthLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/admin/download-registrations`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      if (res.ok) { setAuthed(true); }
      else { alert("Wrong password"); }
    } catch(e) { alert("Server error"); }
    setAuthLoading(false);
  };

  if (!authed) return (
    <div style={{
      minHeight: "100vh", background: "#f9fafb", display: "flex",
      alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        input::placeholder { color: #9ca3af; }
      `}</style>
      <div style={{
        background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16,
        padding: "40px 36px", width: "100%", maxWidth: 380, textAlign: "center",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
      }}>
        <div style={{ width: 48, height: 48, background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>⚡</div>
        <h1 style={{ color: "#111827", fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>ISML Admin</h1>
        <p style={{ color: "#9ca3af", fontSize: 14, margin: "0 0 28px" }}>Enter your admin password to continue</p>
        <input
          type="password" placeholder="Admin password" value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleAuth()}
          style={{ ...inputStyle, width: "100%", marginBottom: 12, padding: "12px 16px", fontSize: 14 }}
        />
        <button onClick={handleAuth} disabled={authLoading} style={{ ...btnStyle("primary"), width: "100%", padding: "12px", fontSize: 14 }}>
          {authLoading ? "Checking..." : "Enter Dashboard"}
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "'DM Sans', sans-serif", color: "#111827" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        input::placeholder { color: #9ca3af; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #f3f4f6; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }
      `}</style>

      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "14px 32px", display: "flex", alignItems: "center", gap: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#111827" }}>ISML Admin</span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e88" }} />
          <span style={{ color: "#9ca3af", fontSize: 13 }}>Live</span>
          <button onClick={() => { setAuthed(false); setPassword(""); }} style={{ ...btnStyle("secondary"), marginLeft: 8 }}>Logout</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "0 32px", display: "flex", gap: 4 }}>
        {[
          { id: "registrations", label: "📋 Registrations" },
          { id: "influencers", label: "🔗 Influencers" },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            background: "none", border: "none", cursor: "pointer", fontFamily: "inherit",
            padding: "14px 18px", fontSize: 13, fontWeight: 600,
            color: tab === t.id ? "#4f46e5" : "#6b7280",
            borderBottom: tab === t.id ? "2px solid #4f46e5" : "2px solid transparent",
            marginBottom: -1, transition: "all 0.15s"
          }}>{t.label}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "28px 32px", maxWidth: 1400, margin: "0 auto" }}>
        {tab === "registrations" && <RegistrationsTab password={password} />}
        {tab === "influencers" && <InfluencersTab password={password} />}
      </div>
    </div>
  );
}
