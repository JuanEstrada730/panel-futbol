import Escudo from "./Escudo"

function ResultadoPartido({ partido, equipos }) {
  const local = equipos.find((e) => e.id === partido.localId)
  const visitante = equipos.find((e) => e.id === partido.visitanteId)

  return (
    <div className="resultado">
      <div className="resultado-equipo">
        <Escudo equipo={local} />
        <span>{local.nombre}</span>
      </div>

      <div className="marcador">
        {partido.golesLocal} - {partido.golesVisitante}
      </div>

      <div className="resultado-equipo">
        <Escudo equipo={visitante} />
        <span>{visitante.nombre}</span>
      </div>
    </div>
  )
}

export default ResultadoPartido
