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
        * Publicar la publicación
        * Selecciono volver a las publicaciones
        * Verifico que se creó la publicación con el título ingresado y vemos que indique estar publicado 
    2. Escenario 2: 
        * Login credenciales correctas 
        * Navego a ver las publicaciones del sitio web 
        * Selecciono crear una publicación 
        * Escribo el título de la publicación 
        * Escribo un texto de publicación 
        * Selecciono volver a las publicaciones 
        * Edito la publicación creada 
        * Cambio el título de la publicación 
        * Selecciono volver a las publicaciones 
        * Verifico que se creó la publicación con el título editado y que se clasifico como draft 
    3. Escenario 3: 
        * Login credenciales correctas 
        * Navego a etiquetas del sitio web 
        * Creo una etiqueta A nueva 
        * Creo una etiqueta B nueva 
        * Navego a ver las páginas del sitio 
        * Navego a ver las publicaciones del sitio web 
        * Selecciono crear una publicación 
        * Escribo el título de la publicación 
        * Escribo un texto de publicación 
        * Le asigno un tag A en la publicación 
        * Selecciono volver a las publicaciones 
        * Edito la publicación creada 
        * Cambio el tag a B de la publicación creada 
        * Verifico que se creó la publicación con el título ingresado, que se clasifico como draft y con la etiqueta B 

4. Funcionalidad: Modificar navegación 
    1. Escenario 1:  
        * Login credenciales correctas 
        * Navego a módulo de páginas 
        * Ingreso a crear nueva página 
        * Agrego texto a la página 
        * Publico página 
        * Navego a módulo de páginas 
        * Verifico página creada 
        * Navego a módulo de Design 
        * Agrego página en nueva url 
        * Guardo cambios en navegación 
        * Navego a Ver Sitio 
        * Verifico nueva opción 
        * Navego a nueva página creada 
     
    2. Escenario 2: 
        * Login credenciales correctas 
        * Navego a módulo de páginas 
        * Ingreso a crear nueva página 
        * Agrego texto a la página 
        * Publico página 
        * Navego a módulo de páginas 
        * Verifico página creada 
        * Navego a módulo de Design 
        * Agrego página en nueva url 
        * Guardo cambios en navegación 
        * Navego a Ver Sitio 
        * Verifico nueva opción 
        * Navego a nueva página creada 
        * Navego a módulo de navegación 
        * Elimino navegación creada 
        * Agrego página en nueva url secundaria 
        * Guardo cambios en navegación 
        * Navego a Ver Sitio 
        * Verifico opción en urls secundarias 
        * Navego a nueva página creada 
 
5. Funcionalidad: Crear Tag 
    1. Escenario 1:  crear tag publico 
        * Login credenciales correctas 
        * Navego a módulo de tags 
        * Ingreso a crear una nueva etiqueta 
        * Ingreso valores de la etiqueta 
        * Guardo etiqueta 
        * Navego a listado de etiquetas 
        * Verifico la etiqueta creada 
    2. Escenario 2: Crear tag interno 
        * Login credenciales correctas 
        * Navego a módulo de tags 
        * Navego a etiquetas internas 
        * Ingreso a crear una nueva etiqueta 
        * Ingreso valores de la etiqueta con # 
        * Guardo etiqueta 
        * Navego a listado de etiquetas 
        * Navego a etiquetas internas 
        * Verifico la etiqueta creada 
    3. Escenario 3: Editar tag después de crear 
        * Login credenciales correctas 
        * Navego a módulo de tags 
        * Ingreso a crear una nueva etiqueta 
        * Ingreso valores de la etiqueta 
        * Guardo etiqueta 
        * Navego a listado de etiquetas 
        * Ingreso a etiqueta creada 
        * Edito nombre de etiqueta 
        * Guardo etiqueta 
        * Navego a listado de etiquetas 
        * Verifico nombre de etiqueta 
    4. Escenario 4: Eliminar tag después de crear 
        * Login credenciales correctas 
        * Navego a módulo de tags 
        * Ingreso a crear una nueva etiqueta 
        * Ingreso valores de la etiqueta 
        * Guardo etiqueta 
        * Navego a listado de etiquetas 
        * Ingreso a etiqueta creada 
        * Elimino etiqueta 
        * Confirmo eliminación de etiqueta 
        * Navego a listado de etiquetas 
        * Verifico etiqueta eliminada 
    5. Escenario 5: Crear tag, Asignar tag a Post y eliminar tag 
        * Login credenciales correctas 
        * Navego a módulo de tags 
        * Ingreso a crear una nueva etiqueta 
        * Ingreso valores de la etiqueta 
        * Guardo etiqueta 
        * Navego a listado de etiquetas 
        * Confirmo etiqueta creada 
        * Navego a listado de posts 
        * Creo nuevo post 
        * Asigno etiqueta a post 
        * Publico post 
        * Navego a listado de etiquetas 
        * Ingreso a etiqueta creada 
        * Elimino etiqueta 
        * Confirmo eliminación de etiqueta 
        * Navego a listado de etiquetas 
        * Verifico etiqueta eliminada 

6. Funcionalidad: Crear Página 
    1. Escenario 1: Crear página y Publicar 
        * Login credenciales correctas 
        * Navego a módulo de páginas 
        * Ingreso a crear nueva página 
        * Agrego texto a la página 
        * Publico página 
        * Navego a módulo de páginas 
        * Verifico página creada 
    2. Escenario 2: Programar creación de página 
        * Login credenciales correctas 
        * Navego a módulo de páginas 
        * Ingreso a crear nueva página 
        * Agrego texto a la página 
        * Programo página para 3 minutos 
        * Navego a módulo de páginas 
        * Verifico página en estado scheduled 
        * Espero 3 minutos 
        * Refresco módulo de páginas 
        * Verifico página en estado published 
    3. Escenario 3: Programar creación de página y Eliminar 
        * Login credenciales correctas 
        * Navego a módulo de páginas 
        * Ingreso a crear nueva página 
        * Agrego texto a la página 
        * Programo página para 3 minutos 
        * Navego a módulo de páginas 
        * Verifico página en estado scheduled 
        * Ingreso a página creada 
        * Elimino página 
        * Navego a módulo de páginas 
        * Verifico página eliminada 
    4. Escenario 4: Crear página, asignar tag, ver página 
        * Login credenciales correctas 
        * Navego a módulo de páginas 
        * Ingreso a crear nueva página 
        * Agrego texto a la página 
        * Publico página 
        * Navego a módulo de páginas 
        * Verifico página creada 
        * Ingreso a página creada 
        * Agrego tag de página 
        * Navego a página de tags 
        * Verifico página asociada a tag 
    5. Escenario 5: crear página, publicar, revisar, despublicar, revisar, publicar 
        * Login credenciales correctas 
        * Navego a módulo de páginas 
        * Ingreso a crear nueva página 
        * Agrego texto a la página 
        * Publico página 
        * Navego a módulo de páginas 
        * Verifico página creada 
        * Ingreso a página creada 
        * Despublico página creada 
        * Navego a módulo de páginas 
        * Verifico página en estado draft 
        * Ingreso a página creada 
        * Publico página creada 
        * Navego a módulo de páginas 
        * Verifico página en estado published 
