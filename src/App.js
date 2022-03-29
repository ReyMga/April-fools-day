import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Countdown from "./components/Countdown";
import { readLocalStorage } from "./helpers/methods";
import Chart from "./components/Chart";


function App() {
  const [colors, setColors] = useState({
    purple: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    orange: 0,
    red: 0,
    grey: 0,
    white: 0,
    myColor: null,
  });

  const loadColorsFromLocalStorage = () => {
    const localStorageObj = readLocalStorage("colors");
    if (localStorageObj) {
      setColors(localStorageObj);
    }
  };

  const onUpdate = () => {
    loadColorsFromLocalStorage();
  };

  useEffect(() => {
    loadColorsFromLocalStorage();
  }, []);

  const formatData = () => {
    //Formateo las propiedades del array en un nuevo array que sea compatible con el Chart.js
    const formatedData = Object.entries(colors).map(
      (x) => x[0] !== "myColor" && { name: x[0], value: x[1] }
    );
    //Remuevo el ultimo item del array que es myColor y al grafico no le sirve
    formatedData.pop();

    return formatedData;
  };

  return (
    <div className="App">
      <Countdown onUpdate={onUpdate} />
      {colors.myColor !== null && (
        <div className="estadisticas">
          <span className="title">Statistics Views</span>
          <Chart data={formatData()} />
        </div>
      )}
    </div>
  );
}

export default App;
