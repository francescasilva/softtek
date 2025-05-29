import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import imgPrincipal from '../assets/formulario/imgprincipal.png';

export default function Formulario() {
  const [tipoDocumento, setTipoDocumento] = useState("dni");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [celular, setCelular] = useState("");
  const [aceptaPrivacidad, setAceptaPrivacidad] = useState(false);
  const [aceptaComercial, setAceptaComercial] = useState(false);
  const navigate = useNavigate();

  const USUARIO_VALIDO = {
    dni: '12345678',
    celular: '983538958'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!numeroDocumento || !celular || !aceptaPrivacidad) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    if (
      numeroDocumento !== USUARIO_VALIDO.dni ||
      celular !== USUARIO_VALIDO.celular
    ) {
      alert("DNI o celular incorrecto.");
      return;
    }

    try {
      const response = await fetch(`https://rimac-front-end-challenge.netlify.app/api/user.json`);
      if (!response.ok) throw new Error('Usuario no encontrado');

      const userData = await response.json();

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
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-4 px-4 lg:px-0 gap-6 lg:gap-10 overflow-hidden">
      {/* Imagen a la izquierda */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={imgPrincipal}
          alt="Imagen principal"
          className="w-full max-w-md h-auto object-contain"
        />
      </div>

      {/* Formulario a la derecha */}
      <form className="w-full lg:w-[350px]" onSubmit={handleSubmit}>
        <div className="w-fit px-4 py-1 rounded-xl font-bold text-sm text-black mb-3" style={{ background: "linear-gradient(to right, #00F4E2 , #00FF7F )" }}>
          Seguro Salud Flexible
        </div>

        <h1 className=" text-[28px] sm:text-[35px] font-bold leading-tight mb-3">
          Creado para ti y tu<br />familia
        </h1>

        <p className="text-[15px] mb-4">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
        </p>
                      {/* Tipo de documento y número */}
<div className="flex w-full mb-4">
  <select
    id="tipoDocumento"
    name="tipoDocumento"
    value={tipoDocumento}
    onChange={(e) => setTipoDocumento(e.target.value)}
    className="w-1/3 border border-black rounded-l-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
  >
    <option value="dni">DNI</option>
    <option value="pasaporte">Pasaporte</option>
    <option value="ce">Carné de Extranjería</option>
  </select>

  <input
    type="text"
    id="numeroDocumento"
    name="numeroDocumento"
    placeholder="Nro. de Documento"
    value={numeroDocumento}
    onChange={(e) => setNumeroDocumento(e.target.value)}
    minLength={8}
    maxLength={8}
    className="flex-1 border-t border-r border-b  border-black border-l-0 rounded-r-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
  />
</div>

{/* Celular */}
<div className="mb-4 w-full">
  <input
    type="tel"
    name="celular"
    placeholder="Celular"
    value={celular}
    onChange={(e) => setCelular(e.target.value)}
    minLength={9}
    maxLength={9}
    className="w-full px-4 py-3 border  border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
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
          <label htmlFor="politicaPrivacidad" className="text-sm text-black">
            Acepto la <a href="#" >Política de Privacidad</a>
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
          <label htmlFor="politicaComercial" className="text-sm text-black">
            Acepto la <a href="#" >Política de Comunicaciones Comerciales</a>
          </label>
        </div>

        <div className="mb-4">
          <h6 className="underline font-bold text-sm">Aplican Términos y Condiciones.</h6>
        </div>

        <button
          type="submit"
          className="w-50 bg-black text-white text-lg font-bold py-3 px-10 rounded-full hover:bg-gray-900 transition duration-200"
        >
          Cotiza Aquí
        </button>
      </form>
    </div>
  );
}
