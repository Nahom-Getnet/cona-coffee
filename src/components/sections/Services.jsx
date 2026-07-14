import { motion } from "framer-motion";
import "../../styles/services.css";

import {
  Globe,
  MessageCircle,
  Ship,
  ShieldCheck
} from "lucide-react";

const services = [

  {
    icon: Globe,
    title: "Exporter Matching",
    text: "We connect international coffee buyers with trusted licensed Ethiopian coffee exporters based on your sourcing requirements."
  },

  {
    icon: MessageCircle,
    title: "Buyer & Exporter Communication",
    text: "We simplify communication between both parties to ensure smooth discussions and quick responses."
  },

  {
    icon: Ship,
    title: "Export Coordination",
    text: "We assist throughout the sourcing and export process by helping coordinate documentation and shipment communication."
  },

  {
    icon: ShieldCheck,
    title: "Trusted Exporter Verification",
    text: "We introduce buyers to reliable exporters with proven experience and established business practices."
  }

];

const process = [

  {
    number: "01",
    title: "Submit Inquiry",
    text: "Tell us your coffee requirements, destination and preferred specifications."
  },

  {
    number: "02",
    title: "Exporter Matching",
    text: "We identify licensed Ethiopian exporters that match your sourcing needs."
  },

  {
    number: "03",
    title: "Business Discussion",
    text: "The buyer and exporter discuss pricing, samples, quality and contract details."
  },

  {
    number: "04",
    title: "Shipment",
    text: "Once an agreement is reached, the exporter prepares the shipment while we assist with communication."
  }

];

function Services() {

  return (

    <motion.section
      id="services"
      className="services"
      initial={{opacity:0,y:60}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:.7}}
      viewport={{once:true}}
    >

      <div className="container">

        <div className="services-header">

          <span className="section-tag">
            Our Services
          </span>

          <h2>
            We Make Ethiopian Coffee Sourcing Simple
          </h2>

          <p>
            We bridge the gap between international coffee buyers and trusted Ethiopian exporters,
            making the sourcing process easier, faster and more transparent.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div

                key={index}

                className="service-card"

                whileHover={{  y: -10, scale: 1.03}}

                transition={{ duration: .25 }}

              >

                <div className="service-icon">

                  <Icon size={34} />

                </div>

                <h3>

                  {service.title}

                </h3>

                <p>

                  {service.text}

                </p>

              </motion.div>

            );

          })}

        </div>

        <div className="timeline">

          {process.map((step) => (

            <motion.div

              key={step.number}

              className="timeline-card"

              whileHover={{   y: -10, scale: 1.02}}

            >

              <div className="circle">

                {step.number}

              </div>

              <h4>

                {step.title}

              </h4>

              <p>

                {step.text}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>

  );

}

export default Services;