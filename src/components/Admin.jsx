import { useState, useCallback } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// ─── All styles are 100% inline — safe against any global CSS ────────────────

const S = {
  // Layout
  page: { minHeight: "100vh", background: "#f9fafb", fontFamily: "'DM Sans', system-ui, sans-serif", color: "#111827" },
  center: { minHeight: "100vh", background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', system-ui, sans-serif" },

  // Header
  header: { background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "14px 32px", display: "flex", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  headerLogo: { width: 32, height: 32, background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 },
  headerTitle: { fontWeight: 700, fontSize: 16, color: "#111827", margin: 0 },
  liveTag: { display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" },
  liveDot: { width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e88" },
  liveText: { color: "#9ca3af", fontSize: 13 },

  // Tabs
  tabBar: { background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "0 32px", display: "flex", gap: 4 },
  tab: (active) => ({
    background: "none", border: "none", cursor: "pointer", fontFamily: "inherit",
    padding: "14px 18px", fontSize: 13, fontWeight: 600,
    color: active ? "#4f46e5" : "#6b7280",
    borderBottom: active ? "2px solid #4f46e5" : "2px solid transparent",
    marginBottom: -1, transition: "all 0.15s"
  }),

  // Content
  content: { padding: "28px 32px", maxWidth: 1400, margin: "0 auto" },

  // Cards
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 20, marginBottom: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" },
  statCard: (accent) => ({
    background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12,
    padding: "20px 24px", flex: 1, minWidth: 140,
    borderTop: `3px solid ${accent}`, boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
  }),
  statLabel: { color: "#9ca3af", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 },
  statValue: { color: "#111827", fontSize: 26, fontWeight: 700, fontFamily: "monospace" },

  // Table
  tableWrap: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" },
  tableHead: { padding: "10px 14px", textAlign: "left", color: "#6b7280", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", borderBottom: "1px solid #e5e7eb", whiteSpace: "nowrap", background: "#f9fafb" },
  tableCell: { padding: "10px 14px", color: "#374151", whiteSpace: "nowrap", fontSize: 13 },
  tableInfo: { padding: "12px 16px", borderBottom: "1px solid #f3f4f6", color: "#9ca3af", fontSize: 12 },
  emptyMsg: { textAlign: "center", color: "#9ca3af", padding: "40px 0", fontSize: 14 },

  // Inputs
  input: { background: "#fff", border: "1px solid #d1d5db", color: "#111827", padding: "8px 14px", borderRadius: 8, fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box" },
  inputFull: { background: "#fff", border: "1px solid #d1d5db", color: "#111827", padding: "8px 14px", borderRadius: 8, fontSize: 13, fontFamily: "inherit", outline: "none", width: "100%", boxSizing: "border-box" },
  label: { fontSize: 12, color: "#6b7280", fontWeight: 600, display: "block", marginBottom: 4 },

  // Buttons
  btnPrimary: { background: "#4f46e5", color: "#fff", border: "none", padding: "8px 18px", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" },
  btnSecondary: { background: "#fff", color: "#6b7280", border: "1px solid #d1d5db", padding: "8px 18px", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" },
  btnSuccess: { background: "#16a34a", color: "#fff", border: "none", padding: "5px 12px", borderRadius: 6, fontWeight: 600, fontSize: 12, cursor: "pointer", fontFamily: "inherit" },
  btnWarning: { background: "#d97706", color: "#fff", border: "none", padding: "6px 14px", borderRadius: 6, fontWeight: 600, fontSize: 12, cursor: "pointer", fontFamily: "inherit" },
  btnDanger: { background: "#fff", color: "#6b7280", border: "1px solid #d1d5db", padding: "5px 12px", borderRadius: 6, fontWeight: 600, fontSize: 12, cursor: "pointer", fontFamily: "inherit" },

  // Status badges
  badge: (type) => {
    const map = {
      SUCCESS: { bg: "#f0fdf4", text: "#16a34a", dot: "#22c55e", border: "#bbf7d0" },
      PAID:    { bg: "#f0fdf4", text: "#16a34a", dot: "#22c55e", border: "#bbf7d0" },
      FAILED:  { bg: "#fef2f2", text: "#dc2626", dot: "#ef4444", border: "#fecaca" },
      INITIATED: { bg: "#fefce8", text: "#ca8a04", dot: "#eab308", border: "#fef08a" },
      PENDING:   { bg: "#fefce8", text: "#ca8a04", dot: "#eab308", border: "#fef08a" },
    };
    const c = map[type] || map.INITIATED;
    return { display: "inline-flex", alignItems: "center", gap: 6, background: c.bg, color: c.text, padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600, letterSpacing: 0.4, border: `1px solid ${c.border}`, dotColor: c.dot };
  },

  // Modal
  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 20 },
  modalBox: { background: "#fff", borderRadius: 16, padding: 28, width: "100%", maxWidth: 500, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" },

  // Login
  loginBox: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: "40px 36px", width: "100%", maxWidth: 380, textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" },
  loginIcon: { width: 48, height: 48, background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 },
  loginTitle: { color: "#111827", fontSize: 22, fontWeight: 700, margin: "0 0 6px" },
  loginSub: { color: "#9ca3af", fontSize: 14, margin: "0 0 28px" },
};

// ─── Components ──────────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const s = S.badge(status);
  return (
    <span style={s}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.dotColor, display: "inline-block" }} />
      {status}
    </span>
  );
}

function StatCard({ label, value, accent }) {
  return (
    <div style={S.statCard(accent)}>
      <div style={S.statLabel}>{label}</div>
      <div style={S.statValue}>{value}</div>
    </div>
  );
}

function Table({ columns, rows, emptyMsg }) {
  if (!rows || rows.length === 0) return <div style={S.emptyMsg}>{emptyMsg || "No data"}</div>;
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            {columns.map(c => <th key={c.key} style={S.tableHead}>{c.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}
              onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {columns.map(c => (
                <td key={c.key} style={{ ...S.tableCell, whiteSpace: c.wrap ? "normal" : "nowrap" }}>
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

function Modal({ title, onClose, children }) {
  return (
    <div style={S.modalOverlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={S.modalBox}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#111827" }}>{title}</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#6b7280", lineHeight: 1 }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function FilterBtn({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      padding: "7px 14px", borderRadius: 8, border: "1px solid", fontSize: 12, fontWeight: 600,
      cursor: "pointer", fontFamily: "inherit",
      borderColor: active ? "#4f46e5" : "#d1d5db",
      background: active ? "#eef2ff" : "#fff",
      color: active ? "#4f46e5" : "#6b7280"
    }}>{children}</button>
  );
}

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
    } catch { alert("Failed to load"); }
    setLoading(false);
  }, [password]);

  const download = async () => {
    const res = await fetch(`${BACKEND_URL}/admin/download-registrations`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "ISML_Registrations.csv";
    document.body.appendChild(a); a.click(); a.remove();
  };

  const filtered = rows.filter(r => {
    const matchStatus = statusFilter === "ALL" || r.payment_status === statusFilter;
    const q = search.toLowerCase();
    return matchStatus && (!q || r.name?.toLowerCase().includes(q) || r.email?.toLowerCase().includes(q) || r.phone?.includes(q));
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
    { key: "phone", label: "Phone", render: v => <span style={{ color: "#374151" }}>{v}</span> },
    { key: "batch", label: "Batch", render: v => <span style={{ color: "#374151" }}>{v || "—"}</span> },
    { key: "language", label: "Language", render: v => <span style={{ color: "#374151" }}>{v || "—"}</span> },
    { key: "state", label: "State", render: v => <span style={{ color: "#374151" }}>{v || "—"}</span> },
    { key: "referral", label: "Referral", render: v => v
      ? <span style={{ fontFamily: "monospace", color: "#4f46e5", fontSize: 12, background: "#eef2ff", padding: "2px 8px", borderRadius: 4 }}>{v}</span>
      : <span style={{ color: "#d1d5db" }}>—</span>
    },
    { key: "amount", label: "Amount", render: v => <span style={{ fontWeight: 600, color: "#111827" }}>₹{v}</span> },
    { key: "payment_status", label: "Status", render: v => <StatusBadge status={v} /> },
    { key: "created_at", label: "Date", render: v => v ? <span style={{ color: "#6b7280" }}>{new Date(v).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</span> : "—" },
  ];

  if (!loaded) return (
    <div style={{ textAlign: "center", paddingTop: 80 }}>
      <div style={{ fontSize: 40, marginBottom: 16 }}>📋</div>
      <p style={{ color: "#6b7280", marginBottom: 20, fontSize: 14 }}>Click to load registration data</p>
      <button onClick={load} disabled={loading} style={S.btnPrimary}>{loading ? "Loading..." : "Load Registrations"}</button>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
        <StatCard label="Total" value={counts.total} accent="#4f46e5" />
        <StatCard label="Success" value={counts.success} accent="#22c55e" />
        <StatCard label="Initiated" value={counts.initiated} accent="#eab308" />
        <StatCard label="Failed" value={counts.failed} accent="#ef4444" />
        <StatCard label="Revenue" value={`₹${counts.revenue.toLocaleString("en-IN")}`} accent="#06b6d4" />
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, email, phone..."
          style={{ ...S.input, width: 260 }} />
        <div style={{ display: "flex", gap: 6 }}>
          {["ALL", "SUCCESS", "INITIATED", "FAILED"].map(s => (
            <FilterBtn key={s} active={statusFilter === s} onClick={() => setStatusFilter(s)}>{s}</FilterBtn>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button onClick={load} style={S.btnSecondary} disabled={loading}>↻ Refresh</button>
          <button onClick={download} style={S.btnPrimary}>↓ Export CSV</button>
        </div>
      </div>

      <div style={S.tableWrap}>
        <div style={S.tableInfo}>Showing {filtered.length} of {rows.length} records</div>
        <Table columns={columns} rows={filtered} emptyMsg="No records match" />
      </div>
    </div>
  );
}

// ─── INFLUENCERS TAB ─────────────────────────────────────────────────────────
function InfluencersTab({ password }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");

  // Create form — matches DB: name, email, phone, referred_by (ref_code), referred_by_name
  const [form, setForm] = useState({ name: "", email: "", phone: "", referred_by: "", referred_by_name: "" });
  const [generatedLink, setGeneratedLink] = useState("");
  const [creating, setCreating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Edit modal
  const [editRow, setEditRow] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/admin/get-influencers`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      if (!res.ok) { alert("Error loading"); setLoading(false); return; }
      const data = await res.json();
      setRows(data); setLoaded(true);
    } catch { alert("Failed to load"); }
    setLoading(false);
  }, [password]);

  const createInfluencer = async () => {
    if (!form.name || !form.email || !form.phone) { alert("Name, email and phone are required"); return; }
    setCreating(true);
    try {
      const res = await fetch(`${BACKEND_URL}/admin/create-influencer`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, ...form })
      });
      const data = await res.json();
      if (!res.ok) { alert(data.error); setCreating(false); return; }
      setGeneratedLink(data.link);
      setForm({ name: "", email: "", phone: "", referred_by: "", referred_by_name: "" });
      if (loaded) load();
    } catch { alert("Error creating"); }
    setCreating(false);
  };

  const openEdit = (row) => {
    setEditRow(row);
    setEditForm({
      name: row.name || "",
      email: row.email || "",
      phone: row.phone || "",
      referred_by: row.referred_by || "",
      referred_by_name: row.referred_by_name || ""
    });
  };

  const saveEdit = async () => {
    setSaving(true);
    try {
      const res = await fetch(`${BACKEND_URL}/admin/edit-influencer`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, ref_code: editRow.ref_code, ...editForm })
      });
      const data = await res.json();
      if (!res.ok) { alert(data.error); setSaving(false); return; }
      setEditRow(null);
      load();
    } catch { alert("Error saving"); }
    setSaving(false);
  };

  const filtered = rows.filter(r => {
    const q = search.toLowerCase();
    return !q || r.name?.toLowerCase().includes(q) || r.ref_code?.toLowerCase().includes(q) || r.email?.toLowerCase().includes(q);
  });

  const totalPending = rows.reduce((s, r) => s + parseFloat(r.pending_payout || 0), 0);
  const totalPaid    = rows.reduce((s, r) => s + parseFloat(r.paid_payout || 0), 0);

  const columns = [
    { key: "ref_code", label: "Ref Code", render: v => <span style={{ fontFamily: "monospace", color: "#4f46e5", fontWeight: 600, fontSize: 12 }}>{v}</span> },
    { key: "name", label: "Name", render: v => <span style={{ fontWeight: 600, color: "#111827" }}>{v}</span> },
    { key: "email", label: "Email", render: v => <span style={{ color: "#6b7280" }}>{v}</span> },
    { key: "phone", label: "Phone", render: v => <span style={{ color: "#374151" }}>{v}</span> },
    { key: "referred_by", label: "Referred By (Code)", render: v => v
      ? <span style={{ fontFamily: "monospace", color: "#7c3aed", fontSize: 12, background: "#faf5ff", padding: "2px 8px", borderRadius: 4 }}>{v}</span>
      : <span style={{ color: "#d1d5db" }}>—</span>
    },
    { key: "referred_by_name", label: "Referred By (Name)", render: v => v
      ? <span style={{ fontWeight: 600, color: "#7c3aed" }}>{v}</span>
      : <span style={{ color: "#d1d5db" }}>—</span>
    },
    { key: "success", label: "Sales", render: v => <span style={{ color: "#16a34a", fontWeight: 700 }}>{v || 0}</span> },
    { key: "pending_payout", label: "Pending ₹", render: v => <span style={{ color: "#d97706", fontWeight: 700 }}>₹{parseFloat(v || 0).toLocaleString("en-IN")}</span> },
    { key: "paid_payout", label: "Paid ₹", render: v => <span style={{ color: "#16a34a", fontWeight: 700 }}>₹{parseFloat(v || 0).toLocaleString("en-IN")}</span> },
    { key: "total_earnings", label: "Total ₹", render: v => <span style={{ color: "#4f46e5", fontWeight: 700 }}>₹{parseFloat(v || 0).toLocaleString("en-IN")}</span> },
    { key: "_edit", label: "Action", render: (_, row) => (
      <button onClick={() => openEdit(row)} style={S.btnDanger}>✏️ Edit</button>
    )},
  ];

  return (
    <div>
      {/* Create Form */}
      <div style={S.card}>
        <div style={{ color: "#6b7280", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>➕ Create New Influencer</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          {[["Name *", "name", 150], ["Email *", "email", 190], ["Phone *", "phone", 140]].map(([label, key, w]) => (
            <div key={key}>
              <div style={S.label}>{label}</div>
              <input placeholder={label.replace(" *","")} value={form[key]}
                onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                style={{ ...S.input, width: w }} />
            </div>
          ))}
          <div>
            <div style={S.label}>Referred By — Ref Code</div>
            <input placeholder="INF123... (optional)" value={form.referred_by}
              onChange={e => setForm(f => ({ ...f, referred_by: e.target.value }))}
              style={{ ...S.input, width: 170 }} />
          </div>
          <div>
            <div style={S.label}>Referred By — Name</div>
            <input placeholder="Their name (optional)" value={form.referred_by_name}
              onChange={e => setForm(f => ({ ...f, referred_by_name: e.target.value }))}
              style={{ ...S.input, width: 170 }} />
          </div>
          <button onClick={createInfluencer} disabled={creating} style={{ ...S.btnPrimary, alignSelf: "flex-end" }}>
            {creating ? "Creating..." : "+ Generate Link"}
          </button>
        </div>

        {generatedLink && (
          <div style={{ marginTop: 14, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ color: "#16a34a", fontSize: 12, fontWeight: 700 }}>✓ LINK GENERATED</span>
            <span style={{ color: "#374151", fontSize: 13, fontFamily: "monospace", flex: 1, wordBreak: "break-all" }}>{generatedLink}</span>
            <button onClick={() => { navigator.clipboard.writeText(generatedLink); setCopied(true); setTimeout(() => setCopied(false), 2000); }} style={S.btnSecondary}>
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        )}
      </div>

      {!loaded ? (
        <div style={{ textAlign: "center", paddingTop: 20 }}>
          <button onClick={load} disabled={loading} style={S.btnPrimary}>{loading ? "Loading..." : "Load Influencers"}</button>
        </div>
      ) : (
        <>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
            <StatCard label="Total Influencers" value={rows.length} accent="#4f46e5" />
            <StatCard label="Pending Payouts" value={`₹${totalPending.toLocaleString("en-IN")}`} accent="#d97706" />
            <StatCard label="Total Paid Out" value={`₹${totalPaid.toLocaleString("en-IN")}`} accent="#22c55e" />
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, ref code, email..."
              style={{ ...S.input, width: 280 }} />
            <div style={{ marginLeft: "auto" }}>
              <button onClick={load} style={S.btnSecondary} disabled={loading}>↻ Refresh</button>
            </div>
          </div>

          <div style={S.tableWrap}>
            <div style={S.tableInfo}>{filtered.length} influencer{filtered.length !== 1 ? "s" : ""}</div>
            <Table columns={columns} rows={filtered} emptyMsg="No influencers found" />
          </div>
        </>
      )}

      {/* Edit Modal */}
      {editRow && (
        <Modal title={`Edit — ${editRow.name} (${editRow.ref_code})`} onClose={() => setEditRow(null)}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[["Name", "name"], ["Email", "email"], ["Phone", "phone"]].map(([label, key]) => (
              <div key={key}>
                <label style={S.label}>{label}</label>
                <input value={editForm[key]} onChange={e => setEditForm(f => ({ ...f, [key]: e.target.value }))} style={S.inputFull} />
              </div>
            ))}
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Referral Chain</div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <label style={S.label}>Referred By — Ref Code</label>
                  <input value={editForm.referred_by} placeholder="INF123... (blank to remove)"
                    onChange={e => setEditForm(f => ({ ...f, referred_by: e.target.value }))} style={S.inputFull} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={S.label}>Referred By — Name</label>
                  <input value={editForm.referred_by_name} placeholder="Their name"
                    onChange={e => setEditForm(f => ({ ...f, referred_by_name: e.target.value }))} style={S.inputFull} />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8 }}>
              <button onClick={() => setEditRow(null)} style={S.btnSecondary}>Cancel</button>
              <button onClick={saveEdit} disabled={saving} style={S.btnPrimary}>{saving ? "Saving..." : "Save Changes"}</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── PAYOUTS TAB ─────────────────────────────────────────────────────────────
function PayoutsTab({ password }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [markingId, setMarkingId] = useState(null);
  const [markingAll, setMarkingAll] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/admin/get-payouts`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      if (!res.ok) { alert("Error loading payouts"); setLoading(false); return; }
      const data = await res.json();
      setRows(data); setLoaded(true);
    } catch { alert("Failed"); }
    setLoading(false);
  }, [password]);

  const markPaid = async (id) => {
    setMarkingId(id);
    await fetch(`${BACKEND_URL}/admin/mark-payout-paid`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, payout_id: id })
    });
    await load();
    setMarkingId(null);
  };

  const markAllPaid = async (ref_code) => {
    setMarkingAll(ref_code);
    await fetch(`${BACKEND_URL}/admin/mark-all-paid`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, ref_code })
    });
    await load();
    setMarkingAll(null);
  };

  const download = async () => {
    const res = await fetch(`${BACKEND_URL}/admin/download-payouts`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "ISML_Payouts.csv";
    document.body.appendChild(a); a.click(); a.remove();
  };

  const filtered = rows.filter(r => {
    const matchStatus = statusFilter === "ALL" || r.status === statusFilter;
    const q = search.toLowerCase();
    return matchStatus && (!q || r.influencer_name?.toLowerCase().includes(q) || r.influencer_ref_code?.toLowerCase().includes(q) || r.customer_name?.toLowerCase().includes(q));
  });

  const totalPending = rows.filter(r => r.status === "PENDING").reduce((s, r) => s + parseFloat(r.amount || 0), 0);
  const totalPaid    = rows.filter(r => r.status === "PAID").reduce((s, r) => s + parseFloat(r.amount || 0), 0);

  const pendingByInfluencer = rows.filter(r => r.status === "PENDING").reduce((acc, r) => {
    if (!acc[r.influencer_ref_code]) acc[r.influencer_ref_code] = { name: r.influencer_name, ref_code: r.influencer_ref_code, total: 0, count: 0 };
    acc[r.influencer_ref_code].total += parseFloat(r.amount || 0);
    acc[r.influencer_ref_code].count += 1;
    return acc;
  }, {});

  const columns = [
    { key: "influencer_name", label: "Influencer", render: (v, row) => (
      <div>
        <div style={{ fontWeight: 600, color: "#111827" }}>{v}</div>
        <div style={{ fontFamily: "monospace", color: "#4f46e5", fontSize: 11 }}>{row.influencer_ref_code}</div>
      </div>
    )},
    { key: "level", label: "Level", render: v => (
      <span style={{ background: v == 1 ? "#eef2ff" : "#faf5ff", color: v == 1 ? "#4f46e5" : "#7c3aed", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>
        L{v} · {v == 1 ? "₹200" : "₹50"}
      </span>
    )},
    { key: "customer_name", label: "Customer", render: (v, row) => (
      <div>
        <div style={{ color: "#374151", fontWeight: 600 }}>{v}</div>
        <div style={{ color: "#9ca3af", fontSize: 11 }}>{row.customer_email}</div>
      </div>
    )},
    { key: "txnid", label: "TXN ID", render: v => <span style={{ fontFamily: "monospace", fontSize: 11, color: "#6b7280" }}>{v}</span> },
    { key: "amount", label: "Amount", render: v => <span style={{ fontWeight: 700, color: "#111827" }}>₹{v}</span> },
    { key: "status", label: "Status", render: v => <StatusBadge status={v} /> },
    { key: "created_at", label: "Date", render: v => v ? <span style={{ color: "#6b7280" }}>{new Date(v).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</span> : "—" },
    { key: "paid_at", label: "Paid On", render: v => v ? <span style={{ color: "#16a34a" }}>{new Date(v).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</span> : <span style={{ color: "#d1d5db" }}>—</span> },
    { key: "_action", label: "", render: (_, row) => row.status === "PENDING"
      ? <button onClick={() => markPaid(row.id)} disabled={markingId === row.id} style={S.btnSuccess}>{markingId === row.id ? "..." : "Mark Paid"}</button>
      : <span style={{ color: "#16a34a", fontSize: 12, fontWeight: 600 }}>✓ Paid</span>
    },
  ];

  if (!loaded) return (
    <div style={{ textAlign: "center", paddingTop: 80 }}>
      <div style={{ fontSize: 40, marginBottom: 16 }}>💰</div>
      <p style={{ color: "#6b7280", marginBottom: 20, fontSize: 14 }}>Click to load payout data</p>
      <button onClick={load} disabled={loading} style={S.btnPrimary}>{loading ? "Loading..." : "Load Payouts"}</button>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
        <StatCard label="Total Payouts" value={rows.length} accent="#4f46e5" />
        <StatCard label="Pending" value={`₹${totalPending.toLocaleString("en-IN")}`} accent="#d97706" />
        <StatCard label="Paid Out" value={`₹${totalPaid.toLocaleString("en-IN")}`} accent="#22c55e" />
      </div>

      {/* Quick Settle */}
      {Object.keys(pendingByInfluencer).length > 0 && (
        <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 12, padding: 16, marginBottom: 20 }}>
          <div style={{ color: "#92400e", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>⚡ Pending — Quick Settle</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {Object.values(pendingByInfluencer).map(inf => (
              <div key={inf.ref_code} style={{ background: "#fff", border: "1px solid #fde68a", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: "#111827" }}>{inf.name}</div>
                  <div style={{ fontSize: 11, color: "#6b7280" }}>{inf.ref_code} · {inf.count} payout{inf.count > 1 ? "s" : ""}</div>
                </div>
                <span style={{ fontWeight: 700, color: "#d97706", fontSize: 15 }}>₹{inf.total.toLocaleString("en-IN")}</span>
                <button onClick={() => markAllPaid(inf.ref_code)} disabled={markingAll === inf.ref_code} style={S.btnWarning}>
                  {markingAll === inf.ref_code ? "Settling..." : "Mark All Paid"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search influencer or customer..."
          style={{ ...S.input, width: 280 }} />
        <div style={{ display: "flex", gap: 6 }}>
          {["ALL", "PENDING", "PAID"].map(s => (
            <FilterBtn key={s} active={statusFilter === s} onClick={() => setStatusFilter(s)}>{s}</FilterBtn>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button onClick={load} style={S.btnSecondary} disabled={loading}>↻ Refresh</button>
          <button onClick={download} style={S.btnPrimary}>↓ Export CSV</button>
        </div>
      </div>

      <div style={S.tableWrap}>
        <div style={S.tableInfo}>Showing {filtered.length} of {rows.length} payouts</div>
        <Table columns={columns} rows={filtered} emptyMsg="No payouts found" />
      </div>
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
      if (res.ok) setAuthed(true);
      else alert("Wrong password");
    } catch { alert("Server error"); }
    setAuthLoading(false);
  };

  // ── Login Screen ──
  if (!authed) return (
    <div style={S.center}>
      <div style={S.loginBox}>
        <div style={S.loginIcon}>⚡</div>
        <h1 style={S.loginTitle}>ISML Admin</h1>
        <p style={S.loginSub}>Enter your admin password to continue</p>
        <input type="password" placeholder="Admin password" value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleAuth()}
          style={{ ...S.inputFull, padding: "12px 16px", fontSize: 14, marginBottom: 12 }} />
        <button onClick={handleAuth} disabled={authLoading}
          style={{ ...S.btnPrimary, width: "100%", padding: "12px", fontSize: 14 }}>
          {authLoading ? "Checking..." : "Enter Dashboard"}
        </button>
      </div>
    </div>
  );

  // ── Dashboard ──
  return (
    <div style={S.page}>
      {/* Header */}
      <div style={S.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={S.headerLogo}>⚡</div>
          <span style={S.headerTitle}>ISML Admin</span>
        </div>
        <div style={S.liveTag}>
          <div style={S.liveDot} />
          <span style={S.liveText}>Live</span>
          <button onClick={() => { setAuthed(false); setPassword(""); }}
            style={{ ...S.btnSecondary, marginLeft: 8 }}>Logout</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={S.tabBar}>
        {[
          { id: "registrations", label: "📋 Registrations" },
          { id: "influencers",   label: "🔗 Influencers" },
          { id: "payouts",       label: "💰 Payouts" },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={S.tab(tab === t.id)}>{t.label}</button>
        ))}
      </div>

      {/* Content */}
      <div style={S.content}>
        {tab === "registrations" && <RegistrationsTab password={password} />}
        {tab === "influencers"   && <InfluencersTab   password={password} />}
        {tab === "payouts"       && <PayoutsTab        password={password} />}
      </div>
    </div>
  );
}
