import { useEffect, useState } from 'react';

export default function TestTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect mounted');
    const intervalId = setInterval(() => {
      console.log('Tick');
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
