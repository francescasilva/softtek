import logo from '../assets/header/logo.png';
import telefono from '../assets/header/telefono.png';

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-8 md:px-20">
      {/* Logo */}
      <img src={logo} alt="Logo principal" className="h-12 mb-2 sm:mb-0" />

      {/* Contenido a la derecha */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <h1 className="font-bold text-sm text-center sm:text-left">¡Compra por este medio!</h1>
        <div className="flex items-center gap-2">
          <img src={telefono} alt="Icono teléfono" className="h-6 w-6" />
          <h1 className="font-bold text-xl">(01) 411 6001</h1>
        </div>
      </div>
    </div>
  );
}
