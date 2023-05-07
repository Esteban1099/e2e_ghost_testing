# Pasos para ejecución Kraken
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
    2. Debido a que la aplicación solo puede ejecutar un feature a la vez, encontrará que varios archivos tienen un número al final de la extensión del archivo.
    3. De acuerdo a lo anterior, cuando desee ejecutar un feature en especifico, quitarle el número del final y al feature que estaba habilitado para ejecutar ponerle un número en la extensión
    4. Una vez haya seleccionado el feature que desea ejecutar, desde una terminal que se encuentre en la carpeta `e2e kraken ghost test` se debe colocar el siguiente comando: `./node_modules/kraken-node/bin/kraken-node run`
    5. Al ejecutar el comando anterior se abrirán tantas ventanas del navegador como escenarios tenga el feature
    6. Al finalizar la prueba, la consola indicará la ejecución exitosa de las mismas y adicionalmente en el directorio se creará una carpeta llamada `reports` en la cual encontrará las evidencias de ejecución de las pruebas.
    7. Repita desde el paso 3 al 6 por cada feature que desea ejecutar.
