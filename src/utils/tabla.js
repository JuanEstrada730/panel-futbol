export function calcularTabla(equipos, partidos) {
  const inicial = {}
  equipos.forEach((equipo) => {
    inicial[equipo.id] = {
      id: equipo.id,
      nombre: equipo.nombre,
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
    }
  })

  const filas = partidos.reduce((tabla, partido) => {
    const local = tabla[partido.localId]
    const visitante = tabla[partido.visitanteId]

    local.pj++
    visitante.pj++
    local.gf += partido.golesLocal
    local.gc += partido.golesVisitante
    visitante.gf += partido.golesVisitante
    visitante.gc += partido.golesLocal

    if (partido.golesLocal > partido.golesVisitante) {
      local.pg++
      local.pts += 3
      visitante.pp++
    } else if (partido.golesLocal < partido.golesVisitante) {
      visitante.pg++
      visitante.pts += 3
      local.pp++
    } else {
      local.pe++
      visitante.pe++
      local.pts += 1
      visitante.pts += 1
    }

    local.dg = local.gf - local.gc
    visitante.dg = visitante.gf - visitante.gc

    return tabla
  }, inicial)

  return Object.values(filas).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts
    if (b.dg !== a.dg) return b.dg - a.dg
    if (b.gf !== a.gf) return b.gf - a.gf
    return a.nombre.localeCompare(b.nombre)
  })
}
