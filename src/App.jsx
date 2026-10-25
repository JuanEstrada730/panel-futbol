import { useState } from "react"
import { equipos } from "./data/equipos"
import TarjetaEquipo from "./components/TarjetaEquipo"
import FormularioPartido from "./components/FormularioPartido"
import HistorialPartidos from "./components/HistorialPartidos"
import TablaPosiciones from "./components/TablaPosiciones"

function App() {
  const [partidos, setPartidos] = useState([])
  const [filtroEquipo, setFiltroEquipo] = useState("todos")

  const agregarPartido = (partido) => {
    setPartidos([...partidos, partido])
  }

  const eliminarPartido = (id) => {
    setPartidos(partidos.filter((partido) => partido.id !== id))
  }

  return (
    <div className="app">
      <header>
        <h1>Panel de Resultados</h1>
        <p>Torneo de fútbol aficionado</p>
      </header>

      <section className="seccion">
        <h2>Equipos</h2>
        <div className="equipos">
          {equipos.map((equipo) => (
            <TarjetaEquipo key={equipo.id} equipo={equipo} />
          ))}
        </div>
      </section>

      <FormularioPartido equipos={equipos} onAgregar={agregarPartido} />

      <HistorialPartidos
        equipos={equipos}
        partidos={partidos}
        filtroEquipo={filtroEquipo}
        onFiltrar={setFiltroEquipo}
        onEliminar={eliminarPartido}
      />

      <TablaPosiciones equipos={equipos} partidos={partidos} />
    </div>
  )
}

export default App
