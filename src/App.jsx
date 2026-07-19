import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fasilitas from './components/Fasilitas';
import UMKMDirectory from './components/UMKMDirectory';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Menangani scroll otomatis jika ada hash (seperti #peta) di URL saat web pertama kali dimuat
    if (window.location.hash) {
      const hash = window.location.hash.substring(1); // Menghapus tanda '#'
      
      // Tunggu sebentar sampai semua komponen React selesai di-render
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80; // Sesuaikan dengan tinggi navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 500); // Beri jeda 500ms agar DOM & gambar sempat dimuat
    }
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fasilitas />
        <UMKMDirectory />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
