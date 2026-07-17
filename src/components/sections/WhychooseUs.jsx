import { CheckCircle2 } from "lucide-react";

function WhyChooseUs() {

const items = [

"Local Expertise",

"Trusted Network",

"Transparent Communication",

"Personalized Service",

"Global Buyers",

"Premium Coffee Access"

];

return (

<section className="why-section">

<div className="container">

<span className="section-tag">
Why Choose Us
</span>

<h2>
Built Around Trust
</h2>

<div className="why-grid">

{items.map((item) => (

<div className="why-item" key={item}>

<CheckCircle2 className="why-icon" size={22} />

<span>{item}</span>

</div>

))}

</div>

</div>

</section>

);

}

export default WhyChooseUs;