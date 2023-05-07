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
1. Instalación de Kraken y dependencias
    1. Desde el directorio donde desea trabajar abra una terminal e ingrese el siguiente comando: `git clone https://github.com/Esteban1099/e2e_ghost_testing.git`
    2. Desde la terminal ingrese a la carpeta `e2e kraken ghost test` 
    3. Para instalar la herramienta, en la terminal ingrese el siguiente comando: `npm install kraken-node -g`
    4. Una vez finalice, ahora ingrese el siguiente comando: `npm install kraken-node`
    5. Y finalmente ejecutar el siguiente comando: `npm install -g appium`
2. Intalación de ghost y configuración del usuario y contraseña
    1. Desde un directorio diferente al creado anteriormente, abra una terminal e ingrese el siguiente comando: `npm install ghost-cli@1.13.1`
    2. Diríjase a un directorio vacío en su sistema de archivos, el cual dedicará exclusivamente a Ghost. Puede hacer esto desde el directorio en el que está ubicado actualmente con los siguientes comandos: `mkdir ghost`
    3. Ir a la carpeta creada `cd ghost`
    4. Ahora que su terminal está ubicada en el directorio deseado, ejecute el comando de instalación con las herramientas que recién descargó: `ghost install 3.41.1 --local`
    5. Una vez el comando termine de ejecutar, la aplicación quedará activa en su máquina
    6. Para probar la aplicación y su funcionamiento, abra su navegador y escriba en la barra de navegación la siguiente dirección: `http://localhost:2368/ghost`
    7. Cree una cuenta siguiendo las instrucciones que le brindará esa página. Luego de tener su cuenta de administrador, podrá acceder a múltiples funcionalidades que comprenden la administración de contenido y la configuración de otros parámetros sobre los blogs y los usuarios
    8. Mientras Ghost esté ejecutándose habrá una terminal de Node activa, en caso de querer detener la aplicación solo basta con cerrar la terminal creada
    9. Para iniciar nuevamente la aplicación de Ghost se ejecuta el siguiente comando: `ghost start`
3. Actualización de usuario y contraseña en archivo properties.json de kraken
    1. Durante la instalación de Ghost, en el paso 7 se creó un usuario administrador por lo tanto el usuario y contraseña se debe configurar en las propiedades del proyecto clonado anteriormente
    2. En la carpeta `e2e kraken ghost test` encontrará un archivo `properties.json`
    3. Encontrará dos parámetros, en el valor del parámetro `USERNAME1` colocar el correo creado y en el valor de parámetro `PASSWORD1` colocar la contraseña creada anteriormente.
4. Ejecucion Features con Kraken
    1. Desde la carpeta `e2e kraken ghost test` entrar a la carpeta `features`; en esta carpeta encontrará varios archivos .feature.
    2. Debido a que la aplicación solo puede ejecutar un feature a la vez, encontrará que varios archivos tienen un número al final de la extensión del archivo.
    3. De acuerdo a lo anterior, cuando desee ejecutar un feature en especifico, quitarle el número del final y al feature que estaba habilitado para ejecutar ponerle un número en la extensión
    4. Una vez haya seleccionado el feature que desea ejecutar, desde una terminal que se encuentre en la carpeta `e2e kraken ghost test` se debe colocar el siguiente comando: `./node_modules/kraken-node/bin/kraken-node run`
    5. Al ejecutar el comando anterior se abrirán tantas ventanas del navegador como escenarios tenga el feature
    6. Al finalizar la prueba, la consola indicará la ejecución exitosa de las mismas y adicionalmente en el directorio se creará una carpeta llamada `reports` en la cual encontrará las evidencias de ejecución de las pruebas.
    7. Repita desde el paso 3 al 6 por cada feature que desea ejecutar.
