// src/pages/Planes.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import iconoPlan from '../assets/cotizacion/iconoPlan.png';
import iconoPlanes from '../assets/cotizacion/iconoPlan2.png';
export default function Planes() {
  const location = useLocation();
  const { user } = location.state || {};
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Encabezado de navegación */}
        <div className="flex items-center space-x-2 text-blue-600 cursor-pointer mb-6" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
          <span className="font-medium">Volver</span>
        </div>
        <div className="max-w-xl mx-auto text-center space-y-4">
        {/* Título y subtítulo */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            {user?.name || 'Usuario'} ¿Para quién deseas cotizar?
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>

        {/* Opciones de selección */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opción 1: Para mí */}
         <div className=" group relative rounded-xl p-6 bg-white shadow-xl transform transition duration-300 hover:-translate-y-1   cursor-pointer">
           <input type="radio" name="option" className="absolute top-4 right-4" />
  
             <div className="flex flex-col items-start justify-start text-left">
              <img
                 src={iconoPlan}
                alt="Para mí"
                 className="w-10 h-10 mb-4"
              />
         <div>
          <h3 className="text-lg font-semibold text-gray-800">Para mí</h3>
           <p className="text-sm text-gray-500">
              Cotiza tu seguro de salud y agrega familiares si así lo deseas.
          </p>
          </div>
         </div>
      </div>
            {/* Opción 2: Para alguien más */}
           <div className=" group relative rounded-xl p-6 bg-white shadow-xl transform transition duration-300 hover:-translate-y-1   cursor-pointer">
           <input type="radio" name="option" className="absolute top-4 right-4" />
  
             <div className="flex flex-col items-start justify-start text-left">
              <img
                src={iconoPlanes}
                alt="Para alguien más"
                className="w-10 h-10 mb-4"
              />
         <div>
          <h3 className="text-lg font-semibold text-gray-800">Para alguien más</h3>
           <p className="text-sm text-gray-500">
              Realiza una cotización para uno de tus familiares o cualquier persona.
          </p>
          </div>
         </div>
      </div>

        </div>
      </div>
    </div>
    </div>
  );
}
