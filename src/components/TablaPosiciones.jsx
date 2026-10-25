import { calcularTabla } from "../utils/tabla"
import Escudo from "./Escudo"

function TablaPosiciones({ equipos, partidos }) {
  const tabla = calcularTabla(equipos, partidos)

  return (
    <section className="seccion">
      <h2>Tabla de posiciones</h2>

      {partidos.length === 0 && (
        <p className="mensaje-vacio">
          No hay partidos registrados, la tabla se llenará cuando registres resultados.
        </p>
      )}

      <div className="tabla-contenedor">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th className="col-equipo">Equipo</th>
              <th title="Partidos jugados">PJ</th>
              <th title="Partidos ganados">PG</th>
              <th title="Partidos empatados">PE</th>
              <th title="Partidos perdidos">PP</th>
              <th title="Goles a favor">GF</th>
              <th title="Goles en contra">GC</th>
              <th title="Diferencia de goles">DG</th>
              <th title="Puntos">PTS</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((fila, indice) => {
              const equipo = equipos.find((e) => e.id === fila.id)
              return (
                <tr key={fila.id}>
                  <td>{indice + 1}</td>
                  <td className="col-equipo">
                    <div className="celda-equipo">
                      <Escudo equipo={equipo} tamano={26} />
                      <span>{fila.nombre}</span>
                    </div>
                  </td>
                  <td>{fila.pj}</td>
                  <td>{fila.pg}</td>
                  <td>{fila.pe}</td>
                  <td>{fila.pp}</td>
                  <td>{fila.gf}</td>
                  <td>{fila.gc}</td>
                  <td>{fila.dg}</td>
                  <td className="puntos">{fila.pts}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default TablaPosiciones
