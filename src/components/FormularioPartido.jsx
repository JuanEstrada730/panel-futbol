import { useState } from "react"
import ResultadoPartido from "./ResultadoPartido"

function FormularioPartido({ equipos, onAgregar }) {
  const [localId, setLocalId] = useState("")
  const [visitanteId, setVisitanteId] = useState("")
  const [golesLocal, setGolesLocal] = useState("")
  const [golesVisitante, setGolesVisitante] = useState("")
  const [error, setError] = useState("")
  const [ultimoPartido, setUltimoPartido] = useState(null)

  const marcadorValido = (valor) => {
    if (valor === "") return false
    const numero = Number(valor)
    return Number.isInteger(numero) && numero >= 0
  }

  const manejarSubmit = (e) => {
    e.preventDefault()

    if (localId === "" || visitanteId === "") {
      setError("Debes seleccionar el equipo local y el visitante.")
      return
    }

    if (localId === visitanteId) {
      setError("El equipo local y el visitante no pueden ser el mismo.")
      return
    }

    if (!marcadorValido(golesLocal) || !marcadorValido(golesVisitante)) {
      setError("Los marcadores deben ser números enteros mayores o iguales a 0.")
      return
    }

    const partido = {
      id: Date.now(),
      localId: Number(localId),
      visitanteId: Number(visitanteId),
      golesLocal: Number(golesLocal),
      golesVisitante: Number(golesVisitante),
    }

    onAgregar(partido)
    setUltimoPartido(partido)

    setLocalId("")
    setVisitanteId("")
    setGolesLocal("")
    setGolesVisitante("")
    setError("")
  }

  return (
    <section className="seccion">
      <h2>Registrar partido</h2>

      <form onSubmit={manejarSubmit} className="formulario" noValidate>
        <div className="fila-form">
          <div className="campo">
            <label htmlFor="local">Local</label>
            <select
              id="local"
              value={localId}
              onChange={(e) => setLocalId(e.target.value)}
            >
              <option value="">Seleccionar equipo</option>
              {equipos.map((equipo) => (
                <option key={equipo.id} value={equipo.id}>
                  {equipo.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="campo campo-goles">
            <label htmlFor="golesLocal">Goles</label>
            <input
              id="golesLocal"
              type="number"
              min="0"
              step="1"
              value={golesLocal}
              onChange={(e) => setGolesLocal(e.target.value)}
            />
          </div>
        </div>

        <div className="fila-form">
          <div className="campo">
            <label htmlFor="visitante">Visitante</label>
            <select
              id="visitante"
              value={visitanteId}
              onChange={(e) => setVisitanteId(e.target.value)}
            >
              <option value="">Seleccionar equipo</option>
              {equipos.map((equipo) => (
                <option key={equipo.id} value={equipo.id}>
                  {equipo.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="campo campo-goles">
            <label htmlFor="golesVisitante">Goles</label>
            <input
              id="golesVisitante"
              type="number"
              min="0"
              step="1"
              value={golesVisitante}
              onChange={(e) => setGolesVisitante(e.target.value)}
            />
          </div>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn-principal">
          Registrar partido
        </button>
      </form>

      {ultimoPartido && (
        <div className="ultimo-partido">
          <p>Partido registrado:</p>
          <ResultadoPartido partido={ultimoPartido} equipos={equipos} />
        </div>
      )}
    </section>
  )
}

export default FormularioPartido
