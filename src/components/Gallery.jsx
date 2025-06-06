export default function Gallery() {
  const images = ["/fot1.jpg", "/fot2.jpg", "/fot3.jpg"];

  return (
    <section style={{ backgroundColor: '#f9f9f9', padding: '60px 0' }}>
      <div className="container text-center">
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '2rem' }}>
          Recuerdos que duran para siempre
        </h2>
        <div className="row">
          {images.map((src, i) => (
            <div key={i} className="col-12 col-md-4 mb-4">
              <img
                src={src}
                className="img-fluid rounded shadow-sm"
                alt={`Foto ${i + 1}`}
                style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
