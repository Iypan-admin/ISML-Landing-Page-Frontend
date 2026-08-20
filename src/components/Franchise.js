import React from 'react';
import './Franchise.css';
import { motion } from 'framer-motion';
import { 
  FaBuilding, 
  FaUserShield, 
  FaChalkboardTeacher, 
  FaUserGraduate, 
  FaBook, 
  FaCheckCircle, 
  FaChartLine, 
  FaRobot, 
  FaCertificate, 
  FaCalendarCheck, 
  FaMoneyBillWave, 
  FaArrowRight, 
  FaPhoneAlt, 
  FaGlobe, 
  FaNetworkWired,
  FaArrowDown
} from 'react-icons/fa';

const Franchise = () => {
  const platformFlow = [
    { label: 'Student Inquiry', num: 1 },
    { label: 'Counselling', num: 2 },
    { label: 'Admission', num: 3 },
    { label: 'Course', num: 4 },
    { label: 'Batch', num: 5 },
    { label: 'Classes', num: 6 },
    { label: 'Attendance', num: 7 },
    { label: 'Study Materials', num: 8 },
    { label: 'Exams', num: 9 },
    { label: 'Certificate', num: 10 }
  ];

  const coreFeatures = [
    { title: 'Student Management', icon: <FaUserGraduate />, bg: '#4285F4', light: '#EBF2FF' },
    { title: 'Teacher Management', icon: <FaChalkboardTeacher />, bg: '#EA4335', light: '#FFEBEE' },
    { title: 'Course & Batch', icon: <FaBook />, bg: '#F59E0B', light: '#FFFBEB' },
    { title: 'Attendance System', icon: <FaCalendarCheck />, bg: '#22C55E', light: '#F0FDF4' },
    { title: 'Study Materials', icon: <FaBook />, bg: '#8B5CF6', light: '#F5F3FF' },
    { title: 'Exams & Assessment', icon: <FaCertificate />, bg: '#06B6D4', light: '#ECFEFF' },
    { title: 'Fee Management', icon: <FaMoneyBillWave />, bg: '#EC4899', light: '#FDF2F8' },
    { title: 'Certificates Engine', icon: <FaCertificate />, bg: '#F97316', light: '#FFF7ED' },
    { title: 'Reports & Analytics', icon: <FaChartLine />, bg: '#3B82F6', light: '#EFF6FF' },
    { title: 'AI Ready Integration', icon: <FaRobot />, bg: '#10B981', light: '#ECFDF5' }
  ];

  const languages = [
    { name: 'French', flag: '🇫🇷', status: 'Active', bg: '#EFF6FF', border: '#BFDBFE', txtColor: '#1D4ED8' },
    { name: 'German', flag: '🇩🇪', status: 'Active', bg: '#FEF2F2', border: '#FECACA', txtColor: '#DC2626' },
    { name: 'Japanese', flag: '🇯🇵', status: 'Active', bg: '#FFF7ED', border: '#FED7AA', txtColor: '#EA580C' },
    { name: 'Korean', flag: '🇰🇷', status: 'Active', bg: '#F0FDF4', border: '#BBF7D0', txtColor: '#15803D' },
    { name: 'Spanish', flag: '🇪🇸', status: 'Future', bg: '#FAF5FF', border: '#E9D5FF', txtColor: '#7C3AED' },
    { name: 'Italian', flag: '🇮🇹', status: 'Future', bg: '#ECFEFF', border: '#A5F3FC', txtColor: '#0E7490' },
    { name: 'Mandarin', flag: '🇨🇳', status: 'Future', bg: '#FFF1F2', border: '#FECDD3', txtColor: '#BE123C' }
  ];

  const userHierarchy = [
    { role: 'Platform Admin', desc: 'Full System Control', icon: <FaUserShield />, color: '#1a237e', light: '#EEF2FF' },
    { role: 'Master Franchise', desc: 'Regional Supervision', icon: <FaBuilding />, color: '#0288d1', light: '#E0F2FE' },
    { role: 'Centre Admin', desc: 'Centre Operations', icon: <FaNetworkWired />, color: '#0097a7', light: '#ECFEFF' },
    { role: 'Academic / Finance / Teachers', desc: 'Daily Operations', icon: <FaChalkboardTeacher />, color: '#16a34a', light: '#F0FDF4' },
    { role: 'Students', desc: 'Learning & Exams', icon: <FaUserGraduate />, color: '#EA580C', light: '#FFF7ED' }
  ];

  const whyCards = [
    { icon: <FaGlobe />, title: 'One Platform for All Centres', desc: 'Unify all language centres under one central software ecosystem.', bg: '#EFF6FF', border: '#BFDBFE', iconBg: '#2563EB' },
    { icon: <FaUserShield />, title: 'Independent Data Security', desc: 'Isolated data storage for every centre with role-based access control.', bg: '#F5F3FF', border: '#DDD6FE', iconBg: '#7C3AED' },
    { icon: <FaChartLine />, title: 'Real-Time Live Monitoring', desc: 'Track student enrollments, teacher schedules, and revenue live.', bg: '#F0FDFA', border: '#99F6E4', iconBg: '#0D9488' },
    { icon: <FaCertificate />, title: 'Centralized Analytics', desc: 'Instant consolidated financial and academic reports across all branches.', bg: '#FFF1F2', border: '#FECDD3', iconBg: '#E11D48' },
    { icon: <FaMoneyBillWave />, title: 'Faster Operations & Exams', desc: 'Accelerate admissions, automated fee collection, and digital examinations.', bg: '#FFFBEB', border: '#FDE68A', iconBg: '#D97706' }
  ];

  const benefits = [
    {
      icon: <FaBuilding />, title: 'Head Office', headerBg: '#1a237e',
      items: ['Live network monitoring', 'Consolidated financial & academic reports', 'Multi-centre franchise management'],
      bg: '#EFF6FF', border: '#BFDBFE'
    },
    {
      icon: <FaNetworkWired />, title: 'Franchise Centre', headerBg: '#0288d1',
      items: ['Complete daily operations in one system', 'Automated fee collections & reminders', 'Efficient teacher & batch scheduling'],
      bg: '#ECFEFF', border: '#A5F3FC'
    },
    {
      icon: <FaUserGraduate />, title: 'Students', headerBg: '#0D9488',
      items: ['Superior interactive learning experience', 'Digital academic records & certificates', 'Easy access to study materials & exams'],
      bg: '#F0FDF4', border: '#BBF7D0'
    }
  ];

  return (
    <div className="fp-wrapper">

      {/* ── Hero ── */}
      <section className="fp-hero">
        <div className="fp-hero-glow" />
        <div className="fp-hero-inner">
          <motion.span className="fp-hero-badge"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Multi-Centre Franchise Management System
          </motion.span>

          <motion.h1 className="fp-hero-title"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            ISML Language Learning Platform
          </motion.h1>

          <motion.p className="fp-hero-tagline"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            One Platform <span className="fp-dot">•</span> Unlimited Centres <span className="fp-dot">•</span> Complete Control
          </motion.p>

          <motion.a href="tel:7338881781" className="fp-cta-btn"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <FaPhoneAlt /> Call For Franchise: 7338881781
          </motion.a>
        </div>
      </section>

      {/* ── Business Flow ── */}
      <section className="fp-section fp-section-white">
        <div className="fp-container">
          <div className="fp-sec-head">
            <span className="fp-tag fp-tag-blue">System Design</span>
            <h2>Business Overview</h2>
            <p>Every centre works independently while Head Office monitors the entire network.</p>
          </div>

          {/* Desktop row */}
          <div className="fp-flow-row">
            {[
              { icon: <FaBuilding />, label: 'ISML Head Office', bg: '#1a237e' },
              { icon: <FaNetworkWired />, label: 'Master Franchise', bg: '#0288d1' },
              { icon: <FaBuilding />, label: 'Multiple Centres', bg: '#0097a7' },
              { icon: <FaUserGraduate />, label: 'Teachers + Students + Courses + Fees + Exams', bg: '#fb8c00' }
            ].map((node, i, arr) => (
              <React.Fragment key={i}>
                <div className="fp-flow-node">
                  <div className="fp-flow-icon" style={{ background: node.bg }}>{node.icon}</div>
                  <p>{node.label}</p>
                </div>
                {i < arr.length - 1 && <FaArrowRight className="fp-flow-arrow" />}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile vertical stack */}
          <div className="fp-flow-stack">
            {[
              { icon: <FaBuilding />, label: 'ISML Head Office', bg: '#1a237e' },
              { icon: <FaNetworkWired />, label: 'Master Franchise', bg: '#0288d1' },
              { icon: <FaBuilding />, label: 'Multiple Centres', bg: '#0097a7' },
              { icon: <FaUserGraduate />, label: 'Teachers + Students + Courses', bg: '#fb8c00' }
            ].map((node, i, arr) => (
              <React.Fragment key={i}>
                <div className="fp-stack-node">
                  <div className="fp-stack-icon" style={{ background: node.bg }}>{node.icon}</div>
                  <span>{node.label}</span>
                </div>
                {i < arr.length - 1 && <FaArrowDown className="fp-stack-arrow" />}
              </React.Fragment>
            ))}
          </div>

          <div className="fp-callout">
            <FaCheckCircle className="fp-callout-icon" />
            <span>Every centre works independently while Head Office monitors the entire network.</span>
          </div>
        </div>
      </section>

      {/* ── Why Platform ── */}
      <section className="fp-section fp-section-light">
        <div className="fp-container">
          <div className="fp-sec-head">
            <span className="fp-tag fp-tag-purple">Key Advantages</span>
            <h2>Why This Platform</h2>
          </div>
          {/* Desktop: 5 in 1 row | Mobile: 1 per row */}
          <div className="fp-why-grid">
            {whyCards.map((c, i) => (
              <div key={i} className="fp-why-card" style={{ background: c.bg, borderColor: c.border }}>
                <div className="fp-why-icon" style={{ background: c.iconBg }}>{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Flow ── */}
      <section className="fp-section fp-section-white">
        <div className="fp-container">
          <div className="fp-sec-head">
            <span className="fp-tag fp-tag-teal">Student Journey</span>
            <h2>End-to-End Platform Flow</h2>
            <p>Complete lifecycle from inquiry to certification</p>
          </div>
          {/* 2-column grid on mobile — fits inside screen */}
          <div className="fp-pipeline">
            {platformFlow.map((step, idx) => (
              <div key={idx} className="fp-pipe-step">
                <div className="fp-pipe-num">{step.num}</div>
                <span>{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture + Hierarchy ── */}
      <section className="fp-section fp-section-light">
        <div className="fp-container">
          <div className="fp-arch-grid">

            <div className="fp-arch-card">
              <span className="fp-tag fp-tag-indigo">Network Design</span>
              <h3>Platform Architecture</h3>
              <p className="fp-arch-sub">Each centre manages its own students, teachers, fees and exams.</p>
              <div className="fp-tree">
                <div className="fp-tree-root"><FaBuilding /> ISML Platform</div>
                <div className="fp-tree-list">
                  <div className="fp-tree-item"><FaCheckCircle className="fp-tree-dot" /> Chennai Centre</div>
                  <div className="fp-tree-item"><FaCheckCircle className="fp-tree-dot" /> Madurai Centre</div>
                  <div className="fp-tree-item"><FaCheckCircle className="fp-tree-dot" /> Trichy Centre</div>
                  <div className="fp-tree-item fp-tree-future"><FaGlobe className="fp-tree-dot" /> Future Centres</div>
                </div>
              </div>
            </div>

            <div className="fp-hier-card">
              <span className="fp-tag fp-tag-emerald">Role Management</span>
              <h3>User Hierarchy</h3>
              <div className="fp-hier-list">
                {userHierarchy.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="fp-hier-node" style={{ borderLeftColor: item.color, background: item.light }}>
                      <div className="fp-hier-icon" style={{ background: item.color }}>{item.icon}</div>
                      <div>
                        <h5>{item.role}</h5>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                    {idx < userHierarchy.length - 1 && <FaArrowDown className="fp-hier-arrow" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Languages ── */}
      <section className="fp-section fp-section-white">
        <div className="fp-container">
          <div className="fp-sec-head">
            <span className="fp-tag fp-tag-orange">Global Offerings</span>
            <h2>Supported Languages</h2>
          </div>
          <div className="fp-lang-grid">
            {languages.map((lang, i) => (
              <div key={i} className="fp-lang-card" style={{ background: lang.bg, borderColor: lang.border }}>
                <span className="fp-lang-flag">{lang.flag}</span>
                <span className="fp-lang-name" style={{ color: lang.txtColor }}>{lang.name}</span>
                <span className={`fp-lang-pill fp-pill-${lang.status.toLowerCase()}`}>{lang.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="fp-section fp-section-light">
        <div className="fp-container">
          <div className="fp-sec-head">
            <span className="fp-tag fp-tag-pink">Capabilities</span>
            <h2>Core System Features</h2>
          </div>
          <div className="fp-features-grid">
            {coreFeatures.map((feat, i) => (
              <div key={i} className="fp-feature-tile" style={{ background: feat.light, borderColor: feat.bg + '40' }}>
                <div className="fp-feat-icon" style={{ background: feat.bg + '20', color: feat.bg }}>{feat.icon}</div>
                <h5>{feat.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="fp-section fp-section-white">
        <div className="fp-container">
          <div className="fp-sec-head">
            <span className="fp-tag fp-tag-blue">Value Proposition</span>
            <h2>Benefits for Everyone</h2>
          </div>
          <div className="fp-benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="fp-benefit-card" style={{ background: b.bg, borderColor: b.border }}>
                <div className="fp-benefit-header" style={{ background: b.headerBg }}>
                  <span className="fp-benefit-icon">{b.icon}</span>
                  <h4>{b.title}</h4>
                </div>
                <ul className="fp-benefit-list">
                  {b.items.map((item, j) => (
                    <li key={j}><FaCheckCircle className="fp-check" /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="fp-vision">
        <div className="fp-vision-inner">
          <span className="fp-tag fp-tag-light">Our Vision</span>
          <h2>The Future of Language Education</h2>
          <div className="fp-vision-steps">
            {['One Platform', 'Unlimited Franchise Centres', 'Thousands of Students', 'Complete Digital Operations', 'Global Language Network'].map((v, i, arr) => (
              <React.Fragment key={i}>
                <span className="fp-vision-step">{v}</span>
                {i < arr.length - 1 && <FaArrowDown className="fp-vision-arrow" />}
              </React.Fragment>
            ))}
          </div>
          <div className="fp-vision-cta">
            <h3>Ready to Launch Your ISML Franchise Centre?</h3>
            <p>Partner with India's leading foreign language learning platform today.</p>
            <a href="tel:7338881781" className="fp-cta-btn fp-cta-light">
              <FaPhoneAlt /> Contact Us: +91 7338881781
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Franchise;
