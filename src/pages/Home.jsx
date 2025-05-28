import Header from '../components/Header';
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';

export default function Home() {
  return (
   <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(250deg,#6ef4cf 0%,#FFFFFF 15% ,#FFFFFF 20% ,#FFFFFF 85%, #C333FF 100%)',
      }}
    >
      <Header />
      <main className="min-h-screen p-4">
        <Formulario />
      </main>
      <Footer />
    </div>
  );
}

 