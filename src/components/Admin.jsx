import { useState } from "react";

export default function Admin() {

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ⭐ Create Influencer States
  const [infName, setInfName] = useState("");
  const [infEmail, setInfEmail] = useState("");
  const [infPhone, setInfPhone] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  // ⭐ Influencer Analytics States
  const [refSearch, setRefSearch] = useState("");
  const [stats, setStats] = useState(null);

  /* ---------------------------------------
     DOWNLOAD REGISTRATIONS CSV
  --------------------------------------- */
  const downloadData = async () => {

    setLoading(true);

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    if (!BACKEND_URL) {
      alert("CONFIGURATION ERROR: VITE_BACKEND_URL missing.");
      setLoading(false);
      return;
    }

    try {

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

  /* ---------------------------------------
     CREATE INFLUENCER LINK
  --------------------------------------- */
  const createInfluencer = async () => {

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    console.log("Backend URL:", BACKEND_URL); 

    if (!BACKEND_URL) {
      alert("Backend URL missing");
      return;
    }

    try {

      const res = await fetch(
        `${BACKEND_URL}/admin/create-influencer`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password,
            name: infName,
            email: infEmail,
            phone: infPhone
          })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to create influencer");
        return;
      }

      setGeneratedLink(data.link);

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  /* ---------------------------------------
     GET INFLUENCER STATS
  --------------------------------------- */
  const getStats = async () => {

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    try {

      const res = await fetch(
        `${BACKEND_URL}/admin/influencer-stats`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password,
            ref_code: refSearch
          })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to fetch stats");
        return;
      }

      setStats(data);

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  /* ---------------------------------------
     UI
  --------------------------------------- */
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

        <hr style={{ margin: "20px 0" }} />

        {/* ---------------- CREATE INFLUENCER ---------------- */}
        <h3>Create Influencer Link</h3>

        <input
          className="admin-input"
          placeholder="Influencer Name"
          value={infName}
          onChange={(e) => setInfName(e.target.value)}
        />

        <input
          className="admin-input"
          placeholder="Influencer Email"
          value={infEmail}
          onChange={(e) => setInfEmail(e.target.value)}
        />

        <input
          className="admin-input"
          placeholder="Influencer Phone"
          value={infPhone}
          onChange={(e) => setInfPhone(e.target.value)}
        />

        <button
          onClick={createInfluencer}
          className="admin-button"
        >
          Generate Link
        </button>

        {generatedLink && (
          <p style={{ marginTop: "10px", wordBreak: "break-all" }}>
            Generated Link: {generatedLink}
          </p>
        )}

        <hr style={{ margin: "20px 0" }} />

        {/* ---------------- ANALYTICS ---------------- */}
        <h3>Influencer Analytics</h3>

        <input
          className="admin-input"
          placeholder="Enter Ref Code (ex: INF12345)"
          value={refSearch}
          onChange={(e) => setRefSearch(e.target.value)}
        />

        <button
          onClick={getStats}
          className="admin-button"
        >
          Get Stats
        </button>

        {stats && (
        <div style={{ marginTop: "10px" }}>
          <p>Initiated: {stats.initiated}</p>
          <p>Success: {stats.success}</p>
          <p>Failed: {stats.failed}</p>
          <p>Revenue: ₹{stats.revenue || 0}</p>
        </div>
      )}

      </div>
    </div>
  );
}
