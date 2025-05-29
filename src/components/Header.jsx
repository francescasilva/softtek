
import logo from '../assets/header/logo.png';
import telefono from '../assets/header/telefono.png';

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Logo a la izquierda */}
      <img src={logo} alt="Logo principal" className="h-12 ml-20" />
      
      {/* Contenido a la derecha */}
      <div className="flex items-center gap-4 pr-20">
        <div>
          <h1 className="font-bold text-sm">¡Compra por este medio!</h1>
        </div>
        <div className="flex items-center gap-2">
          <img src={telefono} alt="Icono teléfono" className="h-6 w-6" />
          <h1 className="font-bold text-xl">(01) 411 6001</h1>
        </div>
      </div>
    </div>
  );
}