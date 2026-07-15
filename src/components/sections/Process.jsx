import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "../../App.css";

const steps = [
  {
    title: "Inquiry",
    description:
      "Tell us about the coffee you're looking for, including the origin, processing method, quantity, and quality requirements."
  },

  {
    title: "Requirement Review",
    description:
      "We carefully review your sourcing requirements and determine the most suitable options based on your needs."
  },

  {
    title: "Exporter Matching",
    description:
      "Using our trusted local network, we connect you with reliable Ethiopian coffee exporters that best match your requirements."
  },

  {
    title: "Quotation & Samples",
    description:
      "Receive detailed quotations, coffee availability, and product information. If needed, sample shipments can be arranged so you can evaluate the coffee before placing a larger order."
  },

  {
    title: "Contract",
    description:
      "After both parties agree on pricing and terms, the purchase contract is finalized and the order is confirmed."
  },

  {
    title: "Shipment",
    description:
      "The exporter prepares and ships your coffee while we assist with communication and coordination throughout the export process."
  }
];

function Process() {
  const [open, setOpen] = useState(null);

  return (
    <section id="process">
      <div className="container">

        <span className="section-tag">
          Process
        </span>

        <h2>How It Works</h2>

        <div className="timeline">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              layout
              className={`timeline-card ${open === index ? "active" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.98 }}
              transition={{
                layout: {
                  duration: 0.35,
                  ease: "easeInOut"
                }
              }}
              
            >

              <div className="timeline-header" onClick={() =>
                setOpen(open === index ? null : index)
              }>

                <div className="timeline-title">

                  <div className="circle">
                    {index + 1}
                  </div>

                  <h3>{step.title}</h3>

                </div>

                 <ChevronDown
                 className={`expand-icon ${open === index ? "rotate" : ""}`}
                  />

              </div>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    layout
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >

                    <p className="timeline-description">
                      {step.description}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;