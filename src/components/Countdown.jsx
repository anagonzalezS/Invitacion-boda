import { useEffect, useState } from 'react';
import './Countdown.css';

export default function Countdown() {
  const weddingDate = new Date('2025-10-10T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function formatNumber(num) {
    return num.toString().padStart(2, '0');
  }

  return (
    <section className="background-fullscreen">
      <div className="countdown-container">
        <img src="/anillos.gif" alt="Anillos de boda animados" className="countdown-icon" />
        <h2 className="countdown-title">
          {timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0
            ? '¡Nuestra boda se acerca!'
            : '¡Hoy celebramos el amor! 💍'}
        </h2>

        {(timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds) > 0 ? (
          <div className="timer">
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
          {(timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds) > 0
            ? 'Contamos los días para compartir este momento con vos.'
            : 'Gracias por ser parte de este día inolvidable.'}
        </p>

        {(timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds) > 0 && (
          <a href="#rsvp" className="cta-button"
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
