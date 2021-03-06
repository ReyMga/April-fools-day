# ***April fools day***



## Aplicaci贸n dise帽ada en [React](https://es.reactjs.org/). 

馃挕***Funcionamiento de la aplicaci贸n***

馃搷 El contador desciende de 60 segundos a 0 y solo se resetea si alguien con la p谩gina abierta presiona el bot贸n. Solo se puede presionar una vez por usuario y cuando un usuario lo presiona le queda asignado como recuerdo un color en funci贸n de esta tabla.

![imagen](./public/imagen.png)

馃搷 El 'clickeo' del bot贸n es una acci贸n irreversible. Se desea evitar presiones accidentales. 

馃搷 Al clickear se  asigna el color acorde a cuando se formula el click.

![imagen](./public/tabla-colores.png)

馃搷 Se simulan clicks de otra gente. O sea al abrir la p谩gina, se ve c贸mo el contador desciende de 60 hasta que se simula el click de la otra persona, lo que hace que el timer se resetee. Para simular el click, se utilizaron numeros aleatorios que pueden ser negativos, en ese caso, se simula que el usuario a presionado el bot贸n fuera de tiempo, asign谩ndole el color "grey", que figura en la tabla de colores asignados por tiempo. 

![imagen](./public/clicks-simulados.png)

馃搷 Una vez que el usuario clicke贸, se mostrar谩 una estad铆stica o visualizaci贸n relacionada a cuantos usuarios clickearon cada color.

![imagen](./public/estadistica.png)

馃搷 Si el usuario cierra la p谩gina y la reabre se guarda esa sesi贸n en el localStorage, por lo tanto el usuario no podr谩 volver a hacer "click", deshabilitado as铆 el bot贸n.

![imagen](./public/boton-deshabilitado.png)


馃憠## Haciendo click [aqu铆](https://reymga.github.io/April-fools-day/) podr谩s comenzar a disfrutar este proyecto! 


馃搶 ***Este proyecto utiliza las siguientes dependencias:.*** 

馃搧 [react-bootstrap](https://react-bootstrap.netlify.app/getting-started/introduction/)
<br>

馃搧  [recharts](https://recharts.org/en-US/)


<br><br>

## 馃懆鈥嶐煉? Si quer茅s tener el c贸digo en tu computadora, deber谩s seguir estos pasos en tu terminal:

 鉁旓笍Ir al repositorio
 <br>
 鉁旓笍Darle click al bot贸n de forkear
 <br>
 鉁旓笍Darle click al bot贸n de code
 <br>
 鉁旓笍Abrir tu terminal y poner el comando de git clone <url>
 <br>
 鉁旓笍Entrar a la carpeta del proyecto y abrirlo en tu IDE 
 <br>


<br><br>


## 馃懇鈥嶐煉? En el directorio del proyecto, pod茅s ejecutar:

鉁旓笍 `npm install`


鉁旓笍 `npm start`

Ejecuta la aplicaci贸n en el modo de desarrollo.<br />
Abr铆 [http://localhost:3000](http://localhost:3000) para verlo en el navegador.


 Y listo! Podr谩s disfrutar de este proyecto!