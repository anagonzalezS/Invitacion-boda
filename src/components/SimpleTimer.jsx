import { useState, useEffect } from 'react';

export default function SimpleTimer() {
  const [seconds, setSeconds] = useState(0);
  const [mounted, setMounted] = useState(false); // Evita errores de hidratación

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted]);

  if (!mounted) return null; // No mostrar hasta que monte

  return (
    <div>
      <h1>Segundos transcurridos: {seconds}</h1>
    </div>
  );
}
