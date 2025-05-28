// src/pages/Planes.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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

        {/* Título y subtítulo */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {user?.name || 'Usuario'} ¿Para quién deseas cotizar?
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>

        {/* Opciones de selección */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opción 1: Para mí */}
          <div className="group relative border rounded-xl p-6 bg-white hover:shadow-lg transition cursor-pointer">
            <input type="radio" name="option" className="absolute top-4 right-4" />
            <div className="flex items-center space-x-4">
              <img
                src="https://img.icons8.com/ios-filled/50/fc40b0/person-female.png"
                alt="Para mí"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Para mí</h3>
                <p className="text-sm text-gray-500">Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
              </div>
            </div>
          </div>

          {/* Opción 2: Para alguien más */}
          <div className="group relative border rounded-xl p-6 bg-white hover:shadow-lg transition cursor-pointer">
            <input type="radio" name="option" className="absolute top-4 right-4" />
            <div className="flex items-center space-x-4">
              <img
                src="https://img.icons8.com/ios-filled/50/667085/family.png"
                alt="Para alguien más"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Para alguien más</h3>
                <p className="text-sm text-gray-500">Realiza una cotización para uno de tus familiares o cualquier persona.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
