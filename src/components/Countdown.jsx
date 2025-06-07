import { useEffect, useState } from 'react';
import './Countdown.css';

export default function Countdown() {
  const birthdayDate = new Date('2025-10-10T00:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const diff = birthdayDate - now;

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

  useEffect(() => {
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
          alt="Anillos de cumpleaños animados"
          className="countdown-icon"
          aria-hidden="true"
        />
        <h2 className="countdown-title" role="heading" aria-level="2">
          {!isTimeZero ? '¡El cumpleaños se acerca!' : '¡Hoy es el gran día! 🎉'}
        </h2>
        {!isTimeZero ? (
          <div role="timer" aria-atomic="true" aria-live="assertive" className="timer">
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
          <p className="final-message">¡Feliz cumpleaños! 🎂🎈</p>
        )}
        <p className="sub-message">
          {!isTimeZero ? '¡Prepará todo para celebrar!' : 'Disfrutá tu día 💖'}
        </p>
      </div>
    </section>
  );
}
