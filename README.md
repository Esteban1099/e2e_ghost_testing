# VIDEO Entrega semana 6
https://drive.google.com/file/d/1OPo_BAv538hau0FeICD8UUDcu_hpkK07/view?usp=sharing

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

# Pasos para ejecución Cypress test E2E

1. Instalación de Cypress versión 12.11.0
    1. Se contempla que se tenga instalado en la maquina local la versión 12.11.0 de Cypres, si no se cuenta con la versión instalada, siga los pasos de instalación en el siguiente link: https://docs.cypress.io/guides/getting-started/installing-cypress
    
2. Instalación de ghost 3.41.1 y configuración del usuario y contraseña
    1. Precondición: Se debe tener instalado `Node v12.22.1`
    2. Desde un directorio diferente al creado anteriormente, abra una terminal e ingrese el siguiente comando: `npm install ghost-cli@1.13.1`
    3. Diríjase a un directorio vacío en su sistema de archivos, el cual dedicará exclusivamente a Ghost. Puede hacer esto desde el directorio en el que está ubicado actualmente con los siguientes comandos: `mkdir        ghost`
    4. Ir a la carpeta creada `cd ghost`
    5. Ahora que su terminal está ubicada en el directorio deseado, ejecute el comando de instalación con las herramientas que recién descargó: `ghost install 3.41.1 --local`
    6. Una vez el comando termine de ejecutar, la aplicación quedará activa en su máquina
    7. Para probar la aplicación y su funcionamiento, abra su navegador y escriba en la barra de navegación la siguiente dirección: `http://localhost:2368/ghost`
    8. Cree una cuenta siguiendo las instrucciones que le brindará esa página. Luego de tener su cuenta de administrador, podrá acceder a múltiples funcionalidades que comprenden la administración de contenido y          la configuración de otros parámetros sobre los blogs y los usuarios
    9. Mientras Ghost esté ejecutándose habrá una terminal de Node activa, en caso de querer detener la aplicación solo basta con cerrar la terminal creada
    10. Para iniciar nuevamente la aplicación de Ghost se ejecuta el siguiente comando: `ghost start`

2. Instalación de ghost 4.44.0 y configuración del usuario y contraseña
    1. Precondición: Se debe tener instalado docker en su maquina local
    2. Abra la aplicacion de docker
    3. Abra una terminal e ingrese el siguiente comando: `docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0`
    4. Una vez el comando termine de ejecutar, la aplicación quedará activa en su máquina
    5. Para probar la aplicación y su funcionamiento, abra su navegador y escriba en la barra de navegación la siguiente dirección: `http://localhost:3002/ghost`
    6. Cree una cuenta siguiendo las instrucciones que le brindará esa página. Luego de tener su cuenta de administrador, podrá acceder a múltiples funcionalidades que comprenden la administración de contenido y          la configuración de otros parámetros sobre los blogs y los usuarios
   
3. Actualización de usuario y contraseña en archivo e2e_ghost_testing\e2e cypress ghost test\cypress\fixtures\settings.json del repositorio
    1. Durante la instalación de Ghost, se creó un usuario administrador por lo tanto el usuario y contraseña se debe configurar en las propiedades del proyecto clonado anteriormente
    2. En la carpeta `e2e_ghost_testing\e2e cypress ghost test\cypress\fixtures` encontrará un archivo `settings.json`
    3. Encontrará dos propiedades 'username' en la linea 2 y 'password' en la linea 3, en el valor de la propiedad 'username' colocar el correo creado y en el valor de parámetro 'password' colocar la contraseña          creada anteriormente.
      
4. Ejecución escenarios de prueba E2E con Cypress para ghost 3.41.1
    1. Recuerde haber realizado los pasos previos para ejecutar las pruebas E2E
    2. Abrimos una terminal en el computador y ejecutamos el siguiente comando 'cypress open', esto nos abrirá la aplicacion local de Cypress, en la esquina superior de la interfaz de Cypress validamos                    que la versión corresponda a la 12.11.0
    3. En la interfaz de Cypress seleccionamos 'add project', luego en la ventana que se despliega, subimos la carpeta 'e2e_ghost_testing\e2e cypress ghost test' que se encuentra en este repositorio
    4. Cuando la carpeta suba, se actualizará la interfaz de Cypress, seleccionamos E2E Testing (el icono indica que ya se encuentra configurado)
    5. Debemos seleccionar el buscador donde deseamos correr las pruebas, recomendamos seleccionar Google Chrome, cuando lo seleccionemos damos clic en el botón 'start E2E testing in Broswer' donde Broswer es el          buscador que usted selecciono
    6. En este momento se debió abrir una página en el buscador seleccionado anteriormente normalmente en la ruta 'http://localhost:55116/', en esta ventana en la            parte izquierda donde estan los modulos        de navegacion seleccionamos 'Specs'
    7. Esto actualiza el módulo principal donde vemos el archivo 'ghost.cy.js' que está en la carpeta 'cypress/e2e', damos click en el archivo
    8. Finalmente vemos como se ejecutan las pruebas y el informe resultado de estas una vez finalicen

5. Ejecución escenarios de prueba E2E con Cypress para ghost 4.44.0
    1. Recuerde haber realizado los pasos previos para ejecutar las pruebas E2E
    2. Abrimos una terminal en el computador y ejecutamos el siguiente comando 'cypress open', esto nos abrirá la aplicacion local de Cypress, en la esquina superior de la interfaz de Cypress validamos                    que la versión corresponda a la 12.11.0
    3. En la interfaz de Cypress seleccionamos 'add project', luego en la ventana que se despliega, subimos la carpeta 'e2e_ghost_testing\e2e cypress ghost test' que se encuentra en este repositorio
    4. Cuando la carpeta suba, se actualizará la interfaz de Cypress, seleccionamos E2E Testing (el icono indica que ya se encuentra configurado)
    5. Debemos seleccionar el buscador donde deseamos correr las pruebas, recomendamos seleccionar Google Chrome, cuando lo seleccionemos damos clic en el botón 'start E2E testing in Broswer' donde Broswer es el          buscador que usted selecciono
    6. En este momento se debió abrir una página en el buscador seleccionado anteriormente normalmente en la ruta 'http://localhost:55116/', en esta ventana en la            parte izquierda donde estan los modulos        de navegacion seleccionamos 'Specs'
    7. Esto actualiza el módulo principal donde vemos el archivo 'ghost_v2.cy.js' que está en la carpeta 'cypress/e2e', damos click en el archivo
    8. Finalmente vemos como se ejecutan las pruebas y el informe resultado de estas una vez finalicen

# Pasos para ejecución RessembleJS sobre Cypress test E2E

1. Haber ejecutado las pruebas de Cypress E2E para las versiones de ghost 3.41.1 y 4.44.0 (Instrucciones anteriores)
2. Una vez se ejecutadas la pruebas de Cypress E2E para las versiones de ghost 3.41.1 y 4.44.0, se deben copiar la siguientes carpetas ubicadas en las siguientes rutas:

    1. e2e_ghost_testing\e2e cypress ghost test\cypress\screenshots\Create post and pusblish
    2. e2e_ghost_testing\e2e cypress ghost test\cypress\screenshots\Edit a recent created post and let it as draft
    3. e2e_ghost_testing\e2e cypress ghost test\cypress\screenshots\Create page and publish
    4. e2e_ghost_testing\e2e cypress ghost test\cypress\screenshots\Register member
    5. e2e_ghost_testing\e2e cypress ghost test\cypress\screenshots\create internal tag
    
    Hacia la siguiente ruta: e2e_ghost_testing\RegressionTest Cypress\results\Screenshots
   
 3. Luego abrimos una terminal que se ubique en la carpeta e2e_ghost_testing\RegressionTest Cypress, y se ejecuta el comando 'npm install'
 4. Luego de terminar la ejecucion del comando anterior, ejecutamos 'node index.js'
 5. Al finalizar el comando en la carpeta e2e_ghost_testing\RegressionTest Cypress\results se mostraran los reportes de las pruebas de regresión visual, en las siguientes carpetas:
 
     1. e2e_ghost_testing\RegressionTest Cypress\results\report_Create post and pusblish
     2. e2e_ghost_testing\RegressionTest Cypress\results\report_Edit a recent created post and let it as draft
     3. e2e_ghost_testing\RegressionTest Cypress\results\report_Create page and publish
     4. e2e_ghost_testing\RegressionTest Cypress\results\report_Register member
     5. e2e_ghost_testing\RegressionTest Cypress\results\report_create internal tag
     
  6. Dentro de cada una de estas carpetas esta el archivo 'report.html' con los resultados obtenidos de las pruebas de regresión visual
    
# Pasos para ejecución Kraken con Ghost V3.41.1
1. Instalación de Kraken y dependencias
    1. Desde el directorio donde desea trabajar abra una terminal e ingrese el siguiente comando: `git clone https://github.com/Esteban1099/e2e_ghost_testing.git`
    2. Desde la terminal ingrese a la carpeta `e2e kraken ghost test` 
    3. Para instalar la herramienta, en la terminal ingrese el siguiente comando: `npm install kraken-node -g`
    4. Una vez finalice, ahora ingrese el siguiente comando: `npm install kraken-node`
    5. Y finalmente ejecutar el siguiente comando: `npm install -g appium`
2. Intalación de ghost y configuración del usuario y contraseña
    1. Precondición: Se debe tener instalado `Node v12.22.1`
    2. Desde un directorio diferente al creado anteriormente, abra una terminal e ingrese el siguiente comando: `npm install ghost-cli@1.13.1`
    3. Diríjase a un directorio vacío en su sistema de archivos, el cual dedicará exclusivamente a Ghost. Puede hacer esto desde el directorio en el que está ubicado actualmente con los siguientes comandos: `mkdir ghost`
    4. Ir a la carpeta creada `cd ghost`
    5. Ahora que su terminal está ubicada en el directorio deseado, ejecute el comando de instalación con las herramientas que recién descargó: `ghost install 3.41.1 --local`
    6. Una vez el comando termine de ejecutar, la aplicación quedará activa en su máquina
    7. Para probar la aplicación y su funcionamiento, abra su navegador y escriba en la barra de navegación la siguiente dirección: `http://localhost:2368/ghost`
    8. Cree una cuenta siguiendo las instrucciones que le brindará esa página. Luego de tener su cuenta de administrador, podrá acceder a múltiples funcionalidades que comprenden la administración de contenido y la configuración de otros parámetros sobre los blogs y los usuarios
    9. Mientras Ghost esté ejecutándose habrá una terminal de Node activa, en caso de querer detener la aplicación solo basta con cerrar la terminal creada
    10. Para iniciar nuevamente la aplicación de Ghost se ejecuta el siguiente comando: `ghost start`
3. Actualización de usuario y contraseña en archivo properties.json de kraken
    1. Durante la instalación de Ghost, en el paso 7 se creó un usuario administrador por lo tanto el usuario y contraseña se debe configurar en las propiedades del proyecto clonado anteriormente
    2. En la carpeta `e2e kraken ghost test` encontrará un archivo `properties.json`
    3. Encontrará dos parámetros, en el valor del parámetro `USERNAME1` colocar el correo creado y en el valor de parámetro `PASSWORD1` colocar la contraseña creada anteriormente.
4. Ejecucion Features con Kraken
    1. Desde la carpeta `e2e kraken ghost test` entrar a la carpeta `features`; en esta carpeta encontrará varios archivos .feature.
    2. Debido a que la aplicación solo puede ejecutar un feature a la vez, encontrará que varios archivos tienen un número al final de la extensión del archivo. NOTA: Para esta sección no se deben ejecutar los feature que en su nombre contengan "V4".
    3. De acuerdo a lo anterior, cuando desee ejecutar un feature en especifico, quitarle el número del final y agregar un número en la extensión al feature que estaba habilitado para ejecutar
    4. Una vez haya seleccionado el feature que desea ejecutar, desde una terminal que se encuentre en la carpeta `e2e kraken ghost test` se debe colocar el siguiente comando: `./node_modules/kraken-node/bin/kraken-node run`
    5. Al ejecutar el comando anterior se abrirán tantas ventanas del navegador como escenarios tenga el feature
    6. Al finalizar la prueba, en la carpeta `Snapshots`, encontrará más directorios para cada funcionalidad/feature, y dentro de estas otros directorios con el número del escenario que ejecutó; al entrar a cada escenario encontrará las evidencias de cada paso ejecutado.
    7. Repita desde el paso 3 al 6 por cada feature que desea ejecutar.

# Pasos para ejecución Kraken con Ghost V4.44.0
1. Instalación de Kraken y dependencias
    1. Desde el directorio donde desea trabajar abra una terminal e ingrese el siguiente comando: `git clone https://github.com/Esteban1099/e2e_ghost_testing.git`
    2. Desde la terminal ingrese a la carpeta `e2e kraken ghost test` 
    3. Para instalar la herramienta, en la terminal ingrese el siguiente comando: `npm install kraken-node -g`
    4. Una vez finalice, ahora ingrese el siguiente comando: `npm install kraken-node`
    5. Y finalmente ejecutar el siguiente comando: `npm install -g appium`
2. Intalación de ghost y configuración del usuario y contraseña
    1. Precondición: Se debe tener instalado `Node v12.22.1`, y se debe tener instalado el aplicativo de escritorio Docker.
    2. Una vez cumpla con las preconciones, abrir el aplicativo de escritorio Docker y desde una consola ejecutar el siguiente comando `docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0`; esto creará un nuevo contenedor en el cual podrá darle iniciar o detener cuando sea necesario para acceder a la nueva versión de Ghost
    3. Para probar la aplicación y su funcionamiento, abra su navegador y escriba en la barra de navegación la siguiente dirección: `http://localhost:3002/ghost`
    4. Cree una cuenta siguiendo las instrucciones que le brindará esa página. Luego de tener su cuenta de administrador, podrá acceder a múltiples funcionalidades que comprenden la administración de contenido y la configuración de otros parámetros sobre los blogs y los usuarios
    5. Para iniciar nuevamente la aplicación de Ghost solo bastará con darle "play" al contenedor creado anteriormente.
3. Actualización de usuario y contraseña en archivo properties.json de kraken
    1. Durante la instalación de Ghost, en el paso 7 se creó un usuario administrador por lo tanto el usuario y contraseña se debe configurar en las propiedades del proyecto clonado anteriormente
    2. En la carpeta `e2e kraken ghost test` encontrará un archivo `properties.json`
    3. Encontrará dos parámetros, en el valor del parámetro `USERNAME1` colocar el correo creado y en el valor de parámetro `PASSWORD1` colocar la contraseña creada anteriormente.
4. Ejecucion Features con Kraken
    1. Desde la carpeta `e2e kraken ghost test` entrar a la carpeta `features`; en esta carpeta encontrará varios archivos .feature.
    2. Debido a que la aplicación solo puede ejecutar un feature a la vez, encontrará que varios archivos tienen un número al final de la extensión del archivo. NOTA: Para esta sección se deben ejecutar únicamente los feature que en su nombre contengan "V4".
    3. De acuerdo a lo anterior, cuando desee ejecutar un feature en especifico, quitarle el número del final y agregar un número en la extensión al feature que estaba habilitado para ejecutar
    4. Una vez haya seleccionado el feature que desea ejecutar, desde una terminal que se encuentre en la carpeta `e2e kraken ghost test` se debe colocar el siguiente comando: `./node_modules/kraken-node/bin/kraken-node run`
    5. Al ejecutar el comando anterior se abrirán tantas ventanas del navegador como escenarios tenga el feature
    6. Al finalizar la prueba, en la carpeta `Snapshots`, encontrará más directorios para cada funcionalidad/feature (agregando al nombre `Nueva versión`), y dentro de estas otros directorios con el número del escenario que ejecutó; al entrar a cada escenario encontrará las evidencias de cada paso ejecutado.
    7. Repita desde el paso 3 al 6 por cada feature que desea ejecutar.
    
# Instrucciones de ejecución escenarios semana 7
# Cypress
# Kraken
1. Instalación de Kraken y dependencias
    1. Desde el directorio donde desea trabajar abra una terminal e ingrese el siguiente comando: `git clone https://github.com/Esteban1099/e2e_ghost_testing.git`
    2. Desde la terminal ingrese a la carpeta `FormsTest Kraken` 
    3. Para instalar la herramienta, en la terminal ingrese el siguiente comando: `npm install kraken-node -g`
    4. Una vez finalice, ahora ingrese el siguiente comando: `npm install kraken-node`
    5. Y finalmente ejecutar el siguiente comando: `npm install -g appium`
2. Intalación de ghost y configuración del usuario y contraseña
    1. Precondición: Se debe tener instalado `Node v12.22.1`
    2. Desde un directorio diferente al creado anteriormente, abra una terminal e ingrese el siguiente comando: `npm install ghost-cli@1.13.1`
    3. Diríjase a un directorio vacío en su sistema de archivos, el cual dedicará exclusivamente a Ghost. Puede hacer esto desde el directorio en el que está ubicado actualmente con los siguientes comandos: `mkdir ghost`
    4. Ir a la carpeta creada `cd ghost`
    5. Ahora que su terminal está ubicada en el directorio deseado, ejecute el comando de instalación con las herramientas que recién descargó: `ghost install 3.41.1 --local`
    6. Una vez el comando termine de ejecutar, la aplicación quedará activa en su máquina
    7. Para probar la aplicación y su funcionamiento, abra su navegador y escriba en la barra de navegación la siguiente dirección: `http://localhost:2368/ghost`
    8. Cree una cuenta siguiendo las instrucciones que le brindará esa página. Luego de tener su cuenta de administrador, podrá acceder a múltiples funcionalidades que comprenden la administración de contenido y la configuración de otros parámetros sobre los blogs y los usuarios
    9. Mientras Ghost esté ejecutándose habrá una terminal de Node activa, en caso de querer detener la aplicación solo basta con cerrar la terminal creada
    10. Para iniciar nuevamente la aplicación de Ghost se ejecuta el siguiente comando: `ghost start`
3. Actualización de usuario y contraseña en archivo properties.json de kraken
    1. Durante la instalación de Ghost, en el paso 7 se creó un usuario administrador por lo tanto el usuario y contraseña se debe configurar en las propiedades del proyecto clonado anteriormente
    2. En la carpeta `e2e kraken ghost test` encontrará un archivo `properties.json`
    3. Encontrará dos parámetros, en el valor del parámetro `USERNAME1` colocar el correo creado y en el valor de parámetro `PASSWORD1` colocar la contraseña creada anteriormente; el resto de los parámetros mantengalos con los mismos valores
4. Ejecucion Features con Kraken
    1. Desde la carpeta `FormsTest Kraken` entrar a la carpeta `features`; en esta carpeta encontrará varios archivos .feature.
    2. Debido a que la aplicación solo puede ejecutar un feature a la vez, encontrará que varios archivos tienen un número al final de la extensión del archivo.
    3. De acuerdo a lo anterior, cuando desee ejecutar un feature en especifico, quitarle el número del final y agregar un número en la extensión al feature que estaba habilitado para ejecutar
    4. Una vez haya seleccionado el feature que desea ejecutar, desde una terminal que se encuentre en la carpeta `FormsTest Kraken` se debe colocar el siguiente comando: `./node_modules/kraken-node/bin/kraken-node run`
    5. Al ejecutar el comando anterior se abrirán tantas ventanas del navegador como escenarios tenga el feature
    6. Al finalizar la prueba, en la carpeta `Snapshots`, encontrará más directorios para cada funcionalidad/feature, y dentro de estas otros directorios con el número del escenario que ejecutó; al entrar a cada escenario encontrará las evidencias de cada paso ejecutado.
    7. Repita desde el paso 3 al 6 por cada feature que desea ejecutar.
