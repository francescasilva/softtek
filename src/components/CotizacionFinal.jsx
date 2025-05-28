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
    <div className="p-6 max-w-xl mx-auto">
       <div
        className="flex items-center space-x-2 text-blue-600 cursor-pointer mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Volver</span>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Resumen de tu cotización</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Datos del Usuario</h2>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Edad:</strong> {user.birthDay && calcularEdad(user.birthDay)}</p>
        {/* Otros datos que tengas en user */}
      </section>

      <section>
        <h2 className="text-xl font-semibold">Plan Seleccionado</h2>
        <p><strong>Nombre del plan:</strong> {plan.name}</p>
        <p><strong>Precio:</strong> S/ {plan.price}</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {plan.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// Puedes copiar la función calcularEdad para mostrar edad aquí también
function calcularEdad(fechaNacimiento) {
  const [dia, mes, anio] = fechaNacimiento.split("-");
  const fechaISO = `${anio}-${mes}-${dia}`;
  const nacimiento = new Date(fechaISO);
  if (isNaN(nacimiento)) return null;

  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const m = hoy.getMonth() - nacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}
