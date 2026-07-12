import { Award, Globe, Users, Shield, HeartHandshake, Coffee } from "lucide-react";

const items=[

["Local Expertise",Award],

["Trusted Network",Users],

["Transparent Communication",Shield],

["Personalized Service",HeartHandshake],

["Global Buyers",Globe],

["Premium Coffee Access",Coffee]

];

function WhyChooseUs(){

return(

<section>

<div className="container">

<span className="section-tag">

Why Choose Us

</span>

<h2>

Built Around Trust

</h2>

<div className="services-grid">

{items.map(([title,Icon])=>(

<div className="card service-card" key={title}>

<div className="service-icon">

<Icon size={34}/>

</div>

<h3>{title}</h3>

</div>

))}

</div>

</div>

</section>

)

}

export default WhyChooseUs;