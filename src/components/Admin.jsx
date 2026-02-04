import { useState } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const downloadData = async () => {
    setLoading(true);

    // 1. GET URL FROM ENV VARIABLES
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    // Safety Check
    if (!BACKEND_URL) {
      alert("CONFIGURATION ERROR: VITE_BACKEND_URL is missing.");
      setLoading(false);
      return;
    }

    try {
      // ✅ FIXED: Using 'BACKEND_URL' variable correctly here
      const res = await fetch(
        `${BACKEND_URL}/admin/download-registrations`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password })
        }
      );

      if (!res.ok) {
        alert("Wrong password or Server Error");
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

    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to connect to server.");
    }

    setLoading(false);
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2>Admin Access</h2>

        <input
          type="password"
          className="admin-input"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          onClick={downloadData} 
          className="admin-button" 
          disabled={loading}
        >
          {loading ? "Downloading..." : "Download Registrations"}
        </button>
      </div>
    </div>
  );
}