import { useEffect, useRef, useState } from 'react';

export default function SimpleTimer() {
  const [seconds, setSeconds] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef();

  const animate = (time) => {
    if (!startTimeRef.current) {
      startTimeRef.current = time;
    }

    const delta = time - startTimeRef.current;

    if (delta >= 1000) {
      setSeconds((prev) => prev + 1);
      startTimeRef.current = time;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div>
      <h1>Segundos transcurridos: {seconds}</h1>
    </div>
  );
}
