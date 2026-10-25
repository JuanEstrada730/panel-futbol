import ResultadoPartido from "./ResultadoPartido"

function HistorialPartidos({ equipos, partidos, filtroEquipo, onFiltrar, onEliminar }) {
  const partidosFiltrados = partidos.filter((partido) => {
    if (filtroEquipo === "todos") return true
    const id = Number(filtroEquipo)
    return partido.localId === id || partido.visitanteId === id
  })

  return (
    <section className="seccion">
      <h2>Historial de resultados</h2>

      <div className="campo filtro">
        <label htmlFor="filtro">Filtrar por equipo</label>
        <select
          id="filtro"
          value={filtroEquipo}
          onChange={(e) => onFiltrar(e.target.value)}
        >
          <option value="todos">Todos los equipos</option>
          {equipos.map((equipo) => (
            <option key={equipo.id} value={equipo.id}>
              {equipo.nombre}
            </option>
          ))}
        </select>
      </div>

      {partidos.length === 0 && (
        <p className="mensaje-vacio">Todavía no hay partidos registrados.</p>
      )}

      {partidos.length > 0 && partidosFiltrados.length === 0 && (
        <p className="mensaje-vacio">Este equipo no tiene partidos registrados.</p>
      )}

      <ul className="lista-partidos">
        {partidosFiltrados.map((partido) => (
          <li key={partido.id} className="item-partido">
            <ResultadoPartido partido={partido} equipos={equipos} />
            <button className="btn-eliminar" onClick={() => onEliminar(partido.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HistorialPartidos
