import { Mail, Phone, MapPin, Globe } from "lucide-react";
import "../../styles/contact.css";
function Contact() {

return (

<section id="contact" className="contact-section">

<div className="container">

<div className="contact-header">

<span className="section-tag">

Contact

</span>

<h2>

Let's Find the Right Coffee for You

</h2>

<p>

Tell us about your sourcing needs and we'll connect you with trusted Ethiopian coffee exporters.

</p>

</div>

<div className="contact-wrapper">

<div className="contact-form card">

<form>

<input placeholder="Company Name" required/>

<input placeholder="Contact Person" required/>

<input placeholder="Country" required/>

<input type="email" placeholder="Email Address" required/>

<input placeholder="Phone / WhatsApp"/>

<input placeholder="Coffee Interest"/>

<input placeholder="Estimated Quantity"/>

<textarea

rows="7"

placeholder="Tell us exactly what you're looking for...">

</textarea>

<button

className="btn btn-primary">

Send Inquiry

</button>

</form>

</div>

<div className="contact-card card">

<h3>

Contact Information

</h3>

<div className="info">

<Mail/>

<div>

<h4>Email</h4>

<p>

conacoffee107@gmail.com

</p>

</div>

</div>

<div className="info">

<Phone/>

<div>

<h4>Phone</h4>

<p>

+251 94 027 2908

</p>

</div>

</div>

<div className="info">

<MapPin/>

<div>

<h4>Location</h4>

<p>

Addis Ababa, Ethiopia

</p>

</div>

</div>

<div className="info">

<Globe/>

<div>

<h4>Serving</h4>

<p>

Worldwide

</p>

</div>

</div>

</div>

</div>

</div>

</section>

)

}

export default Contact;