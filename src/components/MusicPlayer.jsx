import { useRef, useState, useEffect } from 'react';

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
          width: '100%',
          backgroundColor: '#fce4ec', // rosa pastel
          color: '#8B0000',
          padding: '8px 0',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '14px',
          zIndex: 1000,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      >
        🎶 Música: "Un Pacto" &nbsp;
        <button
          onClick={handleToggle}
          style={{
            backgroundColor: '#8B0000',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            padding: '4px 12px',
            fontSize: '12px',
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
    </>
  );
}
