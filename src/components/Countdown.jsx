import { useEffect, useState } from 'react';
import './Countdown.css';

export default function Countdown({ weddingDate = '2025-12-05T00:00:00' }) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const calculateTimeLeft = () => {
      const targetDate = new Date(
        new Date(weddingDate).toLocaleString('en-US', {
          timeZone: 'America/Argentina/Buenos_Aires',
        })
      );

      const now = new Date(
        new Date().toLocaleString('en-US', {
          timeZone: 'America/Argentina/Buenos_Aires',
        })
      );

      const diff = targetDate - now;

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

    setTimeLeft(calculateTimeLeft());

    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, [mounted, weddingDate]);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  const isTimeZero =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (!mounted) return null; // ✅ evita errores en SSR

  return (
    <section className="background-fullscreen" aria-live="polite">
      <div className="countdown-container">
        <img
          src="/anillos.gif"
          alt="Anillos de boda animados"
          className="countdown-icon"
          aria-hidden="true"
        />

        <h2 className="countdown-title" role="heading" aria-level="2">
          {!isTimeZero ? '¡La boda está por llegar!' : '¡Hoy es el gran día! 🎉'}
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
          <p className="final-message">¡Felicidades a los novios!</p>
        )}

        <p className="sub-message">
          {!isTimeZero ? '¡Prepara todo para celebrar el amor!' : 'Disfruta cada momento'}
        </p>

        {!isTimeZero && (
          <button
            onClick={() => {
              document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' });
            }}
            className="cta-button"
            type="button"
          >
            Reservá tu lugar
          </button>
        )}
      </div>
    </section>
  );
}
