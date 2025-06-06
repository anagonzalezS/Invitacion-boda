import { motion } from 'framer-motion';

export default function Header({ coupleNames = "Camila & Tomás", date = "05 de diciembre de 2025" }) {
  return (
    <header
      aria-label="Portada de invitación"
      className="text-white d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundImage: 'url(/novios.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
        padding: '0 1rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-4"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '3rem 2rem',
          borderRadius: '20px',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          maxWidth: '700px',
          width: '100%',
        }}
      >
        <h1
          className="display-4 fw-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          }}
        >
          Nuestra historia continúa...
        </h1>
        <p
          className="lead fs-3"
          style={{
            fontFamily: "'Dancing Script', cursive",
            marginTop: '1rem',
          }}
        >
          {coupleNames}
        </p>
        <p className="mt-2 fs-5" aria-label="Fecha del evento">{date}</p>

        <a href="#detalles" className="btn btn-light mt-4 px-4 py-2 fs-5 shadow rounded-pill" aria-label="Ver detalles del evento">
        Ver Detalles del Evento
      </a>


        <p className="text-light mt-4" style={{ fontSize: '0.85rem' }}>
          Sitio creado con amor para una historia única ✨
        </p>
      </motion.div>
    </header>
  );
}
