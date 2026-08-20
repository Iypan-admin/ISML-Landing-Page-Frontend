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
    'Student Inquiry',
    'Counselling',
    'Admission',
    'Course',
    'Batch',
    'Classes',
    'Attendance',
    'Study Materials',
    'Exams',
    'Certificate'
  ];

  const coreFeatures = [
    { title: 'Student Management', icon: <FaUserGraduate />, bg: '#4285F4' },
    { title: 'Teacher Management', icon: <FaChalkboardTeacher />, bg: '#EA4335' },
    { title: 'Course & Batch', icon: <FaBook />, bg: '#FBBC05' },
    { title: 'Attendance System', icon: <FaCalendarCheck />, bg: '#34A853' },
    { title: 'Study Materials', icon: <FaBook />, bg: '#8E24AA' },
    { title: 'Exams & Assessment', icon: <FaCertificate />, bg: '#00ACC1' },
    { title: 'Fee Management', icon: <FaMoneyBillWave />, bg: '#E91E63' },
    { title: 'Certificates Engine', icon: <FaCertificate />, bg: '#FF6D00' },
    { title: 'Reports & Analytics', icon: <FaChartLine />, bg: '#1E88E5' },
    { title: 'AI Ready Integration', icon: <FaRobot />, bg: '#43A047' }
  ];

  const languages = [
    { name: 'French', flag: '🇫🇷', status: 'Active', bg: '#eff6ff', border: '#bfdbfe' },
    { name: 'German', flag: '🇩🇪', status: 'Active', bg: '#fef2f2', border: '#fecaca' },
    { name: 'Japanese', flag: '🇯🇵', status: 'Active', bg: '#fff7ed', border: '#fed7aa' },
    { name: 'Korean', flag: '🇰🇷', status: 'Active', bg: '#f0fdf4', border: '#bbf7d0' },
    { name: 'Spanish', flag: '🇪🇸', status: 'Future', bg: '#faf5ff', border: '#e9d5ff' },
    { name: 'Italian', flag: '🇮🇹', status: 'Future', bg: '#ecfeff', border: '#a5f3fc' },
    { name: 'Mandarin', flag: '🇨🇳', status: 'Future', bg: '#fff1f2', border: '#fecdd3' }
  ];

  const userHierarchy = [
    { role: 'Platform Admin', desc: 'Full System Control', icon: <FaUserShield />, color: '#1a237e' },
    { role: 'Master Franchise', desc: 'Regional Supervision', icon: <FaBuilding />, color: '#0288d1' },
    { role: 'Centre Admin', desc: 'Centre Operations', icon: <FaNetworkWired />, color: '#0097a7' },
    { role: 'Academic / Finance / Teachers', desc: 'Daily Operations', icon: <FaChalkboardTeacher />, color: '#43a047' },
    { role: 'Students', desc: 'Learning & Exams', icon: <FaUserGraduate />, color: '#fb8c00' }
  ];

  return (
    <div className="franchise-page-wrapper">
      {/* Hero Header Section */}
      <section className="franchise-hero-section">
        <div className="hero-overlay"></div>
        <div className="franchise-hero-container">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Multi-Centre Franchise Management System
          </motion.div>

          <motion.h1 
            className="franchise-main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ISML Language Learning Platform
          </motion.h1>

          <motion.p 
            className="franchise-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            One Platform <span className="tagline-dot">•</span> Unlimited Centres <span className="tagline-dot">•</span> Complete Control
          </motion.p>

          <motion.div 
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="tel:7338881781" className="cta-btn primary-cta">
              <FaPhoneAlt className="btn-icon" /> Call For Franchise: 7338881781
            </a>
          </motion.div>
        </div>
      </section>

      {/* Business Overview Section */}
      <section className="franchise-section overview-section">
        <div className="section-container">
          <div className="section-header-box">
            <span className="section-tag tag-blue">System Design</span>
            <h2 className="section-heading">Business Overview</h2>
            <p className="section-subheading">
              Every centre works independently while Head Office monitors the entire network seamlessly.
            </p>
          </div>

          <div className="mobile-swipe-hint">👉 Swipe right to view full flow</div>

          <div className="business-flow-swipe-container">
            <div className="business-flow-card">
              <div className="flow-step-node">
                <div className="node-icon-box bg-blue"><FaBuilding /></div>
                <h4>ISML Head Office</h4>
              </div>
              <FaArrowRight className="flow-arrow-icon" />
              <div className="flow-step-node">
                <div className="node-icon-box bg-cyan"><FaNetworkWired /></div>
                <h4>Master Franchise</h4>
              </div>
              <FaArrowRight className="flow-arrow-icon" />
              <div className="flow-step-node">
                <div className="node-icon-box bg-teal"><FaBuilding /></div>
                <h4>Multiple Centres</h4>
              </div>
              <FaArrowRight className="flow-arrow-icon" />
              <div className="flow-step-node">
                <div className="node-icon-box bg-orange"><FaUserGraduate /></div>
                <h4>Teachers + Students + Courses + Fees + Exams</h4>
              </div>
            </div>
          </div>

          <div className="independent-card-callout">
            <FaCheckCircle className="check-icon" />
            <span>Every centre works independently while Head Office monitors the entire network.</span>
          </div>
        </div>
      </section>

      {/* Why This Platform */}
      <section className="franchise-section why-platform-section">
        <div className="section-container">
          <div className="section-header-box">
            <span className="section-tag tag-purple">Key Advantages</span>
            <h2 className="section-heading">Why This Platform</h2>
          </div>

          <div className="mobile-swipe-hint">👉 Swipe right for features</div>

          <div className="swipeable-grid-wrapper">
            <div className="why-grid">
              <div className="why-card card-mild-blue">
                <div className="why-icon-wrapper bg-icon-blue"><FaGlobe /></div>
                <h3>One Platform for All Centres</h3>
                <p>Unify all your language centres under one central software ecosystem.</p>
              </div>
              <div className="why-card card-mild-purple">
                <div className="why-icon-wrapper bg-icon-purple"><FaUserShield /></div>
                <h3>Independent Data Security</h3>
                <p>Isolated data storage for every centre with role-based access control.</p>
              </div>
              <div className="why-card card-mild-teal">
                <div className="why-icon-wrapper bg-icon-teal"><FaChartLine /></div>
                <h3>Real-Time Live Monitoring</h3>
                <p>Track student enrollments, teacher schedules, and revenue live.</p>
              </div>
              <div className="why-card card-mild-rose">
                <div className="why-icon-wrapper bg-icon-rose"><FaCertificate /></div>
                <h3>Centralized Analytics</h3>
                <p>Instant consolidated financial and academic reports across all branches.</p>
              </div>
              <div className="why-card card-mild-amber why-card-full">
                <div className="why-icon-wrapper bg-icon-amber"><FaMoneyBillWave /></div>
                <h3>Faster Operations & Exams</h3>
                <p>Accelerate admissions, automated fee collection, and digital examinations.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* End-to-End Platform Flow */}
      <section className="franchise-section platform-flow-section">
        <div className="section-container">
          <div className="section-header-box">
            <span className="section-tag tag-teal">Student Journey</span>
            <h2 className="section-heading">End-to-End Platform Flow</h2>
            <p className="section-subheading">Complete lifecycle from initial inquiry to final course certification</p>
          </div>

          <div className="mobile-swipe-hint">👉 Swipe right to see full lifecycle</div>

          <div className="pipeline-swipe-wrapper">
            <div className="pipeline-container">
              {platformFlow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="pipeline-chip">
                    <span className="step-num">{idx + 1}</span>
                    <span className="step-label">{step}</span>
                  </div>
                  {idx < platformFlow.length - 1 && (
                    <FaArrowRight className="pipeline-arrow" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture & Hierarchy */}
      <section className="franchise-section architecture-section">
        <div className="section-container">
          <div className="arch-hierarchy-grid">
            
            {/* Architecture Card */}
            <div className="arch-card card-mild-indigo">
              <span className="section-tag tag-indigo">Network Design</span>
              <h3>Platform Architecture</h3>
              <p className="arch-sub">Each centre manages its own students, teachers, fees and exams.</p>
              
              <div className="arch-tree">
                <div className="tree-root">
                  <FaBuilding className="tree-icon" /> ISML Platform
                </div>
                <div className="tree-branches">
                  <div className="tree-branch"><FaCheckCircle className="branch-dot" /> Chennai Centre</div>
                  <div className="tree-branch"><FaCheckCircle className="branch-dot" /> Madurai Centre</div>
                  <div className="tree-branch"><FaCheckCircle className="branch-dot" /> Trichy Centre</div>
                  <div className="tree-branch future-branch"><FaGlobe className="branch-dot" /> Future Centres</div>
                </div>
              </div>
            </div>

            {/* User Hierarchy Card */}
            <div className="hierarchy-card card-mild-emerald">
              <span className="section-tag tag-emerald">Role Management</span>
              <h3>User Hierarchy</h3>
              <div className="hierarchy-list">
                {userHierarchy.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="hierarchy-node" style={{ borderColor: item.color }}>
                      <div className="role-icon" style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <div className="role-details">
                        <h4>{item.role}</h4>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                    {idx < userHierarchy.length - 1 && (
                      <FaArrowDown className="hierarchy-arrow" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Features & Supported Languages */}
      <section className="franchise-section features-lang-section">
        <div className="section-container">
          
          {/* Languages Supported */}
          <div className="languages-block">
            <div className="section-header-box">
              <span className="section-tag tag-orange">Global Offerings</span>
              <h2 className="section-heading">Supported Languages</h2>
            </div>
            
            <div className="mobile-swipe-hint">👉 Swipe right for languages</div>
            
            <div className="languages-swipe-wrapper">
              <div className="languages-grid">
                {languages.map((lang, idx) => (
                  <div 
                    key={idx} 
                    className="lang-card"
                    style={{ backgroundColor: lang.bg, borderColor: lang.border }}
                  >
                    <span className="lang-flag">{lang.flag}</span>
                    <span className="lang-name">{lang.name}</span>
                    <span className={`status-pill ${lang.status.toLowerCase()}`}>{lang.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Features Grid */}
          <div className="core-features-block">
            <div className="section-header-box">
              <span className="section-tag tag-pink">Capabilities</span>
              <h2 className="section-heading">Core System Features</h2>
            </div>

            <div className="mobile-swipe-hint">👉 Swipe right for all features</div>

            <div className="features-swipe-wrapper">
              <div className="features-grid">
                {coreFeatures.map((feat, idx) => (
                  <div key={idx} className="feature-tile">
                    <div className="tile-icon" style={{ backgroundColor: `${feat.bg}15`, color: feat.bg }}>
                      {feat.icon}
                    </div>
                    <h4>{feat.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits Breakdown */}
      <section className="franchise-section benefits-section">
        <div className="section-container">
          <div className="section-header-box">
            <span className="section-tag tag-blue">Value Proposition</span>
            <h2 className="section-heading">Benefits for Everyone</h2>
          </div>

          <div className="mobile-swipe-hint">👉 Swipe right for benefit cards</div>

          <div className="benefits-swipe-wrapper">
            <div className="benefits-grid">
              <div className="benefit-card card-gradient-blue">
                <div className="benefit-header bg-navy">
                  <FaBuilding className="benefit-icon" />
                  <h3>Head Office</h3>
                </div>
                <ul className="benefit-list">
                  <li><FaCheckCircle /> Live network monitoring</li>
                  <li><FaCheckCircle /> Consolidated financial & academic reports</li>
                  <li><FaCheckCircle /> Multi-centre franchise management</li>
                </ul>
              </div>

              <div className="benefit-card card-gradient-cyan">
                <div className="benefit-header bg-cyan">
                  <FaNetworkWired className="benefit-icon" />
                  <h3>Franchise Centre</h3>
                </div>
                <ul className="benefit-list">
                  <li><FaCheckCircle /> Complete daily operations in one system</li>
                  <li><FaCheckCircle /> Automated fee collections & reminders</li>
                  <li><FaCheckCircle /> Efficient teacher & batch scheduling</li>
                </ul>
              </div>

              <div className="benefit-card card-gradient-teal">
                <div className="benefit-header bg-teal">
                  <FaUserGraduate className="benefit-icon" />
                  <h3>Students</h3>
                </div>
                <ul className="benefit-list">
                  <li><FaCheckCircle /> Superior interactive learning experience</li>
                  <li><FaCheckCircle /> Digital academic records & certificates</li>
                  <li><FaCheckCircle /> Easy access to study materials & exams</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Final Call to Action */}
      <section className="franchise-vision-section">
        <div className="vision-container">
          <span className="section-tag light-tag">Our Vision</span>
          <h2 className="vision-heading">The Future of Language Education</h2>
          
          <div className="vision-flow-bar">
            <span>One Platform</span>
            <FaArrowRight className="v-arrow" />
            <span>Unlimited Franchise Centres</span>
            <FaArrowRight className="v-arrow" />
            <span>Thousands of Students</span>
            <FaArrowRight className="v-arrow" />
            <span>Complete Digital Operations</span>
            <FaArrowRight className="v-arrow" />
            <span>Global Language Network</span>
          </div>

          <div className="vision-cta-box">
            <h3>Ready to Launch Your ISML Franchise Centre?</h3>
            <p>Partner with India's leading foreign language learning platform today.</p>
            <a href="tel:7338881781" className="cta-btn vision-cta">
              <FaPhoneAlt className="btn-icon" /> Contact Us: +91 7338881781
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Franchise;
