import Header from '../components/Header';
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen p-4">
        <Formulario />
      </main>
      <Footer />
    </>
  );
}
