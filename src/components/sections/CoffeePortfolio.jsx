import { motion } from "framer-motion";
import coffeeData from "../../data/coffeeData";
import "../../styles/coffee.css";
function CoffeePortfolio() {

  return (

    <motion.section id="coffee" className="coffee"
        initial={{opacity:0,y:60}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.7}}
        viewport={{once:true}}
>

     <div className="container"> 

        <span className="section-tag">
          Coffee Portfolio
        </span>

        <h2>
          Discover Ethiopia's Finest Coffee Origins
        </h2>
        <p className="coffee-intro">

         From Ethiopia's most celebrated coffee-growing regions, we connect buyers with exporters offering carefully selected specialty and commercial coffee.

       </p>

        <p>
           Explore the premium coffee origins we source across Ethiopia.
        </p>

     </div>

        <div className="coffee-grid">

          {coffeeData.map((Coffee) => (

            <motion.div key={coffeeData.name} 
            className="card service-card"
                        whileHover={{
                        y:-10,
                        scale:1.03
                        }}

                        transition={{
                        duration:.25
                        }}

>

              <img
                src={Coffee.image}
                alt={Coffee.name}
              />

              <div className="coffee-content">

                <h3>{Coffee.name}</h3>

                <p>
                  <strong>Origin:</strong> {Coffee.Origin}
                </p>

                <p>
                  <strong>Processing Method:</strong> {Coffee.process}
                </p>

                <p>
                  <strong>Cup Profile:</strong> {Coffee.notes}
                </p>

                <span
                 className={`availability ${Coffee.availability
                   .toLowerCase()
                   .replace(/\s+/g, "-")}`}
                >
                     {Coffee.availability}
                </span>

              </div>

            </motion.div>

          ))}

        </div>

      

    </motion.section>

  );

}

export default CoffeePortfolio;