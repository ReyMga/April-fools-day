import React, {  useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import {useInterval, createRandomNumber, readLocalStorage, writeLocalStorage, colorPreset} from '../helpers/methods';


const Countdown = (props) => {
  const seconds = 60;
  const millisecondsDelay = 1000;
  const [counter, setCounter] = useState(seconds);
  //Se coloca un -20 para que tenga posibilidad de mostrarse algun valor Grey ('Did not click') o que se clickeo fuera de tiempo (cuando el contador ya llegó a cero)
  const [randomNumber, setRandomNumber] = useState(createRandomNumber(-20, seconds));
  const [colors, setColors] = useState({
    purple: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    orange: 0,
    red: 0,
    grey: 0,
    white: 0,
    myColor: null
  })

  useInterval(
    () => {
      setCounter(counter => counter - 1);
    },
    millisecondsDelay
  );

  useEffect(()=>{
    //Si no existe el objeto en el localStorage, creo por primera vez el objeto en el localStorage
    const localStorageObj = readLocalStorage('colors');
    if(!localStorageObj) {
      writeLocalStorage('colors',  colors);
    }else{
      setColors(localStorageObj) 
    }
  }, [])

  const handleClick = () => {
    //Obtengo el color
    let color = colorPreset(counter);

    //Guardo en localStorage
    const colorsObj = readLocalStorage('colors');
    colorsObj[color] += 1;
    //Colocamos en 1 el color white, que significa que ya no estamos habilitados a hacer click
    colorsObj.white = 1;
    colorsObj.myColor = color;
    writeLocalStorage('colors',  colorsObj);

    //Actualizo mi variable de estado local
    setColors(colorsObj);

    //Reseteo el contador
    setCounter(seconds); //Reseteo el contador

    props.onUpdate();
  };

  const simulateOtherUsersClick = () => {
    //Obtengo el color
    let color = colorPreset(randomNumber);
    
    //Guardo en localStorage
    const colorsObj = readLocalStorage('colors');
    colorsObj[color] += 1;
    writeLocalStorage('colors',  colorsObj);

    //Actualizo mi variable de estado local
    setColors(colorsObj);

    //Reseteo el contador
    setCounter(seconds); //Reseteo el contador
    setRandomNumber(createRandomNumber(0, seconds)); //Seteo un nuevo numero aleatorio para simular otro click

    props.onUpdate();
  }

  useEffect(()=>{
    if(counter === randomNumber) {
        simulateOtherUsersClick();
    }
  }, [counter])

  return (
    <div className="container">
      <div id="circulo">{counter >= 0 ? counter : '0'}</div>
      <Button variant="warning" onClick={handleClick} disabled={colors.myColor !== null} id="button-click">
        Click me!
      </Button>
    </div>
  );
};
export default Countdown;
