import { useState } from "react";

const faqs = [
  {
    question: "Do you export coffee directly?",
    answer:
      "No. We connect international buyers with trusted licensed Ethiopian exporters."
  },
  {
    question: "Can you help me find the right exporter?",
    answer:
      "Yes. Based on your coffee requirements, we help identify suitable exporters."
  },
  {
    question: "Can I request coffee samples?",
    answer:
      "Yes. Sample requests can be coordinated with the selected exporter."
  },
  {
    question: "Which countries do you work with?",
    answer:
      "We work with buyers from around the world."
  },
  {
    question: "How long does the sourcing process take?",
    answer:
      "The timeline depends on availability, exporter response, and shipping schedules."
  }
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq">
      <div className="container">

        <span className="section-tag">
          FAQ
        </span>

        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div className="faq-item" key={index}>

              <button
                className="faq-question"
                onClick={() => setOpen(open === index ? null : index)}
              >
                {faq.question}
              </button>

              {open === index && (
                <p className="faq-answer">
                  {faq.answer}
                </p>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;