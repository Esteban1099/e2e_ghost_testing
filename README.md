# Funcionalidades
- Crear Publicación
- Crear Miembros
- Editar Publicación
- Modificar navegación
- Crear etiqueta
- Crear página

## Escenarios
1. Funcionalidad: Crear publicación
    1. Escenario 1: Crear publicación tipo draft
       * Login credenciales correctas 
       * Navegar a ver sitio web 
       * Navegar a ver el staff del sitio 
       * Navegar a ver las publicaciones del sitio web 
       * Seleccionar crear una publicación 
       * Escribir el título de la publicación 
       * Seleccionar volver a las publicaciones 
       * Verificar que se creó la publicación con el título ingresado y que se clasifico como draft 

    2. Escenario 2: Crear publicación con etiqueta
       * Login credenciales correctas 
       * Navegar a etiquetas del sitio web 
       * Crear una etiqueta nueva 
       * Navegar a ver las páginas del sitio 
       * Navegar a ver las publicaciones del sitio web 
       * Seleccionar crear una publicación 
       * Escribir el título de la publicación 
       * Escribir un texto de publicación 
       * Asignar una etiqueta a la publicación 
       * Seleccionar volver a las publicaciones 
       * Verificar que se creó la publicación con el título ingresado, que se clasifico como draft y con la etiqueta asignada 

    3. Escenario 3: Crear publicación, editarla y publicar el ajuste
       * Login credenciales correctas 
       * Navegar a ver las publicaciones del sitio web 
       * Seleccionar crear una publicación 
       * Escribir el título de la publicación 
       * Escribo un texto de publicación 
       * Publicar
       * Editar la misma publicación
       * Modificar el titulo de la publicación
       * Publicar nuevamente
       * Seleccionar volver a las publicaciones 
       * Verificar que se creó la publicación con el título ingresado y vemos que indique estar publicado

2. Funcionalidad: Crear Miembros
    1. Escenario 1: Crear miembro
       * Login credenciales correctas 
       * Ir a la opción Labs
       * Si la opción miembros no se encuentra habilitada, dar clic en la opción de miembros
       * Activar los miembros 
       * Guardar la configuración 
       * Ir a la opción miembros 
       * Crear miembro
       * Guardar el miembro
       * Ir a miembros 
       * Verificar que el registro se haya creado correctamente

    2. Escenario 2: Crear miembro con datos incorrectos
       * Login credenciales correctas 
       * Ir a la opción miembro 
       * Crear un nuevo miembro 
       * Diligenciar datos incorrectos
       * Guardar el miembro 
       * Corregir el formulario 
       * Intentar guardar el miembro nuevamente
       * Ir a la opción miembros 
       * Verificar que el registro se haya creado correctamente

3. Funcionalidad: Editar publicación
    1. Escenario 1: Crear y editar publicación
       * Login credenciales correctas
       * Navegar a sitio web
       * Navegar a módulo de publicaciones
       * Seleccionar crear publicación
       * Ingresar el título de la publicación
       * Volver a módulo de publicaciones
       * Editar la publicación creada
       * Publicar nuevamente
       * Volver al módulo de publicaciones
       * Verificar la creación de la publicación con el título ingresado y en estado Publicado
    2. Escenario 2: Crear y editar borrador de publicación
       * Login credenciales correctas 
       * Navegar a módulo de publicaciones
       * Seleccionar crear publicación
       * Ingresar el título de la publicación
       * Ingresar el texto de la publicación 
       * Volver a módulo de publicaciones
       * Editar la publicación creada
       * Cambiar el título de la publicación 
       * Volver a módulo de publicaciones
       * Verificar la creación de la publicación con el título editado y en estado Borrador
    3. Escenario 3: Crear borrador de Publicación, Agregar Etiqueta y Editar etiqueta
       * Login credenciales correctas 
       * Navegar a módulo de etiquetas
       * Crear nueva etiqueta A
       * Crear nueva etiqueta B
       * Navegar al módulo de páginas
       * Navegar al módulo de publicaciones
       * Seleccionar crear publicación
       * Ingresar el título de la publicación
       * Ingresar el texto de la publicación 
       * Asignar la etiqueta A a la publicación
       * Volver a módulo de publicaciones
       * Editar la publicación creada
       * Cambiar la etiqueta A por la etiqueta B en la publicación
       * Verificar la creación de la publicación con el título ingresado, en estado Borrador y con etiqueta B

4. Funcionalidad: Modificar navegación 
    1. Escenario 1:  Agregar sitio a navegación
        * Login credenciales correctas 
        * Navegar a módulo de páginas 
        * Ingresar a crear nueva página 
        * Agregar texto a la página 
        * Publicar página 
        * Navegar a módulo de páginas 
        * Verificar página creada 
        * Navegar a módulo de Design 
        * Agregar página en nueva url 
        * Guardar cambios en navegación 
        * Navegar a Ver Sitio 
        * Verificar nueva opción 
        * Navegar a nueva página creada 
     
    2. Escenario 2: Agregar sitio a navegación secundaria
        * Login credenciales correctas 
        * Navegar a módulo de páginas 
        * Ingresar a crear nueva página 
        * Agregar texto a la página 
        * Publicar página 
        * Navegar a módulo de páginas 
        * Verificar página creada 
        * Navegar a módulo de Design 
        * Agregar página en nueva url 
        * Guardar cambios en navegación 
        * Navegar a Ver Sitio 
        * Verificar nueva opción 
        * Navegar a nueva página creada 
        * Navegar a módulo de navegación 
        * Eliminar navegación creada 
        * Agregar página en nueva url secundaria 
        * Guardar cambios en navegación 
        * Navegar a Ver Sitio 
        * Verificar opción en urls secundarias 
        * Navegar a nueva página creada 
 
5. Funcionalidad: Crear Tag 
    1. Escenario 1:  crear tag Publicar 
        * Login credenciales correctas 
        * Navegar a módulo de tags 
        * Ingresar a crear una nueva etiqueta 
        * Ingresar valores de la etiqueta 
        * Guardar etiqueta 
        * Navegar a listado de etiquetas 
        * Verificar la etiqueta creada 
    2. Escenario 2: Crear tag interno 
        * Login credenciales correctas 
        * Navegar a módulo de tags 
        * Navegar a etiquetas internas 
        * Ingresar a crear una nueva etiqueta 
        * Ingresar valores de la etiqueta con # 
        * Guardar etiqueta 
        * Navegar a listado de etiquetas 
        * Navegar a etiquetas internas 
        * Verificar la etiqueta creada 
    3. Escenario 3: Editar tag después de crear 
        * Login credenciales correctas 
        * Navegar a módulo de tags 
        * Ingresar a crear una nueva etiqueta 
        * Ingresar valores de la etiqueta 
        * Guardar etiqueta 
        * Navegar a listado de etiquetas 
        * Ingresar a etiqueta creada 
        * Editar nombre de etiqueta 
        * Guardar etiqueta 
        * Navegar a listado de etiquetas 
        * Verificar nombre de etiqueta 
    4. Escenario 4: Eliminar tag después de crear 
        * Login credenciales correctas 
        * Navegar a módulo de tags 
        * Ingresar a crear una nueva etiqueta 
        * Ingresar valores de la etiqueta 
        * Guardar etiqueta 
        * Navegar a listado de etiquetas 
        * Ingresar a etiqueta creada 
        * Eliminar etiqueta 
        * Confirmar eliminación de etiqueta 
        * Navegar a listado de etiquetas 
        * Verificar etiqueta eliminada 
    5. Escenario 5: Crear tag, Asignar tag a Post y eliminar tag 
        * Login credenciales correctas 
        * Navegar a módulo de tags 
        * Ingresar a crear una nueva etiqueta 
        * Ingresar valores de la etiqueta 
        * Guardar etiqueta 
        * Navegar a listado de etiquetas 
        * Confirmar etiqueta creada 
        * Navegar a listado de posts 
        * Crear nuevo post 
        * Asignar etiqueta a post 
        * Publicar post 
        * Navegar a listado de etiquetas 
        * Ingresar a etiqueta creada 
        * Eliminar etiqueta 
        * Confirmar eliminación de etiqueta 
        * Navegar a listado de etiquetas 
        * Verificar etiqueta eliminada 

6. Funcionalidad: Crear Página 
    1. Escenario 1: Crear página y Publicar 
        * Login credenciales correctas 
        * Navegar a módulo de páginas 
        * Ingresar a crear nueva página 
        * Agregar texto a la página 
        * Publicar página 
        * Navegar a módulo de páginas 
        * Verificar página creada 
    2. Escenario 2: Programar creación de página 
        * Login credenciales correctas 
        * Navegar a módulo de páginas 
        * Ingresar a crear nueva página 
        * Agregar texto a la página 
        * Programar página para 3 minutos 
        * Navegar a módulo de páginas 
        * Verificar página en estado Programado
        * Esperar 3 minutos 
        * Refrescar módulo de páginas 
        * Verificar página en estado Publicado
    3. Escenario 3: Programar creación de página y Eliminar 
        * Login credenciales correctas 
        * Navegar a módulo de páginas 
        * Ingresar a crear nueva página 
        * Agregar texto a la página 
        * Programar página para 3 minutos 
        * Navegar a módulo de páginas 
        * Verificar página en estado Programado
        * Ingresar a página creada 
        * Eliminar página 
        * Navegar a módulo de páginas 
        * Verificar página eliminada 
    4. Escenario 4: Crear página, Asignar Etiqueta, Ver Página 
        * Login credenciales correctas 
        * Navegar a módulo de páginas 
        * Ingresar a crear nueva página 
        * Agregar texto a la página 
        * Publicar página 
        * Navegar a módulo de páginas 
        * Verificar página creada 
        * Ingresar a página creada 
        * Agregar etiqueta a página 
        * Navegar a módulo de etiquetas
        * Verificar página asociada a etiqueta
    5. Escenario 5: Crear página, Publicar, Revisar, Cancelar Publicación, Revisar, Publicar 
        * Login credenciales correctas 
        * Navegar a módulo de páginas 
        * Ingresar a crear nueva página 
        * Agregar texto a la página 
        * Publicar página 
        * Navegar a módulo de páginas 
        * Verificar página creada 
        * Ingresar a página creada 
        * Cancelar la publicación de página creada
        * Navegar a módulo de páginas 
        * Verificar página en estado Borrador 
        * Ingresar a página creada 
        * Publicar página creada 
        * Navegar a módulo de páginas 
        * Verificar página en estado Publicado


# Pasos para ejecución Cypress

1. instalacion de kraken y dependencias
2. instalacion de ghost y configuracion de usuario y contraseña
3. actualización de usuario y contraseña en archivo properties.json de kraken


# Pasos para ejecución Kraken
