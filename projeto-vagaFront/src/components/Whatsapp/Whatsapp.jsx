import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="whatsapp-content">
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">Quero comprar</span>
      </div>
    </a>
  );
}
