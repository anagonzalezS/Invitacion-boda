import './EventInfo.css';
import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi'; // Íconos de copiar y éxito

export default function EventInfo() {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
      <section id="detalles" className="event-section" aria-label="Detalles del evento">

        <div className="event-container">
        <h2 className="event-title">Detalles del Evento</h2>
        <p className="event-frase">
          ¡Será un día mágico, y queremos compartirlo con vos!
        </p>

        <div className="event-card">
          <h3 className="event-card-title">Recepción & Celebración</h3>
          <p className="event-info">
            📍 <strong>Salón Brisas del Campo</strong>
          </p>
          <p className="event-info">📌 Cabildo 1576 CABA</p>
          <p className="event-info">📅 15 de diciembre de 2025 – 🕗 20:00 hs</p>

          <div className="map-container">
            <iframe
              title="Mapa de ubicación Salón Brisas del Campo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.4892277578265!2d-58.45472142488687!3d-34.56648565553174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d022fe0639%3A0xf60e53ada34e7f64!2sAv.%20Cabildo%201576%2C%20C1426ABP%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1749240142289!5m2!1ses-419!2sar"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="gift-section">
          <h3 className="gift-title">¿Querés hacernos un regalo?</h3>
          <p className="gift-text">
            ¡Tu presencia es lo más importante para nosotros! Pero si querés hacernos un regalo, también podés hacerlo por Mercado Pago:
          </p>

          <a
            href="https://link.mercadopago.com.ar/bodaregalo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-donar"
          >
            🎁 Hacer un regalo por Mercado Pago
          </a>

          <p className="gift-text" style={{ marginTop: '2rem' }}>
            O si preferís por transferencia, te dejamos nuestros datos:
          </p>

          <div className="copy-block">
            <p className="gift-alias">
              <strong>📌 Alias:</strong> regalos.boda.2025
            </p>
            <button
              onClick={() => handleCopy('regalos.boda.2025', 'alias')}
              className="copy-icon"
              aria-label="Copiar alias"
            >
              {copied === 'alias' ? <FiCheck /> : <FiCopy />}
            </button>
          </div>

          <div className="copy-block">
            <p className="gift-cbu">
              <strong>CBU:</strong> 0000003100012345678901
            </p>
            <button
              onClick={() => handleCopy('0000003100012345678901', 'cbu')}
              className="copy-icon"
              aria-label="Copiar CBU"
            >
              {copied === 'cbu' ? <FiCheck /> : <FiCopy />}
            </button>
          </div>

          <p className="gift-text">¡Gracias por acompañarnos! 💖</p>
        </div>
      </div>
    </section>
  );
}
