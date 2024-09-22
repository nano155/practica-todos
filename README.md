# To-Do App - Vanilla JS con Vite

Este proyecto es una aplicación de "To-Do" desarrollada utilizando **Vite** y **Vanilla JavaScript**, como parte de la práctica de manipulación del DOM en un curso dictado por **Fernando Herrera**.

## 🚀 Características

- Añadir, completar y eliminar tareas.
- Almacenamiento de las tareas en el estado de la aplicación.
- Filtrar tareas: Todas, Pendientes, Completadas.
- Interfaz de usuario sencilla y eficiente.

## 🛠️ Tecnologías Utilizadas

- **Vite**: Para configurar el entorno de desarrollo y generar el build optimizado.
- **Vanilla JavaScript**: Para la lógica y la manipulación del DOM.
- **HTML5 & CSS3**: Para la estructura y el diseño de la interfaz.

## 📦 Instalación y Uso

1. Clona el repositorio:
    ```bash
    git clone https://github.com/usuario/todo-app.git
    ```

2. Ve al directorio del proyecto:
    ```bash
    cd todo-app
    ```

3. Instala las dependencias:
    ```bash
    yarn install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    yarn dev
    ```

5. Abre tu navegador en `http://localhost:3000` para interactuar con la aplicación.

## 🎮 Funcionalidades

1. **Agregar una nueva tarea**: Escribe el nombre de la tarea en el input principal y presiona "Enter".
2. **Marcar una tarea como completada**: Haz clic en la casilla de verificación de la tarea que quieras marcar como completada.
3. **Eliminar una tarea**: Haz clic en el botón de eliminar (ícono "X") al lado de la tarea.
4. **Filtrar tareas**: Puedes filtrar las tareas según su estado (todas, pendientes o completadas) utilizando los botones de filtro en la parte inferior.

## 📋 Descripción del Código

La lógica de la aplicación se centra en la manipulación del DOM mediante **Vanilla JavaScript**, creando y actualizando elementos directamente en la interfaz.

- **app.html**: Contiene la estructura principal de la aplicación, incluyendo los elementos `ul` y `li` que representan las tareas.
- **todo.store.js**: Administra el estado de la aplicación, permitiendo la recuperación y actualización de las tareas.
- **app.js**: Controla la interacción del usuario, como agregar, marcar o eliminar tareas. También actualiza dinámicamente el DOM con la lista de tareas.
  
## 🖼️ Capturas de Pantalla

_Coloca aquí capturas de pantalla del proyecto si las tienes._

## 🤝 Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio y abrir un pull request.
