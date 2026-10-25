function Escudo({ equipo, tamano = 48 }) {
  return (
    <img
      className="escudo"
      src={equipo.escudo}
      alt={`Escudo de ${equipo.nombre}`}
      width={tamano}
      height={tamano}
    />
  )
}

export default Escudo
