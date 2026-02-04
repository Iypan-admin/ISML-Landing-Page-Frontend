import { useState } from "react";

const faqs = [
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes. The ISML Foundation Program is specially designed for absolute beginners."
  },
  {
    question: "Which languages are offered?",
    answer:
      "French 🇫🇷, German 🇩🇪, and Japanese 🇯🇵 (N5 level launching soon)."
  },
  {
    question: "What is the course duration?",
    answer: "Approximately 3 months (12–14 weeks)."
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "Classes are live online, with recorded sessions available for revision."
  },
  {
    question: "What is the class schedule?",
    answer:
      "Each class is 2 hours (1.5 hrs class + 30 mins doubt clearing session). Weekday and weekend batches are available."
  },
  {
    question: "Are doubt-clearing sessions included?",
    answer:
      "Yes. Regular doubt-clearing sessions are part of the program."
  },
  {
    question: "Will a certificate be provided?",
    answer:
      "Yes. Students receive an ISML Course Completion Certificate."
  },
  {
    question: "What is the course fee?",
    answer: "The Foundation Program starts at ₹1,299."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">

        <h2 className="section-title center">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                {/* CLICK ONLY ON QUESTION HEADER */}
                <div
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span>{item.question}</span>
                  <span className="arrow">▼</span>
                </div>

                <div className="faq-content">
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SUPPORT SECTION */}
        <div className="faq-support">
          <h3>Still have questions?</h3>

          <p>
            Need assistance with courses, enrollment, or classes?
            We’re happy to help.
          </p>

          <div className="support-actions">
            <a href="tel:+917338881781">
              <span>📞</span> 733 888 1781
            </a>

            <a href="mailto:enquiry.isml@gmail.com">
              <span>📧</span> enquiry.isml@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
