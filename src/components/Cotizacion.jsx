import { useLocation } from 'react-router-dom';

export default function Cotizacion() {
  const location = useLocation();
  const { user, celular } = location.state || {};

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">¡Bienvenido, {user?.name}!</h1>
      <p className="text-lg mb-4">Tu número registrado: {celular}</p>
      
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Planes disponibles</h2>
        {/* Aquí puedes listar tus planes */}
        <ul className="mt-4 space-y-3">
          <li className="p-4 border rounded-lg shadow">Plan Básico</li>
          <li className="p-4 border rounded-lg shadow">Plan Intermedio</li>
          <li className="p-4 border rounded-lg shadow">Plan Premium</li>
        </ul>
      </div>
    </div>
  );
}