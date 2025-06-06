export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
        padding: '60px 20px',
        fontFamily: "'Lora', serif",
        color: '#343a40',
        borderTop: '1px solid #dee2e6',
      }}
    >
      <div className="container text-center">
        <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: '600', fontSize: '1.8rem', marginBottom: '1rem' }}>
          Con todo nuestro amor
        </h4>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          Camila & Tomás
        </p>
        <p style={{ fontStyle: 'italic', color: '#6c757d', fontSize: '0.95rem' }}>
          Gracias por ser parte de este momento tan especial.
        </p>

        <hr style={{ margin: '30px auto', width: '60px', borderColor: '#adb5bd' }} />

        <p style={{ fontSize: '0.85rem', color: '#adb5bd' }}>
          Sitio web diseñado con amor 💻✨
        </p>
      </div>
    </footer>
  );
}
