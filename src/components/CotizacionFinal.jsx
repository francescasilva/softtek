import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import icono from '../assets/resumen/icono.png';


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
      <div   className="p-6 max-w-4xl mx-auto">
    <span
     onClick={() => navigate(-1)}
      className="inline-flex items-center space-x-2 text-blue-600 cursor-pointer mb-6"
    >
  <ArrowLeft size={20} />
  <span className="font-medium">Volver</span>
</span>


  <h1 className="text-2xl font-bold text-[#141938] mb-6">Resumen del seguro</h1>

  <div className="rounded-2xl border text-[#141938] border-gray-200 shadow-md px-8 py-4 bg-white w-full max-w-4xl mx-auto mb-8">
    <section className="mb-4">
      <h2 className="text-xs font-bold ">PRECIOS CALCULADOS PARA:</h2>

      <div className="flex items-center gap-3 my-2">
        <img src={icono} alt="icono" className="h-10" />
        <p className="font-lato text-xl  font-extrabold">{user.name} {user.lastName}</p>
      </div>

      <hr className="my-2 border-gray-200 mb-4" />

      <div className="space-y-1 text-sm">
        <h2 className="text-lg font-bold">Responsable del pago:</h2>
        <p className='font-semibold'>DNI: {user.dni}</p>
        <p className='font-semibold'>Celular: {user.celular}</p>
      </div>
    </section>

    <section className="space-y-1 text-sm">
      <h2 className="text-lg font-bold">Plan elegido:</h2>
      <p className='font-semibold'>{plan.name}</p>
      <p className='font-semibold'>Costo del plan: S/ {plan.price} al mes</p>
    </section>
  </div>
</div>

    );
  }


