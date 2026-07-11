# Regionerate

Regionerate es una plataforma web para explorar especies nativas de Nuevo Leon y apoyar decisiones de reforestacion con datos. La app combina un mapa interactivo, fichas de plantas y un backend con Convex para consultar informacion por ecorregion.

## Que hace

- Muestra una landing page con presentacion del proyecto.
- Permite explorar un mapa interactivo de Nuevo Leon.
- Filtra especies nativas segun la ecorregion seleccionada.
- Presenta informacion detallada de cada planta.
- Mantiene datos de plantas y arboles plantados en Convex.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Convex
- Leaflet
- Three.js y React Three Fiber
- Sonner para notificaciones

## Requisitos

- Node.js 20 o superior
- npm
- Una URL publica de Convex en `NEXT_PUBLIC_CONVEX_URL`

## Instalacion

```bash
npm install
```

## Variables de entorno

Crea un archivo `.env.local` en la raiz del proyecto con al menos:

```bash
NEXT_PUBLIC_CONVEX_URL=tu_url_de_convex
```

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000` para ver la app.

## Scripts

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la version de produccion.
- `npm run start`: levanta la version compilada.
- `npm run lint`: ejecuta ESLint.

## Estructura general

- `app/`: rutas y vistas principales.
- `components/`: componentes compartidos.
- `convex/`: esquema y consultas de la base de datos.
- `providers/`: configuracion del cliente de Convex.
- `public/`: imagenes, SVGs y modelos usados por la interfaz.

## Datos

La base de datos define dos tablas principales:

- `plantas`: catalogo de especies con nombre comun, nombre cientifico, ecorregion, floracion, altura, requerimiento hidrico, polinizadores e imagen.
- `arbolesPlantados`: registros de arboles plantados con referencia a una planta, coordenadas, fecha y usuario.

## Notas

- El mapa principal carga el archivo `public/nuevoleon.svg`.
- La informacion de especies se consulta desde Convex segun la ecorregion seleccionada.