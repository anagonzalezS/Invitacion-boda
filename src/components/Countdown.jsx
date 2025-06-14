import Countdown from 'react-countdown';
import './Countdown.css';

export default function CuentaRegresiva() {
  const weddingDate = new Date('2025-10-10T00:00:00');

  return (
    <section className="background-fullscreen">
      <div className="countdown-container">
        <img
          src="/anillos.gif"
          alt="Anillos de boda animados"
          className="countdown-icon"
        />

        <Countdown
          date={weddingDate}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return (
                <>
                  <h2 className="countdown-title">¡Hoy celebramos el amor! 💍</h2>
                  <p className="final-message">¡Es el día más esperado de nuestras vidas! 💕</p>
                  <p className="sub-message">
                    Gracias por ser parte de este día inolvidable.
                  </p>
                </>
              );
            } else {
              return (
                <>
                  <h2 className="countdown-title">¡Nuestra boda se acerca!</h2>

                  <div className="timer">
                    <div className="time-segment">
                      <div className="time-label">Días</div>
                      {String(days).padStart(2, '0')}
                    </div>
                    <div className="time-segment">
                      <div className="time-label">Horas</div>
                      {String(hours).padStart(2, '0')}
                    </div>
                    <div className="time-segment">
                      <div className="time-label">Min.</div>
                      {String(minutes).padStart(2, '0')}
                    </div>
                    <div className="time-segment">
                      <div className="time-label">Seg.</div>
                      {String(seconds).padStart(2, '0')}
                    </div>
                  </div>

                  <p className="sub-message">
                    Contamos los días para compartir este momento con vos.
                  </p>

                  <a
                    href="#rsvp"
                    className="cta-button"
                    onClick={(e) => {
                      e.preventDefault();
                      const rsvpSection = document.getElementById('rsvp');
                      if (rsvpSection) {
                        rsvpSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Confirmar asistencia
                  </a>
                </>
              );
            }
          }}
        />
      </div>
    </section>
  );
}
