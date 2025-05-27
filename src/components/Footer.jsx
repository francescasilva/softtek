import logoBlanco from '../assets/footer/Logoblanco.png';

export default function Footer() {
  return (
   <div className="flex items-center justify-between p-4 bg-black">
      {/* Logo a la izquierda */}
      <img src={logoBlanco} alt="Logo principal" className="h-12" />
      
      {/* Contenido a la derecha */}
      <div className="flex items-center gap-4">
        <div>
          <h1 className="font-bold text-sm text-white">© 2023 RIMAC Seguros y Reaseguros.</h1>
        </div>
      </div>
    </div>
  );
}