# guardias-front
Aquí tenemos 4 vistas principales:
AvailabilityView: Disponibilidad de los ingenieros para la semana en cuestión.
AssignedShiftsView: Turnos asignados a los ingenieros en la semana en cuerstión, si no están asignados
                    se pueden asignar presionando el botón "ASIGNAR TURNOS", esto llamará al endpoint
                    del backend en cuál utiliza un algoritmo golozo para asignar.
SummaryView: Resumen del estado de la semana y sus asignaciones, turnos totales por ingeniero y aquellos turnos sin asignar.
EditAvailability: Formulario para la cambiar la disponibilidad de los ingenieros.

Estas vistas son gestionadas desde el App.vue junto al router definido en index.js


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
