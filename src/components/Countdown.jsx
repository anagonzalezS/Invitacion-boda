import { useEffect, useState } from 'react';
import './Countdown.css';

export default function Countdown() {
  const weddingDate = new Date('2025-10-10T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState(() => {
    const now = Date.now();
    const diff = weddingDate - now;
    return calculateTimeLeft(diff);
  });

  function calculateTimeLeft(diff) {
    const total = diff > 0 ? diff : 0;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  function formatNumber(num) {
    return num.toString().padStart(2, '0');
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      const diff = weddingDate - now;
      const updated = calculateTimeLeft(diff);

      setTimeLeft(updated);

      if (updated.total <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="background-fullscreen" aria-live="polite">
      <div className="countdown-container">
        <img
          src="/anillos.gif"
          alt="Anillos de boda animados"
          className="countdown-icon"
        />
        <h2 className="countdown-title">
          {timeLeft.total > 0
            ? '¡Nuestra boda se acerca!'
            : '¡Hoy celebramos el amor! 💍'}
        </h2>

        {timeLeft.total > 0 ? (
          <div role="timer" className="timer">
            <div className="time-segment">
              <div className="time-label">Días</div>
              {formatNumber(timeLeft.days)}
            </div>
            <div className="time-segment">
              <div className="time-label">Horas</div>
              {formatNumber(timeLeft.hours)}
            </div>
            <div className="time-segment">
              <div className="time-label">Min.</div>
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className="time-segment">
              <div className="time-label">Seg.</div>
              {formatNumber(timeLeft.seconds)}
            </div>
          </div>
        ) : (
          <p className="final-message">¡Es el día más esperado de nuestras vidas! 💕</p>
        )}

        <p className="sub-message">
          {timeLeft.total > 0
            ? 'Contamos los días para compartir este momento con vos.'
            : 'Gracias por ser parte de este día inolvidable.'}
        </p>

        {timeLeft.total > 0 && (
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
        )}
      </div>
    </section>
  );
}
