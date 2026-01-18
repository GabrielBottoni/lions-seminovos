import { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./PromoPopup.css";

export default function PromoPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="promo-wrapper">
      {!isOpen ? (
        <div className="promo-tab" onClick={() => setIsOpen(true)}>
          <span className="tab-text">SEU DESCONTO ESTÁ AQUI!</span>
        </div>
      ) : (
        <div className="promo-card">
          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              borderRadius: "50%",
              border: "none",
              width: "30px",
              height: "30px",
            }}
          >
            <IoClose size={20} color="#b30000" />
          </button>

          <h4 style={{ fontSize: "16px", marginBottom: "5px" }}>
            GANHE UM DESCONTO DE ATÉ
          </h4>
          <h2 style={{ color: "#ffcc00", fontWeight: "900", fontSize: "32px" }}>
            R$ 3.000,00
          </h2>

          <div className="promo-form mt-4">
            <input type="text" placeholder="Seu nome" />
            <input type="tel" placeholder="Telefone" />
            <input type="email" placeholder="Email" />
            <select>
              <option>Selecione uma loja</option>
            </select>
            <button className="submit-btn">SOLICITAR</button>
          </div>
        </div>
      )}
    </div>
  );
}
