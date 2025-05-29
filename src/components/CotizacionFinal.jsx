import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';



export default function CotizacionFinal() {
  const location = useLocation();
  const navigate = useNavigate();

  // Aquí obtienes user y plan desde el estado de navegación
  const { user, plan } = location.state || {};

  if (!user || !plan) {
    // Si no hay datos, quizá redirigir a inicio o a planes
    navigate('/planes');
    return null;
  }

  return (
        <div className="p-6 max-w-4xl mx-auto ">
          <div
            className="flex items-center space-x-2 text-blue-600 cursor-pointer mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Volver</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-10">Resumen del seguro</h1>

          <div className="rounded-2xl border border-gray-200 shadow-md p-10 bg-white w-full max-w-4xl mx-auto mb-16">
              <section className="mb-6">
            <h2 className="text-xl font-semibold">PRECIOS CALCULADOS:</h2>
            <p><strong>{user.name}</strong> </p>
            <hr className="my-4 border-gray-200 mb-9" />
            <h2 className="text-xl font-semibold">Responsable del pago:</h2>
            <p><strong>{user.dni}</strong> </p>
            <p><strong>{user.celular}</strong> </p>
           
          </section>
            {/* Otros datos que tengas en user */}
          <section>
            <h2 className="text-xl font-semibold">Plan elegido: </h2>
            <p><strong>{plan.name}</strong> </p>
            <p><strong>Costo del plan:</strong> S/ {plan.price} al mes</p>
            
          </section>
          </div>
        
        </div>
    );
  }


