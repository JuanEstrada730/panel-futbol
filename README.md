# Panel de resultados de fútbol

Proyecto hecho con React para la materia. Es una página para un torneo de fútbol aficionado donde se registran los resultados de los partidos y la tabla de posiciones se actualiza sola.

**Autor:** Juan David Estrada Piñeros
**Universidad:** Universidad de la Costa

## Qué hace

- Muestra 6 equipos con su escudo (los escudos los hice en SVG).
- Permite registrar un partido escogiendo local, visitante y el marcador.
- Valida que no se escoja el mismo equipo dos veces y que los goles sean números enteros mayores o iguales a 0.
- Muestra todos los partidos registrados y se pueden filtrar por equipo.
- Cada partido del historial tiene un botón para eliminarlo.
- La tabla de posiciones calcula PJ, PG, PE, PP, GF, GC, DG y puntos (3 por victoria, 1 por empate, 0 por derrota).
- La tabla se ordena por puntos, luego diferencia de goles y luego goles a favor.
- Si no hay partidos sale un mensaje avisando.
- Se ve bien en el celular.

## Tecnologías

- React con componentes funcionales y Hooks (useState)
- Vite
- JavaScript y CSS

## Cómo correrlo

Primero hay que tener Node.js instalado.

1. Descargar o clonar el proyecto.
2. Abrir una terminal dentro de la carpeta del proyecto.
3. Instalar las dependencias:

```
npm install
```

4. Iniciar el proyecto:

```
npm run dev
```

5. Abrir en el navegador la dirección que sale en la terminal (casi siempre `http://localhost:5173`).

## Archivos del proyecto

- `src/App.jsx` → componente principal, tiene los estados de partidos y filtro
- `src/components/TarjetaEquipo.jsx` → tarjeta de cada equipo
- `src/components/Escudo.jsx` → dibuja el escudo en SVG
- `src/components/FormularioPartido.jsx` → formulario para registrar partidos y sus validaciones
- `src/components/ResultadoPartido.jsx` → muestra un partido con escudos, nombres y marcador
- `src/components/HistorialPartidos.jsx` → lista de partidos, filtro y botón de eliminar
- `src/components/TablaPosiciones.jsx` → tabla de posiciones
- `src/utils/tabla.js` → función que calcula la tabla
- `src/data/equipos.js` → lista de los equipos
- `src/index.css` → estilos

## Notas

No usa backend ni base de datos, los partidos se guardan en memoria. Si se recarga la página se pierden.
