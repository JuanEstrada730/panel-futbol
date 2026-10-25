import Escudo from "./Escudo"

function TarjetaEquipo({ equipo }) {
  return (
    <div className="tarjeta-equipo">
      <Escudo equipo={equipo} tamano={70} />
      <h3>{equipo.nombre}</h3>
    </div>
  )
}

export default TarjetaEquipo
