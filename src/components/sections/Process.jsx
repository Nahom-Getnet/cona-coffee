import {motion} from "framer-motion";

const steps=[

"Inquiry",

"Requirement Review",

"Exporter Matching",

"Quotation",

"Sample Approval",

"Contract",

"Shipment"

];

function Process(){

return(

<section id="process">

<div className="container">

<span className="section-tag">

Process

</span>

<h2>

How It Works

</h2>

<div className="timeline">

{steps.map((step,index)=>(

<motion.div

key={index}

className="timeline-card"

whileInView={{opacity:1,y:0}}

initial={{opacity:0,y:30}}

viewport={{once:true}}

>

<div className="circle">

{index+1}

</div>

<h3>

{step}

</h3>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default Process;