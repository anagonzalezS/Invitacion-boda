import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import EventInfo from './components/EventInfo';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer'; // 👈 Importar
import SimpleTimer from './components/SimpleTimer'; // Ajustá la ruta según corresponda

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div>
      <MusicPlayer /> {/* 👈 Agregar el componente */}
      <Header />
      <div data-aos="fade-up"><Countdown /></div>
      <div data-aos="fade-up"><SimpleTimer /></div>

      <div data-aos="fade-left"><EventInfo /></div>
      <div data-aos="zoom-in"><Gallery /></div>
      <div data-aos="fade-right"><RSVPForm /></div>
      <div data-aos="fade-up"><Footer /></div>
    </div>
  );
}

export default App;
