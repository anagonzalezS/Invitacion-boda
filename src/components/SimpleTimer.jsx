import { useEffect, useRef, useState } from 'react';

export default function SimpleTimer() {
  const [seconds, setSeconds] = useState(0);
  const [mounted, setMounted] = useState(false);
  const lastTime = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const tick = (time) => {
      if (!lastTime.current) {
        lastTime.current = time;
      }

      const delta = time - lastTime.current;

      if (delta >= 1000) {
        setSeconds((prev) => prev + 1);
        lastTime.current = time;
      }

      requestAnimationFrame(tick);
    };

    const animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div>
      <h1>Segundos transcurridos: {seconds}</h1>
    </div>
  );
}
