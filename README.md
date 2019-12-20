# Documentación de nuestra App en React
- Instalar nodejs.

- En una consola de windows, terminal de linux o Powershell correr el comando **npm install** para           instalar todas las dependencias del proyecto.

- Correr el comando **npm start** con el cual levantará un servidor de desarrollo en http://localhost:3000   donde correremos la aplicación. 


## 1. Página de inicio
Se nos mostrará la pagina de inicio o bienvenida donde podremos conocer más de la empresa a su vez nos llevará a la página de logeo al pulsar en login. 

![index](imagenes_readme/index.png)

En "Contactanos" nuestra información más detallada de la empresa.
![contactanos](imagenes_readme/contactanos.png)

## 2. Login
Una vez creado la empresa y los trabajadores de esta, podemos logearnos de manera sencilla con nuestro nombre de usuario, nuestra contraseña y el nombre de la empresa. Lo que internamente se hara es una consulta Post al backend donde se envia un JSON con datos escritos en el formulario. El Backend nos generara un JSON de respuesta que contara con un estatus que nos permitira acceder a nuestro perfil de usuario.

![login](imagenes_readme/login.png)
## 3. Perfil

Ingresas a esta página automaticamente después de haberte logeado de manera correcta, luego siempre habra un link disponible en la parte izquierda. Aquí puedes revisar tus estadisticas básicas como jugador: tu nombre, tu foto de perfil, tu puntaje, cantidad de pokemones(mas detalles en pokedex) y puesto en el ranking. Todos estos datos vienen como respuesta a un **POST** que se envia durante el login que da como respuesta un **JSON** con la información necesaria del usuario.

![perfil](imagenes_readme/perfil1.png)

## 4. Juego/Mapa/Captura
A esta página se llega por la opción Capturar Pokemon, aquí el navegador te pedirá acceso a tu ubicación para poder jugar y ver los pokemon en el mapa.

![perfil](imagenes_readme/perfil1.png)

Para capturar el pokemon solo hace falta hacerle un click y se mostrará una pregunta con respuestas de opción multiple, de haber contestado exitosamente se mostrará un mensaje de Felicitaciones en caso contrario deberá esperar 5 segundos para recuperarse y seguir capturando pokemons.
## 5. Ranking

## 6. Pokedex

El pokedex consiste en dos ventanas dentro del proyecto que sirven para:

1. ver cuales pokemones ha capturado el usuario hasta el momento.
   ![pokedex](imagenes_readme/pokedex1.png)
2. Para ver las estadisticas de cada uno de esos pokemones(mas que todo como insentivo ya que a los jugadores siempre le gustan las estadisticas).
   ![pokedex](imagenes_readme/pokedex2.png)

El pokedex toma la información recibida en el **JSON** del login.
