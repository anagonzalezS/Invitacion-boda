import { useRef, useState } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.volume = 0.1;
      audio.play().catch((err) => {
        console.warn('No se pudo reproducir:', err);
      });
    }
    setPlaying(!playing);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#fce4ec',
          color: '#8B0000',
          padding: '8px 12px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 'clamp(12px, 4vw, 16px)',
          zIndex: 1000,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          boxSizing: 'border-box',
        }}
      >
        🎶 Música: "Un Pacto"
        <button
          onClick={handleToggle}
          style={{
            backgroundColor: '#8B0000',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            padding: '6px 16px',
            fontSize: 'clamp(11px, 3vw, 14px)',
            marginLeft: '10px',
            cursor: 'pointer',
          }}
        >
          {playing ? 'Pausar' : 'Reproducir'}
        </button>
      </div>

      <audio ref={audioRef} loop>
        <source src="/un_pacto.mp3" type="audio/mpeg" />
        Tu navegador no soporta el audio.
      </audio>

      {/* Espacio para que no tape contenido */}
      <div style={{ height: '48px' }} />
    </>
  );
}
