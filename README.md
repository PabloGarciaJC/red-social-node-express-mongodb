# Roadmap (React + Vite)

Este proyecto es tu primer acercamiento práctico a **React** usando **Vite**. Está pensado como una guía educativa y de práctica para aprender conceptos esenciales de React mientras construyes un proyecto funcional.

---

## Demo del Proyecto

[https://roadmap-vite-react.com/](https://roadmap-vite-react.pablogarciajc.com/)

| ![Imagen 1](https://pablogarciajc.com/wp-content/uploads/2025/10/roadmap-vite-react-1.webp) | ![Imagen 2](https://pablogarciajc.com/wp-content/uploads/2025/10/roadmap-vite-react-2.webp) |
|-----------|-----------|

## Áreas de Estudio

Este proyecto es tu primer acercamiento práctico a **React** usando **Vite**, diseñado para aprender conceptos esenciales mientras construyes un proyecto funcional:

- **Introducción a Vite con React**: Instalación y configuración de Vite, diferencias con Create React App, estructura del proyecto y desarrollo rápido.
- **Componentes**: Base de React; componentes funcionales, composición, importación y exportación.
- **JSX**: Sintaxis similar a HTML, expresiones, condicionales, loops y buenas prácticas de legibilidad.
- **Props**: Pasar información a componentes, props por defecto, validación y comunicación entre componentes padre e hijo.
- **useState**: Manejo del estado local, actualización de estado, objetos y arrays, y patrones para múltiples estados.
- **useEffect**: Efectos secundarios, fetch de datos, timers, dependencias y limpieza de efectos.
- **useContext**: Manejo de estado global, creación y consumo de contextos, y evitar prop drilling.
- **useCallback**: Optimización de funciones pasadas como props y evitar recreación innecesaria de funciones.
- **useMemo**: Memorizar cálculos costosos y evitar renders innecesarios de componentes.
- **Manejo de eventos**: Eventos en JSX, objeto event, prevención de comportamiento por defecto y buenas prácticas.
- **Renderizado de listas**: Map, claves (`key`), listas anidadas, componentes reutilizables, filtrado y ordenamiento.
- **React Router**: Configuración de rutas, rutas dinámicas, navegación programática y rutas anidadas.
- **Formularios**: Inputs controlados y no controlados, validación de datos, manejo de errores y librerías externas opcionales.
- **Optimización avanzada**: Memoización de componentes, lazy loading, división de código y análisis de performance.

## Instalación

### Requisitos Previos

- Tener **Docker** y **Docker Compose** instalados.
- **Make**: Utilizado para automatizar procesos y gestionar contenedores de manera más eficiente.

### Pasos de Instalación

1. Clona el repositorio desde GitHub.
2. Dentro del repositorio, encontrarás un archivo **Makefile** que contiene los comandos necesarios para iniciar y gestionar tu aplicación.
3. Usa los siguientes comandos de **Make** para interactuar con la aplicación:

    - **`make init-app`**: Inicializa la aplicación, copiando `.env`, creando symlinks, levantando contenedores, instalando dependencias y levantando el servidor de desarrollo.  
    - **`make up`**: Levanta los contenedores asociados a la aplicación en segundo plano.  
    - **`make down`**: Detiene los contenedores y apaga la aplicación.  
    - **`make shell`**: Ingresa al contenedor para interactuar directamente con el sistema.  
    - **`make npm-install`**: Instala todas las dependencias definidas en `package.json`.  
    - **`make npm-host`**: Levanta el servidor de desarrollo (`npm run dev`) accesible desde tu máquina local.  
    - **`make build-prod`**: Genera la versión de producción de la aplicación (`npm run build`) y mueve los archivos compilados a la raíz del proyecto.  

4. Además de estos comandos, dentro del archivo **Makefile** puedes encontrar otros comandos que te permitirán interactuar de manera más específica con los contenedores y los diferentes servicios que conforman la aplicación.

5. Accede a los siguientes URL:
   - **Aplicación Web**: [http://localhost:5173](http://localhost:5173)

---

## Contáctame / Sígueme en mis redes sociales

| Red Social   | Descripción                                              | Enlace                   |
|--------------|----------------------------------------------------------|--------------------------|
| **Facebook** | Conéctate y mantente al tanto de mis actualizaciones.    | [Presiona aquí](https://www.facebook.com/PabloGarciaJC) |
| **YouTube**  | Fundamentos de la programación, tutoriales y noticias.   | [Presiona aquí](https://www.youtube.com/@pablogarciajc)     |
| **Página Web** | Más información sobre mis proyectos y servicios.        | [Presiona aquí](https://pablogarciajc.com/)              |
| **LinkedIn** | Sigue mi carrera profesional y establece conexiones.     | [Presiona aquí](https://www.linkedin.com/in/pablogarciajc) |
| **Instagram**| Fotos, proyectos y contenido relacionado.                 | [Presiona aquí](https://www.instagram.com/pablogarciajc) |
| **Twitter**  | Proyectos, pensamientos y actualizaciones.                | [Presiona aquí](https://x.com/PabloGarciaJC?t=lct1gxvE8DkqAr8dgxrHIw&s=09)   |

---
> _"La única forma de hacer un gran trabajo es amar lo que haces." - Steve Jobs_
