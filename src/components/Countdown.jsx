import { useEffect, useState } from 'react';
import './Countdown.css';

export default function Countdown() {
  const weddingDate = new Date(2025, 9, 10, 0, 0, 0); // Octubre es mes 9 (0 indexado)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function getTimeRemaining() {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }

    // Actualizar al cargar
    setTimeLeft(getTimeRemaining());

    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  const isTimeZero =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section className="background-fullscreen" aria-live="polite">
      <div className="countdown-container">
        <img
          src="/anillos.gif"
          alt="Anillos de boda animados"
          className="countdown-icon"
          aria-hidden="true"
        />
        <h2 className="countdown-title">
          {isTimeZero ? '¡Hoy celebramos el amor! 💍' : '¡Nuestra boda se acerca!'}
        </h2>

        {!isTimeZero ? (
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
          {isTimeZero
            ? 'Gracias por ser parte de este día inolvidable.'
            : 'Contamos los días para compartir este momento con vos.'}
        </p>

        {!isTimeZero && (
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
