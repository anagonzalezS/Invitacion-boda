import { useState, useEffect } from 'react';

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [nombre, setNombre] = useState('');
  const [asistencia, setAsistencia] = useState('');

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000); // 5000ms = 5 segundos

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiURL = 'https://api.sheetbest.com/sheets/82c74cf5-18e2-4610-aac6-3b4318ff38d8';

    const data = { nombre, asistencia };

    try {
      await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      setNombre('');
      setAsistencia('');
    } catch (error) {
      alert('Hubo un error al enviar tu confirmación.');
    }
  };

  return (
    <section id="rsvp" style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
      <div className="container text-center">
        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>¿Nos acompañás?</h2>
        <p style={{ fontFamily: "'Lora', serif" }}>
          Confirmá tu asistencia para compartir juntos este día inolvidable.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: '400px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <input
            type="text"
            required
            placeholder="Nombre y Apellido"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <select required value={asistencia} onChange={(e) => setAsistencia(e.target.value)}>
            <option value="">Seleccioná una opción</option>
            <option value="sí">Sí, asistiré</option>
            <option value="no">No podré asistir</option>
          </select>
          <button type="submit" className="btn btn-dark">
            Confirmar asistencia
          </button>
        </form>

        <div style={{ minHeight: '60px', marginTop: '30px' }}>
          {submitted && (
            <div style={confirmationBoxStyle}>
              <p style={{ margin: 0, fontSize: '1.1rem' }}>
                ¡Gracias por confirmar! <span style={{ color: 'red' }}>❤️</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const confirmationBoxStyle = {
  padding: '15px 20px',
  backgroundColor: '#f0fff4',
  border: '2px solid #28a745',
  borderRadius: '10px',
  color: '#155724',
  fontWeight: '600',
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
};
