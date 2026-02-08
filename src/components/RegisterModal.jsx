import React, { useState } from "react";

export default function RegisterModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    state: "",
    batch: "",
    language: "" 
  });

  const [errors, setErrors] = useState({});

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;
    if (!formData.name.trim()) { newErrors.name = "Full Name is required"; isValid = false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) { newErrors.email = "Email is required"; isValid = false; } 
    else if (!emailRegex.test(formData.email)) { newErrors.email = "Invalid email address"; isValid = false; }
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) { newErrors.phone = "WhatsApp Number is required"; isValid = false; } 
    else if (!phoneRegex.test(formData.phone)) { newErrors.phone = "Enter a valid 10-digit number"; isValid = false; }
    if (!formData.profession) { newErrors.profession = "Select a profession"; isValid = false; }
    if (!formData.state) { newErrors.state = "Select your state"; isValid = false; }
    if (!formData.batch) { newErrors.batch = "Select a batch"; isValid = false; }
    if (!formData.language) { 
      newErrors.language = "Select a language"; 
      isValid = false; 
    }
    setErrors(newErrors);
    return isValid;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; 

    // 👇 STRICT: Reads only from environment variables
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    // Safety Check for Developer
    if (!BACKEND_URL) {
      alert("CONFIGURATION ERROR: Backend URL is missing. Check your VITE_BACKEND_URL variable.");
      console.error("VITE_BACKEND_URL is not set.");
      return;
    }

    try {

          // ⭐ Meta Pixel - InitiateCheckout
      if (window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
          value: 1299,
          currency: 'INR'
        });
      }



      const res = await fetch(
        `${BACKEND_URL}/create-payment`, 
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            profession: formData.profession,
            state: formData.state,
            batch: formData.batch,
            language: formData.language,
            amount: "1299.00" 
          })
        }
      );

      const data = await res.json();
      
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://secure.payu.in/_payment"; 
      const fields = {
        key: data.key,
        txnid: data.txnid,
        amount: data.amount,
        productinfo: data.productinfo,
        firstname: data.firstname,
        email: data.email,
        phone: data.phone,
        surl: data.surl,
        furl: data.furl,
        hash: data.hash
      };
      for (const name in fields) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = fields[name];
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();

    } catch (err) {
      console.error(err);
      alert("Payment initiation failed. Please check your connection.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <h3>Secure Your Spot</h3>
          <p>Register for the ISML Foundation Program 2026.</p>
        </div>
        <form className="register-form" onSubmit={handlePayment} noValidate>
          <div className="form-group-full">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Ex: Rahul Sharma" value={formData.name} onChange={handleChange} style={errors.name ? { borderColor: "#ef4444", backgroundColor: "#fef2f2" } : {}} />
            {errors.name && <small style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errors.name}</small>}
          </div>
          <div className="form-group-full">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="rahul@example.com" value={formData.email} onChange={handleChange} style={errors.email ? { borderColor: "#ef4444", backgroundColor: "#fef2f2" } : {}} />
            {errors.email && <small style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errors.email}</small>}
          </div>
          <div className="form-group-full">
            <label>WhatsApp Number</label>
            <div className="phone-input" style={errors.phone ? { borderColor: "#ef4444", backgroundColor: "#fef2f2", border: "1px solid #ef4444", borderRadius: "10px" } : {}}>
              <span>🇮🇳 +91</span>
              <input type="tel" name="phone" maxLength="10" placeholder="9876543210" value={formData.phone} onChange={(e) => { const re = /^[0-9\b]+$/; if (e.target.value === '' || re.test(e.target.value)) { handleChange(e); } }} />
            </div>
            {errors.phone && <small style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errors.phone}</small>}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Profession</label>
              <select name="profession" value={formData.profession} onChange={handleChange} style={errors.profession ? { borderColor: "#ef4444", backgroundColor: "#fef2f2" } : {}}>
                <option value="" disabled>Select...</option>
                <option>Student</option>
                <option>Working Professional</option>
                <option>Home Maker</option>
              </select>
              {errors.profession && <small style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errors.profession}</small>}
            </div>
            <div className="form-group">
              <label>State</label>
              <select name="state" value={formData.state} onChange={handleChange} style={errors.state ? { borderColor: "#ef4444", backgroundColor: "#fef2f2" } : {}}>
                <option value="" disabled>Select State...</option>
                {indianStates.map((st) => ( <option key={st} value={st}>{st}</option> ))}
              </select>
              {errors.state && <small style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errors.state}</small>}
            </div>
          </div>
          {/* ⭐ Preferred Language */}
            <div className="form-group-full" style={{marginTop: '16px'}}>
              <label>Preferred Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                style={errors.language ? { borderColor: "#ef4444", backgroundColor: "#fef2f2" } : {}}
              >
                <option value="" disabled>Select Language...</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
              {errors.language && (
                <small style={{ color: "#ef4444", fontSize: "0.75rem" }}>
                  {errors.language}
                </small>
              )}
            </div>

            {/* ⭐ Preferred Batch */}
            <div className="form-group-full" style={{marginTop: '16px'}}>
              <label>Preferred Batch</label>
              <select
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                style={errors.batch ? { borderColor: "#ef4444", backgroundColor: "#fef2f2" } : {}}
              >
                <option value="" disabled>Select Batch...</option>
                <option value="Weekday slot 7 to 9">Weekday (Mon / Wed / Fri)(Timing : 7:00 PM to 9:00 PM)</option>
                <option value="Weekday slot 11 to 1">Weekday (Mon / Wed / Fri)(Timing : 11:00 AM to 1:00 PM)</option>
                <option value="Weekend slot 11 to 1">Weekend (Sat / Sun)(Timing : 11:00 AM to 1:00 PM)</option>
                <option value="Weekend slot 7 to 9">Weekend (Sat / Sun)(Timing : 7:00 PM to 9:00 PM)</option>
              </select>
              {errors.batch && <small style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errors.batch}</small>}
            </div>

          <button type="submit" className="submit-btn pulse-btn">Proceed to Payment (₹1299)</button>
          <p className="privacy-note">
              By proceeding, you agree to our{" "}
              <a 
                href="https://www.indianschoolformodernlanguages.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a 
                href="https://www.indianschoolformodernlanguages.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>.
            </p>
        </form>
      </div>
    </div>
  );
}