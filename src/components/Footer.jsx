import logoBlanco from '../assets/footer/Logoblanco.png';

export default function Footer() {
  return (
    <div className="w-full overflow-hidden bg-black px-4 py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between text-white gap-4">
        {/* Logo */}
        <img src={logoBlanco} alt="Logo principal" className="h-12" />

        {/* Texto */}
        <h1 className="font-bold text-sm text-center sm:text-left">
          © 2023 RIMAC Seguros y Reaseguros.
        </h1>
      </div>
    </div>
  );
}
