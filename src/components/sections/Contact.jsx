import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import "../../styles/contact.css";
function Contact() {
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [messageLength, setMessageLength] = useState(0);
const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

 formData.append(
  "access_key",
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
);

formData.append(
  "subject",
  "New Inquiry from Cona Coffee Website"
);

formData.append(
  "from_name",
  formData.get("company")
);

  setLoading(true);

  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      body: formData
    }
  );

  const result = await response.json();

  setLoading(false);

  if (result.success) {
    setSubmitted(true);
    setMessage("");
    setMessageLength(0);
    form.reset();
  } else {
    alert("Something went wrong. Please try again.");
  }
};
if (submitted) {

return (

<section id="contact" className="contact-section">

<div className="container">

<div className="contact-header">

<h2>

Thank You!

</h2>

<p>

Your inquiry has been received successfully.

Our team will contact you within 24 hours.

</p>

</div>

</div>

</section>

);

}
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

<form onSubmit={handleSubmit}>
  <div
  style={{
    position: "absolute",
    left: "-5000px"
  }}
  aria-hidden="true"
>
  <input
    type="checkbox"
    name="botcheck"
    tabIndex="-1"
    autoComplete="off"
  />
</div>

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
  onInvalid={(e) =>
    e.target.setCustomValidity(
      "Please enter a valid email address."
    )
  }
  onInput={(e) => e.target.setCustomValidity("")}
/>

<input
  type="text"
  name="phone"
  placeholder="Phone / WhatsApp (Optional)"
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
  placeholder="Estimated Order Quantity (e.g. 100 kg, 5MT or 1 Container)"
  required
/>

<textarea
  name="message"
  rows="7"
  placeholder="Tell us about your requirements, preferred coffee grade, shipment timeline, or any questions you have..."
  required
  minLength={30}
  maxLength={1000}
  value={message}
  onChange={(e) => {
    setMessage(e.target.value);
    setMessageLength(e.target.value.length);
  }}
  onInvalid={(e) =>
    e.target.setCustomValidity(
      "Your message must be between 30 and 1000 characters."
    )
  }
  onInput={(e) => e.target.setCustomValidity("")}
/>

<div
  className={`character-counter ${
    messageLength < 30
      ? "too-short"
      : messageLength > 900
      ? "almost-full"
      : ""
  }`}
>
   {messageLength} / 1000 (Minimum 30 characters)
</div>



<button
  type="submit"
  className="btn btn-primary"
  disabled={loading}
>
  {loading ? "Sending..." : "Send Inquiry"}
</button>
 <p className="privacy-note">
  We'll respond within 24 hours. Your information is kept 
  confidential and will only be used to respond to your inquiry.
</p>
 
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