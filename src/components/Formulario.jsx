import  { useState } from "react";
import { useNavigate } from 'react-router-dom';
import imgPrincipal from '../assets/formulario/imgprincipal.png';

export default function Formulario() {
  const [tipoDocumento, setTipoDocumento] = useState("dni");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [celular, setCelular] = useState("");
  const [aceptaPrivacidad, setAceptaPrivacidad] = useState(false);
  const [aceptaComercial, setAceptaComercial] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!numeroDocumento || !celular || !aceptaPrivacidad) {
    alert("Por favor completa todos los campos obligatorios.");
    return;
  }

  if (numeroDocumento !== '12345678') {
    alert("DNI no encontrado");
    return;
  }

  try {
    const response = await fetch( `https://rimac-front-end-challenge.netlify.app/api/user.json`);

    if (!response.ok) throw new Error('Usuario no encontrado');

    const userData = await response.json();
    console.log("Datos del usuario:", userData); 

    // Redirige a la ruta /planes con los datos
    navigate('/planes', {
     state: {
      user: {
      ...userData,
      dni: numeroDocumento,
      celular: celular
    }
  }
    });
  } catch (error) {
    alert("Error al obtener los datos del usuario: " + error.message);
  }
};

  return (
    <div className="flex  max-w-6xl mx-auto mt-4  ">
      {/* Imagen a la izquierda */}
      <div className="w-1/2 pr-4">
         <img src={imgPrincipal} alt="Imagen principal"  className="w-full max-w-[450px] h-auto object-contain" />
      </div>

      {/* Formulario a la derecha */}
    <form className="w-[351px] h-[128px]" onSubmit={handleSubmit}>
      <div className="w-fit px-4 py-1 rounded-xl font-bold text-sm text-black" style={{ background: "linear-gradient(to right, #00F4E2 , #00FF7F )" }}>Seguro Salud Flexible</div>
      <div className="text-[32px] font-bold leading-tight">Creado para ti y tu<br/>familia</div>
      <div className="text-[14px] ">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y<br/> recibe nuestra asesoría. 100% online.</div>

        {/* Aquí van tus campos del formulario */}
         {/* Tipo de documento */}
    <div className="flex mb-4">
    
        <div className="mb-4 ">
          <label
            htmlFor="tipoDocumento"
            className="block mb-1 mt-3 text-sm font-medium text-gray-700"
          >
            
          </label>
          <select
            id="tipoDocumento"
            name="tipoDocumento"
             value={tipoDocumento}
             onChange={(e) => setTipoDocumento(e.target.value)}
            className="w-36 border border-gray-300 rounded-l-md px-1 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="dni">DNI</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="ce">Carné de Extranjería</option>
          </select>
        </div>
        {/* Número de Documento */}
       <div className="mb-4">
        <label
          htmlFor="numeroDocumento"
          className="block mb-1 mt-3 text-sm font-medium text-gray-700"
        >
          
        </label>
        <input
          type="text"
          id="numeroDocumento"
          name="numeroDocumento"
          placeholder="Nro. de Documento"
          value={numeroDocumento}
          onChange={(e) => setNumeroDocumento(e.target.value)}
          className="w-full px-6 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
    </div>
      {/* Celular */}
      <div className="mb-4">
        <input
          type="tel"
          name="celular"
          placeholder="Celular"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Checkboxes */}
      <div className="mb-4 flex items-start">
        <input
          type="checkbox"
          id="politicaPrivacidad"
          checked={aceptaPrivacidad}
          onChange={(e) => setAceptaPrivacidad(e.target.checked)}
          className="mt-1 mr-2"
        />
        <label
          htmlFor="politicaPrivacidad"
          className="text-sm text-black"
        >
          Acepto la{" "}
          <a href="#" >
            Política de Privacidad
          </a>
        </label>
      </div>

      <div className="mb-6 flex items-start">
        <input
          type="checkbox"
          id="politicaComercial"
          checked={aceptaComercial}
          onChange={(e) => setAceptaComercial(e.target.checked)}
          className="mt-1 mr-2"
        />
        <label
          htmlFor="politicaComercial"
          className="text-sm text-black"
        >
          Acepto la{" "}
          <a href="#" >
            Política de Comunicaciones Comerciales
          </a>
        </label>
      </div>

       <div className="mt-6 mb-6">
         <h6 className="underline text-sm">Aplican Términos y Condiciones.</h6>
       </div>
      {/* Botón */}
      <button
        type="submit"
        className=" bg-black text-white text-lg font-bold py-3 px-10 rounded-full hover:bg-blue-700 transition duration-200"
      >
        Cotiza Aquí
      </button>
      </form>
    </div>
  );
}
