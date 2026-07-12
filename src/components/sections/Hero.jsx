import { motion } from "framer-motion";
import "../../styles/hero.css";
function Hero() {
  return (
    <section
      id="home"
      className="hero"
    >
      <div className="container hero-grid">

        <motion.div
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:.8}}
        >

          <span className="hero-small">

            Ethiopian Coffee Sourcing

          </span>

          <h1>

            Connecting Global Coffee Buyers with Trusted Ethiopian Exporters

          </h1>

          <p>

            We help international coffee buyers connect with reliable licensed
            Ethiopian exporters while simplifying sourcing, communication and
            export coordination.

          </p>

          <div className="hero-buttons">

            <a
            href="#contact"
            className="btn btn-primary">

              Request Quote

            </a>

            <a
            href="#about"
            className="btn btn-secondary">

              Learn More

            </a>

          </div>

          <div className="trust-grid">

            <div className="card trust-card">

              🌍

              <h3>International Buyers</h3>

            </div>

            <div className="card trust-card">

              ☕

              <h3>Ethiopian Coffee</h3>

            </div>

            <div className="card trust-card">

              🤝

              <h3>Trusted Local Network</h3>

            </div>

          </div>

        </motion.div>

        <motion.div

        initial={{opacity:0,x:80}}

        animate={{opacity:1,x:0}}

        transition={{duration:1}}

        >

          <img

          src="/Images/Hero/hero.jpg"

          alt="Coffee Farm"

          className="hero-image"

          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;