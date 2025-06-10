import { useEffect, useState } from 'react';
import './Countdown.css';

export default function Countdown() {
  const WEDDING_DATE_STRING = '2025-10-10T00:00:00Z'; // Usar Z para UTC
  const weddingDate = new Date(WEDDING_DATE_STRING);

  // Estado para el tiempo restante
  const [timeLeft, setTimeLeft] = useState({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Función para calcular el tiempo restante
  function getTimeRemaining() {
    const now = new Date();
    const total = weddingDate - now;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days: days >= 0 ? days : 0,
      hours: hours >= 0 ? hours : 0,
      minutes: minutes >= 0 ? minutes : 0,
      seconds: seconds >= 0 ? seconds : 0,
    };
  }

  // Añadimos formato para que siempre muestre 2 dígitos
  function formatNumber(num) {
    return num.toString().padStart(2, '0');
  }

  // Guardar en localStorage
  function saveTimeToLocalStorage(timeObj) {
    try {
      localStorage.setItem('countdownTimeLeft', JSON.stringify(timeObj));
    } catch {
      // En caso que localStorage esté bloqueado (ej: modo incógnito)
    }
  }

  // Leer de localStorage
  function getTimeFromLocalStorage() {
    try {
      const item = localStorage.getItem('countdownTimeLeft');
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  }

  useEffect(() => {
    // Intenta cargar desde localStorage
    const savedTime = getTimeFromLocalStorage();

    if (savedTime && savedTime.total > 0) {
      setTimeLeft(savedTime);
    } else {
      setTimeLeft(getTimeRemaining());
    }

    const intervalId = setInterval(() => {
      const remaining = getTimeRemaining();

      if (remaining.total <= 0) {
        clearInterval(intervalId);
        setTimeLeft({
          total: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        localStorage.removeItem('countdownTimeLeft');
      } else {
        setTimeLeft(remaining);
        saveTimeToLocalStorage(remaining);
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
