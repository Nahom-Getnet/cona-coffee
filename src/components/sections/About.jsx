import {motion} from "framer-motion";
import "../../styles/about.css";
function About(){

return(

<motion.section

id="about"

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

transition={{duration:.7}}

viewport={{once:true}}

>

<div className="container about-grid">

<motion.div

initial={{opacity:0,x:-50}}

whileInView={{opacity:1,x:0}}

transition={{duration:.8}}

viewport={{once:true}}

>

<img

src="/Images/Gallery/About.jpg"

alt="Coffee Farm"
className="about-image"

/>

</motion.div>

<motion.div

initial={{opacity:0,x:50}}

whileInView={{opacity:1,x:0}}

transition={{duration:.8}}

viewport={{once:true}}

>

<span className="section-tag">

Who We Are

</span>

<h2>

Your Trusted Coffee Sourcing Partner

</h2>

<p>

Replace this paragraph with your friend's company story.

Explain:

who they are

why they started

their mission

their local exporter network

and why international buyers should work with them.

</p>

<div className="features">

<div>

✔ Reliable Communication

</div>

<div>

✔ Local Market Knowledge

</div>

<div>

✔ Export Coordination

</div>

<div>

✔ Personalized Support

</div>

</div>

</motion.div>

</div>

</motion.section>

)

}

export default About;