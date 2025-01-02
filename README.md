# Clon de Pinterest

Este proyecto es un clon de Pinterest desarrollado con **React.js** y **TailwindCSS**, utilizando la API de **Unsplash**. La aplicación permite buscar imágenes, compartirlas, descargarlas y disfrutar de un diseño atractivo con scroll infinito y diseño tipo **masonry**.

## Funcionalidades

- **Búsqueda de imágenes**: Encuentra imágenes relevantes utilizando la API de Unsplash.
- **Scroll infinito**: Carga automática de más imágenes al desplazarte hacia abajo.
- **Descarga de imágenes**: Descarga fácilmente las imágenes en alta calidad.
- **Compartir imágenes**: Opciones para compartir imágenes seleccionadas.
- **Diseño tipo Masonry**: Presentación elegante y organizada de las imágenes.

## Tecnologías utilizadas

- **React.js**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **TailwindCSS**: Framework para diseño de interfaces responsivas y modernas.
- **Unsplash API**: Proveedor de imágenes de alta calidad para integrarlas en la aplicación.

## Instalación

### Requisitos previos

Asegúrate de tener **Node.js** y **npm** instalados en tu máquina. Puedes descargarlos de [nodejs.org](https://nodejs.org/).

### Pasos de instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/pinterest-clone.git
    cd pinterest-clone
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Configura tu clave de la API de Unsplash:

    - Crea un archivo `.env` en la raíz del proyecto.
    - Agrega tu clave de la API de Unsplash en el archivo `.env`:

      ```
      VITE_UNSPLASH_ACCESS_KEY=tu-clave-de-api
      ```

    Puedes obtener una clave de API registrándote en [Unsplash Developers](https://unsplash.com/developers).

4. Inicia la aplicación:

    ```bash
    npm run dev
    ```

    Esto abrirá la aplicación en [http://localhost:3000](http://localhost:3000).
