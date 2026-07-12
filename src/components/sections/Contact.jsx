import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import "../../styles/contact.css";
function Contact() {
const [state, handleSubmit] = useForm("mjgnbqkd");
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

<form  action="https://formspree.io/f/mjgnbqkd"
  method="POST">

<input
  type="text"
  name="company"
  placeholder="Company Name"
  required
/>

<input
  type="text"
  name="contact_person"
  placeholder="Contact Person"
  required
/>

<input
  type="text"
  name="country"
  placeholder="Country"
  required
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  required
/>

<input
  type="text"
  name="phone"
  placeholder="Phone / WhatsApp"
/>

<input
  type="text"
  name="coffee_type"
  placeholder="Coffee Origin"
  required
/>

<input
  type="text"
  name="estimated_quantity"
  placeholder="Estimated Order Quantity (e.g. 100 kg or 1 Container)"
  required
/>

<textarea
  name="message"
  rows="7"
  placeholder="Tell us about your requirements, preferred coffee grade, shipment timeline, or any questions you have..."
  required
></textarea>

<button
  type="submit"
  className="btn btn-primary"
>
  Send Inquiry
</button>
<i> We'll respond within 24 hours.
    Your information will only be used to respond to your inquiry.</i>
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