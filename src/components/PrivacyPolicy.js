import React, { useEffect, useState } from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('what-this-policy-covers');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('h2[id]');
      let currentSection = activeSection;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          currentSection = section.getAttribute('id');
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="privacy-policy-container">
      <div className="policy-header-bg">
        <div className="policy-header-content">
          <h1>Privacy Policy</h1>
        </div>
      </div>

      <div className="privacy-policy-main-content">
        <aside className="privacy-policy-sidebar">
          <div className="sidebar-inner">
            <h3>Quick Navigation</h3>
            <ul>
              <li className={activeSection === 'what-this-policy-covers' ? 'active' : ''}>
                <a href="#what-this-policy-covers" onClick={(e) => { e.preventDefault(); scrollToSection('what-this-policy-covers'); }}>What this policy covers</a>
              </li>
              <li className={activeSection === 'information-we-collect' ? 'active' : ''}>
                <a href="#information-we-collect" onClick={(e) => { e.preventDefault(); scrollToSection('information-we-collect'); }}>Information We Collect</a>
              </li>
              <li className={activeSection === 'legal-basis-processing' ? 'active' : ''}>
                <a href="#legal-basis-processing" onClick={(e) => { e.preventDefault(); scrollToSection('legal-basis-processing'); }}>Legal Basis for Processing</a>
              </li>
              <li className={activeSection === 'how-we-use-info' ? 'active' : ''}>
                <a href="#how-we-use-info" onClick={(e) => { e.preventDefault(); scrollToSection('how-we-use-info'); }}>How We Use Information</a>
              </li>
              <li className={activeSection === 'data-sharing' ? 'active' : ''}>
                <a href="#data-sharing" onClick={(e) => { e.preventDefault(); scrollToSection('data-sharing'); }}>Data Sharing & Disclosures</a>
              </li>
              <li className={activeSection === 'data-retention' ? 'active' : ''}>
                <a href="#data-retention" onClick={(e) => { e.preventDefault(); scrollToSection('data-retention'); }}>Data Retention Policy</a>
              </li>
              <li className={activeSection === 'your-rights' ? 'active' : ''}>
                <a href="#your-rights" onClick={(e) => { e.preventDefault(); scrollToSection('your-rights'); }}>Your Rights & Privacy</a>
              </li>
              <li className={activeSection === 'data-security' ? 'active' : ''}>
                <a href="#data-security" onClick={(e) => { e.preventDefault(); scrollToSection('data-security'); }}>Security Measures</a>
              </li>
              <li className={activeSection === 'contact-us' ? 'active' : ''}>
                <a href="#contact-us" onClick={(e) => { e.preventDefault(); scrollToSection('contact-us'); }}>Contact Us</a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="privacy-policy-content">
          <section>
            <h2 id="what-this-policy-covers">What this policy covers</h2>
            <p>
              Your privacy is fundamental to us. This Privacy Policy describes how <strong>Indian School for Modern Languages (ISML)</strong>, a brand of <strong>IYPAN Educational Centre Pvt. Ltd.</strong>, collects, uses, and shares your information when you interact with our website, mobile applications, and learning platforms.
            </p>
            <p>
              We are committed to protecting your personal data and complying with all applicable laws, including the <strong>Digital Personal Data Protection (DPDP) Act, 2023 (India)</strong> and the <strong>General Data Protection Regulation (GDPR)</strong>.
            </p>
          </section>

          <section>
            <h2 id="information-we-collect">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third parties.</p>

            <h3>1.1 Personal Data Provided by You</h3>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address.</li>
              <li><strong>Academic Details:</strong> Educational background, language proficiency levels, and course interests.</li>
              <li><strong>Account Credentials:</strong> Usernames, passwords, and security questions.</li>
              <li><strong>Payment Data:</strong> Billing information and payment history (processed via secure PCI-DSS compliant gateways).</li>
            </ul>

            <h3>1.2 Automatically Collected Information</h3>
            <ul>
              <li><strong>Device Info:</strong> IP address, browser type, operating system, and unique device identifiers.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on lessons, progress in courses, and interaction with study materials.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience and remember your preferences.</li>
            </ul>
          </section>

          <section>
            <h2 id="legal-basis-processing">2. Legal Basis for Data Processing</h2>
            <p>We process your personal data under the following legal frameworks:</p>
            <ul>
              <li><strong>Consent:</strong> Explicit permission provided by you for specific purposes (e.g., newsletters).</li>
              <li><strong>Contractual Obligation:</strong> Necessary steps to provide the educational services you purchased.</li>
              <li><strong>Legitimate Interests:</strong> To improve our curriculum, ensure platform security, and analyze user trends.</li>
              <li><strong>Legal Compliance:</strong> Meeting statutory requirements under Indian law.</li>
            </ul>
          </section>

          <section>
            <h2 id="how-we-use-info">3. How We Use Your Information</h2>
            <p>ISML uses the collected data to:</p>
            <ul>
              <li>Deliver interactive language lessons and track academic progress.</li>
              <li>Issue certifications and provide placement assistance.</li>
              <li>Process transactions and send billing notifications.</li>
              <li>Provide customer support and resolve technical issues.</li>
              <li>Send updates about new courses, events, and educational workshops (with an opt-out option).</li>
            </ul>
          </section>

          <section>
            <h2 id="data-sharing">4. Data Sharing & Third-Party Disclosures</h2>
            <p>We do not sell your personal data. We only share information with:</p>
            <ul>
              <li><strong>Trusted Partners:</strong> Accreditation bodies, examination centers, and placement partners.</li>
              <li><strong>Service Providers:</strong> Cloud hosting (AWS/Google Cloud), payment processors, and CRM tools.</li>
              <li><strong>Legal Authorities:</strong> When required to comply with a judicial proceeding or government request.</li>
            </ul>
          </section>

          <section>
            <h2 id="data-retention">5. Data Retention Policy</h2>
            <p>We retain your information for as long as your account is active or as needed to provide you with services. Specifically:</p>
            <ul>
              <li><strong>Course Records:</strong> Maintained for 7 years to facilitate certificate verification.</li>
              <li><strong>Financial Records:</strong> Retained as per Indian Tax Laws (7-10 years).</li>
              <li><strong>Marketing Data:</strong> Deleted within 30 days of an unsubscribe request.</li>
            </ul>
          </section>

          <section>
            <h2 id="your-rights">6. Your Rights & Privacy Choices</h2>
            <p>You have significant control over your data:</p>
            <ul>
              <li><strong>Access & Correction:</strong> Request a copy of your data or update incorrect information.</li>
              <li><strong>Right to be Forgotten:</strong> Request deletion of your data when it is no longer necessary.</li>
              <li><strong>Data Portability:</strong> Obtain your data in a structured, machine-readable format.</li>
              <li><strong>Withdraw Consent:</strong> Opt-out of marketing communications at any time.</li>
            </ul>
            <p>To exercise these rights, please contact our Grievance Officer at the email provided below.</p>
          </section>

          <section>
            <h2 id="data-security">7. Security Measures</h2>
            <p>We implement industry-standard security protocols, including:</p>
            <ul>
              <li><strong>SSL/TLS Encryption:</strong> For all data in transit.</li>
              <li><strong>AES-256 Encryption:</strong> For sensitive data at rest.</li>
              <li><strong>Access Controls:</strong> Multi-factor authentication for administrative access.</li>
              <li><strong>Regular Audits:</strong> Periodic vulnerability assessments and penetration testing.</li>
            </ul>
          </section>

          <section>
            <h2 id="contact-us">8. Contact & Grievance Redressal</h2>
            <p>If you have questions about this policy or wish to file a complaint, please reach out to:</p>
            <div className="contact-info-block">
              <p><strong>Grievance Officer:</strong> Compliance Head</p>
              <p><strong>Entity:</strong> IYPAN Educational Centre Pvt. Ltd.</p>
              <p><strong>Email:</strong> <a href="mailto:enquiry.isml@gmail.com">enquiry.isml@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+917338881781">+91 7338881781</a></p>
              <p><strong>Address:</strong> Chennai, Tamil Nadu, India.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default PrivacyPolicy;