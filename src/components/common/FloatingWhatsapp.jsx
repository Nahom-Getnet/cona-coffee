import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/251940272908"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default FloatingWhatsapp;