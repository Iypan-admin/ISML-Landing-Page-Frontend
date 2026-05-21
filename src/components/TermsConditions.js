import React, { useEffect, useState } from 'react';
import './TermsConditions.css';

function TermsConditions() {
  const [activeSection, setActiveSection] = useState('acceptance');

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
    <div className="terms-conditions-container">
      <div className="terms-header-bg">
        <div className="terms-header-content">
          <h1>Terms & Conditions</h1>
          <p className="effective-date">Last Updated: May 8, 2026</p>
        </div>
      </div>

      <div className="terms-conditions-main-content">
        <aside className="terms-conditions-sidebar">
          <div className="sidebar-inner">
            <h3>Table of Contents</h3>
            <ul>
              <li className={activeSection === 'acceptance' ? 'active' : ''}>
                <a href="#acceptance" onClick={(e) => { e.preventDefault(); scrollToSection('acceptance'); }}>1. Acceptance of Terms</a>
              </li>
              <li className={activeSection === 'eligibility' ? 'active' : ''}>
                <a href="#eligibility" onClick={(e) => { e.preventDefault(); scrollToSection('eligibility'); }}>2. Eligibility</a>
              </li>
              <li className={activeSection === 'enrollment' ? 'active' : ''}>
                <a href="#enrollment" onClick={(e) => { e.preventDefault(); scrollToSection('enrollment'); }}>3. Course Enrollment</a>
              </li>
              <li className={activeSection === 'refund-policy' ? 'active' : ''}>
                <a href="#refund-policy" onClick={(e) => { e.preventDefault(); scrollToSection('refund-policy'); }}>4. Refund & Cancellation</a>
              </li>
              <li className={activeSection === 'intellectual-property' ? 'active' : ''}>
                <a href="#intellectual-property" onClick={(e) => { e.preventDefault(); scrollToSection('intellectual-property'); }}>5. Intellectual Property</a>
              </li>
              <li className={activeSection === 'user-conduct' ? 'active' : ''}>
                <a href="#user-conduct" onClick={(e) => { e.preventDefault(); scrollToSection('user-conduct'); }}>6. User Conduct</a>
              </li>
              <li className={activeSection === 'limitation-liability' ? 'active' : ''}>
                <a href="#limitation-liability" onClick={(e) => { e.preventDefault(); scrollToSection('limitation-liability'); }}>7. Limitation of Liability</a>
              </li>
              <li className={activeSection === 'governing-law' ? 'active' : ''}>
                <a href="#governing-law" onClick={(e) => { e.preventDefault(); scrollToSection('governing-law'); }}>8. Governing Law</a>
              </li>
              <li className={activeSection === 'contact' ? 'active' : ''}>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>9. Contact Information</a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="terms-conditions-content">
          <section>
            <h2 id="acceptance">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or using the website and services of the <strong>Indian School for Modern Languages (ISML)</strong>, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and <strong>IYPAN Educational Centre Pvt. Ltd.</strong>
            </p>
            <p>
              If you are using the services on behalf of a minor, you represent that you are the legal guardian and consent to the minor's use of the platform.
            </p>
          </section>

          <section>
            <h2 id="eligibility">2. Eligibility</h2>
            <p>
              Our services are available to individuals who can form legally binding contracts under the Indian Contract Act, 1872. If you are under 18 years of age, you must use our services only under the supervision of a parent or legal guardian.
            </p>
          </section>

          <section>
            <h2 id="enrollment">3. Course Enrollment & Fees</h2>
            <p>
              <strong>3.1 Enrollment:</strong> Access to courses is granted only upon successful registration and payment of the prescribed fees.
            </p>
            <p>
              <strong>3.2 Accuracy of Info:</strong> You agree to provide accurate, current, and complete information during the registration process.
            </p>
            <p>
              <strong>3.3 Pricing:</strong> All fees are subject to change without prior notice. However, once you have enrolled in a specific batch, the price for that session remains fixed.
            </p>
          </section>

          <section className="highlight-section">
            <h2 id="refund-policy">4. Refund & Cancellation Policy</h2>
            <div className="refund-card">
              <p><strong>Strict No-Refund Policy:</strong></p>
              <p>
                At ISML, we commit significant resources, including faculty scheduling and platform allocation, upon your enrollment. Therefore:
              </p>
              <ul>
                <li>Fees once paid are <strong>non-refundable</strong> and <strong>non-transferable</strong> under any circumstances.</li>
                <li>Request for batch changes after the commencement of classes will not be entertained.</li>
                <li>Non-attendance of classes does not entitle a student to any refund or credit.</li>
              </ul>
              <p>
                <em>Exception:</em> In the unlikely event that ISML cancels a course before its commencement, a full refund will be processed within 15 working days.
              </p>
            </div>
          </section>

          <section>
            <h2 id="intellectual-property">5. Intellectual Property Rights</h2>
            <p>
              All materials provided during the course, including but not limited to PDFs, video recordings, audio files, and proprietary teaching methodologies, are the exclusive property of <strong>IYPAN Educational Centre Pvt. Ltd.</strong>
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to use these materials for personal educational purposes only. Any reproduction, distribution, or commercial use of our content is strictly prohibited and will lead to legal action.
            </p>
          </section>

          <section>
            <h2 id="user-conduct">6. User Conduct</h2>
            <p>Users must maintain a professional and respectful environment. The following actions will result in immediate termination of access without refund:</p>
            <ul>
              <li>Recording or sharing live sessions without written permission.</li>
              <li>Harassing instructors or fellow students.</li>
              <li>Sharing login credentials with third parties.</li>
              <li>Posting defamatory content about ISML on public platforms.</li>
            </ul>
          </section>

          <section>
            <h2 id="limitation-liability">7. Limitation of Liability</h2>
            <p>
              While we strive for excellence, ISML does not guarantee specific career outcomes or exam results. We are not liable for any technical failures, internet outages, or external factors that may interrupt the learning experience.
            </p>
          </section>

          <section>
            <h2 id="governing-law">8. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in <strong>Chennai, Tamil Nadu</strong>.
            </p>
          </section>

          <section>
            <h2 id="contact">9. Contact Information</h2>
            <p>For any queries regarding these terms, please contact us at:</p>
            <div className="contact-info-block">
              <p><strong>Indian School for Modern Languages (ISML)</strong></p>
              <p>Parent Company: IYPAN Educational Centre Pvt. Ltd.</p>
              <p>Email: <a href="mailto:enquiry.isml@gmail.com">enquiry.isml@gmail.com</a></p>
              <p>Phone: <a href="tel:+917338881781">+91 7338881781</a></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default TermsConditions;
