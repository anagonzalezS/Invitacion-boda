import { useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1; // volumen suave
      audio.play().catch((err) => {
        console.warn('Autoplay bloqueado por el navegador:', err);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop hidden>
      <source src="/UnPacto.mp3" type="audio/mpeg" />
      Tu navegador no soporta el elemento audio.
    </audio>
  );
}
