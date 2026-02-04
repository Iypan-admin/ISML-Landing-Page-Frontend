import { useState } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const downloadData = async () => {
    setLoading(true);

    const res = await fetch(
      "https://isml-backend-production.up.railway.app/admin/download-registrations",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      }
    );

    if (!res.ok) {
      alert("Wrong password");
      setLoading(false);
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ISML_Registrations.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>Admin Access</h2>

        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={downloadData} style={styles.button} disabled={loading}>
          {loading ? "Downloading..." : "Download Registrations"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f8fafc"
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  input: {
    padding: "10px",
    width: "100%",
    marginBottom: "15px"
  },
  button: {
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};
