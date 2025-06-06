import { useState, useEffect } from 'react';

export default function SimpleTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Segundos transcurridos: {seconds}</h1>
    </div>
  );
}
