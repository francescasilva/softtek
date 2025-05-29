

export function calcularEdad(fechaNacimiento) {
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
