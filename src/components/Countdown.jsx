import { useEffect, useState } from 'react';
import './Countdown.css';

export default function Countdown({ weddingDate = '2025-12-05T00:00:00' }) {
  const [timeLeft, setTimeLeft] = useState(null);

  // Esta función calcula el tiempo restante sin zonas horarias
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(weddingDate);
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Primera ejecución
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [weddingDate]);

  if (!timeLeft) return null;

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
          {!isTimeZero ? '¡La boda está por llegar!' : '¡Hoy es el gran día! 🎉'}
        </h2>

        {!isTimeZero ? (
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
          <p className="final-message">¡Felicidades a los novios!</p>
        )}

        <p className="sub-message">
          {!isTimeZero ? '¡Prepara todo para celebrar el amor!' : 'Disfruta cada momento'}
        </p>

        {!isTimeZero && (
          <button
            onClick={() => {
              document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cta-button"
          >
            Reservá tu lugar
          </button>
        )}
      </div>
    </section>
  );
}
