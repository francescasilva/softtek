// src/pages/Planes.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import iconoPlan from '../assets/cotizacion/iconoPlan.png';
import iconoPlanes from '../assets/cotizacion/iconoPlan2.png';
import { useEffect, useState } from "react";
import home from '../assets/planes/home.png';
import clinica from '../assets/planes/clinica.png';


export default function Planes() {
  const location = useLocation();
  const { user } = location.state || {};
  const navigate = useNavigate();
  const [planes, setPlanes] = useState([]);
  const [planesFiltrados, setPlanesFiltrados] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);


  // Función para calcular edad a partir de fecha de nacimiento
 const calcularEdad = (fechaNacimiento) => {
  // Convertir de "DD-MM-YYYY" a "YYYY-MM-DD"
  const [dia, mes, anio] = fechaNacimiento.split("-");
  const fechaISO = `${anio}-${mes}-${dia}`; // formato ISO válido

  const nacimiento = new Date(fechaISO);
  if (isNaN(nacimiento)) return null;

  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const m = hoy.getMonth() - nacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
};

  const edadUsuario = user?.birthDay ? calcularEdad(user.birthDay) : null;

  console.log("Edad usuario:", edadUsuario);
  console.log("Usuario recibido:", user);


  // Obtener planes desde la API
    useEffect(() => {
       fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json") // 🔁 reemplaza por tu URL real
      .then((res) => res.json())
      .then((data) => {
        setPlanes(data.list);
       
        });
     }, []);

    // 1. Elimina el filtrado dentro de los handlers
      const handleSeleccionParaMi = () => {
        setOpcionSeleccionada('para-mi');
      };

      const handleSeleccionParaOtro = () => {
          setOpcionSeleccionada('para-otro');
       };

        // 2. Usa useEffect para filtrar cuando ya tengas la opción y los planes
         useEffect(() => {
         if (!opcionSeleccionada || planes.length === 0 || edadUsuario === null) return;

         if (opcionSeleccionada === 'para-mi') {
            // Solo planes mayores o iguales a la edad del usuario
          const filtrados = planes.filter((plan) => plan.age >= edadUsuario);
            setPlanesFiltrados(filtrados);
           }

        if (opcionSeleccionada === 'para-otro') {
        const filtrados = planes.map((plan) => ({
          ...plan,
         price: (plan.price * 0.95).toFixed(2), // 5% de descuento
          }));
          setPlanesFiltrados(filtrados);
        }
          },      [opcionSeleccionada, planes, edadUsuario]);

      console.log('Edad usuario:', edadUsuario);
      console.log('Planes mostrados:', planesFiltrados);

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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            {user?.name || 'Usuario'} ¿Para quién deseas cotizar?
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>

        {/* Opciones de selección */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opción 1: Para mí */}
          
         <label
          className={`group relative rounded-xl p-6 bg-white h-[212px] w-[256px] shadow-xl transform transition duration-300 hover:-translate-y-1 cursor-pointer border-0 ${
           opcionSeleccionada === 'para-mi' ? 'border-blue-500 ring-2 ring-blue-200' : ''
            }`}
            onClick={() => setOpcionSeleccionada('para-mi')} //  aquí va 'para-mi'
            >
        <input
           type="radio"
           name="option"
           value="para-mi"
            checked={opcionSeleccionada === 'para-mi'}
             onChange={() => {}} // No necesitas repetir setOpcionSeleccionada aquí porque ya lo haces en onClick
             className="absolute top-4 right-4"
            />
             <div className="flex flex-col items-start justify-start text-left">
            <img src={iconoPlan} alt="Para mí" className="w-10 h-10 mb-4" />
           <div>
           <h3 className="text-lg font-semibold text-gray-800">Para mí</h3>
          <p className="text-sm text-gray-500">
           Cotiza tu seguro de salud y agrega familiares si así lo deseas.
         </p>
       </div>
           </div>
       </label>

{/* Opción 2: Para alguien más */}
      <label
       className={`group relative rounded-xl p-6 bg-white h-[212px] w-[256px] shadow-xl transform transition duration-300 hover:-translate-y-1 cursor-pointer border-0 ${
       opcionSeleccionada === 'para-otro' ? 'border-blue-500 ring-2 ring-blue-200' : ''
     }`}
      onClick={() => setOpcionSeleccionada('para-otro')}
     >
     <input
      type="radio"
      name="option"
      value="para-otro"
      checked={opcionSeleccionada === 'para-otro'}
      onChange={() => {}}
      className="absolute top-4 right-4"
     />
        <div className="flex flex-col items-start justify-start text-left">
      <img src={iconoPlanes} alt="Para alguien más" className="w-10 h-10 mb-4" />
        <div>
         <h3 className="text-lg font-semibold text-gray-800">Para alguien más</h3>
          <p className="text-sm text-gray-500">
              Realiza una cotización para uno de tus familiares o cualquier persona.
           </p>
          </div>
          </div>
        </label>
        </div>
      </div>
      </div>
        {/* Planes filtrados */}
        {opcionSeleccionada && (
      <div className=" flex justify-center mt-10">
      <div className=" grid gap-8 md:grid-cols-3 mt-10"> 
         
        {planesFiltrados.length > 0 ? (
          planesFiltrados.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 shadow-md p-10 bg-white h-[687px] w-[288px] max-w-sm"
             
              >
                <div className="flex items-center gap-x-2 mb-3">
                <h3 className="text-xl font-bold  text-gray-800 mb-5">{plan.name}</h3>
              {plan.name.toLowerCase().includes("clínica") ? (
                <img src={clinica} alt="Plan en clínica" className="w-12 h-12 ml-3 -mt-3 relative" />
              ) : (
                <img src={home} alt="Plan en casa" className="w-12 h-12 ml-3 -mt-3 relative" />
              )}
              
            </div>
              
              <p className="text-xs font-semibold text-gray-500 mb-2">
                COSTO DEL PLAN
              </p>
              <p className="text-xl font-bold text-gray-800 mb-7">
                S/ {plan.price} al mes
              </p>
              <hr className="my-4 border-gray-200 mb-9" />
              <ul className="list-disc list-outside pl-5 text-gray-600 space-y-10 text-sm font-semibold leading-relaxed ">
                {plan.description.map((item, i) => (
                  <li key={i} >{item}</li>
                ))}
              </ul>
             
                  <button
                   type="submit"
                    onClick={() => {
                    navigate('/resumen', { state: { user, plan } });
                    }}
                 className=" mt-auto  bg-red-500 text-white text-lg font-semibold py-1 px-7 rounded-4xl hover:bg-red-600 transition duration-200"
                >
                Seleccionar Plan
               </button>

              
              
            </div>
          )) 
        ) : (
          <p className="text-center col-span-2 text-gray-500">
            No hay planes disponibles para tu edad.
          </p>
        )}
      </div>
      </div>
       )}
    </div>
  );
}
