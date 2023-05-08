# Pasos para ejecución Cypress

1. Instalación de Cypress versión 12.11.0
    1. Se contempla que se tenga instalado en la maquina local la versión 12.11.0 de Cypres, si no se cuenta con la versión instalada, siga los pasos de instalación en        el siguiente link: https://docs.cypress.io/guides/getting-started/installing-cypress
    
2. Instalación de ghost y configuración del usuario y contraseña
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
   
3. Actualización de usuario y contraseña en archivo e2e_ghost_testing\e2e cypress ghost test\cypress\e2e\ghost.cy.js del repositorio
    1. Durante la instalación de Ghost, en el paso 7 se creó un usuario administrador por lo tanto el usuario y contraseña se debe configurar en las propiedades del          proyecto clonado anteriormente
    2. En la carpeta `e2e_ghost_testing\e2e cypress ghost test\cypress\e2e` encontrará un archivo `ghost.cy.js`
    3. Encontrará dos contantes 'emailLogin' en la linea 567 y 'passLogin' en la linea 568, en el valor de la constante `emailLogin` colocar el correo creado y en el            valor de parámetro `passLogin` colocar la contraseña creada anteriormente.
    
4. Ejecución escenarios de prueba E2E con Cypress
    1. Recuerde haber realizado los pasos previos para ejecutar las pruebas E2E
    2. Abrimos una terminal en el computador y ejecutamos el siguiente comando 'cypress open', esto nos abrirá la aplicacion local de Cypress, en la esquina superior          de la interfaz de Cypress validamos que la versión corresponda a la 12.11.0
    3. En la interfaz de Cypress seleccionamos 'add project', luego en la ventana que se despliega, subimos la carpeta 'e2e_ghost_testing\e2e cypress ghost test' que se        encuentra en este repositorio
    4. Cuando la carpeta suba, se actualizará la interfaz de Cypress, seleccionamos E2E Testing (el icono indica que ya se encuentra configurado)
    5. Debemos seleccionar el buscador donde deseamos correr las pruebas, recomendamos seleccionar Google Chrome, cuando lo seleccionemos damos clic en el botón              'start E2E testing in Broswer' donde Broswer es el buscador que usted selecciono
    6. En este momento se debió abrir una página en el buscador seleccionado anteriormente normalmente en la ruta 'http://localhost:55116/', en esta ventana en la            parte izquierda donde estan los modulos de navegacion seleccionamos 'Specs'
    7. Esto actualiza el módulo principal donde vemos el archivo 'ghost.cy.js' que está en la carpeta 'cypress/e2e', damos click en el archivo
    8. Finalmente vemos como se ejecutan las pruebas y el informe resultado de estas una vez finalicen

